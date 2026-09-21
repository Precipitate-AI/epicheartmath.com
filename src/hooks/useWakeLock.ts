// src/hooks/useWakeLock.ts
"use client";

import { useEffect, useRef, useCallback, useState } from "react";

export function useWakeLock() {
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);
  const [isSupported, setIsSupported] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  const requestWakeLock = useCallback(async () => {
    if (typeof window === "undefined" || !("wakeLock" in navigator)) {
      return false;
    }

    // Already holding an active wake lock
    if (wakeLockRef.current && !wakeLockRef.current.released) {
      setIsActive(true);
      return true;
    }

    try {
      const lock = await navigator.wakeLock.request("screen");
      wakeLockRef.current = lock;
      setIsActive(true);

      lock.addEventListener("release", () => {
        wakeLockRef.current = null;
        setIsActive(false);
      });

      return true;
    } catch (err) {
      // Typically occurs if battery saver is enabled or tab is hidden
      console.debug("[WakeLock] Could not acquire lock:", err);
      setIsActive(false);
      return false;
    }
  }, []);

  const releaseWakeLock = useCallback(async () => {
    if (wakeLockRef.current) {
      try {
        await wakeLockRef.current.release();
      } catch (err) {
        console.debug("[WakeLock] Error releasing lock:", err);
      }
      wakeLockRef.current = null;
      setIsActive(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const supported = "wakeLock" in navigator;
    setIsSupported(supported);

    if (!supported) return;

    // 1. Attempt initial acquisition
    requestWakeLock();

    // 2. Re-acquire on user interaction (handles mobile auto-play/gesture policies)
    const handleInteraction = () => {
      if (!wakeLockRef.current || wakeLockRef.current.released) {
        requestWakeLock();
      }
    };

    window.addEventListener("touchstart", handleInteraction, { passive: true });
    window.addEventListener("pointerdown", handleInteraction, { passive: true });
    window.addEventListener("click", handleInteraction, { passive: true });

    // 3. Re-acquire when returning from background / other apps
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        requestWakeLock();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("pointerdown", handleInteraction);
      window.removeEventListener("click", handleInteraction);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      releaseWakeLock();
    };
  }, [requestWakeLock, releaseWakeLock]);

  return { isSupported, isActive, requestWakeLock, releaseWakeLock };
}

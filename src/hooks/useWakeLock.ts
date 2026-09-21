// src/hooks/useWakeLock.ts
"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { BLANK_VIDEO_B64 } from "@/lib/blankVideoB64";

export function useWakeLock() {
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  // Play invisible dummy video fallback (100% reliable on iOS Safari)
  const enableVideoFallback = useCallback(() => {
    if (typeof window === "undefined") return;

    if (!videoRef.current) {
      const video = document.createElement("video");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.setAttribute("muted", "");
      video.muted = true;
      video.loop = true;
      video.autoplay = true;
      video.style.position = "fixed";
      video.style.bottom = "0";
      video.style.right = "0";
      video.style.width = "1px";
      video.style.height = "1px";
      video.style.opacity = "0.01";
      video.style.pointerEvents = "none";
      video.style.zIndex = "-999";
      video.src = BLANK_VIDEO_B64;
      document.body.appendChild(video);
      videoRef.current = video;
    }

    const v = videoRef.current;
    if (v && v.paused) {
      v.play()
        .then(() => {
          setIsActive(true);
        })
        .catch((err) => {
          console.debug("[WakeLock Video] Play error:", err);
        });
    }
  }, []);

  const requestWakeLock = useCallback(async () => {
    if (typeof window === "undefined") return;

    // 1. Try Native Screen Wake Lock API (iOS 16.4+, Chrome, Edge, Android)
    if ("wakeLock" in navigator) {
      try {
        if (!wakeLockRef.current || wakeLockRef.current.released) {
          const lock = await navigator.wakeLock.request("screen");
          wakeLockRef.current = lock;
          setIsActive(true);

          lock.addEventListener("release", () => {
            wakeLockRef.current = null;
            // Fall back to video loop if released unexpectedly
            enableVideoFallback();
          });
          return;
        }
      } catch (err) {
        console.debug("[WakeLock Native] Not allowed, falling back to video:", err);
      }
    }

    // 2. Always engage iOS Safari Media Engine fallback
    enableVideoFallback();
  }, [enableVideoFallback]);

  const releaseWakeLock = useCallback(() => {
    if (wakeLockRef.current) {
      try {
        wakeLockRef.current.release();
      } catch (e) {
        console.debug("[WakeLock] Error releasing native lock:", e);
      }
      wakeLockRef.current = null;
    }

    if (videoRef.current) {
      try {
        videoRef.current.pause();
      } catch (e) {
        console.debug("[WakeLock] Error pausing video fallback:", e);
      }
    }

    setIsActive(false);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initial attempt
    requestWakeLock();

    // Re-engage on any user gesture (satisfies iOS user activation policy)
    const handleGesture = () => {
      requestWakeLock();
    };

    window.addEventListener("touchstart", handleGesture, { passive: true });
    window.addEventListener("touchend", handleGesture, { passive: true });
    window.addEventListener("pointerdown", handleGesture, { passive: true });
    window.addEventListener("click", handleGesture, { passive: true });

    // Re-engage when returning to tab
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        requestWakeLock();
      } else {
        if (videoRef.current) videoRef.current.pause();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("touchstart", handleGesture);
      window.removeEventListener("touchend", handleGesture);
      window.removeEventListener("pointerdown", handleGesture);
      window.removeEventListener("click", handleGesture);
      document.removeEventListener("visibilitychange", handleVisibility);
      releaseWakeLock();
      if (videoRef.current && videoRef.current.parentNode) {
        videoRef.current.parentNode.removeChild(videoRef.current);
        videoRef.current = null;
      }
    };
  }, [requestWakeLock, releaseWakeLock]);

  return { isActive, requestWakeLock, releaseWakeLock };
}

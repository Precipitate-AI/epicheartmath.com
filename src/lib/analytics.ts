// src/lib/analytics.ts
//
// Telemetry & Event Helpers for GA4 and Google Tag Manager (GTM).
// Mirrors Precipitate & PlaygroundSoul architecture with typed event contracts.
// Google Consent Mode v2 is initialized in layout.tsx.

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type EventParams = Record<string, unknown>;

export const sendAnalyticsEvent = (event: string, params: EventParams = {}) => {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", event, params);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  } catch (err) {
    // Fail silently in production
    console.debug("[Analytics error]", err);
  }
};

// Pacer Interactions
export const trackPaceChange = (paceSeconds: number, previousPaceSeconds?: number) => {
  sendAnalyticsEvent("pacer_pace_change", {
    pace_seconds: paceSeconds,
    previous_pace: previousPaceSeconds,
    frequency_hz: parseFloat((1 / (paceSeconds * 2)).toFixed(3)),
  });
};

export const trackSoundToggle = (soundEnabled: boolean) => {
  sendAnalyticsEvent("pacer_sound_toggle", {
    sound_enabled: soundEnabled,
    action: soundEnabled ? "unmute" : "mute",
  });
};

export const trackPacerMilestone = (minutes: number, paceSeconds: number) => {
  sendAnalyticsEvent("pacer_milestone", {
    minutes_completed: minutes,
    duration_seconds: minutes * 60,
    pace_seconds: paceSeconds,
  });
};

// Modal & Navigation Interactions
export const trackModalOpen = (modalName: string, initialTab?: string) => {
  sendAnalyticsEvent("modal_open", {
    modal_name: modalName,
    initial_tab: initialTab || "default",
  });
};

export const trackTabSwitch = (tabName: string, modalName: string = "about_bob") => {
  sendAnalyticsEvent("tab_switch", {
    tab_name: tabName,
    modal_name: modalName,
  });
};

export const trackLanguageFilter = (lang: string) => {
  sendAnalyticsEvent("filter_language", {
    selected_language: lang,
  });
};

// Course & Outbound Engagement
export const trackCourseClick = (courseTitle: string, courseId: string | number, courseUrl: string) => {
  sendAnalyticsEvent("course_click", {
    course_title: courseTitle,
    course_id: String(courseId),
    course_url: courseUrl,
    platform: "insight_timer",
  });
};

export const trackVentureClick = (ventureName: string, ventureUrl: string) => {
  sendAnalyticsEvent("venture_click", {
    venture_name: ventureName,
    venture_url: ventureUrl,
  });
};

export const trackOutboundClick = (url: string, label: string, location: string = "body") => {
  sendAnalyticsEvent("outbound_click", {
    link_url: url,
    link_label: label,
    link_location: location,
  });
};

export const fbTrack = (eventName: string, eventData = {}) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, eventData);
  }
};

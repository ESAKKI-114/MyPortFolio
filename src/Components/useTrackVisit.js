// useTrackVisit.js
import { useEffect } from "react";

const useTrackVisit = () => {
  useEffect(() => {
    fetch("https://your-backend.com/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page: window.location.pathname,
        time: new Date(),
        userAgent: navigator.userAgent
      }),
    });
  }, []);
};

export default useTrackVisit;

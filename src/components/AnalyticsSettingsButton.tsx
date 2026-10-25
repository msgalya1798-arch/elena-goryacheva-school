"use client";

import { useEffect, useState } from "react";

export function AnalyticsSettingsButton() {
  const [isProduction, setIsProduction] = useState(false);

  useEffect(() => {
    setIsProduction(window.location.hostname === "goryacheva.online");
  }, []);

  if (!isProduction) return null;

  return (
    <button
      type="button"
      className="mt-3 block text-left text-xs text-graphite underline underline-offset-2 hover:text-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
      onClick={() => window.dispatchEvent(new Event("goryacheva-analytics-settings"))}
    >
      Настройки cookie
    </button>
  );
}

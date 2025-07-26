import { useState, useEffect } from "react";

interface DarkModeResult {
  isDarkMode: boolean;
}

export const useDarkMode = (): DarkModeResult => {
  // Initialize with null to indicate we haven't determined the preference yet
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // On server, return false to match the script behavior for consistency
    if (typeof window === "undefined") return false;

    // On client, check if dark class was already applied by the script
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === "undefined") return;

    // Use system preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Only update if different from current state to prevent unnecessary re-renders
    if (mediaQuery.matches !== isDarkMode) {
      setIsDarkMode(mediaQuery.matches);
    }

    // Listen for system preference changes
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []); // Remove isDarkMode from dependencies to prevent loops

  return { isDarkMode };
};

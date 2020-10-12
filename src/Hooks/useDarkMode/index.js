import { useState, useEffect } from "react";
import useMedia from "Hooks/useMedia";
import useLocalStorage from "Hooks/useLocalStorage";

const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage("theme");

  const prefersDarkMode = useMedia(
    ["(prefers-color-scheme: dark)"],
    [true],
    false
  );
  
  const [componentMounted, setComponentMounted] = useState(false);

  // If enabledState is defined use it, otherwise fallback to prefersDarkMode.
  // This allows user to override OS level setting on our website.
  const enabled = enabledState
    ? enabledState
    : prefersDarkMode
    ? "dark"
    : "light";

  // Fire off effect that add/removes dark mode className
  useEffect(
    () => {
      const body = document.body;

      if (enabled === "dark") {
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
      }

      body.classList.add("transition");

      window.setTimeout(() => {
        body.classList.remove("transition");
      }, 500);

      setComponentMounted(true)
    },
    [enabled] // Only re-call effect when value changes
  );

  // Return enabled state and setter
  return [enabled, setEnabledState, componentMounted];
};

export default useDarkMode;

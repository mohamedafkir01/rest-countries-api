import { useEffect } from "react";
import useMedia from "Hooks/useMedia";
import useLocalStorage from "Hooks/useLocalStorage";

const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage("theme");

  const prefersDarkMode = useMedia(
    ["(prefers-color-scheme: dark)"],
    [true],
    false
  );

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
        body.classList.remove("light");
      } else {
        body.classList.add("light");
        body.classList.remove("dark");
      }

      body.classList.add("animated");
      setTimeout(() => {
        body.classList.remove("animated");
      }, 350);
    },
    [enabled] // Only re-call effect when value changes
  );

  // Return enabled state and setter
  return [enabled, setEnabledState];
};

export default useDarkMode;

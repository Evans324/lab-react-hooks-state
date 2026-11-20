import React from "react";

function DarkModeToggle({ isDarkMode, onToggle }) {
  return (
    <button onClick={onToggle}>
      Toggle {isDarkMode ? "Light" : "Dark"} Mode
    </button>
  );
}

export default DarkModeToggle;
const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
const themeKey = "auto-weight-theme";
let theme;

try {
  theme = localStorage.getItem(themeKey);
} catch {
  // The system preference still works when storage is unavailable.
}

function renderTheme() {
  const dark = theme === "dark" || (theme !== "light" && systemTheme.matches);
  root.dataset.theme = dark ? "dark" : "light";
  themeButton.setAttribute("aria-pressed", String(dark));
}

renderTheme();
themeButton.hidden = false;
systemTheme.addEventListener("change", renderTheme);
themeButton.addEventListener("click", () => {
  theme = root.dataset.theme === "dark" ? "light" : "dark";
  renderTheme();
  try {
    localStorage.setItem(themeKey, theme);
  } catch {
    // Keep the current page's theme even when it cannot be saved.
  }
});

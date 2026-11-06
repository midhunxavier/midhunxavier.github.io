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

const demoControls = document.querySelector("[data-demo-controls]");
if (demoControls) {
  const steps = demoControls.querySelectorAll("[data-demo-step]");
  const panels = document.querySelectorAll("[data-demo-panel]");
  demoControls.hidden = false;
  for (const step of steps) {
    step.addEventListener("click", () => {
      for (const button of steps) button.setAttribute("aria-pressed", String(button === step));
      for (const panel of panels) panel.hidden = panel.dataset.demoPanel !== step.dataset.demoStep;
    });
  }
}

if (navigator.clipboard) {
  for (const button of document.querySelectorAll("[data-copy]")) {
    const target = document.getElementById(button.dataset.copy);
    const status = document.getElementById(button.dataset.copy + "-status");
    button.hidden = false;
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(target.textContent);
        status.textContent = "Copied.";
      } catch {
        status.textContent = "Select the text to copy it.";
      }
    });
  }
}

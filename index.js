const typed = new Typed("#typed-title", {
  strings: ["Team Green Menace"],
  typeSpeed: 50,
  cursorChar: "_",
});
/* Just in case a toggle is added later,
I have stored the darkmode value in a variable. */
const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

if (prefersDark) {
  // VANTA.JS Imports
  VANTA.NET({
    el: "#fancy-background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x841b,
    backgroundColor: 0x15173c,
    points: 8.0,
    maxDistance: 22.0,
  });
}

function animasiSentuh(element) {
  element.style.transform = "scale(1.05)";
  setTimeout(() => {
    element.style.transform = "scale(1)";
  }, 150);
}
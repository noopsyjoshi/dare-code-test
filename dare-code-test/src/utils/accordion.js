const Accordions = () => {
  const accTrigger = Array.from(
    document.querySelectorAll(".accordion__trigger")
  );

  const accs = Array.from(document.querySelectorAll(".accordion"));
  const accPanel = Array.from(document.querySelectorAll(".accordion__panel"));

  accTrigger.forEach(accordion => {
    accordion.addEventListener("click", toggleAccordion);
  });

  function toggleAccordion() {
    accPanel.forEach(panel => {
      panel.style.height = 0;
    });

    accs.forEach(acc => {
      acc.classList.remove("accordion--active");
    });

    const acc = this.parentElement;
    const panel = this.nextElementSibling;

    if (acc.classList.contains("accordion--active")) {
      acc.classList.remove("accordion--active");
      panel.style.height = 0;
    } else {
      acc.classList.add("accordion--active");
      panel.style.height = panel.scrollHeight + "px";
    }
  }
};

export default Accordions;

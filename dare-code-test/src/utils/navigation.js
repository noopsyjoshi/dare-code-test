const Navigation = () => {
  // Pseudo Code
  // Get navigation DOM elements
  // Add click event listener to open button
  // Add click event listener to close button
  // Add function to open navigation
  // Add function to close navigation
  // Close nav if anchor is selected
  // Add resize event listener to window
  // Close nav if desktop
  // Add touch event listener to open/close button for touch screen devices

  const openBtn = document.querySelector("#open");
  const closeBtn = document.querySelector("#close");
  const menu = document.querySelector(".navigation__menu");
  const navigation = document.querySelector(".navigation");
  const links = Array.from(document.querySelectorAll(".navigation__link"));

  links.forEach(link => {
    link.addEventListener("click", closeNav);
  });

  openBtn.addEventListener("click", openNav);
  closeBtn.addEventListener("click", closeNav);

  function openNav() {
    menu.classList.add("active");
    navigation.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    menu.classList.remove("active");
    navigation.classList.remove("open");
    document.body.style.overflow = "auto";
  }

  window.addEventListener("resize", checkResize);

  function checkResize() {
    if (window.innerWidth > 991) {
      closeNav();
    }
  }

  // const openNav = function() {
  //   console.log("click");
  // };
};

export default Navigation;

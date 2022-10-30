//get close button and add event listener
const closeBtn = document.querySelector(".close-nav");
// get toggle-menu button and add event listener
const showMenu = document.querySelector(".toggle-menu");
showMenu.addEventListener("click", () => {
  document.querySelector("nav").classList.add("visible");
  document.querySelector("nav").classList.remove("invisible");
});
closeBtn.addEventListener("click", () => {
  //get dropdown and add class to hide it
  const nav = document.querySelector("nav");

  nav.classList.remove("visible");
  nav.classList.add("invisible");
});

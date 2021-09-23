const menuDisplayButton = document.getElementById ('menu-trigger');

menuDisplayButton.addEventListener("click", displayHamMenu);

const menuCloseButton = document.getElementById ("menu-close");
console.log(menuCloseButton);
menuCloseButton.addEventListener("click", hideHamMenu);


const hamMenu = document.getElementById ('side-menu');
function displayHamMenu() {
  hamMenu.classList.add("show-menu");
}
function hideHamMenu() {
  hamMenu.classList.remove("show-menu");
}


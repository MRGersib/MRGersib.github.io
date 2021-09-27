
const firstMenuButton = document.getElementById ('menu-1-button');
const secondMenuButton = document.getElementById ('menu-2-button');
const thirdMenuButton = document.getElementById ('menu-3-button');

const firstMenuList = document.getElementById ('menu-1');
const secondMenuList = document.getElementById ('menu-2');
const thirdMenuList = document.getElementById ('menu-3');


firstMenuButton.addEventListener("mouseover", displayFirstMenu);

function displayFirstMenu() {
  firstMenuList.classList.add("show");
  secondMenuList.classList.remove("show");
  thirdMenuList.classList.remove("show");
}

secondMenuButton.addEventListener("mouseover", displaySecondMenu);

function displaySecondMenu() {
  firstMenuList.classList.remove("show");
  secondMenuList.classList.add("show");
  thirdMenuList.classList.remove("show");
}

thirdMenuButton.addEventListener("mouseover", displayThirdMenu);

function displayThirdMenu() {
  firstMenuList.classList.remove("show");
  secondMenuList.classList.remove("show");
  thirdMenuList.classList.add("show");
}

firstMenuButton.addEventListener('mouseleave',hideMenus);
secondMenuButton.addEventListener('mouseleave',hideMenus);
thirdMenuButton.addEventListener('mouseleave',hideMenus);

function hideMenus(){
  firstMenuList.classList.remove('show');
  secondMenuList.classList.remove('show');
  thirdMenuList.classList.remove('show');
}


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


/*modal*/
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

/*buttons for attendance*/


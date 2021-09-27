
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


/*form*/
const form = document.querySelector("#application-form");
const errorsList = document.querySelector("#errors");

form.addEventListener("submit", validateForm);

function validateForm(event) {

  event.preventDefault();

  errorsList.innerHTML = "";
  
  let firstName = document.querySelector("#first-name").value;
  if (firstName.length<2) {
    addError("First name must be at least 2 characters");
  }
  
  let lastName = document.querySelector("#last-name").value;
  if (lastName.length < 2) {
    addError("Last name must be at least 2 characters");
  }
  
  
  let phoneNumberValid = document.querySelector("#phone-area-code").value.length === 3 && document.querySelector("#phone-prefix").value.length === 3 && document.querySelector("#phone-line-number").value.length === 4;
  if (!phoneNumberValid) {
    addError("Please provide a 10 digit number");
  }
  
  let courseSelect = document.querySelector("#course-select");
  if (courseSelect.value === "Select One") {
    addError("Please select an option");
  }
  let pastExperience = document.querySelector("#past-experience").value;
  if (pastExperience.length < 20) {
    addError("Description must be at least 20 characters");
  }
}

function addError(error) {
  let li = document.createElement("li");
  li.innerText = error;
  errorsList.appendChild(li);
}


let tab, sideBar, links;

function main() {
  typingEffect();
  //snaptoView();
  sideBarToggle();
  // linksCloseAfterClick();
  darkMode();
}

function typingEffect() {
  const scrollText = document.querySelector(".scroll-text");
  const scrolling = document.querySelector(".scrolling");
  const typingString = `Web Developer`;

  let count = 0;
  setInterval(() => {
    if (count == typingString.length) {
      return;
    } else {
      scrolling.textContent += typingString[count];
      count++;
    }
  }, 120);
  scrollText.append(scrolling);
}

function snaptoView() {}

function sideBarToggle() {
  //Set Variables
  let isOpen = false;
  let tab = document.querySelector(".tab");
  let sideBar = document.querySelector(".sidebar");
  let links = document.querySelector(".links");
  let elementsArr = [tab, sideBar, links];
  let responsiveCSS = [, "sidebar-open", "tab-left", "links-display"];
  // ResetSideBar
  sideBar.style.width = "0rem";
  tab.style.left = "0rem";
  tab.textContent = ">>>";
  links.style.display = "none";

  //Change to classNames
  tab.addEventListener("click" || "touch", (event) => {
    addClass(elementsArr, responsiveCSS, isOpen);
    // removeClass([tab, sidebar, links], responsiveCSS, isOpen);

    //   //
    // sideBar.style.width = `22rem`;
    //   tab.style.left = `22rem`;
    //   tab.textContent = "<<<";
    //   links.style.display = "block";
    //   isOpen = false;
    // } else if (isOpen == false) {
    //   sideBar.style.width = "0rem";
    //   tab.style.left = "0rem";
    //   tab.textContent = ">>>";
    //   links.style.display = "none";

    //   isOpen = true;
  });
}

// function linksCloseAfterClick() {
//   const a = document.querySelectorAll("a");
//   a.forEach((link) =>
//     link.addEventListener("click", (event) => {
//       sideBar.style.width = "0rem";
//       tab.style.left = "0rem";
//       tab.textContent = ">>>";
//       links.style.display = "none";
//     })
//   );
// }

function darkMode() {
  const toggle = document.getElementById("toggle");
  let landingPage = document.querySelector(".landing-page");
  let headers = document.querySelectorAll(".headers");
  let elementsArr = [headers, landingPage];
  let theme = ["dark-theme", "light-theme"];

  toggle.addEventListener("input", (e) => {
    const isChecked = e.target.checked;
    addClass(elementsArr, theme, isChecked);
    removeClass(elementsArr, theme, isChecked);
  });
}



//Helper Utilizies

function addClass(elements, className, isBool) {
  if (isBool && NodeList)
    elements[0].forEach((el) => el.classList.add(className[0]));
  if (!isBool && NodeList)
    elements[0].forEach((el) => el.classList.add(className[1]));
  if (isBool) elements[1].classList.add(className[0]);
  if (!isBool) elements[1].classList.add(className[1]);
}

function removeClass(elements, className, isBool) {
  if (isBool && NodeList)
    elements[0].forEach((el) => el.classList.remove(className[1]));
  if (!isBool && NodeList)
    elements[0].forEach((el) => el.classList.remove(className[0]));
  if (isBool) elements[1].classList.remove(className[1]);
  if (!isBool) elements[1].classList.remove(className[0]);
}

window.onload = main();

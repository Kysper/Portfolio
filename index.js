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
  let tab = document.querySelector(".tab");
  let sideBar = document.querySelector(".sidebar");
  let links = document.querySelectorAll(".link");

  tab.addEventListener("click" || "touch", (event) => {
    tab.classList.toggle("clicked");
    sideBar.classList.toggle("open");
    links.forEach((el) => el.classList.toggle("visible"));
    if(tab.classList.contains('clicked')) {tab.textContent = "<<<"} else {
      tab.textContent = ">>>"
    }
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
//       sideBar.style.width = "0rem";s
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
  let content = document.querySelectorAll('.content-body')
  toggle.addEventListener("input", (e) => {
    const isChecked = e.target.checked;
    headers.forEach(el => el.classList.toggle("dark-theme"));
    content.forEach(el => el.classList.toggle("dark-theme"));
    landingPage.classList.toggle("dark-theme");
  });
}

window.onload = main();

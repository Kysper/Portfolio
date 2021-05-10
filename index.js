let tab, sideBar, links;

function main() {
  typingEffect();
  sideBarToggle();
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

function sideBarToggle() {
  //Set Variables
  let tab = document.querySelector(".tab");
  let sideBar = document.querySelector(".sidebar");
  let links = document.querySelectorAll(".link");
  //Adds class to open / close navbar
  tab.addEventListener("mouseover", (event) => {
    if (tab.classList.contains("clicked")) {
      tab.textContent = ">>>";
      tab.classList.toggle("clicked");
      sideBar.classList.toggle("open");
      links.forEach((el) => el.classList.toggle("visible"));
    } else {
      tab.textContent = "<<<";
      tab.classList.toggle("clicked");
      sideBar.classList.toggle("open");
      links.forEach((el) => el.classList.toggle("visible"));
    }
  });
  links.forEach((el) =>
    el.addEventListener("click", (event) => {
      tab.textContent = ">>>";
      tab.classList.toggle("clicked");
      sideBar.classList.toggle("open");
      links.forEach((el) => el.classList.toggle("visible"));
    })
  );
}

function darkMode() {
  const toggle = document.getElementById("toggle");
  let landingPage = document.querySelector(".landing-page");
  let headers = document.querySelectorAll(".headers");
  let content = document.querySelectorAll(".content-body");
  let body = document.querySelector("body");
    let tab = document.querySelector(".tab");
  toggle.addEventListener("input", (e) => {
    body.classList.toggle("dark-theme");
    tab.classList.toggle('dark-theme')
    tab.style.backgroundColor = 'transparent'
    headers.forEach((el) => el.classList.toggle("dark-theme"));
    content.forEach((el) => el.classList.toggle("dark-theme"));
    landingPage.classList.toggle("dark-theme");
  });
}

window.onload = main();

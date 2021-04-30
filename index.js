let tab, sideBar, links;

function main() {
  typingEffect();
  //snaptoView();
  sideBarToggle();
  linksCloseAfterClick();
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
  isOpen = false;
  tab = document.querySelector(".tab");
  sideBar = document.querySelector(".sidebar");
  links = document.querySelector(".links");

  // ResetSideBar
  sideBar.style.width = "0rem";
  tab.style.left = "0rem";
  tab.textContent = ">>>";
  links.style.display = "none";

  tab.addEventListener("click" || "touch", (event) => {
    if (isOpen) {
      sideBar.style.width = `22rem`;
      tab.style.left = `22rem`;
      tab.textContent = "<<<";
      links.style.display = "block";
      isOpen = false;
    } else if (isOpen == false) {
      sideBar.style.width = "0rem";
      tab.style.left = "0rem";
      tab.textContent = ">>>";
      links.style.display = "none";

      isOpen = true;
    }
  });
}

function linksCloseAfterClick() {
  const a = document.querySelectorAll("a");
  a.forEach((link) =>
    link.addEventListener("click", (event) => {
      console.log(link);
      sideBar.style.width = "0rem";
      tab.style.left = "0rem";
      tab.textContent = ">>>";
      links.style.display = "none";
    })
  );
}

function darkMode() {
  const toggle = document.getElementById("toggle");
  const landingPage = document.querySelector(".landing-page");
  const headers = document.querySelectorAll(".headers");

  toggle.addEventListener("input", (e) => {
    const isChecked = e.target.checked;
console.log(isChecked)
    if (isChecked) {
      headers.forEach(el=> el.classList.remove("light-theme"));
      headers.forEach(el=> el.classList.add("dark-theme"));
      landingPage.classList.remove("light-theme");
      landingPage.classList.add("dark-theme");
    } else {
      headers.forEach(el=> el.classList.add("light-theme"));
      headers.forEach(el=> el.classList.remove("dark-theme"));
      landingPage.classList.remove("dark-theme");
      landingPage.classList.add("light-theme");
    }
  });
}

window.onload = main();

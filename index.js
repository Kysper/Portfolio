let tab, sideBar, links;

function main() {
  typingEffect();
  sideBarToggle();
  darkMode();
  projectPopOut();
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
  tab.addEventListener("click", (event) => {
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
    tab.classList.toggle("dark-theme");
    tab.style.backgroundColor = "transparent";
    headers.forEach((el) => el.classList.toggle("dark-theme"));
    content.forEach((el) => el.classList.toggle("dark-theme"));
    landingPage.classList.toggle("dark-theme");
  });
}

function projectPopOut() {
  const card = document.querySelectorAll(".card");
  const main = document.querySelector("main");
  const modal = document.createElement("div");
  const pTag = document.createElement('p')
  const pNode = document.createTextNode("")
  pTag.append(pNode);

  const modalNode = document.createTextNode("");
  let url = ["NpEaa2P7qZI", "ScMzIvxBSi4", "eEzD-Y97ges"];
  const iFrame = document.createElement("iframe");

  iFrame.setAttribute("fullscreen", true);
  iFrame.classList.add("iframe");

  modal.append(modalNode);
 
  main.append(modal);
  
  card.forEach((el) =>
    el.addEventListener("mouseenter", (e) => {
      if (e.target.id === "card-1") {
        iFrame.setAttribute("src", "https://www.youtube.com/embed/" + url[0]);
      }
      if (e.target.id === "card-2") {
        iFrame.setAttribute("src", "https://www.youtube.com/embed/" + url[1]);
      }
      if (e.target.id === "card-3") {
        iFrame.setAttribute("src", "https://www.youtube.com/embed/" + url[2]);
      }
      modal.classList.add("modal");
      modal.appendChild(iFrame);
      modal.appendChild(pTag)
    })
  );

  modal.addEventListener("mouseleave", (e) => {
    modal.classList.remove("modal");
    modal.removeChild(iFrame);
  });
}

window.onload = main();

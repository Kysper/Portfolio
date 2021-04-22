
function main (){
    typingEffect();
    // snapToView();
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

// function snapToView() {
// const sectionHeaders = document.querySelectorAll('.headers')
// console.log(sectionHeaders[0].parentElement.id)
// }

   window.onload =  main();

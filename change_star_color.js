document.addEventListener('click',(e) => {
    console.log(e.target.tagName)
 if(e.target.tagName == 'SPAN') {
   console.log(e.target.style.color = `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`);
    //e.target.parentNode.remove()
    console.log('Star removed')
 }


})

function randomInt(min, max) {

    return Math.abs(Math.ceil(Math.random() * (min - max)));
}
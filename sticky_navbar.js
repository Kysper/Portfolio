
const navbar = document.querySelector('.nav')
const sticky = navbar.offsetTop;
const logo = document.querySelector('.logo')
const navBarLogo = document.querySelector('#logo-1')
const landingLogo = document.querySelector('#logo-2')

function stickyNavBar(){
   window.pageYOffet >= sticky ? navbar.classList.add('sticky') : navbar.classList.remove("sticky");
}

    

document.body.addEventListener('wheel', () => {
    const offset = document.querySelector('.logo').getBoundingClientRect();

    console.log(offset.top);
    if(offset.top <= -36) {
        navBarLogo.style.display = "inline-block"
        logo.style.display = 'none'} 
    if(offset.top >= 0) {
        navBarLogo.style.display = "none"
        logo.style.display = 'inline-block'} 
})

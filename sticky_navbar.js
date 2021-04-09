
function stickyNavBar(){
    const navbar = document.querySelector('.nav')
    const sticky = navbar.offsetTop;
   window.pageYOffet >= sticky ? navbar.classList.add('sticky') : navbar.classList.remove("sticky");
}

window.onscroll = stickyNavBar();
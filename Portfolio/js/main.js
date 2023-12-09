//Header Scroll
let nav=document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");

    }
    else {
        nav.classList.remove("header-scrolled");
    }
}



// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse= document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})


//parallax effect
document.addEventListener('scroll', function() {
    let scrollTop = window.scrollY;
    let parallaxContent = document.querySelector('.parallax-content');
    parallaxContent.style.transform = 'translateY(' + scrollTop * 0.5 + 'px)';
});





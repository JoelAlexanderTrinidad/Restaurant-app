window.addEventListener("scroll", function(){
    const header = document.getElementById("header");
    header.classList.toggle("header_sticky", window.scrollY > 0);
})

function toggleMenu() {
    const menuToggle = document.querySelector(".menu_toggle");
    menuToggle.classList.toggle("active");
}

function closeMenu(event) {
    event.stopPropagation(); 
    toggleMenu(); 
}
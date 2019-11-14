// Option 2 - jQuery Smooth Scroll
$(".bar_btn a").on('click', function(e) {
   if(this.hash !== '') {
       e.preventDefault();

       const hash = this.hash;

       $('html, body').animate({
           scrollTop: $(hash).offset().top
       },800
       );
   }
});

//  Option 3 - SmoothScroll Script
//  const scroll = new SmoothScroll('.bar_btn a[href*="#"]', {
//      speed: 800
//  });


// 햄버거 메뉴 설정 영역 시작
// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}
// 햄버거 메뉴 설정 영역 끝

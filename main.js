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

// '.bar_btn a[href*="#"]'

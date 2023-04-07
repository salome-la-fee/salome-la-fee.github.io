$(document).ready(function(){
 



    $('.slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 4000,
        pauseOnHover: false,
      });

      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });


});


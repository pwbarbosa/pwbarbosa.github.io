function myFunction(x) {
    x.classList.toggle("change");
    $('.top-nav').toggleClass('off-canvas on-canvas');
    setTimeout(function(){
      $('.top-nav a').removeClass('display-none');
    },250)
  } 
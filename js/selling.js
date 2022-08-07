$(function(){
  /* 메뉴 fixed */
  var hd = $('.header-gnb'),
  win = $(window);

  win.scroll(function(){
    win_top = $(this).scrollTop();
    
    if(win_top > 0) {
        hd.addClass('fixed');
    }else{
        hd.removeClass('fixed');
    };
  })
  var swiper = new Swiper(".sell-slide", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
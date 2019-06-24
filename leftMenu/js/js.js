// $('.menu-btn').on('click', function(e) {
//   e.preventDefault();
//   $('.menu').toggleClass('menu_active');
//   $('.content').toggleClass('content_active');
// })

$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu_active');
    $('.content').toggleClass('content_active');
    $('.menu-btn').toggleClass('menu-btn_active');
  })
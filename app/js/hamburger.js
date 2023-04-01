$('.hamburger--header').on('click', function () {
  $('body').toggleClass('no-scroll')
  $(this).toggleClass('open');
  $('.menu').toggleClass('open');
});

$('.hamburger--shops').on('click', function () {
  $('body').toggleClass('no-scroll')
  $(this).toggleClass('open');
  $('.brand-list-js').toggleClass('open');
});
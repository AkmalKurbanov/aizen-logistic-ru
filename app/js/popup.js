


$('body').on('click', '.consultation-js', function () {
  $('#consultation').addClass('open');
  $('.hamburger, .menu').removeClass('open');
  $('body').addClass('no-scroll');

});
$('.popup__close').on('click', function () {
  $('.popup').removeClass('open');
  $('body').removeClass('no-scroll');
});

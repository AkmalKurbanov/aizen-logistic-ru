$('.order__switch').on('click', function () {
  $(this).parent().toggleClass('desktop');
  $('.order__arrow').toggle();
});

$('.order__switch-label--mobile').on('click', function () {
  $(this).parent().removeClass('desktop')
});
$('.order__switch-label--desktop').on('click', function () {
  $(this).parent().addClass('desktop')
});
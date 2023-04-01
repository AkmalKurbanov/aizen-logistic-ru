$('.form-wrap__select').on('click', function(){
  $(this).toggleClass('open')
});

$('.form-wrap__option').on('click', function(){
  let value = $(this).attr('data-value');
  $(this).parent().parent().find('.form-wrap__selected').attr('data-value', value).text('');
  $(this).parent().parent().find('.input__selected').val(value);
});

jQuery(function ($) {
  $(document).mouseup(function (e) { 
    var div = $(".form-wrap__select");
    if (!div.is(e.target) 
      && div.has(e.target).length === 0) {
      div.removeClass('open');
    }
  });
});
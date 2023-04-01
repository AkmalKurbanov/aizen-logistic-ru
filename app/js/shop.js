$(".shops__item-wrap").each(function (index) {
  if ($(this).attr('href') != '') {
    $(this).find('.shops__item').removeClass('shops__item--soon')
  } else {
    $(this).on('click', function (event){
      event.preventDefault();
    })
    $(this).find('.shops__item').addClass('shops__item--soon')    
    $(this).find('.shops__item--soon').append('<div class="shops__item-soon">Скоро</div>')    
  }
});







// tabs
$(document).ready(function () {

  (function ($) {
    $('.tab .shops__tabs ').addClass('active').find('> .slick-list .slick-track .slick-slide:eq(0) .tab-wrap').addClass('current');

    $('.shops-js a').click(function (g) {
      var tab = $(this).closest('.tab'),
        index = $(this).closest('.slick-slide').index();

      tab.find('.shops__tabs .tab-wrap').removeClass('current');
      $(this).closest('.tab-wrap').addClass('current');

      tab.find('.tab_content').find('.shops__list').not('.shops__list:eq(' + index + ')').hide();
      tab.find('.tab_content').find('.shops__list:eq(' + index + ')').css('display','flex');

      g.preventDefault();
    });
  })(jQuery);

});
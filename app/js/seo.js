let text = $(".seo__text").text();
let len = text.length;

if (len > 265) {
  $(".seo__text").text($(".seo__text").text().substr(0, 265) + '...');
}


$('.seo__open-txt span').on('click', function(){
  $(".seo__text").text(text);
  $('.seo__hide-txt').fadeIn();
  $(this).parent().hide();
});


$('.seo__hide-txt span').on('click', function(){
  $(".seo__text").text($(".seo__text").text().substr(0, 265) + '...');
  $('.seo__open-txt').fadeIn();
  $(this).parent().hide();
});
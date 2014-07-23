$(function() {
  $(window).scroll(function() {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 1) {
      $('.title').addClass('shrink-text');
      $('.subtitle').addClass('hidden');
      $('.navbar').addClass('shrink');
    } else {
      $('.title').removeClass('shrink-text');
      $('.subtitle').removeClass('hidden');
      $('.navbar').removeClass('shrink');
    }
  });
});

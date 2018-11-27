$(document).ready(function() {
  function changeNavbarPosition() {
    if ($(window).scrollTop() >= $(window).height()) {
      // $('#navbar').addClass('navbar-fixed-top');
      // $('#section--2').addClass('margin-top--53');
      $('#navbar-fixed').show();
    }else {
      // $('#navbar').removeClass('navbar-fixed-top');
      // $('#section--2').removeClass('margin-top--53');
      $('#navbar-fixed').hide();
    }
  }

  function addSection2Animation() {
    if ($(window).scrollTop() >= $(window).height() * 0.4) {
      $('#section--2 .section__header h1').addClass('js__slide-left-to-right');
      $('#section--2 .section__body .section__body__self-intro-part .self-intro__container').addClass('js__slide-left-to-right');
      $('#section--2 .section__body .section__body__self-intro-part .my-story__container').addClass('js__slide-right-to-left');
    }
  }

  $(window).scroll(function() {
    changeNavbarPosition();
    addSection2Animation();
  });
});

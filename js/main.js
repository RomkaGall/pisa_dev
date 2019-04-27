$(document).ready(function () {
  console.log("Скрипты подъехали")

  $('.partners__slider').slick({
    slidesToShow: 4,
    dots: true,
    arrows: false,
    infinite: true
  })

  $(".header__menu_btn").click(function () {

    if ($(this).find('span').hasClass("active")) {
      $(this).find('span').removeClass("active");
      $(this).find('span').addClass("cross");
    } else {
      $(this).find('span').removeClass("cross");
      $(this).find('span').addClass("active");
    }

    $('.header__menu').toggleClass('active')
  });

  $('.header__menu .header_link').click(function () {
    $(this).find('.header__sublist').toggleClass('show')
    $(this).toggleClass('active');
  })

  //wow
  $(function () {
    new WOW().init();
  })
});




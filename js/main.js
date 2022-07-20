$(function(){
	$(".menu a").on("click", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
	   $('body,html').animate({scrollTop: top}, 1500);
	});
	$(".header a").on("click", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
	   $('body,html').animate({scrollTop: top}, 1500);
	});


   $('.menu__btn, .menu a').on('click', function(){
      $('.header__top-inner').toggleClass('header__top-inner--active');
   });
   

   var mixer = mixitup('.portfolio__content');
});

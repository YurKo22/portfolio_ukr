$(function(){
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 200) {
			$('.header').addClass('sticky')
		} else {
			$('.header').removeClass('sticky')
	    }
	});

	const headerHeight = $('.header').outerHeight();

	$(".menu a, .main a, footer a").on("click", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
	   $('body,html').animate({scrollTop: top}, 1500);
	});


   $('.menu__btn, .menu a').on('click', function(){
      $('.menu').toggleClass('menu--active');
   });

   var mixer = mixitup('.portfolio__content');
});

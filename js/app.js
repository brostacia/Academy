$(function() {
	// console.log('working!');

	/* Fixed Header */
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");
   let navToggle = $("#navToggle");
	let navLink = $("#navLink");

	//вызываем ф-ию при загрузке страницы вместо onLoad
	checkScroll(scrollPos, introH);

	$(window).on("scroll resize", function() {
		introH = intro.innerHeight();
		// обновлять scroll
		scrollPos = $(this).scrollTop();
		// console.log(scrollPos);
		checkScroll(scrollPos, introH);
	});

	function checkScroll(scrollPos, introH) {
		if( scrollPos > introH ) {
			 header.addClass("fixed");
		} else {
			 header.removeClass("fixed");
		}
  }


	/* Smooth scroll */
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		//отступ блока от верха 
		let elementOffset = $(elementId).offset().top;
		// console.log(elementOffset);

		//убрать навигацию при клике на nav__link
		nav.removeClass("show");

		// 700 миллисек длится скролл
		$("html, body").animate({
			scrollTop: elementOffset - 80
	  }, 700);
		
	});

	/* Nav Toggle */
	navToggle.on("click", function(event) {
		event.preventDefault();

		nav.toggleClass("show");
  });


   /* Reviews: https://kenwheeler.github.io/slick/ */
	let slider = $("#reviewsSlider");
	
	slider.slick({
		// бесконечная прокрутка
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		//чтобы один отзыв исчезал, другой появлялся на его месте
		fade: true,
		//не показывать кнопки
		arrows: false,
		dots: true
  });


});
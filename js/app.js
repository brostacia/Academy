$(function() {
	// console.log('working!');

	/* Fixed Header */
	let header = $("#header");
	let intro = $("#intro");
	let introH;
	let scrollPos = $(window).scrollTop();

	$(window).on("scroll load resize", function() {
		introH = intro.innerHeight();
		// обновлять scroll
		scrollPos = $(this).scrollTop();
		// console.log(scrollPos);
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


		console.log(elementOffset);

		// 700 миллисек длится скролл
		$("html, body").animate({
			scrollTop: elementOffset - 80
	  }, 700);
		
	});
});
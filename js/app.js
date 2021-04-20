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

		if( scrollPos > introH ) {
			header.addClass("fixed");
	 	} else {
			header.removeClass("fixed");
	  	}


		// console.log(scrollPos);

	});

	
});
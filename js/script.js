$(function () {
	// ?Btn Menu
	$(".nav__btn").on("click", function (e) {
		e.preventDefault();


		$(this).toggleClass("rotate");
		$(".overlay").fadeToggle(300);
		$(".nav").fadeToggle(300).css("display", "inline-flex");
	})



	//?  lighting nav__link on scroll
	let elem2 = $("#portfolio").offset().top;
	let elem3 = $("#way").offset().top;
	let elem4 = $("#advantages").offset().top;
	let windowPoint = $(window).scrollTop();
	function scrollHeader() {
		windowPoint = $(window).scrollTop();

		// ?Header
		if (windowPoint >= 0 && windowPoint < elem2) {
			$("a.header__link .nav__link__circle").addClass("show");
			$(".rowUp").addClass("rotate");
		} else {
			$("a.header__link .nav__link__circle").removeClass("show");
			$(".rowUp").removeClass("rotate");
		}

		// ?Portfolio
		if (windowPoint >= elem2 && windowPoint < elem3) {
			$("a.portfolio__link .nav__link__circle").addClass("show");
		} else {
			$("a.portfolio__link .nav__link__circle").removeClass("show");
		}

		// ?way
		if (windowPoint >= elem3 && windowPoint < elem4) {
			$("a.way__link .nav__link__circle").addClass("show");
		} else {
			$("a.way__link .nav__link__circle").removeClass("show");
		}

		// ?Portfolio
		if (windowPoint >= elem4 && windowPoint < 3846) {
			$("a.advantages__link .nav__link__circle").addClass("show");
		} else {
			$("a.advantages__link .nav__link__circle").removeClass("show");
		}

		// ?Portfolio
		if (windowPoint == 3847) {
			$("a.links__link .nav__link__circle").addClass("show");
		} else {
			$("a.links__link .nav__link__circle").removeClass("show");
		}
	}


	$(window).on("scroll", function () {
		scrollHeader();
	})
	scrollHeader();


	//  ?Slow links
	$(".nav__link").on("click", function (e) {
		e.preventDefault();

		let link = $(this).attr("href");

		$("html").animate({
			scrollTop: $(link).offset().top,
		})
		$(".overlay").fadeOut(300);
		$(".nav").fadeOut(300);
		$(".nav__btn").removeClass("rotate");
	})


	$(".overlay").on("click", function () {
		$(this).fadeToggle(300);
		$(".nav").fadeOut(300);
		$(".nav__btn").removeClass("rotate").css("z-index", 100);
	})

	//  ?RowUp
	$(".rowUp").on("click", function (e) {
		e.preventDefault();

		$("html").animate({
			scrollTop: 0,
		}, 400)
	})

})
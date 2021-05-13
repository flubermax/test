// Для добавления функционала используем классы с префиксом js, стилизовать по этим классам нельзя

$(document).ready(function () {

	$('.js-menu-btn').on('click', function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.js-menu').removeClass('active')
		} else {
			$(this).addClass('active')
			$('.js-menu').addClass('active')
		}
	})

	// $('input[type=tel]')
	// 	.inputmask("8 (999) 999 99 99");


	// $('.js-popup-img')
	// 	.magnificPopup({
	// 		type:'image',
	// 		closeOnContentClick: true,
	// 		fixedContentPos: true,
	// 		mainClass: 'mfp-no-margins mfp-with-zoom',
	// 		image: {
	// 			verticalFit: true
	// 		},
	// 		zoom: {
	// 			enabled: true,
	// 			duration: 300
	// 		}
	// 	});
});

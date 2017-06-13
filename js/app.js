$(document).ready(function() {
	var $container = $('.grid');
	var options = {
		itemSelector : '.grid-item',
		columnwidth: '.grid-sizer',
		isFitWidth: true,
		percentPosition: true
	};

	masonryInit($container, options);

	$('.main-nav .mobile').click(function() {
		$('.main-nav .desktop').removeClass('slide-out');
	});

	$('.main-nav .desktop li.close').click(function() {
		$('.main-nav .desktop').addClass('slide-out');
	});

	$.fancybox.defaults.margin = [0,0];
	$.fancybox.defaults.focus = false;
});

function masonryInit(container, options) {
	container.masonry(options);
	container.imagesLoaded( function() {
	}).progress(function (imgLoad, image) {
		if (image.isLoaded) {
			var $wrapper = $(image.img).parent();
			$wrapper.removeClass('is-loading');
		}
	});
}
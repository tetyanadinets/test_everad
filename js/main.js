jQuery(document).ready(function() {
	new WOW().init();
	setEqualHeight(jQuery(".px-advantages__img"));
});

jQuery(window).resize(function() {
  setEqualHeight(jQuery(".px-advantages__img"));
});

jQuery(window).scroll(function(){
	if ($(this).scrollTop() > 78) {
		jQuery('.px-header').addClass('px-header_active');
	} else {
		jQuery('.px-header').removeClass('px-header_active');
	}
});

function setEqualHeight(columns) {
	var tallestcolumn = 0;
	columns.each(
		function() {
			jQuery(this).css('height', 'auto');
			currentHeight = jQuery(this).height();
			if (currentHeight > tallestcolumn) {
				tallestcolumn = currentHeight;
			}
		}
	);
	columns.height(tallestcolumn);
}

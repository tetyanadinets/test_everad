jQuery(document).ready(function() {
	new WOW().init();
});

jQuery(window).scroll(function(){
    if ($(this).scrollTop() > 78) {
        jQuery('.px-header').addClass('px-header_active');
    } else {
        jQuery('.px-header').removeClass('px-header_active');
    }
});

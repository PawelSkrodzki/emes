$(document).ready(function(){
	$.easing.def = "easeOutBounce";
	$('.hamburger').click(function(e){
		var dropDown = $(this).parent().find('ul');
		$('.mobile-menu').not(dropDown).slideUp('slow');
        dropDown.slideToggle('slow');

        $('.bar1').toggleClass('bar1-open');
        $('.bar2').toggleClass('bar2-open');
        $('.bar3').toggleClass('bar3-open');

        e.preventDefault();
	})
});
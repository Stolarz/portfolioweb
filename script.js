$(document).ready(function(){
    $("#arrow").click(function (){
        $('html, body').animate({
            scrollTop: $("#secondPage").offset().top
        }, 2000);
    });
    
    $(".menu-trigger").click(function() {
        var t = $(this);
        var menu = $(".site-menu");
        menu.toggleClass("sm-closed");
        if(!menu.hasClass("sm-closed")) {
            t.addClass("mt-opened");
        } else {
            t.removeClass("mt-opened");
        }
    });
    
    $("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	}, 2000 );
});
});
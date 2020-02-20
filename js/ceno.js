$(function () {
   
    $('.pricer').hover(function () {
		picUp($(this));
    }, function () {
		picDn($(this));    
    });
    $('.button').hover(function () {
		picUp($(this));
    }, function () {
		picDn($(this));    
    });
    $('.logo').hover(function () {
		$(this).css('color', '#0aa3ac');
		$(this).find('.pic').css('opacity', '1');
    }, function () {
		$(this).css('color', '#357113');
		$(this).find('.pic').css('opacity', '0');
	});
	$('.feedback .input').focusin(function () {
		$(this).children().css('background-position', '0 -30px')
	});
	$('.feedback .input').focusout(function () {
		$(this).children().css('background-position', '0 0')
	});
	$('.feedback .textarea').focusin(function () {
		$(this).children().css('background-position', '0 -150px')
	});
	$('.feedback .textarea').focusout(function () {
		$(this).children().css('background-position', '0 0')
	});
	$('.gal').hover(function () {
		picUp($(this));
		$(this).find('.label').css('color', '#f46300');
		$('.bottom .colon h1').css('color', '#47a8fe');
    }, function () {
		picDn($(this));  
		$(this).find('.label').css('color', '#47a8fe');
		$('.bottom .colon h1').css('color', '#87c81d');
    });
   
});

function picUp(target) {
	var p = target.find('.pic');
	var vars = {
        ease: Quad.easeOut,
        opacity: 1
    };
    TweenLite.to(p[0], 0.5, vars);	
}

function picDn(target) {
	var p = target.find('.pic');
	var vars = {
        ease: Quad.easeOut,
        opacity: 0
    };
    TweenLite.to(p[0], 0.5, vars);	
}
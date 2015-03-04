$(document).ready(function() {

	//HIGHLIGHT CURRENT NAV
	$("#home a:contains('Home')").parent().addClass('active');
	$("#toolbox a:contains('ToolBox')").parent().addClass('active');

	// MENU HOVER DROPDOWN
	$('ul.nav li.dropdown').hover(function(){
		$('.dropdown-menu', this).slideUp('fast');
	}, function() {
		$('.dropdown-menu', this).slideDown('fast');
	});

	// POPOVER
	$('#help').hover(function() {
		$('#help').popover('toggle');
	});
	$('#help').mouseleave(function() {
		$('#help').popover('destroy');
	});


    // $('.footer-section1').hover(function() {
    //     $('.slideup1').slideToggle('slow');
    //   });

    // $('.footer-section2').hover(function() {
    //     $('.slideup2').slideToggle('slow');
    //   });

    // $('.footer-section3').hover(function() {
    //     $('.slideup3').slideToggle('slow');
    //   });

	$('.footer-section').hover(function() {
		$(this).animate({top: '-=300px'}, 500).css('border-top', '2px solid #fff');
	},
	function() {
		$(this).animate({top: '+=300px'}, 500).css('border-top', 'none');
	});

	
	var sliderItem = ('.slider-item');
	// var lastItem = (sliderItem).last();
	var buttonNext = ('.button-next');
	var buttonPrev = ('.button-prev');

	$(sliderItem).first().fadeIn('slow');

	// $(sliderItem).each(function() {
	// 		$(buttonNext).click(function() {
	// 		$(this).parent().fadeOut('slow');
	// 		$(this).parent().next().fadeIn('slow');	
	// 	});
	// });

	$(sliderItem).each(function() {
			$(buttonNext).click(function() {
			if (lastItem == true) {
				$(this).parent().fadeOut('slow');
				$(this).parent().next().fadeIn('slow');	
			}else{
				$(this).parent().fadeOut('slow');
				$(this).parent().first().fadeIn('slow');	
			};	
		});
	});


	

});
//jQuery is loaded
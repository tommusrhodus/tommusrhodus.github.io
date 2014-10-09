/*-----------------------------------------------------------------------------------*/
/*	DOCUMENT READY FUNCTIONS
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
'use strict';
	
	$('#toTop').click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});
	
	$('a[href^="#"]').click(function(){
		var $el = $(this).attr('href');
		$("html, body").animate({ scrollTop: $($el).offset().top }, "slow");
		return false;
	});
	
});
$(function(){
	initEleEvents();
	
	
});



function initEleEvents(){



	$(".naa").mouseover(function(){
		
		$(this).find("dd").show();
	});
	$(".naa").mouseout(function(){
		
		$(this).find("dd").hide();
	});

}
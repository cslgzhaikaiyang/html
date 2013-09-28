$(function(){
	initPosition();
	initEvents();
	

});

function initPosition(){
	$.each($(".tbmenu"),function(i){
		$(this).css("left",i*105 +"px")
	});
}

function initEvents(){
	$(".tbmenu").mouseover(function(){
		$(this).find("dt").addClass("dtover");
		$(this).find("dd").show();
	});
	$(".tbmenu").mouseout(function(){
		$(this).find("dt").removeClass("dtover");
		$(this).find("dd").hide();
	});

	$(".tmenudt").click(function(){
		var flag=$(this).attr("openflag");
		$(".tmenudd").hide();
		$(".tmenudt").attr("openflag","no");	
		if (flag=="no"){
			$(this).next("dd").show();
			$(this).attr("openflag","yes");
		}else{
			$(this).next("dd").hide();
			$(this).attr("openflag","no");
		}
		$(".tmenudt").removeClass("tdtover");
		$(this).addClass("tdtover");
	});
}


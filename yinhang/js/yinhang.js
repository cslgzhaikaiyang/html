$(function(){
	initEleEvents();
	checktext();
	
});



function initEleEvents(){


	$("#input").keyup(function(e){

	        var val=$("#input").val();
	        
	        if (e.keyCode==8&&val=="") {

	           $("#input").css("background-image",'url("images/5.jpg")');
	        }
	        else{$("#input").css("background-image","none");};
	    });


	$(".ke").mouseover(function(){
		
		$(this).find("dd").show();
	});
	$(".ke").mouseout(function(){
		
		$(this).find("dd").hide();
	});


	$.each($(".ke"),function(i){
		$(this).css("left",i*180 +"px")
	});

	
    $("#pic1").mouseover(function(){

    	$("#mainpic2").hide();
    	$("#mainpic3").hide();
    	$("#mainpic1").show();
    });

    $("#pic2").mouseover(function(){

    	$("#mainpic1").hide();
    	$("#mainpic3").hide();
    	$("#mainpic2").show();
    });

	$("#pic3").mouseover(function(){

	    	$("#mainpic1").hide();
	    	$("#mainpic2").hide();
	    	$("#mainpic3").show();
	    });

	$("#topp").click(function(){
			var pindex=$("#mainpic").attr("pindex");
			var arry=$("#photoul").find("img");
			$("#mainphoto").attr("src",arry[pindex-1].src);
			$(".smallphoto")[pindex-1].addClass("smallphotosel");
			$("#mainphoto").attr("pindex",pindex-1);
		});


	
}



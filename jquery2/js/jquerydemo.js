$(function(){
	initEvents();
});


function initEvents(){
	$("#txtQ").keyup(function(){
		var val=$(this).val();
		if (val ==""){
			$(this).css("background-image","url('css/images/search.png')");
		}else{
			$(this).css("background-image","none");			
		}
		
	});
}

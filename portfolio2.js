$(document).ready(function() {

	var fadeTime = 1000;

	$(".left_nav").click(function(){

 		if($(".image_1").css("opacity")==1){ // the .css(XXX) lets js talk to css
 			$(".image_1").fadeTo(fadeTime,0);
	  		$(".image_10").fadeTo(fadeTime,1);
		} 
		if($(".image_2").css("opacity")==1) {
		  	$(".image_2").fadeTo(fadeTime,0);
		  	$(".image_1").fadeTo(fadeTime,1);
	  	}
	  	if($(".image_3").css("opacity")==1) {
		  	$(".image_3").fadeTo(fadeTime,0);
		  	$(".image_2").fadeTo(fadeTime,1);
	  	}
	  	if($(".image_4").css("opacity")==1) {
		  	$(".image_4").fadeTo(fadeTime,0);
		  	$(".image_3").fadeTo(fadeTime,1);
	  	}
	  	if($(".image_5").css("opacity")==1) {
		  	$(".image_5").fadeTo(fadeTime,0);
		  	$(".image_4").fadeTo(fadeTime,1);
	  	}
	  	if($(".image_6").css("opacity")==1) {
		  	$(".image_6").fadeTo(fadeTime,0);
		  	$(".image_5").fadeTo(fadeTime,1);
	  	}
	  	if($(".image_7").css("opacity")==1) {
		  	$(".image_7").fadeTo(fadeTime,0);
		  	$(".image_6").fadeTo(fadeTime,1);
	  	}
	  	if($(".image_8").css("opacity")==1) {
		  	$(".image_8").fadeTo(fadeTime,0);
		  	$(".image_7").fadeTo(fadeTime,1);
	  	}
	  	if($(".image_9").css("opacity")==1) {
		  	$(".image_9").fadeTo(fadeTime,0);
		  	$(".image_8").fadeTo(fadeTime,1);
	  	}
	  	if($(".image_10").css("opacity")==1) {
		  	$(".image_10").fadeTo(fadeTime,0);
		  	$(".image_9").fadeTo(fadeTime,1);
	  	}
	});  	

	$(".right_nav").click(function(){

 		if($(".image_1").css("opacity")==1){ // the .css(XXX) lets js talk to css
 			$(".image_1").fadeTo(fadeTime,0);
	  		$(".image_2").fadeTo(fadeTime,1);
		} 
		if($(".image_2").css("opacity")==1) {
		  	$(".image_2").fadeTo(fadeTime,0);
		  	$(".image_3").fadeTo(fadeTime,1);
	  	}
	  	if($(".image_3").css("opacity")==1) {
		  	$(".image_3").fadeTo(fadeTime,0);
		  	$(".image_4").fadeTo(fadeTime,1);
	  	}
	  	if($(".image_4").css("opacity")==1) {
		  	$(".image_4").fadeTo(fadeTime,0);
		  	$(".image_5").fadeTo(fadeTime,1);
	  	}
	  	if($(".image_5").css("opacity")==1) {
		  	$(".image_5").fadeTo(fadeTime,0);
		  	$(".image_6").fadeTo(fadeTime,1);
	  	}  
	  	if($(".image_6").css("opacity")==1) {
		  	$(".image_6").fadeTo(fadeTime,0);
		  	$(".image_7").fadeTo(fadeTime,1);
	  	} 
	  	if($(".image_7").css("opacity")==1) {
		  	$(".image_7").fadeTo(fadeTime,0);
		  	$(".image_8").fadeTo(fadeTime,1);
	  	}  	
	  	if($(".image_8").css("opacity")==1) {
		  	$(".image_8").fadeTo(fadeTime,0);
		  	$(".image_9").fadeTo(fadeTime,1);
	  	}  	
	   	if($(".image_9").css("opacity")==1) {
		  	$(".image_9").fadeTo(fadeTime,0);
		  	$(".image_10").fadeTo(fadeTime,1);
	  	}  	
	   	if($(".image_10").css("opacity")==1) {
		  	$(".image_10").fadeTo(fadeTime,0);
		  	$(".image_1").fadeTo(fadeTime,1);
	  	}  	
	});
		
// Nav fadein/fadeout
$(".left_nav").mouseover(function(){
	$(".left_nav").fadeTo(150,.8)
	});
$(".left_nav").mouseout(function(){
	$(".left_nav").fadeTo(150,.2)
	});
$(".right_nav").mouseover(function(){
	$(".right_nav").fadeTo(150,.8)
	});
$(".right_nav").mouseout(function(){
	$(".right_nav").fadeTo(150,.2)
	});

 });





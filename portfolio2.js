$(document).ready(function() {

	var fadeTime = 1000;

	$(".left_nav").click(function(){

 		if($(".la_1").css("opacity")==1){ // the .css(XXX) lets js talk to css
 			$(".la_1").fadeTo(fadeTime,0);
	  		$(".la_10").fadeTo(fadeTime,1);
		} 
		if($(".la_2").css("opacity")==1) {
		  	$(".la_2").fadeTo(fadeTime,0);
		  	$(".la_1").fadeTo(fadeTime,1);
	  	}
	  	if($(".la_3").css("opacity")==1) {
		  	$(".la_3").fadeTo(fadeTime,0);
		  	$(".la_2").fadeTo(fadeTime,1);
	  	}
	  	if($(".la_4").css("opacity")==1) {
		  	$(".la_4").fadeTo(fadeTime,0);
		  	$(".la_3").fadeTo(fadeTime,1);
	  	}
	  	if($(".la_5").css("opacity")==1) {
		  	$(".la_5").fadeTo(fadeTime,0);
		  	$(".la_4").fadeTo(fadeTime,1);
	  	}
	  	if($(".la_6").css("opacity")==1) {
		  	$(".la_6").fadeTo(fadeTime,0);
		  	$(".la_5").fadeTo(fadeTime,1);
	  	}
	  	if($(".la_7").css("opacity")==1) {
		  	$(".la_7").fadeTo(fadeTime,0);
		  	$(".la_6").fadeTo(fadeTime,1);
	  	}
	  	if($(".la_8").css("opacity")==1) {
		  	$(".la_8").fadeTo(fadeTime,0);
		  	$(".la_7").fadeTo(fadeTime,1);
	  	}
	  	if($(".la_9").css("opacity")==1) {
		  	$(".la_9").fadeTo(fadeTime,0);
		  	$(".la_8").fadeTo(fadeTime,1);
	  	}
	  	if($(".la_10").css("opacity")==1) {
		  	$(".la_10").fadeTo(fadeTime,0);
		  	$(".la_9").fadeTo(fadeTime,1);
	  	}
	});  	

	$(".right_nav").click(function(){

 		if($(".la_1").css("opacity")==1){ // the .css(XXX) lets js talk to css
 			$(".la_1").fadeTo(fadeTime,0);
	  		$(".la_2").fadeTo(fadeTime,1);
		} 
		if($(".la_2").css("opacity")==1) {
		  	$(".la_2").fadeTo(fadeTime,0);
		  	$(".la_3").fadeTo(fadeTime,1);
	  	}
	  	if($(".la_3").css("opacity")==1) {
		  	$(".la_3").fadeTo(fadeTime,0);
		  	$(".la_4").fadeTo(fadeTime,1);
	  	}
	  	if($(".la_4").css("opacity")==1) {
		  	$(".la_4").fadeTo(fadeTime,0);
		  	$(".la_5").fadeTo(fadeTime,1);
	  	}
	  	if($(".la_5").css("opacity")==1) {
		  	$(".la_5").fadeTo(fadeTime,0);
		  	$(".la_6").fadeTo(fadeTime,1);
	  	}  
	  	if($(".la_6").css("opacity")==1) {
		  	$(".la_6").fadeTo(fadeTime,0);
		  	$(".la_7").fadeTo(fadeTime,1);
	  	} 
	  	if($(".la_7").css("opacity")==1) {
		  	$(".la_7").fadeTo(fadeTime,0);
		  	$(".la_8").fadeTo(fadeTime,1);
	  	}  	
	  	if($(".la_8").css("opacity")==1) {
		  	$(".la_8").fadeTo(fadeTime,0);
		  	$(".la_9").fadeTo(fadeTime,1);
	  	}  	
	   	if($(".la_9").css("opacity")==1) {
		  	$(".la_9").fadeTo(fadeTime,0);
		  	$(".la_10").fadeTo(fadeTime,1);
	  	}  	
	   	if($(".la_10").css("opacity")==1) {
		  	$(".la_10").fadeTo(fadeTime,0);
		  	$(".la_1").fadeTo(fadeTime,1);
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





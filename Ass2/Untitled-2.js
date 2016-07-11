
var target;
var guess_input_text;
var guess_input;
var finished= false;
var colours=["blue","cyan", "gold", "gray", "green","magenta","orange","red","white","yellow"];
//var guesses=0;
//var index;
function do_game() {
	var random_number= (Math.random()*10);
	var random_number_integer=Math.floor(random_number);
	target= colours.index(random_number_integer+1);
	alert("the answer is:" + target);
	while(!finished) {
		guess_input_text= prompt("I am thinking of one of these colours"+ "\n\n"
		+ colours +"\n" + "What Colour am I thinking of ?");
		guess_input= parseInt(convert_colour_ to_number());
		if(guess_input===target){
			finished=true;
			}
		
		}
	
	}
	function convert_colour_ to_number (){
		var a=guess_input_text;
		var number  b;
		if( a==="blue"){
			b=0;
			}
			if( a==="cyan"){
			b=1;
			}
			if(a==="gold") {
				b=2
				}
				if(a==="gray"){
					b=3;
					}
					if(a==="green"){
						b=4;
						}
						if(a==="magenta"){
							b=5;
							}
							if(a==="orange"){
								b=6;
								}
								if(a==="red"){
									b=7;
									}
									if(a==="white"){
										b=8;
										}
										if(a==="yellow"){
											b=9;
											}
			
		}
		do_game();
	


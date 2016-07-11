// JavaScript Document
//<script>
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
		guess_input= parseInt(colours.indexof(guess_input_text));
		if(guess_input===target){
			finished=true;
			}
		
		}
	
	}
	do_game();

//</script>
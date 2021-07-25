//javascript for dark and light mode
function toggleClass(){
	const body = document.querySelector("body");
	body.classList.toggle("light");
}

var preloader = document.getElementById('loader');
function myFun(){
	preloader.style.display = 'none';
}


/* =================================
    java script for  assistant
	===============================*/
	console.log("ujjwal");

//take value from html code
const btn = document.getElementById("btn");


//take speach  and convert into text
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


//this  is for when we preee our button so web browser start using microphone and take user s  voice
recognition.onstart = function(){
	console.log("you can speak now");
}

//this is for after hearing think print as is it
 recognition.onresult = function(event){
	console.log(event); 
	var text = event.results[0][0].transcript;
	console.log(text);
	document.getElementById("result").innerHTML = text;
	read(text);
}

function read(text){
	  var speech = new SpeechSynthesisUtterance();
	  speech.text = text;
	  speech.volme = 1.5;
	  speech.rate = 0.9;
	  
	  if(text.includes('time') && text.includes('now')){
		  speech.text = "it is" + " " +new Date().getHours() + " " + new Date().getMinutes() + " "+"right now";
	  }
	  else if(text.includes('hear me')){
		  speech.text = "yes my name is Doremi and i am your personal assistant";
	  }
	  else if(text.includes('tell me something about yourself')){
		  speech.text = "yes sir my name is Doremi  and i am your perosnal assistant and i was careted bye ujjwal deval and i love my self";
	  }
	  else if(text.includes('Ujjwal') && text.includes('know') || text.includes('Ujjwal') && text.includes('who') || text.includes("know about Ujjwal")){
		  speech.text = " yes i know     ujjwal deval is my crator  and he is very good person and he is pursuing Bachelor of Computer Applications course from graphic era hill university";
	  }
	  else if( (text.includes('My') && text.includes('Birthday')) || (text.includes('my') && text.includes('birthday'))){
		  speech.text = "24 june";
	  }
	  else if(text.includes('thank you') ||  text.includes('thank you doremi')){
		  speech.text = "No sir its fine this is my duty";
	  }
	  else if (text.includes('are you single')){
		  speech.text = "of   course,       no,      i am love with your    internet  connection   ";
	  }
	  else if(text.includes('who is your parents')){
		  speech.text = "Ujjwal Deval  Rajani manral and ritu binwal is my paresnts";
	  }
	  else if(text.includes('Tell me About your invention ')){
		  speech.text = " it is very greatful my parents face lots of chalanges but at last 24 june 2021 succesfully completed me";
	  }
	  else if(text.includes("can you sing a song ")|| text.includes("can you sing a song for me")) {
		  speech.text = " So take aim! and fire away! l have never been so wide awake!    No! , nobdoy!  but me can keep me safe !     And I am  on my way";
	  }
	  else if(text.includes("  can yor sing a hindi song for me ")){
		  speech.text = "Ram chahe      leela      leela chahe ram in dono ke  love me duniya ka kya kam ";
	  }
	  else if(text.includes("joke")){
		  speech.text = " Santa wents to court         judge  said : order! order!   santa replay 1 pizza! 2 dosa! 3 samosa! and 1 cold-drink  judge! shut up!  santa ! no , no! 7 up";
	  }
	  else if(text.includes('love You')){
		//   speech.text = "I am not an idiot why are you talking like a piece of shit";
		speech.text =" shut up!";
	  }
	  else if(text.includes("  can you love me")){
		  speech.text = " No!";
	  }
	  
	  
	  
	  
	  
	  
	  
	  window.speechSynthesis.speak(speech);
}

/*==============================================end===================================== */
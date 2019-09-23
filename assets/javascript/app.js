// golbal variables
var trivTime = 0;
var rightCount = 0;
var wrongCount = 0;
var questionsCount = 0;
var Timer = '';
var questions = {
    1:{
        question:'What was Metallicas first album?',
        answers:["Kill em' All", "Reload", "Master of Puppets", "Ride the Lightning"],
    },
    2:{
        question:'What band was in the movie "Ace Ventura Pet Detective"?',
        answers:["Skid Row", "Slayer", "Cannibal Corpse", "Morbid Angel"],
        correct:"Cannibal Corpse"
    },
    3:{
        question:'Who has been the "Prince of Darkness" since 1979?',
        answers:["Ronnie Dio", "Ozzy Osbourne", "David Lee Roth", "Donald Trump"],
        correct:"Ozzy Osbourne"
    }
};

function start(){
	//When buttons is clicked clear trivSection
	$('.startBtn').on('click',function(){
		//Emptys trivia section
		$('.trivSection').empty();
		createQuestions();
	});
}

var createQuestions = function(){
	timerStart();
	//Get question
	var question = questions[questionsCount]['question'];
	//assign div element to newDiv
	var newDiv = $('<div>');
	//Add a class to newDIv
	newDiv.addClass('question');
	//Add text to question
	newDiv.text(question);
	//Add question to DOM
	$('.trivSection').append(newDiv);
	createAnswers();
}
var createAnswers = function(){
	var answerLength = questions[questionsCount]['answers'].length;
	for(var i = 0; i < answerLength;i++){
		//get answers
		var answers = questions[questionsCount]['answers'][i];
		//Create new div to hold answers
		var newBtn = $('<button>');
		//Add class to new Div
		newBtn.addClass('answers redBtn');
		//Give buttons attribute
		newBtn.attr('data-type',answers);
		//add text to new Div
		newBtn.text(answers);
		//Add answers to DOM
		$('.trivSection').append(newBtn);
    }
    //Prevents click event from being saved
	$(document).off('click','.answers',checkAnswer);
	$(document).on('click','.answers',checkAnswer);
}


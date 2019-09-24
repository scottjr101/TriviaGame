// golbal variables
var trivTime = 0;
var rightCount = 0;
var wrongCount = 0;
var unansweredCount = 0;
var questionsCount = 1;
var Timer = '';
var questions = {
    1:{
        question:'What was Metallicas first album?',
        answers:["Kill 'em All", "Reload", "Master of Puppets", "Ride the Lightning"],
        correct:"Kill 'em All",
        right: 'Correct!',
		wrong: 'Nope!',
        imageUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Metallica_-_Kill_%27Em_All_cover.jpg/220px-Metallica_-_Kill_%27Em_All_cover.jpg"
    },
    2:{
        question:'What band was in the movie "Ace Ventura Pet Detective"?',
        answers:["Skid Row", "Slayer", "Cannibal Corpse", "Morbid Angel"],
        correct:"Cannibal Corpse",
        right: 'Correct!',
		wrong: 'Nope!',
        imageUrl:"https://thumbs.gfycat.com/BiodegradableUnrulyIberianchiffchaff-size_restricted.gif"
    },
    3:{
        question:'Who has been the "Prince of Darkness" since 1979?',
        answers:["Ronnie Dio", "Ozzy Osbourne", "David Lee Roth", "Donald Trump"],
        correct:"Ozzy Osbourne",
        right: 'Correct!',
		wrong: 'Nope!',
        imageUrl:"https://media2.giphy.com/media/6SqjWXXtiqeEE/giphy.gif"
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
		newBtn.addClass('answers btn btn-dark');
		//Give buttons attribute
		newBtn.attr('data-type',answers);
		//add text to new Div
		newBtn.text(answers);
		//Add answers to DOM
        $('.trivSection').append(newBtn);
        $('.trivSection').append('<br>');
    }
    //Prevents click event from being saved
	$(document).off('click','.answers',checkAnswer);
	$(document).on('click','.answers',checkAnswer);
}
var checkAnswer = function(){
    //Get users answer choice
   var userAnswer = $(this).data('type');
   var correctAnswer = questions[questionsCount]['correct'];
   var correctImg = questions[questionsCount]['imageUrl'];

   var right = questions[questionsCount]['right'];
   var wrong = questions[questionsCount]['wrong'];
   console.log(questionsCount);
   if(userAnswer === correctAnswer){
       //Update rightCount
       rightCount++;
       //Clears out triv Section
       $('.trivSection').empty();
       var newImg = $('<img>');
       newImg.attr('src',correctImg);
       $('.trivSection').append(newImg);
       //Create Div
       var newDiv = $('<div>');
       //Give div class
       newDiv.addClass('rightAnswer');
       //adds CORRECT! text to div
       newDiv.text(right);
       //Add answer to DOM
       $('.trivSection').append(newDiv);
       //Stops Time
       clearInterval(timer)
       //Add 1 to question count to move to the next question
       questionsCount++;
       if(questionsCount <= 3){
           //removes CORRECT! text and continues to create next question after 3 seconds
           setTimeout(
               function(){
                   $('.trivSection').empty();
                   createQuestions();
                   },4000);
       }
       else{
           $('.trivSection').empty();
           var newImg = $('<img>');
           newImg.attr('src',correctImg);
           $('.trivSection').append(newImg);
           //Create Div
           var newDiv = $('<div>');
           //Give div class
           newDiv.addClass('rightAnswer');
           //adds CORRECT! text to div
           newDiv.text(right);
           //Add answer to DOM
           $('.trivSection').append(newDiv);
           //Stops Time
           clearInterval(timer)
           //Reset
           setTimeout(gameOver, 4000);
       }
   }
   
   else{
    wrongCount++;
    //Clears out triv Section
    $('.trivSection').empty();
    var newImg = $('<img>');
    newImg.attr('src',correctImg);
    $('.trivSection').append(newImg);
    var newDiv = $('<div>');
    //Give div class
    newDiv.addClass('wrongAnswer');
    //adds Wrong! text to div
    newDiv.html(wrong + '<br>' + 'The Correct Answer was: ' + correctAnswer);
    //Add answer to DOM
    $('.trivSection').append(newDiv);
    //Stops Time
    clearInterval(timer)
    //Add 1 to question count to move to the next question
    questionsCount++;
    
    if(questionsCount <= 3){
        setTimeout(function(){
        $('.trivSection').empty();
        createQuestions();
        },4000);
    }
    else{
        //Clears out triv Section
        $('.trivSection').empty();
        var newImg = $('<img>');
        newImg.attr('src',correctImg);
        $('.trivSection').append(newImg);
        var newDiv = $('<div>');
        //Give div class
        newDiv.addClass('wrongAnswer');
        //adds Wrong! text to div
        newDiv.html(wrong + '<br>' + 'The Correct Answer was: ' + correctAnswer);
        //Add answer to DOM
        $('.trivSection').append(newDiv);
        //Stops Time
        clearInterval(timer);
        //Reset
        setTimeout(gameOver, 4000);
    }
 }
}
//Timer
//==========================================
var timerStart = function(){ 
   $('.timerSection').empty();
   //Sets time to 10
   trivTime = 100;
   //Progress Bar
   var timeTag = $('<div>');
   timeTag.addClass('time');
   timeTag.addClass('progress');
   var progressBar = $('<div>');
   progressBar.addClass('progress-bar');
   progressBar.width(trivTime + '%');

   $('.timerSection').append(timeTag);
   $('.time').append(progressBar);	
   //Decrements Time
   timer = setInterval(timeDecrement,100);
}
var timeDecrement = function(){ 

    var correctAnswer = questions[questionsCount]['correct'];
    var correctImg = questions[questionsCount]['imageUrl'];
   //Progress bar decrement
   $('.progress-bar').width(trivTime + '%');
   trivTime--;
   //if time gets to 0
   if(trivTime === -10){
       
       unansweredCount++;
       //Clears out triv Section
       $('.trivSection').empty();
       var newImg = $('<img>');
       newImg.attr('src',correctImg);
       $('.trivSection').append(newImg);
       var newDiv = $('<div>');
       //Give div class
       newDiv.addClass('unAnswered');
       //adds Wrong! text to div
       newDiv.html('Out of Time!!' + '<br>' + 'The Correct Answer was: ' + correctAnswer);
       //Add answer to DOM
       $('.trivSection').append(newDiv);
       //Stops Time
       clearInterval(timer)
       //Add 1 to question count to move to the next question
       questionsCount++;
       
       if(questionsCount <= 3){
           setTimeout(function(){
           $('.trivSection').empty();
           createQuestions();
           },4000);
       }
       else{
           //Clears out triv Section
           $('.trivSection').empty();
           var newImg = $('<img>');
           newImg.attr('src',correctImg);
           $('.trivSection').append(newImg);
           var newDiv = $('<div>');
           //Give div class
           newDiv.addClass('unAnswered');
           //adds Wrong! text to div
           newDiv.html('Out of Time!!' + '<br>' + 'The Correct Answer was: ' + correctAnswer);
           //Add answer to DOM
           $('.trivSection').append(newDiv);
           //Stops Time
           clearInterval(timer);
           //Reset
           setTimeout(gameOver, 4000);
       }


       //Clears Time
       clearInterval(timer);
       
   }
   
}
var gameOver = function(){
   //Remove everything in trivia section
   $('.trivSection').empty();
   //Remove everthing in timer section
   $('.timerSection').empty();
   var scoreDiv = $('<div>');
   scoreDiv.addClass('score');
   scoreDiv.html('Correct: ' + rightCount + '<br>' + 'Wrong: ' + wrongCount + '<br>' + 'Unanswered: ' + unansweredCount);
   $('.trivSection').append(scoreDiv);
   //Assign new div element to new Div
   var newDiv = $('<div>');
   //add class to new Div
   newDiv.addClass('gameOver');
   //add game over text
   newDiv.text('Game Over! Play Again ?');
   //Append game over text to DOM
   $('.trivSection').append(newDiv);
   //Create ResetButton
   var newBtn = $('<button>');
   //Give btn Class
   newBtn.addClass('btn btn-dark reset resetBtn');
   //Give btn reset Text
   newBtn.text('Reset');
   //Append
   $('.trivSection').append(newBtn);
   //Reset all value
   trivTime = 100;
   questionsCount = 1;
   rightCount = 0;
   wrongCount = 0;
   //When reset button is clicked.......
   $('.resetBtn').on('click',function(){
       $('.trivSection').empty()
       //Starts game over
       createQuestions();
   });
}

/*Main
==============================================================*/
start();

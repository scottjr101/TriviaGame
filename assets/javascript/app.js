const questions = {
    1:{
        question:'What was Metallicas first album?',
        answers:["Kill em' All", "Reload", "Master of Puppets", "Ride the Lightning"],
        correct:"Kill em' All"
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

$('#question1').text(questions[1]['question']);
$("#kem").text(questions[1]['answers'][0]);
$("#reload").text(questions[1]['answers'][1]);
$("#mop").text(questions[1]['answers'][2]);
$("#rtl").text(questions[1]['answers'][3]);

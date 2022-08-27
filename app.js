//Store questions in an array named questions
//Store user score for each question in an array named points

var points = 0;
var pointComments = [];
//Store user submitted questions in an item named Questions 
var defaultQuestions=[
    {
        question: "Where are the three smallest bones in the human body ?",
        choiceA: "nose",
        choiceB: "toes",
        choiceC: "eyes",
        choiceD: "middle ear",
        correct: "A"
    },
    {
        question: "What is the most abundant element in the Universe?",
        choiceA: "Hellium",
        choiceB: "Oxygen",
        choiceC: "Lithium",
        choiceD: "Hydrogen",
        correct: "D"
    },
    {
        question: "Approximately how long does it take for light to travel from the Sun's surface to the Earth ?",
        choiceA: "8 days",
        choiceB: "8 seconds",
        choiceC: "8 minutes",
        choiceD: "8 hours",
        correct: "C"
    },
    {
        question: "What is 10/2 ?",
        choiceA: "5",
        choiceB: "2",
        choiceC: "8",
        choiceD: "9",
        correct: "A"
    },
    {
        question: "Which planet has the most moons ?",
        choiceA: "Saturn",
        choiceB: "Mars",
        choiceC: "Jupiter",
        choiceD: "Uranus",
        correct: "C"
    }
];

var heading = document.getElementsByTagName("h1");
var question = document.getElementById("question");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var submitBtn = document.getElementById("submit");
var quiz = document.getElementById("quiz");
var quizStatus = document.getElementById("quizStatus");
var options = document.getElementById("options");

function populateQuestion(questions = defaultQuestions){
    var numQuestions = 0;
    var totalQuestions = questions.length;
    console.log(totalQuestions);
        // When Question no is 1 then only render the question
        if (numQuestions == 0){
            var quesNo = numQuestions + 1;
            quizStatus.innerHTML = "Question " + quesNo + " of " + totalQuestions ;
            renderQuestion(questions,numQuestions);
        }

        submitBtn.addEventListener("click",function(){
            if (numQuestions < totalQuestions - 1){
                console.log(numQuestions);
                var is_checked = document.querySelector('input[name="choices"]:checked');
                if( is_checked != null ){
                    if (checkAns(questions,numQuestions)){
                        points += 10;
                        pointComments.push(10);
                    }else{
                        points += 0;
                        pointComments.push(0);
                    }
                    numQuestions ++ ;
                }else{
                    window.alert("Please Select an answer!");
                }
        
                renderQuestion(questions,numQuestions);
                var quesNo = numQuestions + 1;
                quizStatus.innerHTML = "Question " + quesNo + " of " + totalQuestions ;
            }
            else if (numQuestions == totalQuestions-1) {
                var is_checked = document.querySelector('input[name="choices"]:checked');
                if( is_checked != null ){
                    if (checkAns(questions,numQuestions)){
                        points += 10;
                        pointComments.push(10);
                    }else{
                        points += 0;
                        pointComments.push(0);
                    }

                    quiz.innerHTML = "<br><h1>You have Scored: <br><br>" + points + " </h1><br>" ;
                    heading[0].innerHTML = "Quiz Ended!";
                    options.style.display = "block";
                    console.log(pointComments);
                    var list = document.createElement("ul"); 
                    for( var i in pointComments){
                        if (pointComments[i] == 10){
                            var listItem = document.createElement("li");
                            var x = parseInt(i)+1;
                            listItem.innerHTML = "Question No. " + x + " answered Correctly!";
                            listItem.style.color = "green";
                            list.appendChild(listItem);
                        }else{
                            var x = parseInt(i)+1;
                            var listItem = document.createElement("li");
                            listItem.style.color = "red";
                            listItem.innerHTML = "Question No. " + x + " answered Wrong!";
                            list.appendChild(listItem);
                        }
                    }
                    quiz.appendChild(list);

                }else{
                    window.alert("Please Select an answer!");
                }
            }
        });
}

// Function for Question Rendering 
function renderQuestion(questions,numQuestions){
    // clear the radio buttons
    const clist = document.getElementsByTagName("input");
    for (const el of clist) {
        el.checked = false;
    }
    // Add Question in to their respective Ids
    question.innerHTML = questions[numQuestions].question;
    choiceA.innerHTML = questions[numQuestions].choiceA;
    choiceB.innerHTML = questions[numQuestions].choiceB;
    choiceC.innerHTML = questions[numQuestions].choiceC;
    choiceD.innerHTML = questions[numQuestions].choiceD;
}

// Function for Checking Answer 
function checkAns(questions,numQuestions){
    // Which checkbox is checked
    var userChoice = document.querySelector('input[name="choices"]:checked').value;
    console.log(userChoice);
    if ( questions[numQuestions].correct == userChoice ){
        return true;
    }else{
        return false;
    }
}

populateQuestion();

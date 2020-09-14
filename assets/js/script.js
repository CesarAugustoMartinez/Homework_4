
// Creating variables to control DOM elements   
var mainElem = document.querySelector("#main");    
var card = document.createElement("div");
var cardHeader = document.createElement("div");
var cardBody = document.createElement("div");
var cardTitle = document.createElement("h5");
var cardText = document.createElement("p");
var startButton = document.createElement("button");
var timerElem = document.querySelector("#timer");

var questions = [
    {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"},
    {
    title: "What is the highest montain in the world",
    choices: ["Everest", "Cotopaxi", "Chimborazo", "Reventador"],
    answer: "Everest" 
    }]

var numQuestions = questions.length;
var totalSeconds = numQuestions * 20;
var interval;

function startQuiz(){ // To generate the first display for start the Quiz
 
// Setting attribute to the element 
card.setAttribute("class","card text-center");
cardHeader.setAttribute("class","card-header");
cardHeader.textContent = "CODE QUIZ";
cardBody.setAttribute("class","card-body");
cardTitle.setAttribute("class","card-title");
cardTitle.textContent = "Test Yourself";
cardText.setAttribute("class","card-text");
cardText.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, est. Consequatur, consectetur! Soluta neque aut laboriosam facere debitis! Sed exercitationem officiis sapiente fuga voluptates dolor fugiat, inventore eos repellendus voluptas!";
startButton.setAttribute("class","btn btn-primary");
startButton.textContent = "Start Quiz";

// To create new elements to the document.

cardBody.appendChild(cardTitle);
cardBody.appendChild(cardText);
cardBody.appendChild(startButton);
card.appendChild(cardHeader);
card.appendChild(cardBody);
mainElem.append(card);

startButton.addEventListener("click", generateQuestion);

}

startQuiz();

function generateQuestion(){
    card.style.display = "none";
    interval = setInterval(function(){
        timerElem.textContent = totalSeconds;
        totalSeconds--;

    }, 1000);

    // for (i in questions) {
    //     var titleQuestion = document.createElement("h2");
    //     var box = document.createElement("div");
    //     console.log(questions[i].title);
    //     titleQuestion.textContent = questions[i].title;
    //     boxContainerElem.appendChild(titleQuestion);
    //     boxContainerElem.appendChild(box);
    //     for (j in questions[i].choices) {
    //         var listOption = document.createElement("li");  
    //         listOption.textContent = questions[i].choices[j];
    //         listOption.setAttribute("data-index",j);
    //         optionsElem.appendChild(listOption);
    //         console.log(questions[i].choices[j]);  
    //     }
 
    //   }

} 





// Creating variables to control DOM elements   
var mainElem = document.querySelector("#main");    
var card = document.createElement("div");
var cardHeader = document.createElement("div");
var cardBody = document.createElement("div");
var cardTitle = document.createElement("h5");
var cardText = document.createElement("p");
var cardFooter = document.createElement("div");
var startButton = document.createElement("button");
var timerElem = document.querySelector("#timer");
var listButtons;
var index = 0;


var questions = [ // Creating an array with all the question and answers
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
// cardFooter.setAttribute("class","card-footer text-muted");

// To create new elements to the document.

cardBody.appendChild(cardTitle);
cardBody.appendChild(cardText);
cardBody.appendChild(startButton);
card.appendChild(cardHeader);
card.appendChild(cardBody);
card.appendChild(cardFooter);
mainElem.append(card);

startButton.addEventListener("click", generateQuestion);

}

function generateQuestion(){ // To generate elements during a specific time
    card.style.display = "none";
    interval = setInterval(function(){
        timerElem.textContent = totalSeconds;
        totalSeconds--;

        if (totalSeconds < 0){
            alert("Time out");
            userInfo();
            clearInterval(interval);
        }
    }, 1000);
    console.log(index);
    if (index === 0){
        questionPage(index); 
    }    

} 


function questionPage(index){ // Creating a form for each question.
     setTimeout(function(){
        cardFooter.textContent = "";
    },2000)

    if (index < questions.length){
        clearDisplay(); 
        card.setAttribute("class","card text-center");
        cardHeader.setAttribute("class","card-header mb-3");
        cardHeader.textContent= questions[index].title;
        cardBody.setAttribute("class","card-body");
        cardFooter.setAttribute("class","card-footer text-muted");

        mainElem.append(card);
        card.append(cardHeader);
        card.append(cardBody);
        card.append(cardFooter);
        card.style.display = "block";
        cardTitle.style.display = "none";
        cardText.style.display = "none";
        startButton.style.display = "none";
        

        for (j in questions[index].choices){
            
            var btnElem = document.createElement("button");
            console.log(questions[index].choices[j]);
            btnElem.setAttribute("class","list-group-item list-group-item-action btn-group-vertical mt-1 border");
            btnElem.setAttribute("id",j);
            btnElem.textContent = (parseInt(j) + 1) + ".- " + questions[index].choices[j];
            
            cardBody.append(btnElem);
        }
        listener_click(); // Calling a function to active the event click for each button created.
        

    } else {
        userInfo();

   }
}

function clearDisplay() {
    document.querySelectorAll('.list-group-item').forEach(item => {
        item.style.display = "none";
        });
}

// function wait(ms){
//     var start = new Date().getTime();
//     var end = start;
//     while(end < start + ms) {
//       end = new Date().getTime();
//    }
//   }
  
function listener_click(){ // To active the event click for each button created.
    document.querySelectorAll('.list-group-item').forEach(buttonAnswer => {
        buttonAnswer.addEventListener('click', event => {
        event.preventDefault();
        console.log(buttonAnswer.id);
        console.log(questions[index].answer);
        console.log(questions[index].choices[buttonAnswer.id]);

        if (questions[index].answer === questions[index].choices[buttonAnswer.id]){
            cardFooter.textContent = "Correct !"; 
            index ++;
            console.log(index);
            
        }
        else {
            index ++;
            console.log(index);
            cardFooter.textContent = "Wrong !";
    
        }
        questionPage(index);

      })
    })
}  

function userInfo(){
    setTimeout(function(){
        cardFooter.textContent = "";
    },2000)

        clearDisplay(); 
    // Setting attribute to the element 
    var divElem = document.createElement("div");
    var labelElem = document.createElement("label");
    var inputElem = document.createElement("input");
    var submitButton = document.createElement("button");
    card.setAttribute("class","card text-center");
    cardHeader.setAttribute("class","card-header");
    cardHeader.textContent = "ALL DONE";
    cardBody.setAttribute("class","card-body");
    cardTitle.setAttribute("class","card-title");
    cardTitle.textContent = "Your final score is: ";
    cardText.setAttribute("class","card-text btn btn-primary btn-lg fa fa-question");
    cardText.textContent = totalSeconds;
    cardFooter.setAttribute("class","card-footer text-muted");
    divElem.setAttribute("class","form-group mx-sm-3 mb-2");
    labelElem.setAttribute("class","mt-2 mb-2");
    inputElem.setAttribute("class","form-control");
    labelElem.textContent = "Enter your initials:";
    submitButton.setAttribute("class","btn btn-primary mb-2");
    submitButton.textContent = "Submit";
   
    mainElem.append(card);
    card.append(cardHeader);
    card.append(cardBody);
    card.append(cardFooter);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(divElem);
    cardBody.appendChild(submitButton);
    divElem.appendChild(labelElem);
    divElem.appendChild(inputElem);
  
    card.style.display = "block";
    cardTitle.style.display = "block";
    cardBody.style.display = "block";
    cardText.style.display = "block";
    startButton.style.display = "none";

    //submitButton.addEventListener("click", alert("new page"));

}

startQuiz();


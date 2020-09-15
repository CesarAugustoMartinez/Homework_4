
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
cardFooter.setAttribute("class","card-footer text-muted");

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

function generateQuestion(){
    card.style.display = "none";
    interval = setInterval(function(){
        timerElem.textContent = totalSeconds;
        totalSeconds--;

        if (totalSeconds < 0){
            alert("Time out");
            clearInterval(interval);
        }
   
    }, 1000);
    console.log(index);

    questionPage(index);  

    

} 


function questionPage(index){ // Creating a form for each question.
    clearDisplay(); 
    card.setAttribute("class","card text-center");
    cardHeader.setAttribute("class","card-header");
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
        console.log("genera button");
        var btnElem = document.createElement("button");
        console.log(questions[index].choices[j]);
        btnElem.setAttribute("class","list-group-item list-group-item-action btn-group-vertical");
        btnElem.setAttribute("id",j);
        btnElem.textContent = (parseInt(j) + 1) + ".- " + questions[index].choices[j];
        console.log("hola");
        cardBody.append(btnElem);
    }

    document.querySelectorAll('.list-group-item').forEach(buttonAnswer => {
        buttonAnswer.addEventListener('click', event => {
            event.preventDefault();
          console.log(buttonAnswer.id);
          console.log(questions[index].answer);
          console.log(questions[index].choices[buttonAnswer.id]);

          if (questions[index].answer === questions[index].choices[buttonAnswer.id]){
              cardFooter.textContent = "Correct !"; 
              index ++;

              questionPage(index); 
          }
          else {
              index ++;

              cardFooter.textContent = "Wrong !";
              questionPage(index); 
          }
        })
        
        
    })

}

function clearDisplay() {
    document.querySelectorAll('.list-group-item').forEach(item => {
        item.style.display = "none";
        });
}

startQuiz();
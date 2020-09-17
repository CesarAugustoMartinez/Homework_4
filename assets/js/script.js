
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
var finalScores;
var score;



var questions = [ // Creating an array with all the question and answers
    {
    title: "What is the HTML tag under which one can write the JavaScript code?",
    choices: ["<javascript>", "<scripted>", "<script>", "<js>"],
    answer: "<script>"},
    {
    title: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
    choices: ["alertbox(“GeeksforGeeks”);", "msg(“GeeksforGeeks”);", "msgbox(“GeeksforGeeks”);", "alert(“GeeksforGeeks”);"],
    answer: "alert(“GeeksforGeeks”);"}, 
    {
    title: "What is the correct syntax for referring to an external script called “geek.js”?",
    choices: ["<script src=”geek.js”>", "<script href=”geek.js”>", "<script ref=”geek.js”>", "<script name=”geek.js”>"],
    answer: "<script src=”geek.js”>"},
    {
    title: "Which of the following is not a reserved word in JavaScript?",
    choices: ["interface", "throws", "program", "short"],
    answer: "program"},
    {
    title: "How is the function called in JavaScript?",
    choices: ["call Geekfunc();", "call function GeekFunc();", "Geekfunc();", "function Geekfunc();"],
    answer: "Geekfunc();"}]

var numQuestions = questions.length;
var totalSeconds = numQuestions * 20;
var interval;

function startQuiz(){ // To generate the first display for start the Quiz
 
// Setting attribute to the element 
card.setAttribute("class","card text-center");
cardHeader.setAttribute("class","card-header");
cardHeader.textContent = "JavaScript Quiz";
cardBody.setAttribute("class","card-body");
cardTitle.setAttribute("class","card-title");
cardTitle.textContent = "Test Yourself";
cardText.setAttribute("class","card-text");
cardText.textContent = "Following quiz provides Multiple Choice Questions related to JavaScript. You will have to read all the given answers and click over the correct answer.!";
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
        timerElem.textContent = totalSeconds - 1;
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
            totalSeconds = totalSeconds - 10;
            console.log(index);
            cardFooter.textContent = "Wrong !";
    
        }
        questionPage(index);

      })
    })
}  

function userInfo(){

    clearDisplay(); 
    // Setting attribute to the element 
    clearInterval(interval);

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
    timerElem.textContent = totalSeconds;
    cardFooter.setAttribute("class","card-footer text-muted");
    divElem.setAttribute("class","form-group mx-sm-3 mb-2");
    labelElem.setAttribute("class","mt-2 mb-2");
    inputElem.setAttribute("type","text");
    inputElem.setAttribute("class","form-control");
    labelElem.textContent = "Enter your initials:";
    submitButton.setAttribute("class","btn btn-primary mb-2");
    submitButton.setAttribute("type","button");
    submitButton.setAttribute("id","btnSubmit");
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
    score = cardText.textContent;

   
    submitButton.addEventListener("click", function(){
        console.log(score + inputElem.value);
        finalScores.push({"Initials":inputElem.value,"Score":score});

        localStorage.setItem("FinalScores",JSON.stringify(finalScores));  
        window.location.href = "../Homework_4/highScores.html";
      });
}

function highScoreDisplay(){

    var backButton = document.createElement("button");
    var clearButton = document.createElement("button");
    var tableScores = document.createElement("table");
    var tableHead = document.createElement("thead");
    var tableTr = document.createElement("tr");
    var thNumber = document.createElement("th");
    var thInitials = document.createElement("th");
    var thScore = document.createElement("th");
    var tableBody = document.createElement("tbody");

    card.setAttribute("class","card text-center");
    cardHeader.setAttribute("class","card-header");
    cardHeader.textContent = "HIGH SCORES";
    cardBody.setAttribute("class","card-body");
    
    backButton.setAttribute("class","btn btn-primary mr-2");
    backButton.textContent = "Back";
    clearButton.setAttribute("class","btn btn-primary ml-2");
    clearButton.textContent = "Clear High Scores";
    tableScores.setAttribute("class","table table-hover");
    tableTr.setAttribute("class","text-center");
    thNumber.setAttribute("class","col col-md-auto");
    thNumber.textContent = "#";
    thInitials.setAttribute("class","col col-md-auto");
    thInitials.textContent = "Initial";
    thScore.setAttribute("class","col col-md-auto");
    thScore.textContent = "Score";

    tableTr.appendChild(thNumber);
    tableTr.appendChild(thInitials);
    tableTr.appendChild(thScore);
    tableHead.appendChild(tableTr);
    tableScores.appendChild(tableBody);
    tableScores.appendChild(tableHead);
    cardBody.appendChild(tableScores);
    cardBody.appendChild(backButton);
    cardBody.appendChild(clearButton);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    mainElem.append(card);

    console.log(finalScores);

    for (i=0; i < finalScores.length; i++){
        var subTr = document.createElement("tr");
        var subTh = document.createElement("th");
        var subTd1 = document.createElement("td");
        var subTd2 = document.createElement("td");
        subTh.textContent = i + 1;
        subTd2.textContent = finalScores[i].Initials;
        subTd1.textContent = finalScores[i].Score;
        subTr.appendChild(subTh);
        subTr.appendChild(subTd2);
        subTr.appendChild(subTd1);
        tableBody.appendChild(subTr);
       }
    backButton.addEventListener("click", function(){
        window.location.href = "./index.html";
    });
    clearButton.addEventListener("click", function(){
        localStorage.clear('FinalStores');
        window.location.reload();
    });
}

finalScores = [];
function initStore() {
   // Parsing the JSON string to an object
    if (localStorage.getItem("FinalScores") !== null){
       finalScores = JSON.parse(localStorage.getItem("FinalScores"));
    }    
}

initStore();
var currentPage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
if (currentPage === "index.html" || currentPage === ""){
    startQuiz();
}
else {
    highScoreDisplay();
}



var question;
var answers = ["Your future looks intersting", "You are in for some moneies", "Your future doesn't look so good", "You will find that pokemon"];
var input = document.getElementById("input");
var log;
var questionsAsked = [];

function roll(){
  var valid = validateInput();
  
  if (!valid) {
    return;
  }

  addToQuestionsAsked();
  saveQuestion();
  returnAnswer();
}

function saveQuestion() {
  question = input.value;
  input.value = "";
}
function validateInput() {
  var isValid = true;

  if (input.value.length <= 0) {
    document.getElementById("answer").innerHTML = "Please guess again";
    isValid = false;
  }

  return isValid;
}
function returnAnswer(){
  var rn = Math.floor(Math.random() * answers.length);
  document.getElementById("answer").innerHTML = answers[rn];
}
function addToQuestionsAsked (){
  questionsAsked.push(input.value);
  document.getElementById("questions_asked").innerHTML = questionsAsked;
}
function clearfields() {
  document.getElementById("answer").innerHTML = "";
  input.value = "";
}
//clear will reset input and returned answer

var question;
var answer = ["Your future looks intersting", "You are in for some moneies"];
var input = document.getElementById("input");
var log;

function roll(){
  saveQuestion();
  returnAnswer();
}

function saveQuestion() {
  question = input.value;
  if (input.value === ""){
    document.createElementByID("input").innerHTML = ("guess again")
  };
  input.value = "";
}

function returnAnswer(){
  var rn = Math.floor(Math.random() * answer.length);
  document.getElementById("answer").innerHTML = answer[rn];
}
function clearfields() {
  document.getElementById("answer").innerHTML = "";
  input.value = "";
}

function returnLog(){
  document.createElementByID("log")
}
//clear will reset input and returned answer

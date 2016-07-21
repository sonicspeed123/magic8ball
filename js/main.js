var question;
var answer = ["Your future looks intersting", "You are in for some moneies"];
var input = document.getElementById("input");

function roll(){
  saveQuestion();
  returnAnswer();
}

function saveQuestion() {
  question = input.value;
  input.value = "";
}

function returnAnswer(){
  var rn = Math.floor(Math.random() * answer.length);
  document.getElementById("answer").innerHTML = answer[rn];
}


//clear will reset input and returned answer

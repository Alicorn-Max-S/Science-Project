const answers = ["18", "8", "false", "true", "false", "false", "false", "true", ["full valence shell"], ['radon', 'xenon'], ["none"], "Radon can cause cancer, however symptoms from exposure may not be noticed for years. "];

let questionsAnswered = 0;

function checkAccuracy(id, contains = false) {
  var input = document.getElementById(`q${id}`).value;
  
  if (contains) {
    if (answers[id - 1].some(substring=>input.toLowerCase().includes(substring))) {
      document.getElementById(`q${id}Result`).innerHTML = "that is correct :)";
      questionsAnswered++;
    } 
    else {
      document.getElementById(`q${id}Result`).innerHTML =
        `that is incorrect :( the correct answer contains ${answers[id - 1].toString()}`;
    }
  } 
  else {
    if (input.toLowerCase() ==answers[id - 1].toLowerCase()) {
      document.getElementById(`q${id}Result`).innerHTML = "that is correct :)";
      questionsAnswered++;
    } 
    else {
      document.getElementById(`q${id}Result`).innerHTML =
        `that is incorrect :( the correct answer is ${answers[id - 1]}`;
    }
  }

  if (questionsAnswered == 2) {
    document.getElementById("teaching1").style.opacity = "1"
    document.getElementById("teaching2").style.opacity = "1"
    document.getElementById("group2").style.opacity = "1"
  }

  if (questionsAnswered == 8) {
    document.getElementById("group3").style.opacity = "1"
    document.getElementById("teaching3").style.opacity = "1"
  }
}

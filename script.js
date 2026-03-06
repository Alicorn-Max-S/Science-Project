const answers = ["18", "8"];

let questionsAnswered = 0;

function checkAccuracy(id) {
  var input = document.getElementById(`q${id}`).value;
  console.log(document.getElementById(`q${id}`).value);
  console.log(answers[id - 1]);
  if (input.toLowerCase() == answers[id - 1].toLowerCase()) {
    document.getElementById(`q${id}Result`).innerHTML = "that is correct :)";
  } else {
    document.getElementById(`q${id}Result`).innerHTML =
      `that is incorrect :( the correct answer is ${answers[id - 1]}`;
  }
  questionsAnswered++;

  if (questionsAnswered == 2) {
    document.getElementById("teaching1").innerHTML =
      "Because they have eight valence electrons, what is their common ion? Discuss.";
  }
}

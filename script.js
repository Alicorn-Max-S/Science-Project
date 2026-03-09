const answers = [
  "18",
  ["6", "7"],
  ["false", "f"],
  ["true", "t"],
  ["false", "f"],
  ["false", "f"],
  ["false", "f"],
  ["true", "t"],
  [
    "full valence shell",
    "eight valence electrons",
    "8 valence electrons",
    "full shell",
  ],
  ["radon", "xenon"],
  ["none", "no pattern"],
  "Radon can cause cancer, however symptoms from exposure may not be noticed for years.",
  ["balloons", "breathing", "voice squeaky", "squeaky voice"],
  ["signs", "lights"],
];

let questionsAnswered = 0;

function checkAccuracy(id, contains = false) {
  var input = document.getElementById(`q${id}`).value;

  if (contains) {
    if (
      answers[id - 1].some((substring) =>
        input.toLowerCase().includes(substring),
      )
    ) {
      document.getElementById(`q${id}Result`).innerHTML = "that is correct :)";
      questionsAnswered++;
    } else {
      let text = "";
      for (let i = 0; i < answers[id - 1].length; i++) {
        if (answers[id - 1].length - i > 2) {
          text += answers[id - 1][i] + ", ";
          console.log(text);
        } else if (answers[id - 1].length - i == 2) {
          text += answers[id - 1][i] + " or ";
          console.log(text);
        } else {
          text += answers[id - 1][i] + ".";
          console.log(text);
        }
      }
      console.log(text);
      document.getElementById(`q${id}Result`).innerHTML =
        `that is incorrect :( the correct answer contains ${text}`;
    }
  } else {
    if (input.toLowerCase() == answers[id - 1].toLowerCase()) {
      document.getElementById(`q${id}Result`).innerHTML = "that is correct :)";
      questionsAnswered++;
    } else {
      document.getElementById(`q${id}Result`).innerHTML =
        `that is incorrect :( the correct answer is ${answers[id - 1]}`;
    }
  }

  if (questionsAnswered == 2) {
    document.getElementById("teaching1").style.opacity = "1";
    document.getElementById("teaching2").style.opacity = "1";
    document.getElementById("group2").style.opacity = "1";
  }

  if (questionsAnswered == 8) {
    document.getElementById("group3").style.opacity = "1";
    
  }

  if (questionsAnswered == 10) {
    document.getElementById("pic1").style.opacity = "1";
    document.getElementById("teaching3").style.opacity = "1";
    document.getElementById("group4").style.opacity = "1";
  }

  if (questionsAnswered == 11) {
    document.getElementById("group5").style.opacity = "1";
  }

  if (questionsAnswered == 13) {
    document.getElementById("pic2").style.opacity = "1";
  }
}

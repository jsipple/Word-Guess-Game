document.addEventListener("keyup", checkKeyPress);

let word = ["Brandon Sanderson", "Dakota Krout", "Dennis Taylor", "Dean Kootz", "Stephen King", "Elizabeth Moon", "Mary Robinette Kowall"]
  
let lives = 10;
let displayWriter = [];
let randomNumber = Math.floor(Math.random() * word.length);
let writer = word[randomNumber];
let correct = writer.split("");
let guessed = [];
let incorrect = 0;
let wins = 0
// need to make this a function so that i can run again when person wins
function randomWord() {
    writer = word[randomNumber];
}
// change for loop into iterator by doing let = for ()
function underscore() {
    for (i = 0; i < writer.length; i++) {
    if (writer[i] === " ") {
        displayWriter[i] = "<br>";
        correct[i] ="<br>";
    } else {
        displayWriter[i] = "_ ";
    }
}
}
underscore();
document.getElementById("hangman").innerHTML = displayWriter.join("");

function checkKeyPress(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90); {
        guessed.push(event.key)
        document.getElementById("guessed").innerHTML = guessed;
    }
}

document.addEventListener("keydown", function checkCorrect() {
    for (i = 0; i < correct.length; i++) {
        if (event.key === correct[i].toLowerCase()) {
            displayWriter[i] = correct[i];
            document.getElementById("hangman").innerHTML = displayWriter.join("")
        
            if (displayWriter.join("") === correct.join("")) {
            alert("You Win");
            wins++
            document.getElementById("wins").textContent = "Wins: " + wins;
            randomWord();
            underscore();
        }
    } 
    }
})
correct.forEach(function(event, i) {
    if (guessed[i] !== event) {
        lives--;
        document.getElementById("lives").textContent = "Current lives: " + lives
    }
})
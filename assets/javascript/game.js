document.addEventListener("keyup", checkKeyPress);

let word = ["Brandon Sanderson", "Dakota Krout", "Dennis Taylor", "Dean Kootz", "Stephen King", "Elizabeth Moon", "Mary Robinette Kowall"]
  

let displayWriter = [];
let writer = ""
let correct = ""
let wins = 0
let guessed = [];
let lives = 10;
function newWord() {
    let randomNumber = Math.floor(Math.random() * word.length);
    writer = word[randomNumber];
    correct = writer.split("");
    console.log(writer);
}
newWord();
document.getElementById("lives").textContent = "Current lives: " + lives

// need to make this a function so that i can run again when person wins

// change for loop into iterator by doing let = for ()
function underscore() {
    for (i = 0; i < writer.length; i++) {
    if (writer[i] === " ") {
        displayWriter[i] = "<br>";
        correct[i] ="<br>";
    } else {
        displayWriter[i] = "_ ";
        document.getElementById("hangman").innerHTML = displayWriter.join("");
    }
}
}
underscore();

// add if lives = 0 you lose add lose alert
// need to get lives working


function checkKeyPress(event) {
    if (guessed.indexOf(event.key) === -1) {
    if (event.keyCode >= 65 && event.keyCode <= 90); {
        guessed.push(event.key)
        document.getElementById("guessed").innerHTML = guessed;
    }
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
            guessed = [];
            displayWriter = [];
            lives = 10;
            newWord();
            underscore();
        }
    } 
    }
})

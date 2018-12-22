document.addEventListener("keyup", checkKeyPress);

let word = ["Brandon Sanderson", "Dakota Krout", "Dennis E Taylor", "Dean Kootz", "Stephen King", "Elizabeth Moon", "Mary Robinette Kowall"]
  

let displayWriter = [];
let writer = "";
let correct = "";
let wins = 0;
let guessed = [];
let correctKey = [];
let lives = 10;
let losses = 0;
function newWord() {
    let randomNumber = Math.floor(Math.random() * word.length);
    writer = word[randomNumber];
    correct = writer.split("");
    console.log(writer);
}
newWord();
document.getElementById("lives").textContent = "Current Lives: " + lives

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

// need to make so that only alphabet registers


function checkKeyPress(event) {
    if (guessed.indexOf(event.key.toLowerCase()) === -1) {
    if (event.keyCode >= 65 && event.keyCode <= 122); {
        guessed.push(event.key.toLowerCase())
        document.getElementById("guessed").innerHTML = guessed;
        lives--;
        document.getElementById("lives").textContent = "Current Lives " + lives;
        if (lives == 0) {
            alert("You lose");
            losses++
            document.getElementById("losses").textContent = "losses: " + losses
            reset();
        }
    } 
    }
    }

document.addEventListener("keydown", function checkCorrect() {
    for (i = 0; i < correct.length; i++) {
        if (event.key.toLowerCase() === correct[i].toLowerCase()) {
            displayWriter[i] = correct[i];
            document.getElementById("hangman").innerHTML = displayWriter.join("")
            if (correctKey.indexOf(event.key) === -1) {
                correctKey.push(event.key);
                lives++;
            }
            // for (i = 0; i < writer.length; i++) {
            //     if (correct[i] === "<br>") {
            //         correct[i] =" ";
            // if (correct === word[0]) {
            //     document.getElementById("book").src='../images/wayofkings.jpg';
            // });
            if (displayWriter.join("") === correct.join("")) {
            if (correct.join("") === "Brandon<br>Sanderson") {
                document.getElementById("book").src="../Word-Guess-Game/assets/images/wayofkings.jpg";
            }
            if (correct.join("") === "Dean<br>Kootz") {
                document.getElementById("book").src="../Word-Guess-Game/assets/images/innocence.jpg";
            }
            if (correct.join("") === "Elizabeth<br>Moon") {
                document.getElementById("book").src="../Word-Guess-Game/assets/images/speed_of_dark.jpg";
            }
            if (correct.join("") === "Mary<br>Robinette<br>Kowall") {
                document.getElementById("book").src="../Word-Guess-Game/assets/images/shades_of_milk_and_honey.jpg";
            }
            if (correct.join("") === "Stephen<br>King") {
                document.getElementById("book").src="../Word-Guess-Game/assets/images/green_mile.jpg";
            }
            if (correct.join("") === "Dennis<br>E<br>Taylor") {
                document.getElementById("book").src="../Word-Guess-Game/assets/images/we_are_bob.jpg";
            }
            if (correct.join("") === "Dakota<br>Krout") {
                document.getElementById("book").src="../Word-Guess-Game/assets/images/divine_dungeon.jpg";
            }
            alert("You Win");
            wins++
            document.getElementById("wins").textContent = "Wins: " + wins;
            reset();
        }
    } 
    }
})
function reset() {
    guessed = [];
    displayWriter = [];
    correctKey = [];
    lives = 10;
    document.getElementById("lives").textContent = "Current Lives " + lives;
    newWord();
    underscore();
}

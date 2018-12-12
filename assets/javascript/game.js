window.addEventListener("keypress", checkKeyPress, false);

function checkKeyPress (key) {
    if (key.keyCode >= 97 && key.keyCode <= 122) {
        document.getElementById("guessed").innerHTML;
    }
}

document.getElementById("guessed").innerHTML

let word = ["Brandon Sanderson", "Dakota Krout", "Dennis Taylor", "Dean Kootz", "Stephen King", "Elizabeth Moon", "Mary Robinette Kowall"]

function randomword () {
    let randomNumber = Math.floor(Math.random() * word.length);
    document.getElementById('quote-display').innerHTML = word[randomNumber]
}
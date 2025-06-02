const paragraphs = [
    "The quick brown fox jumps over the lazy dog.",
    "Typing fast requires a lot of practice and patience.",
    "JavaScript is a versatile programming language.",
    "Practice makes perfect in the world of typing.",
    "Coding challenges are great for improving skills."
];

let selectedParagraph;

function startGame() {
    document.getElementById('paragraph').style.display = 'block';
    document.getElementById('inputText').style.display = 'block';
    document.getElementById('score').style.display = 'block';
    document.getElementById('rating').style.display = 'block';
    document.getElementById('restartBtn').style.display = 'block';

    selectedParagraph = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    document.getElementById('paragraph').innerText = selectedParagraph;
}

function checkTyping() {
    let enteredText = document.getElementById('inputText').value;
    let originalText = document.getElementById('paragraph').innerText;
    let errors = 0;

    for (let i = 0; i < enteredText.length; i++) {
        if (enteredText[i] !== originalText[i]) {
            errors++;
        }
    }

    let accuracy = ((originalText.length - errors) / originalText.length) * 100;
    let rating;

    if (accuracy === 100) {
        rating = "Excellent!";
    } else if (accuracy >= 90) {
        rating = "Good!";
    } else if (accuracy >= 70) {
        rating = "Better!";
    } else {
        rating = "Keep Practicing!";
    }

    document.getElementById('score').innerText = `Accuracy: ${accuracy.toFixed(2)}%`;
    document.getElementById('rating').innerText = `Rating: ${rating}`;
}

function restartTest() {
    window.location.reload();
}

// Email Popup Functions
window.onload = function() {
    document.getElementById("emailPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("emailPopup").style.display = "none";
}

function subscribe() {
    const email = document.getElementById("emailInput").value;
    if (email) {
        alert("Thank you for subscribing! Enjoy your free drink with your next meal.");
        closePopup();
    } else {
        alert("Please enter a valid email.");
    }
}

// Simple Queso Game
let gameStarted = false;
let score = 0;

function startGame() {
    gameStarted = true;
    score = 0;
    document.getElementById("gameMessage").innerText = "Collect all the chips!";
    // Start chip collection simulation
    setTimeout(collectChip, 1000);
}

function collectChip() {
    if (gameStarted) {
        score++;
        if (score >= 5) {
            document.getElementById("gameMessage").innerText = "Congratulations! You've won free queso!";
            gameStarted = false;
        } else {
            setTimeout(collectChip, 1000);
        }
    }
}

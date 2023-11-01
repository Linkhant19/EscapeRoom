function checkAnswer() {
    const firstDigit = document.getElementById('firstDigit').value;
    const secondDigit = document.getElementById('secondDigit').value;
    const thirdDigit = document.getElementById('thirdDigit').value;

    const enteredNumber = parseInt(firstDigit + secondDigit + thirdDigit);

    if (enteredNumber === 725) {
        document.getElementById('feedback').textContent = "Correct!";
        document.getElementById('feedback').style.color = "#0f0";
    } else if (enteredNumber > 725) {
        document.getElementById('feedback').textContent = "Lower!";
        document.getElementById('feedback').style.color = "#ff5555";
    } else {
        document.getElementById('feedback').textContent = "Higher!";
        document.getElementById('feedback').style.color = "#ff5555";
    }
}

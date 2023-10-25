function checkAnswer() {
    const firstDigit = document.getElementById('firstDigit').value;
    const secondDigit = document.getElementById('secondDigit').value;
    const thirdDigit = document.getElementById('thirdDigit').value;

    if (firstDigit + secondDigit + thirdDigit === '725') {
        document.getElementById('feedback').textContent = "Correct!";
        document.getElementById('feedback').style.color = "#0f0";
    } else {
        document.getElementById('feedback').textContent = "Try again!";
        document.getElementById('feedback').style.color = "#ff5555";
    }
}

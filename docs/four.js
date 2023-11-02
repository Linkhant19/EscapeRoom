// function checkAnswer() {
//     const firstDigit = document.getElementById('firstDigit').value;
//     const secondDigit = document.getElementById('secondDigit').value;
//     const thirdDigit = document.getElementById('thirdDigit').value;

//     const enteredNumber = parseInt(firstDigit + secondDigit + thirdDigit);

//     if (enteredNumber === 725) {
//         document.getElementById('feedback').textContent = "Correct!";
//         document.getElementById('feedback').style.color = "#0f0";
//     } else if (enteredNumber > 725) {
//         document.getElementById('feedback').textContent = "Lower!";
//         document.getElementById('feedback').style.color = "#ff5555";
//     } else {
//         document.getElementById('feedback').textContent = "Higher!";
//         document.getElementById('feedback').style.color = "#ff5555";
//     }
// }

let typingTimer;
let index = 0;
const text1 = "725 Commonwealth Avenue, Boston, MA";
const text2 = "That is where we will meet.";

function typeText(targetElementId, message, callback) {
    const targetElement = document.getElementById(targetElementId);

    if (index < message.length) {
        targetElement.textContent += message.charAt(index);
        index++;
        setTimeout(() => typeText(targetElementId, message, callback), 200);
    } else {
        index = 0;
        if (callback) callback();
    }
}

function checkAnswer() {
    const firstDigit = document.getElementById('firstDigit').value;
    const secondDigit = document.getElementById('secondDigit').value;
    const thirdDigit = document.getElementById('thirdDigit').value;

    const enteredNumber = parseInt(firstDigit + secondDigit + thirdDigit);
    const difference = Math.abs(enteredNumber - 725);

    let feedbackText = "";
    let feedbackColor = "";
    let feedbackFontSize = "";

    if (enteredNumber === 725) {
        document.getElementById('typedOutput').style.width = "500px"; 
        typeText('typedOutput', text1, function() {
            document.getElementById('meetOutput').style.width = "500px"; // adjust as needed
            typeText('meetOutput', text2);
        });
        // typeText();
        return;
    } else if (enteredNumber > 725) {
        feedbackText = "Lower!";
        feedbackColor = "#ff5555";
        
        if (difference <= 10) {
            feedbackFontSize = "1em";
        } else if (difference <= 50) {
            feedbackFontSize = "1.5em";
        } else if (difference <= 100) {
            feedbackFontSize = "1.7em";
        } else if (difference <= 200) {
            feedbackFontSize = "2em";
        } else {
            feedbackFontSize = "2.5em";
        }

    } else {
        feedbackText = "Higher!";
        feedbackColor = "#ff5555";

        if (difference <= 10) {
            feedbackFontSize = "1em";
        } else if (difference <= 50) {
            feedbackFontSize = "1.5em";
        } else if (difference <= 100) {
            feedbackFontSize = "1.7em";
        } else if (difference <= 200) {
            feedbackFontSize = "2em";
        } else if (difference <= 300) {
            feedbackFontSize = "2.5em";
        } else if (difference <= 400) {
            feedbackFontSize = "3em";
        } else if (difference <= 500) {
            feedbackFontSize = "3.5em";
        } else {
            feedbackFontSize = "4em";
        }

    }

    const feedbackElement = document.getElementById('feedback');
    feedbackElement.textContent = feedbackText;
    feedbackElement.style.color = feedbackColor;
    feedbackElement.style.fontSize = feedbackFontSize;
}

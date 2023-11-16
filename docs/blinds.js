document.querySelector('.btn').addEventListener('mouseover', function() {
    document.getElementById('riddle-container').style.display = 'block';
});

function checkAnswer() {
    const input = document.getElementById('answer-input');
    const feedback = document.getElementById('feedback');
    if (input.value.toLowerCase() === 'cloud') {
        goToNextPage();
    } else {
        feedback.textContent = "Try again.";
    }
}

function goToNextPage() {
    window.location.href = "loading1.html";  
}
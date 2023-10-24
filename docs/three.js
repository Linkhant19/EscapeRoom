function goToNextPage() {
    window.location.href = "index.html";  
}

const typewriterText = document.querySelector('.typewriter-text');
typewriterText.addEventListener('animationend', () => {
    const nextButton = document.querySelector('.next-button');
    nextButton.classList.add('active');
});

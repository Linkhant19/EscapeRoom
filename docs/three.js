function goToNextPage() {
    window.location.href = "blinds.html";  
}

const typewriterText = document.querySelector('.typewriter-text');
typewriterText.addEventListener('animationend', () => {
    const nextButton = document.querySelector('.next-button');
    nextButton.classList.add('active');
});

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        const audioElement = document.getElementById("typingSound");
        audioElement.play();
    }, 2000); 
});


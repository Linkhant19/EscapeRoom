function goToNextPage() {
    window.location.href = "https://escaperoombgc.eventbrite.com";  
}

function randomChar() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return characters.charAt(Math.floor(Math.random() * characters.length));
}

function glitch() {
    const glitchText = document.getElementById('glitchText');
    let displayText = 'We are not done ';
    for (let i = 0; i < 5; i++) {
        displayText += randomChar();
    }
    glitchText.textContent = displayText;
}

function showButton() {
    const nextButton = document.getElementById('nextButton');
    nextButton.classList.add('active');
}


setInterval(glitch, 50); 
setTimeout(showButton, 3000);
function randomChar() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return characters.charAt(Math.floor(Math.random() * characters.length));
}

function glitch() {
    const glitchText = document.getElementById('glitchText');
    let displayText = 'Welcome to ';
    for (let i = 0; i < 5; i++) {
        displayText += randomChar();
    }
    glitchText.textContent = displayText;
}

setInterval(glitch, 50); 

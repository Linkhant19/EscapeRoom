const numStars = 100;

        for (let i = 0; i < numStars; i++) {
            let star = document.createElement('div');
            star.className = 'star';

            star.style.left = Math.random() * 100 + 'vw';
            star.style.top = Math.random() * 100 + 'vh';

            star.style.width = Math.random() * 5 + 'px';
            star.style.height = star.style.width;

            star.style.animationDelay = Math.random() * 2 + 's';
            star.style.animationDuration = (Math.random() * 3 + 1) + 's';
            document.body.appendChild(star);
        }

        const texts = [
            "now we are here under the night sky.",
            "thanks for your interest in us.",
            "now we welcome you to...",
            "sgn inc.",

        ];

        let currentTextIndex = 0;  

        document.body.addEventListener('click', function() {
            const textDiv = document.querySelector('.displayed-text');

    
            textDiv.style.animation = "fadeOut 3s forwards";

            setTimeout(function() {
                currentTextIndex++;
        
    
                if (currentTextIndex >= texts.length) {
                    currentTextIndex = 0;  //This will change to link to another page later. 
                }

                textDiv.textContent = texts[currentTextIndex];
                textDiv.style.display = "block"; 
                textDiv.style.animation = "fadeIn 3s forwards";  
            }, 1000);
        });

function generateShootingStar() {
    let star = document.createElement('div');
    star.className = 'shooting-star';

    star.style.left = (Math.random() * 100 - 10) + 'vw';  
    star.style.top = (Math.random() * 100 - 10) + 'vh';

    let duration = (Math.random() * 2 + 2) + 's';
    star.style.animationDuration = duration;

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, parseFloat(duration) * 1000);
}

setInterval(generateShootingStar, 5000); 
setInterval(generateShootingStar, 2000); 

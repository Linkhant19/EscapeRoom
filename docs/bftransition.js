document.addEventListener('DOMContentLoaded', function() {
    var butterflies = document.querySelectorAll('.bf');
    var delayIncrement = 2000; 
    var redirectDelay = butterflies.length * delayIncrement + 2000; 

    butterflies.forEach(function(butterfly, index) {
        setTimeout(function() {
            butterfly.classList.add('bf-animate');
        }, index * delayIncrement);
    });

    setTimeout(function() {
        window.location.href = "beast.html"; 
    }, redirectDelay);
});

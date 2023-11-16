document.addEventListener('DOMContentLoaded', function() {
    var butterflies = document.querySelectorAll('.bf');
    var delayIncrement = 1000; 
    var redirectDelay = butterflies.length * delayIncrement; 

    butterflies.forEach(function(butterfly, index) {
        setTimeout(function() {
            butterfly.classList.add('bf-animate');
        }, index * delayIncrement);
    });

    setTimeout(function() {
        window.location.href = "butterflies.html"; 
    }, redirectDelay);
});

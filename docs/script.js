const circle = document.getElementById('draggableCircle');
let isDragging = false;

function startDrag() {
    isDragging = true;
    circle.style.transition = "none";  // I can add transition styles here if I want.
}

function drag(event) {
    if (!isDragging) return;

    const x = event.clientX || event.touches[0].clientX;
    const y = event.clientY || event.touches[0].clientY;
    
    const width = window.innerWidth;
    const height = window.innerHeight;

    // // I am trying to move the circle based with coordinates
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';

    //  // I am changing color based on quadrant
    if (x < width / 2 && y < height / 2) {
        circle.style.backgroundColor = 'red'; // top left
    } else if (x > width / 2 && y < height / 2) {
        circle.style.backgroundColor = 'green'; // top right
    } else if (x < width / 2 && y > height / 2) {
        circle.style.backgroundColor = 'blue'; // bottom left
    } else {
        circle.style.backgroundColor = 'yellow'; // bottom right
    }
}

function endDrag() {
    isDragging = false;
    circle.style.transition = "background-color 0.5s";  
}

// These are my mouse events
circle.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', endDrag);

// These are my touch events
circle.addEventListener('touchstart', startDrag);
document.addEventListener('touchmove', drag);
document.addEventListener('touchend', endDrag);

    


   



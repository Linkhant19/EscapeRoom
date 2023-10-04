const circle = document.getElementById('draggableCircle');
let isDragging = false;

circle.addEventListener('mousedown', (event) => {
    isDragging = true;
    circle.style.transition = "none";  // I can add transition styles here if I want.
});

document.addEventListener('mousemove', (event) => {
    if (!isDragging) return;

    const x = event.clientX;
    const y = event.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // I am trying to move the circle based on mouse coordinates
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';

    // I am changing color based on quadrant
    if (x < width / 2 && y < height / 2) {
        circle.style.backgroundColor = 'red'; // top left
    } else if (x > width / 2 && y < height / 2) {
        circle.style.backgroundColor = 'green'; // top right
    } else if (x < width / 2 && y > height / 2) {
        circle.style.backgroundColor = 'blue'; // bottom left
    } else {
        circle.style.backgroundColor = 'yellow'; // bottom right
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    circle.style.transition = "background-color 0.5s";  // This is for restoring color transition
});


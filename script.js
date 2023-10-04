const circle = document.getElementById('draggableCircle');

circle.addEventListener('dragend', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;

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

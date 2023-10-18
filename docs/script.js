const circle = document.getElementById('draggableCircle');
let isDragging = false;

function startDrag() {
    isDragging = true;
    circle.style.transition = "none";  // I can add transition styles here if I want.
}

function getColorFromPosition(x, y) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (x < width / 2 && y < height / 2) {
        return 'red';
    } else if (x > width / 2 && y < height / 2) {
        return 'green';
    } else if (x < width / 2 && y > height / 2) {
        return 'blue';
    } else {
        return 'yellow';
    }
}

function drag(event) {
    if (!isDragging) return;

    const x = event.clientX || event.touches[0].clientX;
    const y = event.clientY || event.touches[0].clientY;

    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
    circle.style.backgroundColor = getColorFromPosition(x, y);
}

// function endDrag(event) {
//     isDragging = false;
//     circle.style.transition = "background-color 0.5s";  

//     const x = event.clientX || event.changedTouches[0].clientX;
//     const y = event.clientY || event.changedTouches[0].clientY;
//     const currentColor = getColorFromPosition(x, y);

//     if (currentColor === colorOrder[currentIndex]) {
//         currentIndex++;
//         if (currentIndex === colorOrder.length) {
//             window.location.href = "next.html";
//         }
//     } else {
//         flashRed();
//         currentIndex = 0; 
//     }
// }


// function endDrag(event) {
//     isDragging = false;
//     circle.style.transition = "background-color 0.5s";  

//     const x = event.clientX || event.changedTouches[0].clientX;
//     const y = event.clientY || event.changedTouches[0].clientY;
//     const currentColor = getColorFromPosition(x, y);

//     if (currentColor === colorOrder[currentIndex]) {
//         currentIndex++;
//         if (currentIndex === colorOrder.length) {
//             window.location.href = "next.html";
//         }
//     } else {
//         flashRed();
//         currentIndex = 0; 
//     }
// }


let countdown = 30 * 1000; 
const timerElement = document.getElementById('timer');
const updateInterval = 10;  

function updateDisplay() {
    const seconds = Math.floor(countdown / 1000);
    const milliseconds = countdown % 1000;
    timerElement.textContent = seconds + '.' + String(milliseconds).padStart(3, '0');
}

const countdownInterval = setInterval(() => {
    countdown -= updateInterval;
    
    updateDisplay();
    updateBackgroundColor(); //I am trying to gradually change background color here.
    if (countdown <= 0) {
        clearInterval(countdownInterval);
        window.location.href = "next.html";
    }
}, updateInterval);


updateDisplay();

let colorOrder = ['red', 'green', 'red', 'blue', 'yellow', 'green'];
let currentIndex = 0;

// function flashRed() {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = '';
//     }, 500);
// }

function updateBackgroundColor() {
    const percentageLeft = countdown / (30 * 1000);
    
    const colorValue = Math.floor(percentageLeft * 255);

    document.body.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
}


document.body.style.backgroundColor = "rgb(255, 255, 255)";


// These are my mouse events
circle.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', endDrag);

// These are my touch events
circle.addEventListener('touchstart', startDrag);
document.addEventListener('touchmove', drag);
document.addEventListener('touchend', endDrag);

    


   



//ДЗ 1
document.getElementById('gmail_button').addEventListener('click', function() {
    const inputGmail = document.getElementById('gmail_input').value;
    const resultGmail = document.getElementById('gmail_result');


    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (regex.test(inputGmail)) {
        resultGmail.textContent = "WELCOME!";
        resultGmail.style.color = "green";
    } else {
        resultGmail.textContent = "INCORRECT EMAIL";
        resultGmail.style.color = "red";
    }
});


//ДЗ 2
const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

let X = 0;
let Y = 0;
let direction = 'right';

const movingChild = () => {
    if (direction === 'right' && X < offsetWidth) {
        X += 2;
        if (X >= offsetWidth) {
            direction = 'down';
        }
    } else if (direction === 'down' && Y < offsetHeight) {
        Y += 2;
        if (Y >= offsetHeight) {
            direction = 'left';
        }
    } else if (direction === 'left' && X > 0) {
        X -= 2;
        if (X <= 0) {
            direction = 'up';
        }
    } else if (direction === 'up' && Y > 0) {
        Y -= 2;
        if (Y <= 0) {
            direction = 'right';
        }
    }

    childBlock.style.left = `${X}px`;
    childBlock.style.top = `${Y}px`;

    requestAnimationFrame(movingChild);
};
movingChild();


//ДЗ №3

const secondBlock = document.querySelector('#seconds');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');
let interval , seconds  = 0

startButton.onclick = () => {
    interval = setInterval( () => {
    seconds++
    secondBlock.innerHTML = seconds
    }, 1000)
    startButton.disabled = true;
}

stopButton.onclick = () => {
    clearInterval(interval)
    startButton.disabled = false;
}

resetButton.onclick = () => {
    seconds = 0
    secondBlock.innerHTML = seconds
    startButton.disabled = false;
}

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

let X = 0;
let Y = 0;

const movingChild = () => {
if (X < 450) {
    X += 2
    childBlock.style.left = `${X}px`
    requestAnimationFrame(movingChild)
    }
}

movingChild()
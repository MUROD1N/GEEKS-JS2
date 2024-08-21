// // PHONE BLOCK
document.getElementById('phone_button').addEventListener('click', function() {
    const phoneInput = document.getElementById('phone_input').value;
    const phoneResult = document.getElementById('phone_result');
    const validPrefixes = ['220', '700', '707', '703', '500', '505', '555'];
    const phonePattern = /^\+996\s(220|700|707|703|500|505|555)\s\d{2}-\d{2}-\d{2}$/;

    if (phonePattern.test(phoneInput)) {
        phoneResult.textContent = 'ok';
    } else {
        phoneResult.textContent = 'Incorrect';
    }
});


// //TAB SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');

let currentTabIndex = 0;

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none';
    });
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (index) => {
    tabContentBlocks[index].style.display = 'block';
    tabs[index].classList.add('tab_content_item_active');
};

const switchToNextTab = () => {
    hideTabContent();
    currentTabIndex = (currentTabIndex + 1) % tabs.length;
    showTabContent(currentTabIndex);
};

const intervalDuration = 2000;

const tabSwitchTimer = setInterval(switchToNextTab, intervalDuration);

tabsParent.addEventListener('click', () => {
    clearInterval(tabSwitchTimer);
});

// CONVERTER

const somInput = document.getElementById('som');
const usdInput = document.getElementById('usd');
const euroInput = document.getElementById('euro');

somInput.oninput = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '../data/converter.json', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send();

    request.onload = () => {
        const data = JSON.parse(request.response);
        usdInput.value = (somInput.value / data.usd).toFixed(2);
    }
    request.onload = () => {
        const data = JSON.parse(request.response);
        euroInput.value = (somInput.value / data.euro).toFixed(2);
    }
}

const converter = (element , targetElement) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send();

        request.onload = () => {
            const data = JSON.parse(request.response);
            if  (element.id === 'som') {
                targetElement.value = (element.value / data.usd).toFixed(2);
            }
            if (element.id === 'usd') {
                targetElement.value = (element.value * data.usd).toFixed(2);
            }
            if (element.id === 'som') {
                targetElement.value = (element.value / data.euro).toFixed(2);
            }
            if (element.id === 'euro') {
                targetElement.value = (element.value * data.euro).toFixed(2);
            }
            if (element.value === '') {
                targetElement.value = '';
            }
        }
    }
}

converter(somInput, usdInput,euroInput)
converter(euroInput , usdInput, somInput)
converter(euroInput, somInput ,usdInput)

// DRY - don't repeat yourself



// Задание сделать так чтоб при нажатии prev в 1 окошке сразу переходила на 200 и наоборот


const cardBlock = document.querySelector('.card');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
let cardId = 1;

const fetchData = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(data => {
            cardBlock.innerHTML = `
            <p>${data.title}</p>
            <p>${data.id}</p>
            `;
        })
        .catch(error => console.error('Error:', error));
};

fetchData(cardId);

btnNext.onclick = () => {
    cardId = (cardId === 200) ? 1 : cardId + 1;
    fetchData(cardId);
}

btnPrev.onclick = () => {
    cardId = (cardId === 1) ? 200 : cardId - 1;
    fetchData(cardId);
}



// FETCH запрос 

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

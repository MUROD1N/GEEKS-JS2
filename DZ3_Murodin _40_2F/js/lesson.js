// // PHONE BLOCK

// const phoneInput = document.querySelector('#phone_input');
// const phoneButton = document.querySelector('#phone_button');
// const phoneSpan = document.querySelector('#phone_result');

// const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;
// phoneButton.onclick = () => {
//     if (regExp.test(phoneInput.value)) {
//         phoneSpan.innerHTML = 'OK '
//         phoneInput.style.color = 'green';
//     } else {
//         phoneSpan.innerHTML = 'NO '
//         phoneInput.style.color = 'red';
//     }
// }


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

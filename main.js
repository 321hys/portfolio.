document.getElementById('dayButton').addEventListener('click', function() {
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
});
 
document.getElementById('nightButton').addEventListener('click', function() {
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
});

document.addEventListener('DOMContentLoaded', function () {
    // Alert Button
    var alertButton = document.getElementById('btn-alert');
    if (alertButton) {
        alertButton.addEventListener('click', function () {
            alert('Hello, welcome to my website');
        });
    }
 
    // Hover Button
    var hoverBtn = document.getElementById('hoverBtn');
    if (hoverBtn) {
        hoverBtn.addEventListener('mouseover', function () {
            hoverBtn.innerText = 'You can do everything';
        });
 
        hoverBtn.addEventListener('mouseleave', function () {
            hoverBtn.innerText = 'You know what?';
        });
    }
 
    // Incrementing Button
    var incrementButton = document.getElementById('btn-increment');
    var counterText = document.getElementById('txt-counter');
    var count = 1;
 
    if (incrementButton && counterText) {
        incrementButton.addEventListener('click', function () {
            count++;
            updateCounterText();
        });
 
        updateCounterText();
    }
 
    function updateCounterText() {
        counterText.textContent = 'Give Love: ' + count;
 
        if (count % 2 === 0) {
            counterText.classList.remove('odd');
            counterText.classList.add('even');
        } else {
            counterText.classList.remove('even');
            counterText.classList.add('odd');
        }
    }
 
    var currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});
 
document.addEventListener('DOMContentLoaded', function () {
    var numbersList = document.getElementById('numbers');
 
    if (numbersList) {
        for (let i = 1; i <= 10; i++) {
            var listItem = document.createElement('li');
            for (let j = 1; j <= 10; j++) {
                var spanItem = document.createElement('span');
                var number = (i - 1) * 10 + j;
                spanItem.textContent = number + ' ' + (number % 2 === 0 ? 'even' : 'odd');
                spanItem.style.color = number % 2 === 0 ? 'yellow' : 'red';
                listItem.appendChild(spanItem);
            }
            numbersList.appendChild(listItem);
        }
    } else {
        console.error('Ordered list element not found.');
    }
});
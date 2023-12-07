document.getElementById('dayButton').addEventListener('click', function() {
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
});
 
document.getElementById('nightButton').addEventListener('click', function() {
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
});

// Allert button
document. getElementById("btn-alert").addEventListener("click", function() {
    alert ("Welcome!!");
    });
//Hover button
document.getElementsById('hoverBtn').onmouseover = () => {
    document.getElementsById('hoverBtn').innerText = 'Click this Button';
};
document. getElementById('hoverBtn').onmouseleave = () => {
    document.getElementsById('hoverBtn').innerText = 'default button label';
};
// incrementing button
let count = 1;

document.getElementById('btn-counter').onclick = () => {
    count += 1; // Increment the count
    document.getElementById('txt-counter').innerHTML = `Number: ${count}`; // Update the display
    
    // Check if the count is even or odd and update the class accordingly
    if (count % 2 === 0) {
        document.getElementById('txt-counter').classList.add('even');
        document.getElementById('txt-counter').classList.remove('odd');
    } else {
        document.getElementById('txt-counter').classList.add('odd');
        document.getElementById('txt-counter').classList.remove('even');
    }
};

// list element
var numbersList = document.getElementById('numbers');

// for loop to populate the list with 'even' or 'odd'
for (let i = 1; i <= 100; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
    numbersList.appendChild(listItem);
}

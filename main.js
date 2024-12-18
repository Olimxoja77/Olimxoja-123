let isColorChanged = false;  

function toggleColor() {
    var div = document.getElementById('colorDiv');

    if (isColorChanged) {
        div.style.backgroundColor = 'red'; 
    } else {
        div.style.backgroundColor = 'blue';  
    }

    isColorChanged = !isColorChanged; 
}

function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;  
    document.getElementById('randomNumber').innerText = randomNumber;
}
function checkNumber() {
   
    var userInput = prompt("Iltimos, son kiriting:");

    if (userInput !== null && !isNaN(userInput) && userInput.trim() !== "") {
        var number = parseInt(userInput);

 
        if (number % 2 === 0) {
            alert(number + " juft son.");
        } else {
            alert(number + " toq son.");
        }
    } else {
        alert("Iltimos, haqiqiy son kiriting!");
    }
}


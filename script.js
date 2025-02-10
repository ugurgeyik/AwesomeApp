let valueElement = document.getElementById("value");
let circle = document.querySelector(".circle");
let totalTime = 60;
let interval = 1000;
let dashArray = 283;
let counter = 0;

function updateProgress() {
        counter = (counter + 1) % (totalTime + 1);
        let progress = (counter / totalTime) * dashArray;
        circle.style.strokeDashoffset = dashArray - progress;
        valueElement.textContent = counter;
        }
        
setInterval(updateProgress, interval);
        
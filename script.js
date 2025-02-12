//PROGRESS CIRCLE

// Get the element with the id "value" to display the counter value
let valueElement = document.getElementById("value");
// Select the circle element to update the stroke dash offset for the progress effect
let circle = document.querySelector(".circle");
// Set the total time for the progress (in seconds)
let totalTime = 60;
// Set the interval for updating the progress (in milliseconds)
let interval = 1000;
// Define the total length of the stroke dash array for the circle
let dashArray = 283;
// Initialize the counter to track the elapsed time
let counter = 0;

// Function to update the progress on the circle and display the counter value
function updateProgress() {
    // Increment the counter and reset it to 0 if it exceeds totalTime
    counter = (counter + 1) % (totalTime + 1);
    // Calculate the progress as a proportion of the total dash array
    let progress = (counter / totalTime) * dashArray;
    // Update the stroke dash offset to create the circular progress effect
    circle.style.strokeDashoffset = dashArray - progress;
    // Display the current counter value in the valueElement
    valueElement.textContent = counter;
}

// Call updateProgress function every second (1000 ms)
setInterval(updateProgress, interval);



//CLOCK

let hours = document.getElementById('hours');     
let minutes = document.getElementById('minutes');   
let seconds = document.getElementById('seconds');
let meridiem = document.querySelector('.meridiem'); 


function updateTime() {
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    
    // Determine AM or PM
    let ampm = hour >= 12 ? 'PM' : 'AM';
    
    // Convert 24-hour format to 12-hour format
    hour = hour % 12 || 12;  // Converts '0' hour to '12'

    // Update HTML content
    hours.innerHTML = (hour < 10 ? '0' : '') + hour;
    minutes.innerHTML = (minute < 10 ? '0' : '') + minute;
        seconds.innerHTML = (second < 10 ? '0' : '') + second;
    meridiem.innerHTML = ampm;
}

// Initial call
updateTime();

// Update time every second
setInterval(updateTime, 1000);




//GREETING

document.addEventListener("DOMContentLoaded", function () {
    function updateTimeBasedMessage() {
        const hours = new Date().getHours();
        let timeOfDay = "Evening";

        if (hours >= 5 && hours < 12) {
            timeOfDay = "Morning";
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "Afternoon";
        } else if (hours >= 17 && hours < 20) {
            timeOfDay = "Evening";
        } else {
            timeOfDay = "Night";
        }

        // Update the lights-card section
        const lightsHeading = document.querySelector(".lights-card h4");
        if (lightsHeading) {
            lightsHeading.textContent = `${timeOfDay} mode ON`;
        }

        // Update the top-card-name section
        const topCardHeading = document.querySelector(".top-card-name h3");
        if (topCardHeading) {
            topCardHeading.textContent = `Good ${timeOfDay}!`;
        }
    }

    updateTimeBasedMessage();
});




//TOGGLE BUTTONS

const toggleOptions = document.querySelectorAll('.toggle-option');

toggleOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Remove 'active' class from all options
        toggleOptions.forEach(item => item.classList.remove('active'));

        // Add 'active' class to the clicked option
        option.classList.add('active');
    });
});
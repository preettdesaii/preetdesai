// Text to be typed
const textToType = "Data Analyst | Business Analyst | Product Manager";

// Typing speed in milliseconds (adjust as needed)
const typingSpeed = 100;

// Function to type text
function typeText() {
    let index = 0;
    let text = '';

    function type() {
        if (index < textToType.length) {
            text += textToType[index];
            document.getElementById("typing-text").innerHTML = text;
            index++;
            setTimeout(type, typingSpeed);
        } else {
            // Reset index and text
            index = 0;
            text = '';
            setTimeout(type, typingSpeed * 5); // Wait for 5 times typing speed before starting again
        }
    }

    type();
}

// Start typing when the page loads
window.onload = function() {
    typeText();
};

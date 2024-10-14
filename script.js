// Remove the playSound() function definitions from inside the event listener
document.getElementById("giftButton").addEventListener("click", function() {
    // Show the image container with greeting text
    document.getElementById("imageContainer").classList.add("show");

    // Show the greeting with animation
    document.getElementById("greeting").classList.add("show");

    // Play the sound
    document.getElementById('bijayaSound').volume = 1;
    document.getElementById('bijayaSound').play();

    // Disable the button to prevent multiple clicks
    this.disabled = true;

    // Stop the button's bounce animation after it's clicked
    this.style.animation = "none";
});
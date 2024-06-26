// Select the element that will trigger the sound (in this case, the paragraph with id="playSound")
const playSoundText = document.getElementById('playSound');
let audio = new Audio('soundtrack.mp3'); // Create the Audio object
audio.volume = 0.5; // Set the desired volume (0.5 is half volume)

// Function to play or pause the audio
function toggleSound() {
    if (audio.paused) {
        audio.play();
        playSoundText.textContent = 'Click here to pause soundtrack'; // Change text to pause
    } else {
        audio.pause();
        playSoundText.textContent = 'Click here to play soundtrack'; // Change text back to play
    }
}

// Initially set the volume to the desired level and ensure it stays constant
audio.volume = 0.5; // Example: setting volume to 0.5 (half volume)

// Add a click event listener to trigger the toggleSound function
playSoundText.addEventListener('click', toggleSound);
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("animated-text");
    const text = textElement.textContent.trim(); // Get the text
    textElement.textContent = ""; // Clear it for animation
    let index = 0;
    
    let direction = 1; 

    function typeEffect() {
        if (index >= 0 && index < text.length) {
            textElement.textContent = text.substring(0, index + 1); // Display partial text
            index += direction;
            setTimeout(typeEffect, 100); // Adjust speed (lower = faster)
        } else {
            direction *= -1; // Reverse direction
            index += direction;
            setTimeout(typeEffect, 500); // Pause before switching direction
        }
    }

    typeEffect(); // Start animation
});



// Select the toggle button
const toggleButton = document.getElementById("dark-mode-toggle");

// Function to toggle dark mode
function toggleMode() {
    document.body.classList.toggle("dark-mode");

    // Swap Icon: Moon 🌙 ↔ Sun ☀️
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️"; // Change to Sun
    } else {
        toggleButton.textContent = "🌙"; // Change to Moon
    }
}

// Event listener for button click
toggleButton.addEventListener("click", toggleMode);


// Event listener for button click
toggleButton.addEventListener("click", toggleMode);

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const progressBar = entry.target.querySelector('.progress');

            if (entry.isIntersecting) {
                const progress = progressBar.dataset.progress;
                progressBar.style.width = progress + "%"; // Animate width
            } else {
                progressBar.style.width = "0%"; // Reset when out of view
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of element is visible

    // Select all skill progress bars and observe them
    const programmingSkills = document.querySelectorAll("#programming-languages .skill");
    programmingSkills.forEach(skill => {
        observer.observe(skill);
    });
});



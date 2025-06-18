// scripts.js

// Function to fade out and redirect to a new page
function fadeOutAndRedirect(url) {
    document.body.style.opacity = 0; // Reduce body opacity to 0 (fade out)
    setTimeout(function() {
        window.location.href = url; // Redirect when fade out is complete
    }, 500); // Wait 500 milliseconds (half a second) for fade out to complete
}

// Get references to the menu toggle button and the dropdown menu
const menuToggle = document.getElementById('menu-toggle');
const navDropdown = document.getElementById('nav-dropdown');

// Add event listener to toggle the dropdown menu visibility
if (menuToggle && navDropdown) {
    menuToggle.addEventListener('click', function() {
        navDropdown.classList.toggle('is-open'); // Toggle the 'is-open' class
    });

    // Close dropdown if clicked outside (optional, but good UX)
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !navDropdown.contains(event.target)) {
            if (navDropdown.classList.contains('is-open')) {
                navDropdown.classList.remove('is-open');
            }
        }
    });
}

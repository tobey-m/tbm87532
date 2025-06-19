// js/scripts.js

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

if (menuToggle && navDropdown) {
    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        // Check if on mobile before toggling dropdown
        if (window.innerWidth <= 768) {
            navDropdown.classList.toggle('is-open');
        }
    });

    document.addEventListener('click', function(event) {
        // Only close dropdown on mobile (or smaller screens) if it's open
        if (window.innerWidth <= 768) {
            if (!menuToggle.contains(event.target) && !navDropdown.contains(event.target)) {
                if (navDropdown.classList.contains('is-open')) {
                    navDropdown.classList.remove('is-open');
                }
            }
        }
    });

    navDropdown.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            // Only close dropdown on mobile after clicking a link
            if (window.innerWidth <= 768) {
                if (navDropdown.classList.contains('is-open')) {
                    navDropdown.classList.remove('is-open');
                }
            }
        });
    });
}

// Ensures the body opacity is reset when navigating back (from browser cache)
window.addEventListener('pageshow', function(event) {
    // Check if the page is loaded from the browser's back/forward cache
    if (event.persisted) {
        document.body.style.opacity = 1; // Reset opacity to 1
        document.body.style.transition = 'opacity 0.5s ease-in-out'; // Add a fade-in effect if desired
    }
});

// Optionally, ensure initial opacity is 1 when loaded normally
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = 1;
    document.body.style.transition = 'opacity 0.5s ease-in-out'; // Optional: smooth fade-in on initial load
});
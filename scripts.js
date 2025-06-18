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
// This logic will now only apply when menuToggle is actually visible (on mobile)
if (menuToggle && navDropdown) {
    // Check if the menuToggle is actually visible (i.e., not display: none)
    // This is a common way to check if an element is rendered and interactive
    const isMobileView = window.getComputedStyle(menuToggle).display !== 'none';

    if (isMobileView) {
        menuToggle.addEventListener('click', function(event) {
            // Stop event propagation to prevent immediate closing from document click
            event.stopPropagation();
            navDropdown.classList.toggle('is-open'); // Toggle the 'is-open' class
        });

        // Close dropdown if clicked outside
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !navDropdown.contains(event.target)) {
                if (navDropdown.classList.contains('is-open')) {
                    navDropdown.classList.remove('is-open');
                }
            }
        });

        // Close dropdown if a link inside it is clicked
        navDropdown.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (navDropdown.classList.contains('is-open')) {
                    navDropdown.classList.remove('is-open');
                }
            });
        });
    }
}

// Optional: Add a resize event listener to re-evaluate isMobileView
// This ensures the JS behavior adapts if the user resizes the browser window
window.addEventListener('resize', () => {
    // Re-run the dropdown logic setup on resize
    // This is a simple approach; for more complex applications,
    // consider debouncing this or using matchMedia API
    const currentIsMobileView = window.getComputedStyle(menuToggle).display !== 'none';
    if (currentIsMobileView && !menuToggle._hasClickListener) {
        // Only re-add if not already added
        if (menuToggle && navDropdown) {
             menuToggle.addEventListener('click', function(event) {
                event.stopPropagation();
                navDropdown.classList.toggle('is-open');
            });
            document.addEventListener('click', function(event) {
                if (!menuToggle.contains(event.target) && !navDropdown.contains(event.target)) {
                    if (navDropdown.classList.contains('is-open')) {
                        navDropdown.classList.remove('is-open');
                    }
                }
            });
            navDropdown.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', function() {
                    if (navDropdown.classList.contains('is-open')) {
                        navDropdown.classList.remove('is-open');
                    }
                });
            });
            menuToggle._hasClickListener = true; // Mark as added
        }
    } else if (!currentIsMobileView && menuToggle._hasClickListener) {
        // If transitioning from mobile to desktop, remove listeners if needed
        // For this specific case, since CSS makes it display: flex, the JS part
        // for toggling becomes irrelevant on desktop, so just let CSS handle it.
        // You might consider more robust event listener removal if dropdown
        // still behaves weirdly on desktop after resize.
    }
});

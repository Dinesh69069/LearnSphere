// Load navbar and footer
function loadComponent(elementId, componentPath) {
    const element = document.getElementById(elementId);
    if (element) {
        fetch(componentPath)
            .then(response => response.text())
            .then(data => {
                element.innerHTML = data;
                // Re-initialize event listeners after loading navbar
                if (elementId === 'navbar-container') {
                    initNavbarEventListeners();
                }
            })
            .catch(error => console.error('Error loading component:', error));
    }
}

function initNavbarEventListeners() {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');

    if (themeToggle) {
        // Check for saved theme preference or default to light mode
        const currentTheme = localStorage.getItem('theme') || 'light';
        
        if (currentTheme === 'dark') {
            document.documentElement.classList.add('dark');
        }

        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            
            // Save preference
            const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
        });
    }
}

// Auto-load components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('navbar-container', '../shared/components/navbar.html');
    loadComponent('footer-container', '../shared/components/footer.html');
});

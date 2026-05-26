/**
 * Global Divides Website - Custom Interactive Scripting
 * Features:
 * 1. Smooth hover-to-reveal interactions on desktop nav dropdowns.
 * 2. Active state tracking.
 * 3. Subtle micro-interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    setupDropdownHover();
    setupSmoothScroll();
});

/**
 * Enable hover behavior for dropdowns on desktop screens (>=992px)
 * while maintaining bootstrap's click interaction on touch devices.
 */
function setupDropdownHover() {
    const dropdowns = document.querySelectorAll('.navbar-glass .dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        // Desktop Hover Actions
        const handleMouseEnter = () => {
            if (window.innerWidth >= 992) {
                dropdown.classList.add('show');
                toggle.setAttribute('aria-expanded', 'true');
                menu.classList.add('show');
                
                // Animate entry
                menu.style.opacity = '0';
                menu.style.transform = 'translateY(10px)';
                menu.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
                
                setTimeout(() => {
                    menu.style.opacity = '1';
                    menu.style.transform = 'translateY(0)';
                }, 50);
            }
        };
        
        const handleMouseLeave = () => {
            if (window.innerWidth >= 992) {
                dropdown.classList.remove('show');
                toggle.setAttribute('aria-expanded', 'false');
                menu.classList.remove('show');
                
                // Reset styling
                menu.style.opacity = '';
                menu.style.transform = '';
                menu.style.transition = '';
            }
        };

        dropdown.addEventListener('mouseenter', handleMouseEnter);
        dropdown.addEventListener('mouseleave', handleMouseLeave);
    });
}

/**
 * Add smooth scroll support to anchors if they link within the page
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

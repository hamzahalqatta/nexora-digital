/**
 * NEXORA Digital — Accessible Mobile Navigation & Interactive Behavior
 */
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');
    const navLinks = navList ? navList.querySelectorAll('a') : [];

    if (!navToggle || !navList) return;

    function openMenu() {
        navToggle.setAttribute('aria-expanded', 'true');
        navList.classList.add('is-open');
    }

    function closeMenu(focusToggle = false) {
        navToggle.setAttribute('aria-expanded', 'false');
        navList.classList.remove('is-open');
        if (focusToggle) {
            navToggle.focus();
        }
    }

    function toggleMenu() {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    // Toggle button click
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when a navigation link is clicked
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Close on Escape key press and return focus to toggle button
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navList.classList.contains('is-open')) {
            closeMenu(true);
        }
    });

    // Close menu when clicking outside the navbar
    document.addEventListener('click', (e) => {
        if (navList.classList.contains('is-open') && !navList.contains(e.target) && !navToggle.contains(e.target)) {
            closeMenu();
        }
    });

    // Reset mobile menu state if window is resized to desktop width
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navList.classList.contains('is-open')) {
            closeMenu();
        }
    });

    // Smooth scroll for Hero CTA button
    const heroCta = document.getElementById('heroCta');
    if (heroCta) {
        heroCta.addEventListener('click', () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Contact form submit handling (prevent page reload while preserving native validation)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }
});

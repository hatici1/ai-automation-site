// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navList = document.querySelector('.nav-list');

    if (!hamburger || !navList) return;

    function openMenu() {
        navList.classList.add('open');
        hamburger.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
        navList.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    }

    hamburger.addEventListener('click', () => {
        if (navList.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close menu when any nav link is clicked
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navList.contains(e.target)) {
            closeMenu();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });
});

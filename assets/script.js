
// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: true
});

// Active navigation state
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Initial call to set active state
window.dispatchEvent(new Event('scroll'));

// Scroll to Top Button
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    // Hiển thị nút khi cuộn xuống 100px
    if (window.scrollY > 100) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});
//block review code
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Chặn F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
document.addEventListener('keydown', function (e) {
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'U')
    ) {
        e.preventDefault();
    }
});

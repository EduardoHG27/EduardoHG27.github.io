// Inicializar AOS
AOS.init({ duration: 800, once: true, offset: 100 });

// Countdown
function updateCountdown() {
    const weddingDate = new Date("July 25, 2026 14:00:00").getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    document.getElementById("days").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
    
    // Active menu class based on scroll
    const sections = document.querySelectorAll('section[id], div[id="footer"]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    const scrollPos = window.scrollY + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').substring(1);
        if (href === current) {
            link.classList.add('active');
        } else if (current === '' && href === 'home') {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
            history.pushState(null, null, `#${targetId}`);
        }
    });
});
// Konfigurasi ScrollReveal untuk efek interaktif
const sr = ScrollReveal({
    distance: '60px',
    duration: 2000,
    delay: 400,
    reset: false // Animasi hanya terjadi sekali saat scroll pertama
});

// Animasi muncul dari atas
sr.reveal('.hero-text', { origin: 'top' });

// Animasi muncul dari kiri
sr.reveal('.about-img', { origin: 'left', delay: 500 });

// Animasi muncul dari kanan
sr.reveal('.about-content', { origin: 'right', delay: 700 });

// Animasi kartu harga secara berurutan
sr.reveal('.price-card', { 
    origin: 'bottom', 
    interval: 200 
});

// Animasi galeri foto
sr.reveal('.gallery-item', { 
    scale: 0.8,
    interval: 100 
});

// Smooth scroll untuk navigasi internal
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Offset agar tidak tertutup navbar
                behavior: 'smooth'
            });
        }
    });
});
// Smooth reveal on scroll
document.addEventListener("DOMContentLoaded", function() {
    var cards = document.querySelectorAll(".feature-card, .source-card, .schedule-card, .faq-item");
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(function(card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.5s, transform 0.5s";
        observer.observe(card);
    });

    // Header background on scroll
    var header = document.querySelector(".header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.background = "rgba(10, 14, 23, 0.98)";
        } else {
            header.style.background = "rgba(10, 14, 23, 0.9)";
        }
    });
});
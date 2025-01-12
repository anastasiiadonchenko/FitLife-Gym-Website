// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    initializeGSAP();
});

function initializeGSAP() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    gsap.from('#home h1', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5
    });

    gsap.from('#home p', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.8
    });

    gsap.from('#home button', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 1.1
    });

    // Benefits Section Animation
    gsap.from('.benefit-card', {
        scrollTrigger: {
            trigger: '.benefit-card',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2
    });

    // Membership Cards Animation
    gsap.from('.membership-card', {
        scrollTrigger: {
            trigger: '.membership-card',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2
    });

    // Schedule Items Animation
    gsap.from('.schedule-item', {
        scrollTrigger: {
            trigger: '.schedule-item',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1
    });

    // About Section Counter Animation
    const counterElements = document.querySelectorAll('.stats-counter');
    counterElements.forEach(counter => {
        gsap.from(counter, {
            scrollTrigger: {
                trigger: counter,
                start: 'top 80%'
            },
            textContent: 0,
            duration: 2,
            ease: 'power1.out',
            snap: { textContent: 1 },
            stagger: {
                each: 0.2
            }
        });
    });

    // Contact Form Animation
    gsap.from('#contact-form', {
        scrollTrigger: {
            trigger: '#contact-form',
            start: 'top 80%'
        },
        opacity: 0,
        x: -50,
        duration: 0.8
    });

    // Map Animation
    gsap.from('#map', {
        scrollTrigger: {
            trigger: '#map',
            start: 'top 80%'
        },
        opacity: 0,
        x: 50,
        duration: 0.8
    });
}

// Scroll Progress Indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: #22c55e;
        z-index: 9999;
        transform-origin: left;
    `;
    document.body.appendChild(progressBar);

    gsap.to(progressBar, {
        scaleX: 1,
        ease: 'none',
        transformOrigin: 'left center',
        scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
        }
    });
};

// Initialize scroll progress indicator
createScrollProgress();

// Hover Animations
const initializeHoverAnimations = () => {
    // Benefit Cards Hover
    document.querySelectorAll('.benefit-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Membership Cards Hover
    document.querySelectorAll('.membership-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
};

// Initialize hover animations
initializeHoverAnimations();

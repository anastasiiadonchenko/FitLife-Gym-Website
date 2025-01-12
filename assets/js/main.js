// DOM Elements
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const navLinks = document.querySelector('.nav-links');
const promoModal = document.getElementById('promo-modal');
const contactForm = document.getElementById('contact-form');
const scheduleGrid = document.getElementById('schedule-grid');
const scheduleFilters = document.querySelectorAll('.schedule-filter');

// Class Schedule Data
const classes = [
    {
        name: 'Morning Yoga',
        type: 'yoga',
        time: '06:00 AM',
        trainer: 'Sarah Johnson',
        duration: '60 min'
    },
    {
        name: 'CrossFit Basics',
        type: 'crossfit',
        time: '08:00 AM',
        trainer: 'Mike Strong',
        duration: '45 min'
    },
    {
        name: 'Cardio Blast',
        type: 'cardio',
        time: '10:00 AM',
        trainer: 'Emma Fit',
        duration: '45 min'
    },
    // Add more classes as needed
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing...');
    showPromoModal();
    initializeSchedule();
    initializeCounters();
    setupEventListeners();
});

// Mobile Menu Toggle
mobileMenuButton.addEventListener('click', () => {
    mobileMenuButton.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuButton.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Promo Modal
function showPromoModal() {
    setTimeout(() => {
        promoModal.classList.remove('hidden');
    }, 3000);
}

function closePromo() {
    promoModal.classList.add('hidden');
}

// Schedule Functions
function initializeSchedule() {
    const scheduleFilters = document.querySelectorAll('.schedule-filter');
    const classSlots = document.querySelectorAll('.class-slot');

    // Initialize with smooth appearance
    classSlots.forEach((slot, index) => {
        setTimeout(() => {
            slot.style.opacity = '1';
            slot.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Filter functionality
    scheduleFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            const filterType = filter.dataset.filter;
            
            // Update active state
            scheduleFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            
            // Filter classes
            classSlots.forEach(slot => {
                const slotType = slot.dataset.type;
                if (filterType === 'all' || filterType === slotType) {
                    slot.style.display = '';
                    setTimeout(() => {
                        slot.style.opacity = '1';
                        slot.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    slot.style.opacity = '0';
                    slot.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        slot.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Counter Animation
function initializeCounters() {
    const counters = {
        'members-count': 1000,
        'trainers-count': 50
    };

    for (let [id, target] of Object.entries(counters)) {
        animateCounter(id, target);
    }
}

function animateCounter(elementId, target) {
    const element = document.getElementById(elementId);
    if (!element) return;

    let current = 0;
    const increment = target / 100;
    const duration = 2000;
    const interval = duration / 100;

    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.round(current);

        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, interval);
}

// Event Listeners
function setupEventListeners() {
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                mobileMenuButton.classList.add('hidden');
            }
        });
    });
}

// Form submission
function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', Object.fromEntries(formData));
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
}
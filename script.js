// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Quote Form Handler
const quoteForm = document.getElementById('quoteForm');

if (quoteForm) {
    quoteForm.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        lotSize: document.getElementById('lotSize').value,
        serviceType: getCheckedValues('serviceType'),
        frequency: document.getElementById('frequency').value,
        message: document.getElementById('message').value,
        subscribe: document.querySelector('input[name="subscribe"]').checked
    };

    // Create email body
    const emailBody = createEmailBody(formData);

    // Create mailto link
    const mailtoLink = `mailto:info@napervilleallyear.com?subject=New Quote Request from ${formData.name}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    showSuccessMessage();
}

function getCheckedValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    return Array.from(checkboxes).map(cb => cb.value).join(', ');
}

function createEmailBody(data) {
    return `
New Quote Request

CUSTOMER INFORMATION:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Address: ${data.address}

SERVICE DETAILS:
Lot Size: ${data.lotSize}
Service Type: ${data.serviceType}
Frequency: ${data.frequency}

ADDITIONAL INFORMATION:
${data.message || 'No additional details provided'}

PREFERENCES:
Subscribe to Newsletter: ${data.subscribe ? 'Yes' : 'No'}

---
Please respond to this customer at your earliest convenience.
    `;
}

function showSuccessMessage() {
    const form = document.querySelector('.quote-form');
    const successMessage = document.getElementById('successMessage');
    
    if (form && successMessage) {
        form.style.display = 'none';
        successMessage.style.display = 'block';

        // Reset form after 5 seconds and show it again
        setTimeout(() => {
            form.reset();
            form.style.display = 'block';
            successMessage.style.display = 'none';
        }, 5000);
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.service-card, .equipment-card, .feature, .value-card, .team-member').forEach(element => {
    observer.observe(element);
});

// Add CSS animation class
const style = document.createElement('style');
style.textContent = `
    .service-card, .equipment-card, .feature, .value-card, .team-member {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideNav = event.target.closest('.nav-container');
    if (!isClickInsideNav && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
});

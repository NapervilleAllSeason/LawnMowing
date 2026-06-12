// Initialize EmailJS (replace with your actual public key from emailjs.com)
emailjs.init("YOUR_PUBLIC_KEY_HERE"); // Sign up at https://www.emailjs.com/ to get a free public key

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
        message: document.getElementById('message').value
    };

    // Send email using EmailJS
    sendEmailViaEmailJS(formData);
}

function sendEmailViaEmailJS(formData) {
    // Prepare email template parameters
    const templateParams = {
        to_email: 'napervilleallseason@gmail.com',
        customer_name: formData.name,
        customer_email: formData.email,
        customer_phone: formData.phone,
        customer_address: formData.address,
        lot_size: formData.lotSize,
        service_type: formData.serviceType || 'Not specified',
        message: formData.message || 'No additional details provided'
    };

    // Send email
    emailjs.send('service_ID', 'template_ID', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showSuccessMessage();
            // Reset form
            document.querySelector('.quote-form').reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('There was an error sending your quote request. Please try again or contact us directly at napervilleallseason@gmail.com');
        });
}

function getCheckedValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    return Array.from(checkboxes).map(cb => cb.value).join(', ');
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
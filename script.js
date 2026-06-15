document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const contactForm = document.getElementById('contactForm');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Temporarily disabled for testing - form will submit directly to Formspree
    // contactForm.addEventListener('submit', async (e) => {
    //     e.preventDefault();
    //     const button = contactForm.querySelector('button');
    //     const originalText = button.textContent;
    //     button.textContent = 'Sending...';
    //     button.disabled = true;

    //     try {
    //         const response = await fetch(contactForm.action, {
    //             method: 'POST',
    //             body: new FormData(contactForm),
    //             headers: {
    //                 'Accept': 'application/json'
    //             }
    //         });

    //         if (response.ok) {
    //             alert('Thank you for your message! We will get back to you soon.');
    //             contactForm.reset();
    //         } else {
    //             const data = await response.json();
    //             alert('Error: ' + (data.error || 'Something went wrong, please try again.'));
    //         }
    //     } catch (error) {
    //         alert('Network error, please try again.');
    //     } finally {
    //         button.textContent = originalText;
    //         button.disabled = false;
    //     }
    // });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .portfolio-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
});

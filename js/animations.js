// ===== ANIMATIONS AND INTERACTIONS =====

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== LOADING ANIMATION =====
    const loadingAnimation = document.getElementById('loadingAnimation');
    
    // Hide loading animation after page loads
    setTimeout(() => {
        loadingAnimation.classList.add('fade-out');
        setTimeout(() => {
            loadingAnimation.style.display = 'none';
        }, 500);
    }, 1500);

    // ===== SCROLL PROGRESS INDICATOR =====
    const scrollProgress = document.getElementById('scrollProgress');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });

    // ===== BACK TO TOP BUTTON =====
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===== SCROLL ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .bounce-in');
    animatedElements.forEach(el => observer.observe(el));

    // ===== STAGGER ANIMATIONS FOR LIST ITEMS =====
    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const staggerItems = entry.target.querySelectorAll('.stagger-item');
                staggerItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => staggerObserver.observe(card));

    // ===== PLANET ANIMATIONS FOR WORK TOGETHER SECTION =====
    function createPlanetAnimations() {
        const workTogetherImage = document.querySelector('.work-together-section img');
        if (!workTogetherImage) return;

        // Create planet elements
        const planets = [
            { class: 'planet-1', size: '60px', top: '20%', left: '30%', delay: '0s' },
            { class: 'planet-2', size: '40px', top: '60%', left: '70%', delay: '1s' },
            { class: 'planet-3', size: '30px', top: '40%', left: '80%', delay: '2s' },
            { class: 'planet-4', size: '20px', top: '80%', left: '20%', delay: '3s' },
            { class: 'planet-5', size: '35px', top: '10%', left: '60%', delay: '4s' },
            { class: 'planet-6', size: '25px', top: '70%', left: '40%', delay: '5s' }
        ];

        const workTogetherContainer = workTogetherImage.parentElement;
        workTogetherContainer.style.position = 'relative';

        planets.forEach(planet => {
            const planetElement = document.createElement('div');
            planetElement.className = `planet ${planet.class} planet-float planet-glow`;
            planetElement.style.cssText = `
                position: absolute;
                width: ${planet.size};
                height: ${planet.size};
                background: radial-gradient(circle, #4F9CF9 0%, #3a7bd5 100%);
                border-radius: 50%;
                top: ${planet.top};
                left: ${planet.left};
                animation-delay: ${planet.delay};
                z-index: 10;
                box-shadow: 0 0 20px rgba(79, 156, 249, 0.3);
            `;
            workTogetherContainer.appendChild(planetElement);
        });
    }

    // Initialize planet animations when the section is visible
    const workTogetherObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                createPlanetAnimations();
                workTogetherObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const workTogetherSection = document.querySelector('.work-together-section');
    if (workTogetherSection) {
        workTogetherObserver.observe(workTogetherSection);
    }

    // ===== PARTICLE BACKGROUND EFFECT =====
    function createParticles() {
        const heroSection = document.querySelector('.hero-section');
        if (!heroSection) return;

        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        heroSection.appendChild(particlesContainer);

        // Create particles
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 6}s;
                animation-duration: ${6 + Math.random() * 4}s;
            `;
            particlesContainer.appendChild(particle);
        }
    }

    // Initialize particles
    createParticles();

    // ===== ENHANCED BUTTON INTERACTIONS =====
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ===== NAVIGATION HOVER EFFECTS =====
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ===== CARD HOVER EFFECTS =====
    const cards = document.querySelectorAll('.pricing-card, .testimonial-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ===== IMAGE HOVER EFFECTS =====
    const images = document.querySelectorAll('.img-fluid');
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // ===== SPONSOR LOGO EFFECTS =====
    const sponsorLogos = document.querySelectorAll('.sponsor-logo');
    sponsorLogos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.filter = 'grayscale(0%) brightness(1.2)';
            this.style.transform = 'scale(1.1)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.filter = 'grayscale(100%)';
            this.style.transform = 'scale(1)';
        });
    });

    // ===== SOCIAL ICONS ANIMATION =====
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.2)';
            this.style.color = '#4F9CF9';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.color = '';
        });
    });

    // ===== PLATFORM ICONS ANIMATION =====
    const platformIcons = document.querySelectorAll('.platform-icons a');
    platformIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ===== RESPONSIVE ANIMATION ADJUSTMENTS =====
    function adjustAnimationsForScreenSize() {
        const isMobile = window.innerWidth <= 768;
        const isSmallMobile = window.innerWidth <= 576;
        
        // Reduce animation intensity on mobile
        if (isMobile) {
            document.body.style.setProperty('--animation-scale', '0.8');
        } else {
            document.body.style.setProperty('--animation-scale', '1');
        }
        
        // Further reduce for small mobile
        if (isSmallMobile) {
            document.body.style.setProperty('--animation-scale', '0.6');
        }
    }

    // Call on load and resize
    adjustAnimationsForScreenSize();
    window.addEventListener('resize', adjustAnimationsForScreenSize);

    // ===== SMOOTH SCROLLING FOR NAVIGATION =====
    const navLinksWithHash = document.querySelectorAll('a[href^="#"]');
    navLinksWithHash.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== PERFORMANCE OPTIMIZATION =====
    // Throttle scroll events for better performance
    let ticking = false;
    
    function updateScrollAnimations() {
        // Update scroll progress
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
        
        // Update back to top button
        if (scrollTop > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollAnimations);
            ticking = true;
        }
    });

    // ===== ACCESSIBILITY IMPROVEMENTS =====
    // Add focus styles for keyboard navigation
    const focusableElements = document.querySelectorAll('button, a, input, select, textarea');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #4F9CF9';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });

    // ===== REDUCED MOTION SUPPORT =====
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // Disable animations for users who prefer reduced motion
        document.body.style.setProperty('--animation-duration', '0.1s');
        document.body.style.setProperty('--animation-scale', '1');
    }

    console.log('🎉 All animations loaded successfully!');
});

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
} 
// Mobile menu toggle functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenuButton.querySelector('svg').classList.toggle('hidden');
        mobileMenuButton.querySelector('svg').nextElementSibling?.classList.toggle('hidden');
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        
        try {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
            
            // Simulate form submission (replace with actual fetch in production)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'mt-4 p-4 bg-green-900/50 text-green-300 rounded-md';
            successMsg.innerHTML = '<i class="fas fa-check-circle mr-2"></i> Message sent successfully!';
            contactForm.appendChild(successMsg);
            
            // Reset form
            contactForm.reset();
            
            // Remove success message after 5 seconds
            setTimeout(() => successMsg.remove(), 5000);
        } catch (error) {
            console.error('Form submission error:', error);
            alert('There was an error sending your message. Please try again.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
}

// Portfolio filtering
const filterButtons = document.querySelectorAll('.portfolio-filter');
const portfolioItems = document.querySelectorAll('.portfolio-item');

if (filterButtons.length && portfolioItems.length) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-accent', 'text-primary');
                btn.classList.add('bg-gray-700', 'hover:bg-gray-600');
            });
            button.classList.add('bg-accent', 'text-primary');
            button.classList.remove('bg-gray-700', 'hover:bg-gray-600');
            
            // Filter items
            const filterValue = button.getAttribute('data-filter');
            portfolioItems.forEach(item => {
                item.style.display = (filterValue === 'all' || item.getAttribute('data-category') === filterValue) 
                    ? 'block' 
                    : 'none';
            });
        });
    });
}

// Blog post hover effects
const blogPosts = document.querySelectorAll('article');
blogPosts.forEach(post => {
    post.addEventListener('mouseenter', () => {
        const img = post.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'transform 0.3s ease';
        }
    });
    post.addEventListener('mouseleave', () => {
        const img = post.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1)';
        }
    });
});

// Initialize functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Close mobile menu when clicking a link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
});

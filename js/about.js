// ============================================
// About Page JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeAboutPage();
    updateLastUpdated();
    initializeAnimations();
});

// Initialize page
function initializeAboutPage() {
    // Open first section by default
    const firstSection = document.getElementById('section1');
    if (firstSection) {
        firstSection.classList.add('active');
        const header = firstSection.previousElementSibling;
        if (header) {
            header.classList.add('active');
        }
    }

    // Smooth scroll for anchor links
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
}

// Toggle section expand/collapse
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const header = section.previousElementSibling;
    
    if (section.classList.contains('active')) {
        section.classList.remove('active');
        header.classList.remove('active');
    } else {
        section.classList.add('active');
        header.classList.add('active');
        
        // Scroll to section after opening
        setTimeout(() => {
            header.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }, 100);
    }
}

// Toggle FAQ items
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const isActive = element.classList.contains('active');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('active');
        q.nextElementSibling.classList.remove('active');
    });
    
    // Toggle current FAQ
    if (!isActive) {
        element.classList.add('active');
        answer.classList.add('active');
    }
}

// Update last updated timestamp
function updateLastUpdated() {
    const lastUpdateEl = document.getElementById('lastUpdate');
    if (lastUpdateEl) {
        const now = new Date();
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Asia/Kolkata'
        };
        lastUpdateEl.textContent = now.toLocaleDateString('en-IN', options);
    }
}

// Initialize scroll animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe scheme cards, stat cards, etc.
    document.querySelectorAll('.scheme-card, .stat-card, .feature-card, .source-card').forEach(card => {
        observer.observe(card);
    });
}

// Expand all sections (for printing or full view)
function expandAllSections() {
    document.querySelectorAll('.section-body').forEach(section => {
        section.classList.add('active');
        const header = section.previousElementSibling;
        if (header) {
            header.classList.add('active');
        }
    });
}

// Collapse all sections
function collapseAllSections() {
    document.querySelectorAll('.section-body').forEach(section => {
        section.classList.remove('active');
        const header = section.previousElementSibling;
        if (header) {
            header.classList.remove('active');
        }
    });
}

// Search functionality (optional enhancement)
function searchContent(query) {
    const sections = document.querySelectorAll('.section-body');
    const lowerQuery = query.toLowerCase();
    let foundCount = 0;

    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        const header = section.previousElementSibling;
        
        if (text.includes(lowerQuery)) {
            header.style.display = '';
            section.style.display = '';
            foundCount++;
        } else {
            header.style.display = 'none';
            section.style.display = 'none';
        }
    });

    return foundCount;
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to expand all
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        expandAllSections();
    }
    
    // Ctrl/Cmd + L to collapse all
    if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        collapseAllSections();
    }
});

// Print preparation
window.addEventListener('beforeprint', function() {
    expandAllSections();
});

// Export functions for external use
window.aboutPage = {
    toggleSection,
    toggleFAQ,
    expandAllSections,
    collapseAllSections,
    searchContent
};

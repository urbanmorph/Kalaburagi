// ============================================
// Kalaburagi Development Dashboard - App
// Interactive functionality and data rendering
// ============================================

// Initialize dashboard on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    renderKPIs();
    updateLastUpdated();
    
    // Add smooth scroll for anchor links
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
});

// ============================================
// Tab Navigation
// ============================================
function initializeTabs() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            navButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
            
            // Scroll to top of page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
}

// ============================================
// Render KPI Cards
// ============================================
function renderKPIs() {
    const kpiGrid = document.getElementById('kpiGrid');
    if (!kpiGrid) return;
    
    kpiGrid.innerHTML = dashboardData.kpis.map(kpi => {
        const confidenceClass = kpi.confidence === 'high' ? 'confidence-high' : 
                               kpi.confidence === 'medium' ? 'confidence-medium' : 
                               'confidence-low';
        
        const confidenceIcon = kpi.confidence === 'high' ? '🟢' : 
                               kpi.confidence === 'medium' ? '🟡' : 
                               '🔴';
        
        return `
            <div class="kpi-card">
                <div class="kpi-header">
                    <div class="kpi-title">${kpi.title}</div>
                    <span class="confidence-badge ${confidenceClass}">
                        ${confidenceIcon} ${kpi.confidence}
                    </span>
                </div>
                
                <div class="kpi-value">${kpi.current}</div>
                
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${kpi.percentage}%"></div>
                </div>
                
                <div class="kpi-target">
                    Target: ${kpi.target}<br>
                    Gap: ${kpi.gap}
                </div>
                
                ${kpi.details ? `
                    <details style="margin-top: 1rem; font-size: 0.875rem; color: var(--gray-600);">
                        <summary style="cursor: pointer; font-weight: 600; margin-bottom: 0.5rem;">View Details</summary>
                        <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
                            ${kpi.details.map(detail => `<li>${detail}</li>`).join('')}
                        </ul>
                    </details>
                ` : ''}
                
                <div class="kpi-meta">
                    <span>Source: ${kpi.source}</span>
                    <span>Updated: ${kpi.updated}</span>
                </div>
            </div>
        `;
    }).join('');
}

// ============================================
// Update Last Updated Timestamp
// ============================================
function updateLastUpdated() {
    const lastUpdateEl = document.getElementById('lastUpdate');
    if (lastUpdateEl) {
        lastUpdateEl.textContent = dashboardData.lastUpdated;
    }
}

// ============================================
// Alert Actions (Placeholder functions)
// ============================================
function handleAlertAction(alertId, action) {
    console.log(`Alert ${alertId}: ${action}`);
    // In a real implementation, this would trigger actual workflows
    alert(`Action triggered: ${action}\n\nThis is a demo. In production, this would:\n- Send notifications\n- Update tracking systems\n- Log the action\n- Route to appropriate officer`);
}

// Add event listeners to alert buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-primary') || e.target.classList.contains('btn-secondary')) {
        const alertCard = e.target.closest('.alert-card');
        if (alertCard) {
            const buttonText = e.target.textContent;
            handleAlertAction('demo', buttonText);
        }
    }
});

// ============================================
// Utility Functions
// ============================================

// Format currency in crores
function formatCrore(value) {
    if (value >= 100) {
        return `₹${value.toLocaleString('en-IN')} cr`;
    } else {
        return `₹${value} cr`;
    }
}

// Format large numbers
function formatNumber(value) {
    return value.toLocaleString('en-IN');
}

// Get status color
function getStatusColor(status) {
    const colors = {
        'green': 'var(--status-green)',
        'yellow': 'var(--status-yellow)',
        'red': 'var(--status-red)'
    };
    return colors[status] || 'var(--gray-500)';
}

// ============================================
// Animation on Scroll (Optional Enhancement)
// ============================================
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.metric-card, .kpi-card, .alert-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// Enable animation on scroll (optional)
// animateOnScroll();

// ============================================
// Print Functionality
// ============================================
function printDashboard() {
    window.print();
}

// Add keyboard shortcut for print (Ctrl+P or Cmd+P is default, but we can add custom)
document.addEventListener('keydown', function(e) {
    // Ctrl+Shift+P or Cmd+Shift+P for custom print
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        printDashboard();
    }
});

// ============================================
// Mobile Menu Toggle (if needed in future)
// ============================================
function toggleMobileMenu() {
    const nav = document.querySelector('.nav .container');
    nav.classList.toggle('mobile-open');
}

// ============================================
// Export functions for testing
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        renderKPIs,
        formatCrore,
        formatNumber,
        getStatusColor
    };
}

// ============================================
// Console Message
// ============================================
console.log('%cKalaburagi Development Dashboard', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cData-driven development monitoring for evidence-based decisions', 'font-size: 12px; color: #6b7280;');
console.log('%cBuilt with ❤️ for district administrators', 'font-size: 12px; color: #6b7280;');
console.log('\nData sources available in the "Data Sources" tab');
console.log('Last updated:', dashboardData.lastUpdated);

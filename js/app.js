// ============================================
// Kalaburagi Development Dashboard - App
// Interactive functionality and data rendering
// ============================================

// Initialize dashboard on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    renderKPIs();
    renderLiveData();
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

// Switch to a specific tab (for quick navigation cards)
function switchToTab(tabId) {
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Remove active class from all
    navButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Find and activate the target tab
    const targetButton = document.querySelector(`[data-tab="${tabId}"]`);
    const targetContent = document.getElementById(tabId);
    
    if (targetButton && targetContent) {
        targetButton.classList.add('active');
        targetContent.classList.add('active');
        
        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Toggle about section expand/collapse
function toggleAboutSection(sectionId) {
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
// Render Live Data Widget
// ============================================
function renderLiveData() {
    const liveDataGrid = document.getElementById('liveDataGrid');
    if (!liveDataGrid || typeof liveData === 'undefined') return;
    
    const lastUpdate = new Date(liveData.lastUpdated).toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'Asia/Kolkata'
    });
    
    let html = '';
    
    // Commodity Prices Card
    html += `
        <div class="live-data-card commodity">
            <div class="live-data-header">
                <div class="live-data-title">🌾 Commodity Prices (APMC)</div>
                <div class="live-data-timestamp">Updated: ${lastUpdate}</div>
            </div>
            ${renderCommodityPrices(liveData.commodityPrices)}
        </div>
    `;
    
    // Rainfall Card
    html += `
        <div class="live-data-card rainfall">
            <div class="live-data-header">
                <div class="live-data-title">🌧️ Rainfall Data</div>
                <div class="live-data-timestamp">Updated: ${lastUpdate}</div>
            </div>
            ${renderRainfallData(liveData.rainfall)}
        </div>
    `;
    
    liveDataGrid.innerHTML = html;
}

function renderCommodityPrices(prices) {
    const commodities = [
        { key: 'turDal', name: 'Tur Dal (Arhar)' },
        { key: 'bengalGram', name: 'Bengal Gram (Chana)' },
        { key: 'greenGram', name: 'Green Gram (Moong)' }
    ];
    
    let html = '';
    
    commodities.forEach(commodity => {
        const data = prices[commodity.key];
        if (!data) return;
        
        const changeClass = data.priceChange > 0 ? 'positive' : data.priceChange < 0 ? 'negative' : '';
        const changeIcon = data.priceChange > 0 ? '↑' : data.priceChange < 0 ? '↓' : '→';
        
        html += `
            <div class="commodity-item">
                <div class="commodity-name">${commodity.name}</div>
                <div class="commodity-price-row">
                    <div class="commodity-price">₹${data.price.toLocaleString()}</div>
                    ${data.priceChange !== 0 ? `
                        <div class="commodity-change ${changeClass}">
                            ${changeIcon} ₹${Math.abs(data.priceChange)} (${data.percentChange > 0 ? '+' : ''}${data.percentChange}%)
                        </div>
                    ` : '<div class="commodity-change">No change</div>'}
                </div>
                <div class="commodity-name" style="margin-top: 0.25rem;">per quintal • ${data.market}</div>
            </div>
        `;
    });
    
    return html;
}

function renderRainfallData(rainfall) {
    let html = '';
    
    // Today's rainfall
    html += `
        <div class="rainfall-metric">
            <div class="rainfall-label">Today's Rainfall</div>
            <div class="rainfall-value">${rainfall.today.amount} mm</div>
            <div class="rainfall-detail">${rainfall.today.date}</div>
        </div>
    `;
    
    // This week
    html += `
        <div class="rainfall-metric">
            <div class="rainfall-label">This Week</div>
            <div class="rainfall-value">${rainfall.thisWeek.amount} mm</div>
            <div class="rainfall-detail">${rainfall.thisWeek.period}</div>
        </div>
    `;
    
    // This month
    html += `
        <div class="rainfall-metric">
            <div class="rainfall-label">This Month</div>
            <div class="rainfall-value">${rainfall.thisMonth.amount} mm</div>
            <div class="rainfall-detail">
                Normal: ${rainfall.thisMonth.normalAmount} mm • 
                ${rainfall.thisMonth.deviation > 0 ? '+' : ''}${rainfall.thisMonth.deviation}% deviation
            </div>
        </div>
    `;
    
    // This season
    if (rainfall.thisSeason) {
        const statusClass = rainfall.thisSeason.status.toLowerCase();
        html += `
            <div class="rainfall-metric">
                <div class="rainfall-label">Monsoon Season (${rainfall.thisSeason.period})</div>
                <div class="rainfall-value">${rainfall.thisSeason.amount} mm</div>
                <div class="rainfall-detail">
                    Normal: ${rainfall.thisSeason.normalAmount} mm
                </div>
                <span class="rainfall-status ${statusClass}">${rainfall.thisSeason.status}</span>
            </div>
        `;
    }
    
    return html;
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
// Plan Modal Functions
// ============================================
function showPlan(phase, componentIndex) {
    const phaseData = dashboardData.roadmap.phases[phase];
    const component = phaseData.components[componentIndex];
    
    if (!component.plan) {
        alert('Detailed plan not yet available for this component.');
        return;
    }
    
    const plan = component.plan;
    const modal = document.getElementById('planModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    // Set title
    modalTitle.textContent = plan.title;
    
    // Render plan content
    let html = '';
    
    // Objective
    if (plan.objective) {
        html += `<div class="plan-objective">
            <strong>📍 Objective:</strong> ${plan.objective}
        </div>`;
    }
    
    // Components
    if (plan.components && plan.components.length > 0) {
        html += '<div class="plan-section">';
        html += '<h3>Detailed Action Plan</h3>';
        
        plan.components.forEach((comp, index) => {
            html += `<div class="plan-component-card">`;
            html += `<h4>${index + 1}. ${comp.name}</h4>`;
            
            // Meta information
            html += '<div class="plan-meta">';
            if (comp.budget) {
                html += `<div class="plan-meta-item">
                    <div class="plan-meta-label">Budget</div>
                    <div class="plan-meta-value">${comp.budget}</div>
                </div>`;
            }
            if (comp.target) {
                html += `<div class="plan-meta-item">
                    <div class="plan-meta-label">Target</div>
                    <div class="plan-meta-value">${comp.target}</div>
                </div>`;
            }
            if (comp.impact) {
                html += `<div class="plan-meta-item">
                    <div class="plan-meta-label">Expected Impact</div>
                    <div class="plan-meta-value">${comp.impact}</div>
                </div>`;
            }
            if (comp.timeline) {
                html += `<div class="plan-meta-item">
                    <div class="plan-meta-label">Timeline</div>
                    <div class="plan-meta-value">${comp.timeline}</div>
                </div>`;
            }
            if (comp.responsibleDept) {
                html += `<div class="plan-meta-item">
                    <div class="plan-meta-label">Responsible Department</div>
                    <div class="plan-meta-value">${comp.responsibleDept}</div>
                </div>`;
            }
            html += '</div>';
            
            // Tasks
            if (comp.tasks && comp.tasks.length > 0) {
                html += '<div class="plan-tasks">';
                html += '<h5>Key Tasks & Activities:</h5>';
                html += '<ul>';
                comp.tasks.forEach(task => {
                    html += `<li>${task}</li>`;
                });
                html += '</ul>';
                html += '</div>';
            }
            
            // Specifications (if available)
            if (comp.specifications && comp.specifications.length > 0) {
                html += '<div class="plan-tasks">';
                html += '<h5>Technical Specifications:</h5>';
                html += '<ul>';
                comp.specifications.forEach(spec => {
                    html += `<li>${spec}</li>`;
                });
                html += '</ul>';
                html += '</div>';
            }
            
            html += '</div>';
        });
        
        html += '</div>';
    }
    
    // Financing
    if (plan.financing) {
        html += '<div class="plan-financing">';
        html += '<h5>💰 Financing Sources</h5>';
        html += '<ul>';
        if (plan.financing.sources) {
            plan.financing.sources.forEach(source => {
                html += `<li>${source}</li>`;
            });
        }
        html += '</ul>';
        
        if (plan.financing.disbursementSchedule) {
            html += '<h5 style="margin-top: 1rem;">📅 Disbursement Schedule</h5>';
            html += '<ul>';
            plan.financing.disbursementSchedule.forEach(schedule => {
                html += `<li>${schedule}</li>`;
            });
            html += '</ul>';
        }
        
        if (plan.financing.creditSupport) {
            html += '<h5 style="margin-top: 1rem;">🏦 Credit Support Mechanisms</h5>';
            html += '<ul>';
            plan.financing.creditSupport.forEach(support => {
                html += `<li>${support}</li>`;
            });
            html += '</ul>';
        }
        
        html += '</div>';
    }
    
    // Success Metrics
    if (plan.successMetrics && plan.successMetrics.length > 0) {
        html += '<div class="plan-metrics">';
        html += '<h5>📊 Success Metrics & KPIs</h5>';
        html += '<ul>';
        plan.successMetrics.forEach(metric => {
            html += `<li>${metric}</li>`;
        });
        html += '</ul>';
        html += '</div>';
    }
    
    // Risks
    if (plan.risks && plan.risks.length > 0) {
        html += '<div class="plan-risks">';
        html += '<h5>⚠️ Risk Mitigation</h5>';
        html += '<ul>';
        plan.risks.forEach(risk => {
            html += `<li>${risk}</li>`;
        });
        html += '</ul>';
        html += '</div>';
    }
    
    // Cluster details (for agro-processing)
    if (plan.clusterDetails) {
        html += '<div class="plan-section">';
        html += '<h3>📍 Cluster-wise Breakdown</h3>';
        plan.clusterDetails.forEach(cluster => {
            html += `<div class="plan-component-card">`;
            html += `<h4>${cluster.cluster}</h4>`;
            html += '<div class="plan-meta">';
            html += `<div class="plan-meta-item">
                <div class="plan-meta-label">Mills</div>
                <div class="plan-meta-value">${cluster.mills}</div>
            </div>`;
            html += `<div class="plan-meta-item">
                <div class="plan-meta-label">Investment</div>
                <div class="plan-meta-value">${cluster.investment}</div>
            </div>`;
            html += `<div class="plan-meta-item">
                <div class="plan-meta-label">Focus Area</div>
                <div class="plan-meta-value">${cluster.focus}</div>
            </div>`;
            html += `<div class="plan-meta-item">
                <div class="plan-meta-label">Jobs</div>
                <div class="plan-meta-value">${cluster.jobs}</div>
            </div>`;
            html += '</div>';
            html += '</div>';
        });
        html += '</div>';
    }
    
    // FPO Types
    if (plan.fpoTypes) {
        html += '<div class="plan-section">';
        html += '<h3>🌾 FPO Categories</h3>';
        plan.fpoTypes.forEach(fpo => {
            html += `<div class="plan-component-card">`;
            html += `<h4>${fpo.type}</h4>`;
            html += '<div class="plan-meta">';
            html += `<div class="plan-meta-item">
                <div class="plan-meta-label">Number of FPOs</div>
                <div class="plan-meta-value">${fpo.number}</div>
            </div>`;
            html += `<div class="plan-meta-item">
                <div class="plan-meta-label">Member Coverage</div>
                <div class="plan-meta-value">${fpo.members}</div>
            </div>`;
            html += `<div class="plan-meta-item">
                <div class="plan-meta-label">Focus Area</div>
                <div class="plan-meta-value">${fpo.focus}</div>
            </div>`;
            html += '</div>';
            html += '</div>';
        });
        html += '</div>';
    }
    
    // Enablers (for MSME)
    if (plan.enablers) {
        html += '<div class="plan-section">';
        html += '<h3>🔧 Enablers & Support Infrastructure</h3>';
        plan.enablers.forEach(enabler => {
            html += `<div class="plan-component-card">`;
            html += `<h4>${enabler.name}</h4>`;
            if (enabler.budget) {
                html += `<p><strong>Budget:</strong> ${enabler.budget}</p>`;
            }
            if (enabler.target) {
                html += `<p><strong>Target:</strong> ${enabler.target}</p>`;
            }
            if (enabler.tasks && enabler.tasks.length > 0) {
                html += '<div class="plan-tasks">';
                html += '<ul>';
                enabler.tasks.forEach(task => {
                    html += `<li>${task}</li>`;
                });
                html += '</ul>';
                html += '</div>';
            }
            html += '</div>';
        });
        html += '</div>';
    }
    
    modalBody.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePlanModal() {
    const modal = document.getElementById('planModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('planModal');
    if (e.target === modal) {
        closePlanModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePlanModal();
    }
});

// ============================================
// Export functions for testing
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        renderKPIs,
        formatCrore,
        formatNumber,
        getStatusColor,
        showPlan,
        closePlanModal
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

// ============================================
// Kalaburagi Development Dashboard - App
// Interactive functionality and data rendering
// ============================================

// Initialize dashboard on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    renderKPIs();
    renderAlerts();
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
// Render Alerts
// ============================================
function renderAlerts() {
    const alertsGrid = document.getElementById('alertsGrid');
    if (!alertsGrid || !dashboardData.alerts) return;
    
    alertsGrid.innerHTML = dashboardData.alerts.map(alert => {
        const severityClass = alert.severity === 'red' ? 'alert-red' : 'alert-yellow';
        
        return `
            <div class="alert-card ${severityClass}">
                <div class="alert-icon">${alert.icon}</div>
                <div class="alert-content">
                    <h3>${alert.title}</h3>
                    <div class="alert-meta">
                        ${Object.entries(alert.meta).map(([key, value]) => `
                            <span>${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}</span>
                        `).join('')}
                    </div>
                    <p>${alert.description}</p>
                    ${alert.impact ? `<p class="alert-impact"><strong>Impact:</strong> ${alert.impact}</p>` : ''}
                    <div class="alert-deadline"><strong>Deadline:</strong> ${alert.deadline}</div>
                    <div class="alert-actions">
                        ${alert.actions.map(action => `
                            <button class="btn-${action.includes('Approve') || action.includes('Initiate') || action.includes('Release') || action.includes('Fund') || action.includes('Issue') || action.includes('Contact') ? 'primary' : 'secondary'}">${action}</button>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ============================================
// Render Industries Cards
// ============================================
function renderIndustries() {
    const industriesGrid = document.getElementById('industriesGrid');
    if (!industriesGrid || !dashboardData.alternateIndustries) return;
    
    const industries = dashboardData.alternateIndustries.industries;
    
    industriesGrid.innerHTML = industries.map(industry => {
        // Determine current phase and progress
        let currentPhase = 'Phase 1 (Planning)';
        let progress = 5; // 5% for all in planning phase
        let statusClass = 'status-yellow';
        
        // Calculate which phase we're in based on timeline
        const now = new Date();
        const year = now.getFullYear();
        if (year >= 2029 && year < 2032) {
            currentPhase = 'Phase 2 (Activation)';
            progress = 15;
        } else if (year >= 2032) {
            currentPhase = 'Phase 3 (Scale)';
            progress = 35;
        }
        
        const priorityColors = {
            'HIGHEST': '#16a34a',
            'HIGH': '#2563eb',
            'MEDIUM-HIGH': '#f59e0b'
        };
        
        return `
            <div class="industry-card" style="border-top: 4px solid ${priorityColors[industry.priority] || '#6b7280'};">
                <div class="industry-header">
                    <div>
                        <div class="industry-name">${industry.name}</div>
                        <div class="industry-meta">
                            <span class="priority-badge" style="background: ${priorityColors[industry.priority] || '#6b7280'};">${industry.priority}</span>
                            <span class="confidence-badge confidence-medium">${industry.confidence}% Confidence</span>
                        </div>
                    </div>
                </div>
                
                <div class="industry-metrics">
                    <div class="metric-small">
                        <div class="metric-label">Investment</div>
                        <div class="metric-value">₹${formatCrore(industry.totalInvestment)} cr</div>
                    </div>
                    <div class="metric-small">
                        <div class="metric-label">Jobs</div>
                        <div class="metric-value">${formatNumber(industry.jobs)}</div>
                    </div>
                    <div class="metric-small">
                        <div class="metric-label">Revenue Target</div>
                        <div class="metric-value">₹${formatCrore(industry.impact.annualRevenue)} cr/yr</div>
                    </div>
                </div>
                
                <div class="industry-progress">
                    <div class="progress-label">
                        <span>${currentPhase}</span>
                        <span>${progress}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                </div>
                
                <div class="industry-timeline">
                    <strong>Timeline:</strong> ${industry.timeline.revenueGeneration}
                </div>
                
                <div class="industry-location">
                    <strong>Location:</strong> ${industry.location.primary}
                </div>
                
                ${industry.nextSteps && industry.nextSteps.length > 0 ? `
                    <details style="margin-top: 1rem; font-size: 0.875rem;">
                        <summary style="cursor: pointer; font-weight: 600; color: #2563eb;">Next Steps</summary>
                        <ul style="margin: 0.5rem 0 0 1.5rem;">
                            ${industry.nextSteps.slice(0, 3).map(step => `<li style="margin-bottom: 0.25rem;">${step}</li>`).join('')}
                        </ul>
                    </details>
                ` : ''}
            </div>
        `;
    }).join('');
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

// Get industry-specific plan components
function getIndustryPlanComponents(industry, phase) {
    const plans = {
        'garments': {
            'phase1': [
                {
                    name: 'Land Acquisition & MoU Signing',
                    budget: '₹5.3 crore',
                    timeline: 'Q1-Q2 2026 (CRITICAL: MoU by March 31)',
                    responsibleDept: 'Industries + Revenue',
                    tasks: [
                        'Land search committee formation (Week 1-2)',
                        'Identify 3 candidate sites - 300 acres each (Sedam/Afzalpur)',
                        'Due diligence: Encumbrances, soil tests, water, power',
                        'Revenue Dept issues acquisition notices',
                        'PM MITRA MoU signing in New Delhi (CM + Union Minister)'
                    ],
                    target: '200 acres acquired, ₹50cr first tranche',
                    impact: 'Unlock ₹390cr PM MITRA funding'
                },
                {
                    name: 'Infrastructure Development',
                    budget: '₹55 crore',
                    timeline: 'Q3-Q4 2026',
                    responsibleDept: 'KIADB + GESCOM',
                    tasks: [
                        'KIADB develops industrial plots (roads, drainage, boundary)',
                        'GESCOM installs 11KV industrial feeder (₹5cr, 24×7 power)',
                        '2 MLD water pipeline from nearest STP (₹3cr)',
                        'Common facilities tender: ETP (₹15cr), worker hostels (₹10cr)',
                        'SPV formation: PM MITRA Kalaburagi Textile Park Pvt Ltd'
                    ],
                    target: 'First 5 factory plots allocated',
                    impact: 'Ready for private investment'
                }
            ],
            'phase2': [
                {
                    name: 'Scale to 15 Factories',
                    budget: '₹350 crore',
                    timeline: '2029-2031',
                    responsibleDept: 'Industries + Banks',
                    tasks: [
                        'Land expansion: 100 acres additional',
                        '10 new factories (1,200 workers each = 12,000 jobs)',
                        'Export setup: DPIIT registration, buyer meets Dubai',
                        'Backward integration: 2 fabric processing units',
                        'Quality certifications: ISO 9001, WRAP, Oeko-Tex'
                    ],
                    target: '15 factories operational, 18,000 jobs',
                    impact: '₹600cr/year revenue, 40% exports'
                }
            ],
            'phase3': [
                {
                    name: 'Full Scale 30 Factories',
                    budget: '₹150 crore',
                    timeline: '2032-2034',
                    responsibleDept: 'Industries',
                    tasks: [
                        'Final 15 factories (faster execution from learning)',
                        'Brand establishment: "Made in Kalaburagi" apparel',
                        'Export expansion: Middle East 60%, EU 30%, USA 10%',
                        'Ancillary industries: Packaging, logistics (2,000 jobs)'
                    ],
                    target: '30 factories, 26,000 total jobs',
                    impact: '₹1,800cr/year revenue'
                }
            ]
        },
        'limestone': {
            'phase1': [
                {
                    name: 'Geological Survey',
                    budget: '₹50 lakh (OVERDUE)',
                    timeline: 'THIS MONTH (Critical)',
                    responsibleDept: 'Mines & Geology',
                    tasks: [
                        '⚠️ Release ₹50L survey fund IMMEDIATELY',
                        'Empanel 2-3 CIMFR/CSIR/NIT-certified geologists',
                        'Survey 5 sites simultaneously (Chincholi-3, Sedam-1, Chittapur-1)',
                        'Parameters: Reserve estimation, grade analysis, overburden',
                        'Output: 5 detailed geological reports (UNFC Code 111)'
                    ],
                    target: '5 geological reports within 3 months',
                    impact: 'Unlock mining lease applications'
                },
                {
                    name: 'Mining Lease Applications',
                    budget: '₹40 lakh',
                    timeline: 'Q3-Q4 2026',
                    responsibleDept: 'Mines & Geology',
                    tasks: [
                        'Submit 5 parallel applications to Director of Mines',
                        'Application package: Geological report, mining plan, EIA TOR',
                        'Public hearing in affected villages (18-24 month process)',
                        'SEIAA review and Ministry clearance',
                        'First 3 mining leases approved'
                    ],
                    target: '5 applications submitted, 3 approvals by 2029',
                    impact: 'Legal permission to mine 2.5-4 billion MT reserves'
                }
            ],
            'phase2': [
                {
                    name: 'First 1,000 TPD Cement Plant',
                    budget: '₹300 crore',
                    timeline: '2029-2031',
                    responsibleDept: 'Industries + Private',
                    tasks: [
                        'Technology: VSK or FBC (₹200cr for 1,000 TPD)',
                        'Land: 50 acres (captive mining lease + factory)',
                        'Power: 15 MW industrial feeder',
                        'Products: OPC 43 grade, PPC',
                        'Employment: 800 direct + 1,200 indirect'
                    ],
                    target: '1,000 TPD plant operational',
                    impact: '₹350cr/year revenue, 2,000 jobs'
                }
            ],
            'phase3': [
                {
                    name: 'Second 1,500 TPD Plant',
                    budget: '₹100 crore',
                    timeline: '2032-2034',
                    responsibleDept: 'Industries',
                    tasks: [
                        'Location: Different taluk (Sedam or Chittapur)',
                        'Total capacity: 3,000 TPD combined',
                        'Market expansion: Hyderabad + North Karnataka',
                        'Zero environmental violations (KSPCB green rating)'
                    ],
                    target: '3,000 TPD total capacity',
                    impact: '₹750cr/year revenue, 12,000 jobs'
                }
            ]
        },
        'aerospace': {
            'phase1': [
                {
                    name: 'Feasibility & Quality Infrastructure',
                    budget: '₹55 lakh',
                    timeline: 'Q1-Q2 2026',
                    responsibleDept: 'Industries',
                    tasks: [
                        'Feasibility study: ₹25L (aerospace consultant - ex-HAL/Boeing)',
                        'Market demand: Interview 10 OEMs (HAL, Tata, Boeing, Airbus)',
                        'Product selection: Non-critical precision parts',
                        '⚠️ CRITICAL: Hire AS9100 consultant (₹30L/year for 3 years)',
                        'Consultant designs factory from Day 1 (cannot retrofit quality)'
                    ],
                    target: 'AS9100 consultant hired, OEM MoUs signed',
                    impact: 'Quality foundation from start'
                },
                {
                    name: 'Land & ITI Setup',
                    budget: '₹7.5 crore',
                    timeline: 'Q3-Q4 2026',
                    responsibleDept: 'KIADB + Education',
                    tasks: [
                        'Land: 500 acres (KIADB Sedam Industrial Area)',
                        'ITI curriculum: CNC machining, sheet metal, CMM operation',
                        'Equipment: ₹7.5cr (5 CNC machines, 2 CMM, welding robots)',
                        'First batch: 300 students × 2 years = 600 skilled by 2028',
                        'OEM outreach: Hyderabad roadshow (5 companies)'
                    ],
                    target: '500 acres, ITI operational, 2-3 OEM MoUs',
                    impact: 'Skilled workforce pipeline'
                }
            ],
            'phase2': [
                {
                    name: '15 Factories + AS9100 Certification',
                    budget: '₹350 crore',
                    timeline: '2029-2031',
                    responsibleDept: 'Industries + Private',
                    tasks: [
                        'Factory construction: 15 units × ₹15cr = ₹225cr',
                        'Machinery: German/Israeli precision CNC, CMM, sheet metal',
                        'AS9100 certification: 18-month preparation, mock audits',
                        'Trial production: Aluminum brackets, SS fasteners',
                        'Product diversification: CNC parts, sheet metal, surface treatment'
                    ],
                    target: '15 factories AS9100-certified',
                    impact: '₹450cr/year revenue, 6,000 jobs'
                }
            ],
            'phase3': [
                {
                    name: '30 Factories + R&D Center',
                    budget: '₹300 crore',
                    timeline: '2032-2034',
                    responsibleDept: 'Industries + IIT',
                    tasks: [
                        'Final 15 factories (replication of proven model)',
                        'R&D center: ₹40cr (IIT Hyderabad partnership)',
                        'Focus: Design services (CAD modeling), metallurgy testing',
                        'NADCAP certification: Heat treatment, surface finishing',
                        'Direct supply to Boeing, Airbus (export 60%)'
                    ],
                    target: '30 factories, R&D center operational',
                    impact: '₹1,200cr/year revenue, 12,000 jobs'
                }
            ]
        },
        'pharma': {
            'phase1': [
                {
                    name: 'Market Study & MoUs',
                    budget: '₹15 lakh',
                    timeline: 'Q1-Q2 2026',
                    responsibleDept: 'Industries',
                    tasks: [
                        'Market study: ₹15L (pharma packaging consultant)',
                        'Demand forecast: Interview 10 Hyderabad pharma companies',
                        'Product mix: Blister packs 40%, bottles 30%, cartons 20%',
                        'DC delegation to Hyderabad (March 2026)',
                        'Target: 2-3 MoUs (Dr. Reddy\'s ₹100cr, Hetero ₹80cr)'
                    ],
                    target: '2-3 signed MoUs, ₹150-200cr commitments',
                    impact: 'Guaranteed demand from day one'
                },
                {
                    name: 'Schedule M Consultant & Land',
                    budget: '₹65 lakh',
                    timeline: 'Q3-Q4 2026',
                    responsibleDept: 'Industries + KIADB',
                    tasks: [
                        'Schedule M consultant: ₹30L/year (ex-CDSCO inspector)',
                        'Consultant designs factory layout, SOPs, documentation',
                        'Land: 200 acres (dedicated pharma zone)',
                        'Infrastructure: Treated water (pharma grade), HEPA filtration',
                        'Mock inspections every 3 months'
                    ],
                    target: '200 acres acquired, consultant hired',
                    impact: 'GMP compliance from Day 1'
                }
            ],
            'phase2': [
                {
                    name: '15 Factories + ISO 15378',
                    budget: '₹325 crore',
                    timeline: '2029-2031',
                    responsibleDept: 'Industries + State Drug Controller',
                    tasks: [
                        'Factory construction: 15 units × ₹8cr = ₹120cr',
                        'Machinery: Blister packing, bottle lines, printing/labeling',
                        'Schedule M licensing: State Drug Controller inspections',
                        'ISO 15378 certification: International pharma packaging std',
                        'Product diversification: Specialty packs, cold chain'
                    ],
                    target: '15 factories Schedule M-licensed',
                    impact: '₹450cr/year revenue, 3,000 jobs'
                }
            ],
            'phase3': [
                {
                    name: '20 Factories + WHO-GMP',
                    budget: '₹95 crore',
                    timeline: '2032-2034',
                    responsibleDept: 'Industries + Export Promotion',
                    tasks: [
                        'Final 5 factories (export-oriented packaging)',
                        'WHO-GMP certification: UN procurement qualification',
                        'Export focus: Africa 40%, Middle East 35%, CIS 25%',
                        'Products: Antimalarials, ARVs (Africa), generic analgesics',
                        'Enable ₹200+cr export contracts (GAVI, UNICEF, Global Fund)'
                    ],
                    target: '20 factories WHO-GMP certified',
                    impact: '₹900cr/year revenue (30% exports), 6,700 jobs'
                }
            ]
        }
    };
    
    return plans[industry] && plans[industry][phase] ? plans[industry][phase] : [];
}

// ============================================
function showPlan(phase, componentOrIndustry) {
    const phaseData = dashboardData.roadmap.phases[phase];
    
    // Handle industry-specific calls (new format)
    const industryMap = {
        'garments': 'Garments & Textiles Manufacturing',
        'limestone': 'Limestone Mining & Cement Production',
        'aerospace': 'Aerospace Components Manufacturing',
        'pharma': 'Pharmaceutical Packaging'
    };
    
    let component;
    
    // Check if this is an industry name (string)
    if (typeof componentOrIndustry === 'string' && industryMap[componentOrIndustry]) {
        // This is an industry call - create a placeholder plan
        const industryName = industryMap[componentOrIndustry];
        component = {
            name: industryName,
            plan: {
                title: `${industryName} - ${phase.toUpperCase()} Detailed Plan`,
                objective: `Implementation plan for ${industryName} in ${phase.toUpperCase()}`,
                components: getIndustryPlanComponents(componentOrIndustry, phase)
            }
        };
    } else {
        // Legacy component index call
        component = phaseData.components[componentOrIndustry];
    }
    
    if (!component || !component.plan) {
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

// ============================================
// Show Industries Detail Modal
// ============================================
function showIndustriesDetail(phase) {
    const modal = document.getElementById('planModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (!dashboardData.alternateIndustries) {
        modalBody.innerHTML = '<p>Industries data not available.</p>';
        return;
    }
    
    const industries = dashboardData.alternateIndustries;
    
    // Set title based on phase
    const phaseNames = {
        'phase1': 'Phase 1 (2026-2029)',
        'phase2': 'Phase 2 (2029-2032)',
        'phase3': 'Phase 3 (2032-2034)'
    };
    
    modalTitle.textContent = `Alternate Industries - ${phaseNames[phase]}`;
    
    // Build HTML
    let html = '';
    
    // Overview section
    html += '<div class="plan-section">';
    html += '<h3>📊 Industries Overview</h3>';
    html += `<div class="plan-component-card">`;
    html += `<p><strong>Total Investment:</strong> ₹${formatCrore(industries.overview.totalInvestment)} cr</p>`;
    html += `<p><strong>Total Jobs:</strong> ${formatNumber(industries.overview.totalJobs)}</p>`;
    html += `<p><strong>GDDP Contribution:</strong> ₹${formatCrore(industries.overview.gddpContribution)} cr (${industries.overview.percentOfTarget}% of target)</p>`;
    html += `<p><strong>Status:</strong> ${industries.overview.status}</p>`;
    html += '</div>';
    html += '</div>';
    
    // Filter industries by phase investment
    html += '<div class="plan-section">';
    html += `<h3>🏭 Industries in ${phaseNames[phase]}</h3>`;
    
    industries.industries.forEach(industry => {
        const phaseInvestment = industry.investmentBreakdown[phase];
        
        if (phaseInvestment && phaseInvestment.amount > 0) {
            html += `<div class="plan-component-card" style="border-left: 4px solid #2563eb;">`;
            
            // Header
            html += `<div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">`;
            html += `<div>`;
            html += `<h4 style="margin: 0 0 0.5rem 0;">${industry.name}</h4>`;
            html += `<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">`;
            html += `<span class="confidence-badge confidence-${industry.priority.toLowerCase().replace(' ', '-')}" style="font-size: 0.75rem;">${industry.priority} Priority</span>`;
            html += `<span class="confidence-badge confidence-medium" style="font-size: 0.75rem;">${industry.confidence}% Confidence</span>`;
            html += `</div>`;
            html += `</div>`;
            html += `<div style="text-align: right;">`;
            html += `<div style="font-size: 1.5rem; font-weight: 700; color: #2563eb;">₹${formatCrore(phaseInvestment.amount)} cr</div>`;
            html += `<div style="font-size: 0.875rem; color: #6b7280;">${phaseInvestment.focus}</div>`;
            html += `</div>`;
            html += `</div>`;
            
            // Key Metrics
            html += '<div class="plan-meta">';
            html += `<div class="plan-meta-item">`;
            html += `<div class="plan-meta-label">Total Investment</div>`;
            html += `<div class="plan-meta-value">₹${formatCrore(industry.totalInvestment)} cr</div>`;
            html += `</div>`;
            html += `<div class="plan-meta-item">`;
            html += `<div class="plan-meta-label">Jobs Created</div>`;
            html += `<div class="plan-meta-value">${formatNumber(industry.jobs)} jobs</div>`;
            html += `</div>`;
            html += `<div class="plan-meta-item">`;
            html += `<div class="plan-meta-label">Timeline</div>`;
            html += `<div class="plan-meta-value">${industry.timeline.revenueGeneration}</div>`;
            html += `</div>`;
            html += '</div>';
            
            // Phase Activities
            if (phaseInvestment.activities && phaseInvestment.activities.length > 0) {
                html += '<div style="margin-top: 1rem;">';
                html += `<strong style="color: #374151;">Phase Activities:</strong>`;
                html += '<ul style="margin-top: 0.5rem; margin-left: 1.5rem;">';
                phaseInvestment.activities.forEach(activity => {
                    html += `<li style="margin-bottom: 0.25rem; color: #4b5563;">${activity}</li>`;
                });
                html += '</ul>';
                html += '</div>';
            }
            
            // Key Metrics for this industry
            if (phase === 'phase1') {
                html += '<div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #e5e7eb;">';
                html += `<strong style="color: #374051;">Location:</strong> ${industry.location.primary}<br>`;
                html += `<strong style="color: #374051;">Primary Products:</strong> ${industry.products.primary.join(', ')}`;
                html += '</div>';
            }
            
            html += '</div>';
        }
    });
    
    html += '</div>';
    
    // Recommendations for this phase
    const phaseRecs = industries.recommendations.immediate.filter(r => r.includes(phase.replace('phase', 'Q')));
    if (phaseRecs.length > 0 || (phase === 'phase2' && industries.recommendations.shortTerm.length > 0)) {
        html += '<div class="plan-section">';
        html += '<h3>💡 Recommendations</h3>';
        html += '<ul style="margin-left: 1.5rem;">';
        
        if (phase === 'phase1') {
            industries.recommendations.immediate.forEach(rec => {
                html += `<li style="margin-bottom: 0.5rem; color: #4b5563;">${rec}</li>`;
            });
        } else if (phase === 'phase2') {
            industries.recommendations.shortTerm.forEach(rec => {
                html += `<li style="margin-bottom: 0.5rem; color: #4b5563;">${rec}</li>`;
            });
        }
        
        html += '</ul>';
        html += '</div>';
    }
    
    modalBody.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
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
        closePlanModal,
        showIndustriesDetail
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

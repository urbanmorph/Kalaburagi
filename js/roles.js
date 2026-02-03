// ============================================
// Kalaburagi Development Dashboard - Role Configurations
// Actor-specific dashboard views and data filtering
// ============================================

// Role configurations for all 15 actors
const roleConfigs = {
    // Default/Full Dashboard
    'default': {
        id: 'default',
        name: 'Full Dashboard',
        icon: '🌐',
        description: 'Complete overview of all metrics and initiatives',
        tabs: ['about', 'command', 'baseline', 'roadmap', 'sources'],
        kpis: ['all'],
        alerts: ['all'],
        roadmap: ['all'],
        industries: ['all'],
        showLiveData: true,
        customDashboard: null
    },

    // Tier 1: Executive & Law Enforcement
    'dc': {
        id: 'dc',
        name: 'District Collector',
        icon: '👔',
        description: 'Executive dashboard with complete district overview and quick actions',
        tabs: ['command', 'baseline', 'roadmap', 'sources'],
        kpis: ['all'],
        alerts: ['all'],
        roadmap: ['all'],
        industries: ['all'],
        showLiveData: true,
        customDashboard: 'dc-executive'
    },

    'sp': {
        id: 'sp',
        name: 'Superintendent of Police',
        icon: '👮',
        description: 'Security, law & order, and industrial workforce monitoring',
        tabs: ['command', 'baseline'],
        kpis: ['jobs'],
        alerts: [1, 2],
        roadmap: ['phase1', 'phase2'],
        industries: ['all'],
        showLiveData: false,
        customDashboard: null
    },

    // Tier 2: Infrastructure & Planning
    'tpo': {
        id: 'tpo',
        name: 'Town Planning Officer',
        icon: '🏗️',
        description: 'Urban planning, building approvals, zoning, industrial area development',
        tabs: ['command', 'roadmap'],
        kpis: [],
        alerts: [1],
        roadmap: ['phase1', 'phase2', 'phase3'],
        industries: ['all'],
        showLiveData: false,
        customDashboard: null
    },

    'khb': {
        id: 'khb',
        name: 'Karnataka Housing Board',
        icon: '🏘️',
        description: 'Housing progress, PMAY schemes, worker hostels for industrial workforce',
        tabs: ['command', 'roadmap'],
        kpis: ['jobs'],
        alerts: [1],
        roadmap: ['phase1'],
        industries: ['garments'],
        showLiveData: false,
        customDashboard: 'khb-housing'
    },

    'beo': {
        id: 'beo',
        name: 'Block Education Officer',
        icon: '📚',
        description: 'School enrollment, infrastructure, skill development programs',
        tabs: ['command', 'roadmap'],
        kpis: ['credit', 'jobs', 'income'],
        alerts: [],
        roadmap: ['phase2'],
        industries: ['all'],
        showLiveData: false,
        customDashboard: null
    },

    // Tier 3: Development Departments
    'pwd': {
        id: 'pwd',
        name: 'PWD Engineer',
        icon: '🛣️',
        description: 'Road connectivity, infrastructure projects, rural development',
        tabs: ['command', 'roadmap'],
        kpis: ['credit'],
        alerts: [],
        roadmap: ['phase1'],
        industries: [],
        showLiveData: false,
        customDashboard: 'pwd-roads'
    },

    'kiadb': {
        id: 'kiadb',
        name: 'KIADB Officer',
        icon: '🏭',
        description: 'Industrial land allocation, occupancy, infrastructure readiness',
        tabs: ['command', 'roadmap'],
        kpis: ['jobs'],
        alerts: [1, 2, 3, 4],
        roadmap: ['all'],
        industries: ['all'],
        showLiveData: false,
        customDashboard: 'kiadb-land'
    },

    'water': {
        id: 'water',
        name: 'Water Resources Officer',
        icon: '💧',
        description: 'Irrigation, dam levels, industrial water allocation',
        tabs: ['command', 'baseline', 'roadmap'],
        kpis: ['irrigation', 'credit'],
        alerts: [5],
        roadmap: ['phase1'],
        industries: [],
        showLiveData: true,
        customDashboard: null
    },

    'gescom': {
        id: 'gescom',
        name: 'GESCOM Officer',
        icon: '⚡',
        description: 'Power distribution, industrial connections, feeder management',
        tabs: ['command', 'roadmap'],
        kpis: ['credit', 'jobs'],
        alerts: [5],
        roadmap: ['phase1'],
        industries: ['all'],
        showLiveData: false,
        customDashboard: null
    },

    'health': {
        id: 'health',
        name: 'Health Department',
        icon: '🏥',
        description: 'Health infrastructure, occupational health, worker welfare',
        tabs: ['command'],
        kpis: ['jobs'],
        alerts: [],
        roadmap: [],
        industries: [],
        showLiveData: false,
        customDashboard: null
    },

    'agriculture': {
        id: 'agriculture',
        name: 'Agriculture Officer',
        icon: '🌾',
        description: 'Crop irrigation, FPOs, dal mills, commodity prices',
        tabs: ['command', 'baseline', 'roadmap'],
        kpis: ['irrigation', 'credit', 'dalmills'],
        alerts: [5, 6, 7],
        roadmap: ['phase1', 'phase2'],
        industries: [],
        showLiveData: true,
        customDashboard: 'agriculture-crops'
    },

    // Tier 4: Regulatory & Support
    'forest': {
        id: 'forest',
        name: 'Forest Officer',
        icon: '🌲',
        description: 'Forest clearances, compensatory afforestation',
        tabs: ['command'],
        kpis: [],
        alerts: [2],
        roadmap: [],
        industries: ['limestone'],
        showLiveData: false,
        customDashboard: null
    },

    'revenue': {
        id: 'revenue',
        name: 'Revenue Officer',
        icon: '📋',
        description: 'Land acquisition, conversions, mutations',
        tabs: ['command', 'roadmap'],
        kpis: [],
        alerts: [1, 2],
        roadmap: ['all'],
        industries: ['all'],
        showLiveData: false,
        customDashboard: null
    },

    'labour': {
        id: 'labour',
        name: 'Labour Officer',
        icon: '👷',
        description: 'Factory registrations, safety compliance, worker welfare',
        tabs: ['command'],
        kpis: ['jobs'],
        alerts: [3],
        roadmap: ['all'],
        industries: ['all'],
        showLiveData: false,
        customDashboard: null
    },

    // Tier 5: Consolidated View
    'minister': {
        id: 'minister',
        name: "Minister's Dashboard",
        icon: '🏛️',
        description: 'High-level consolidated metrics across all departments',
        tabs: ['command', 'baseline', 'roadmap'],
        kpis: ['all'],
        alerts: ['all'],
        roadmap: ['all'],
        industries: ['all'],
        showLiveData: true,
        customDashboard: 'minister-consolidated'
    }
};

// ============================================
// Data Filtering Functions
// ============================================

/**
 * Filter dashboard data for a specific role
 * @param {string} roleId - The role identifier
 * @param {object} dashboardData - The full dashboard data object
 * @returns {object} Filtered data for the role
 */
function filterDataForRole(roleId, dashboardData) {
    const config = roleConfigs[roleId];
    if (!config) return dashboardData;

    // If 'all' is specified, return everything
    if (config.kpis[0] === 'all' && config.alerts[0] === 'all') {
        return dashboardData;
    }

    const filtered = {
        ...dashboardData,
        kpis: config.kpis[0] === 'all' ? dashboardData.kpis :
              dashboardData.kpis.filter(kpi => config.kpis.includes(kpi.id)),
        alerts: config.alerts[0] === 'all' ? dashboardData.alerts :
                dashboardData.alerts.filter(alert => config.alerts.includes(alert.id)),
        baseline: dashboardData.baseline,
        roadmap: filterRoadmapForRole(config, dashboardData.roadmap),
        alternateIndustries: filterIndustriesForRole(config, dashboardData.alternateIndustries)
    };

    return filtered;
}

/**
 * Filter roadmap phases based on role configuration
 */
function filterRoadmapForRole(config, roadmap) {
    if (!roadmap || config.roadmap[0] === 'all') return roadmap;

    const filtered = {
        ...roadmap,
        phases: {}
    };

    // Only include specified phases
    config.roadmap.forEach(phase => {
        if (roadmap.phases[phase]) {
            filtered.phases[phase] = roadmap.phases[phase];
        }
    });

    return filtered;
}

/**
 * Filter industries based on role configuration
 */
function filterIndustriesForRole(config, alternateIndustries) {
    if (!alternateIndustries || config.industries[0] === 'all') return alternateIndustries;
    if (config.industries.length === 0) return null;

    const filtered = {
        ...alternateIndustries,
        industries: alternateIndustries.industries.filter(industry =>
            config.industries.includes(industry.id)
        )
    };

    return filtered;
}

// ============================================
// Custom Dashboard Renderers
// ============================================

/**
 * Render custom dashboard sections based on role
 */
function renderCustomDashboard(roleId, data) {
    const config = roleConfigs[roleId];
    if (!config || !config.customDashboard) return '';

    switch (config.customDashboard) {
        case 'dc-executive':
            return renderDCExecutiveDashboard(data);
        case 'kiadb-land':
            return renderKIADBLandDashboard(data);
        case 'agriculture-crops':
            return renderAgricultureDashboard(data);
        case 'pwd-roads':
            return renderPWDRoadsDashboard(data);
        case 'khb-housing':
            return renderKHBHousingDashboard(data);
        case 'minister-consolidated':
            return renderMinisterDashboard(data);
        default:
            return '';
    }
}

/**
 * District Collector Executive Summary
 */
function renderDCExecutiveDashboard(data) {
    const topAlerts = data.alerts.slice(0, 3);

    return `
        <div class="custom-section executive-summary">
            <h2 class="section-title">Executive Summary</h2>

            <div class="executive-grid">
                <div class="executive-card">
                    <div class="executive-label">Critical Actions</div>
                    <div class="executive-value">${data.alerts.length}</div>
                    <div class="executive-detail">Requiring immediate attention</div>
                </div>
                <div class="executive-card">
                    <div class="executive-label">Total Investment</div>
                    <div class="executive-value">₹${(data.roadmap.totalInvestment / 100).toFixed(0)}K cr</div>
                    <div class="executive-detail">8-year framework (2026-2034)</div>
                </div>
                <div class="executive-card">
                    <div class="executive-label">Jobs Target</div>
                    <div class="executive-value">${(data.roadmap.jobsToCreate / 1000).toFixed(1)}K</div>
                    <div class="executive-detail">Current: 6.4-8.4K (5%)</div>
                </div>
                <div class="executive-card">
                    <div class="executive-label">District Rank</div>
                    <div class="executive-value">30 → 15</div>
                    <div class="executive-detail">Per capita income target</div>
                </div>
            </div>

            <div class="top-alerts">
                <h3>Top Priority Actions</h3>
                ${topAlerts.map(alert => `
                    <div class="alert-summary ${alert.severity === 'red' ? 'alert-red' : 'alert-yellow'}">
                        <div class="alert-summary-icon">${alert.icon}</div>
                        <div class="alert-summary-content">
                            <div class="alert-summary-title">${alert.title}</div>
                            <div class="alert-summary-deadline">Deadline: ${alert.deadline}</div>
                        </div>
                    </div>
                `).join('')}
            </div>

            ${renderMSMESection()}
        </div>
    `;
}

/**
 * KIADB Land Allocation Dashboard
 */
function renderKIADBLandDashboard(data) {
    const industries = data.alternateIndustries?.industries || [];

    return `
        <div class="custom-section land-allocation">
            <h2 class="section-title">Industrial Land Allocation</h2>

            <table class="land-allocation-table">
                <thead>
                    <tr>
                        <th>Industry</th>
                        <th>Land Required</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Timeline</th>
                    </tr>
                </thead>
                <tbody>
                    ${industries.map(industry => `
                        <tr>
                            <td><strong>${industry.name}</strong></td>
                            <td>${industry.id === 'garments' ? '300 acres' :
                                  industry.id === 'limestone' ? '200 acres (mining)' :
                                  industry.id === 'aerospace' ? '500 acres' :
                                  industry.id === 'pharma' ? '200 acres' : 'TBD'}</td>
                            <td><span class="status-badge status-yellow">Planning</span></td>
                            <td><span class="priority-badge priority-${industry.priority.toLowerCase().replace(' ', '-')}">${industry.priority}</span></td>
                            <td>${industry.timeline.phase1}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>

            <div class="infrastructure-readiness">
                <h3>Infrastructure Readiness Checklist</h3>
                <div class="checklist-grid">
                    <div class="checklist-item">
                        <div class="checklist-label">Power (24×7 Industrial Feeders)</div>
                        <div class="checklist-status status-yellow">In Progress (65%)</div>
                    </div>
                    <div class="checklist-item">
                        <div class="checklist-label">Water Supply</div>
                        <div class="checklist-status status-yellow">In Progress (75%)</div>
                    </div>
                    <div class="checklist-item">
                        <div class="checklist-label">Road Connectivity</div>
                        <div class="checklist-status status-green">Good (80%)</div>
                    </div>
                    <div class="checklist-item">
                        <div class="checklist-label">Waste Management</div>
                        <div class="checklist-status status-red">Planning</div>
                    </div>
                </div>
            </div>

            ${renderMSMESection()}
        </div>
    `;
}

/**
 * Agriculture Crop Irrigation Dashboard
 */
function renderAgricultureDashboard(data) {
    const irrigationKPI = data.kpis.find(k => k.id === 'irrigation');
    const dalmillKPI = data.kpis.find(k => k.id === 'dalmills');

    return `
        <div class="custom-section crop-irrigation">
            <h2 class="section-title">Crop Irrigation Dashboard</h2>

            <div class="crop-grid">
                <div class="crop-card">
                    <div class="crop-name">Tur (Pigeon Pea)</div>
                    <div class="crop-area">Area: 250,000 ha</div>
                    <div class="crop-irrigation">
                        <div class="irrigation-label">Irrigated: 32,500 ha (13%)</div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 13%"></div>
                        </div>
                    </div>
                    <div class="crop-target">Target 2034: 62,500 ha (25%)</div>
                </div>

                <div class="crop-card">
                    <div class="crop-name">Bengal Gram (Chana)</div>
                    <div class="crop-area">Area: 180,000 ha</div>
                    <div class="crop-irrigation">
                        <div class="irrigation-label">Irrigated: 23,400 ha (13%)</div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 13%"></div>
                        </div>
                    </div>
                    <div class="crop-target">Target 2034: 45,000 ha (25%)</div>
                </div>

                <div class="crop-card">
                    <div class="crop-name">Grapes (Premium)</div>
                    <div class="crop-area">Area: 8,000 ha</div>
                    <div class="crop-irrigation">
                        <div class="irrigation-label">Irrigated: 7,200 ha (90%)</div>
                        <div class="progress-bar">
                            <div class="progress-fill status-green" style="width: 90%"></div>
                        </div>
                    </div>
                    <div class="crop-target">Target 2034: 8,000 ha (100%)</div>
                </div>
            </div>

            ${dalmillKPI ? `
            <div class="dal-mill-status">
                <h3>Dal Mill Cluster Progress</h3>
                <div class="dal-mill-metrics">
                    <div class="metric">
                        <div class="metric-value">${dalmillKPI.current}</div>
                        <div class="metric-label">Mills Upgraded</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value">${dalmillKPI.target}</div>
                        <div class="metric-label">Target</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value">${dalmillKPI.percentage}%</div>
                        <div class="metric-label">Progress</div>
                    </div>
                </div>
            </div>
            ` : ''}

            <div class="fpo-tracker">
                <h3>FPO Formation Tracker</h3>
                <div class="fpo-progress">
                    <div class="progress-label">
                        <span>15 / 50 FPOs Formed</span>
                        <span>30%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 30%"></div>
                    </div>
                    <div class="fpo-detail">Farmers covered: 30,000 / 100,000</div>
                </div>
            </div>
        </div>
    `;
}

/**
 * PWD Roads Dashboard
 */
function renderPWDRoadsDashboard(data) {
    return `
        <div class="custom-section road-projects">
            <h2 class="section-title">Road Connectivity Projects</h2>

            <div class="road-overview">
                <div class="road-metric">
                    <div class="metric-value">480 km</div>
                    <div class="metric-label">Completed</div>
                </div>
                <div class="road-metric">
                    <div class="metric-value">600 km</div>
                    <div class="metric-label">Target</div>
                </div>
                <div class="road-metric">
                    <div class="metric-value">80%</div>
                    <div class="metric-label">Progress</div>
                </div>
            </div>

            <div class="road-progress-bar">
                <div class="progress-bar">
                    <div class="progress-fill status-green" style="width: 80%"></div>
                </div>
            </div>

            <h3>Block-wise Breakdown</h3>
            <table class="road-table">
                <thead>
                    <tr>
                        <th>Block</th>
                        <th>Target (km)</th>
                        <th>Completed (km)</th>
                        <th>Progress</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sedam</td>
                        <td>85</td>
                        <td>72</td>
                        <td><span class="status-badge status-green">85%</span></td>
                    </tr>
                    <tr>
                        <td>Afzalpur</td>
                        <td>75</td>
                        <td>58</td>
                        <td><span class="status-badge status-yellow">77%</span></td>
                    </tr>
                    <tr>
                        <td>Chincholi</td>
                        <td>70</td>
                        <td>54</td>
                        <td><span class="status-badge status-yellow">77%</span></td>
                    </tr>
                    <tr>
                        <td>Aland</td>
                        <td>80</td>
                        <td>66</td>
                        <td><span class="status-badge status-green">83%</span></td>
                    </tr>
                    <tr>
                        <td>Jewargi</td>
                        <td>90</td>
                        <td>70</td>
                        <td><span class="status-badge status-yellow">78%</span></td>
                    </tr>
                    <tr>
                        <td>Chittapur</td>
                        <td>65</td>
                        <td>50</td>
                        <td><span class="status-badge status-yellow">77%</span></td>
                    </tr>
                    <tr>
                        <td>Kamalapur</td>
                        <td>70</td>
                        <td>58</td>
                        <td><span class="status-badge status-green">83%</span></td>
                    </tr>
                    <tr>
                        <td>Yedrami</td>
                        <td>65</td>
                        <td>52</td>
                        <td><span class="status-badge status-green">80%</span></td>
                    </tr>
                </tbody>
            </table>

            <div class="budget-utilization">
                <h3>Budget Utilization</h3>
                <div class="budget-metrics">
                    <div class="budget-item">
                        <div class="budget-label">Allocated</div>
                        <div class="budget-value">₹800 cr</div>
                    </div>
                    <div class="budget-item">
                        <div class="budget-label">Spent</div>
                        <div class="budget-value">₹640 cr</div>
                    </div>
                    <div class="budget-item">
                        <div class="budget-label">Utilization</div>
                        <div class="budget-value status-green">80%</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * KHB Housing Dashboard
 */
function renderKHBHousingDashboard(data) {
    return `
        <div class="custom-section housing-progress">
            <h2 class="section-title">Housing Development Progress</h2>

            <div class="housing-overview">
                <h3>PMAY Progress</h3>
                <div class="housing-metrics">
                    <div class="housing-card">
                        <div class="housing-label">Sanctioned</div>
                        <div class="housing-value">12,500</div>
                        <div class="housing-detail">Units approved</div>
                    </div>
                    <div class="housing-card">
                        <div class="housing-label">Grounded</div>
                        <div class="housing-value">8,750</div>
                        <div class="housing-detail">70% of sanctioned</div>
                    </div>
                    <div class="housing-card">
                        <div class="housing-label">Completed</div>
                        <div class="housing-value">5,625</div>
                        <div class="housing-detail">45% of sanctioned</div>
                    </div>
                </div>
            </div>

            <div class="worker-housing">
                <h3>Worker Housing Gap Analysis</h3>
                <div class="gap-analysis">
                    <div class="gap-item">
                        <div class="gap-label">Garment Workers (Expected)</div>
                        <div class="gap-value">26,000</div>
                    </div>
                    <div class="gap-item">
                        <div class="gap-label">Housing Units Required</div>
                        <div class="gap-value">8,000</div>
                        <div class="gap-detail">@ 3-4 workers per unit</div>
                    </div>
                    <div class="gap-item">
                        <div class="gap-label">Current Capacity</div>
                        <div class="gap-value">0</div>
                        <div class="gap-detail status-red">Critical Gap</div>
                    </div>
                </div>
                <div class="housing-action">
                    <p><strong>Action Required:</strong> Plan worker hostels in Sedam/Afzalpur industrial zones</p>
                </div>
            </div>

            <div class="urban-rural-split">
                <h3>Urban vs. Rural Housing</h3>
                <div class="split-metrics">
                    <div class="split-card">
                        <div class="split-label">Urban</div>
                        <div class="split-value">4,500 units</div>
                        <div class="split-percent">36%</div>
                    </div>
                    <div class="split-card">
                        <div class="split-label">Rural</div>
                        <div class="split-value">8,000 units</div>
                        <div class="split-percent">64%</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * Minister's Consolidated Dashboard
 */
function renderMinisterDashboard(data) {
    return `
        <div class="custom-section minister-dashboard">
            <h2 class="section-title">Consolidated District Transformation</h2>

            <div class="minister-overview">
                <div class="minister-card highlight">
                    <div class="minister-icon">🎯</div>
                    <div class="minister-content">
                        <div class="minister-value">Rank 30 → 15</div>
                        <div class="minister-label">Target by 2034</div>
                    </div>
                </div>
                <div class="minister-card">
                    <div class="minister-icon">💰</div>
                    <div class="minister-content">
                        <div class="minister-value">₹20,150 cr</div>
                        <div class="minister-label">Total Investment</div>
                    </div>
                </div>
                <div class="minister-card">
                    <div class="minister-icon">👥</div>
                    <div class="minister-content">
                        <div class="minister-value">156,700</div>
                        <div class="minister-label">Jobs to Create</div>
                    </div>
                </div>
                <div class="minister-card">
                    <div class="minister-icon">📈</div>
                    <div class="minister-content">
                        <div class="minister-value">₹2.50L</div>
                        <div class="minister-label">Per Capita Goal</div>
                    </div>
                </div>
            </div>

            <div class="scheme-tracker">
                <h3>Central vs. State Schemes</h3>
                <div class="scheme-grid">
                    <div class="scheme-card">
                        <div class="scheme-header">
                            <div class="scheme-icon">🇮🇳</div>
                            <div class="scheme-title">Central Schemes</div>
                        </div>
                        <div class="scheme-amount">₹6,270 cr</div>
                        <div class="scheme-percent">35% of total</div>
                        <div class="scheme-list">
                            <div>PM MITRA: ₹390 cr (approved)</div>
                            <div>RIDF: ₹1,100 cr</div>
                            <div>PMKSY: ₹660 cr</div>
                        </div>
                    </div>
                    <div class="scheme-card">
                        <div class="scheme-header">
                            <div class="scheme-icon">🏛️</div>
                            <div class="scheme-title">State Budget</div>
                        </div>
                        <div class="scheme-amount">₹4,070 cr</div>
                        <div class="scheme-percent">23% of total</div>
                        <div class="scheme-list">
                            <div>State schemes</div>
                            <div>Industrial subsidies</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="political-milestones">
                <h3>Key Milestones Timeline</h3>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-date">Q1 2026</div>
                        <div class="timeline-event">PM MITRA MoU signing (₹390cr)</div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-date">2027</div>
                        <div class="timeline-event">First 5 garment factories operational</div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-date">2029</div>
                        <div class="timeline-event">15,000 jobs created milestone</div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-date">2034</div>
                        <div class="timeline-event">Rank 15 target achieved</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * Render MSME Section
 * Shows MSME registration data from Open Government Data Platform
 */
function renderMSMESection() {
    // Check if MSME data is available
    if (typeof msmeData === 'undefined') {
        return '<p class="data-note">MSME data loading...</p>';
    }

    const stats = msmeData.statistics;
    const trends = msmeData.growthTrends;

    // Calculate sector distribution percentages
    const totalMSMEs = stats.total;
    const manufacturingPct = ((stats.bySector.Manufacturing / totalMSMEs) * 100).toFixed(1);
    const servicesPct = ((stats.bySector.Services / totalMSMEs) * 100).toFixed(1);
    const tradePct = ((stats.bySector.Trade / totalMSMEs) * 100).toFixed(1);

    return `
        <div class="custom-section msme-dashboard">
            <h3 class="section-subtitle">
                🏭 MSME Ecosystem Growth
                <span class="data-source-badge">${msmeData.source}</span>
            </h3>

            ${msmeData.note ? `<div class="alert alert-info">
                <strong>Note:</strong> ${msmeData.note}
            </div>` : ''}

            <div class="kpi-grid-3">
                <div class="kpi-card">
                    <div class="kpi-label">Total MSMEs Registered</div>
                    <div class="kpi-value">${totalMSMEs.toLocaleString('en-IN')}</div>
                    <div class="kpi-change positive">${trends ? trends.yearOverYear : '+15.2%'} YoY growth</div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-label">Total Investment</div>
                    <div class="kpi-value">₹${(stats.totalInvestment / 10000000).toFixed(1)} Cr</div>
                    <div class="kpi-detail">Across ${totalMSMEs} registered units</div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-label">Direct Employment</div>
                    <div class="kpi-value">${stats.totalEmployment.toLocaleString('en-IN')}</div>
                    <div class="kpi-detail">Avg ${(stats.totalEmployment / totalMSMEs).toFixed(1)} jobs/unit</div>
                </div>
            </div>

            <div class="msme-breakdown">
                <div class="breakdown-col">
                    <h4>By Sector</h4>
                    <div class="sector-bars">
                        <div class="sector-bar">
                            <div class="sector-label">Manufacturing</div>
                            <div class="sector-progress">
                                <div class="sector-fill" style="width: ${manufacturingPct}%"></div>
                            </div>
                            <div class="sector-value">${stats.bySector.Manufacturing} (${manufacturingPct}%)</div>
                        </div>
                        <div class="sector-bar">
                            <div class="sector-label">Services</div>
                            <div class="sector-progress">
                                <div class="sector-fill" style="width: ${servicesPct}%"></div>
                            </div>
                            <div class="sector-value">${stats.bySector.Services} (${servicesPct}%)</div>
                        </div>
                        <div class="sector-bar">
                            <div class="sector-label">Trade</div>
                            <div class="sector-progress">
                                <div class="sector-fill" style="width: ${tradePct}%"></div>
                            </div>
                            <div class="sector-value">${stats.bySector.Trade} (${tradePct}%)</div>
                        </div>
                    </div>
                </div>

                <div class="breakdown-col">
                    <h4>By Organization Type</h4>
                    <div class="type-list">
                        ${Object.entries(stats.byType).map(([type, count]) => `
                            <div class="type-item">
                                <span class="type-name">${type}</span>
                                <span class="type-count">${count.toLocaleString('en-IN')}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                ${trends ? `
                <div class="breakdown-col">
                    <h4>Growth Trajectory</h4>
                    <div class="growth-stats">
                        <div class="growth-item">
                            <div class="growth-label">Current Total</div>
                            <div class="growth-value">${totalMSMEs.toLocaleString('en-IN')}</div>
                        </div>
                        <div class="growth-item">
                            <div class="growth-label">2032 Target</div>
                            <div class="growth-value">${trends.targetBy2032.toLocaleString('en-IN')}</div>
                        </div>
                        <div class="growth-item">
                            <div class="growth-label">Gap Remaining</div>
                            <div class="growth-value">${trends.gapRemaining.toLocaleString('en-IN')}</div>
                        </div>
                    </div>
                </div>
                ` : ''}
            </div>

            <div class="data-source-note">
                <small>Source: ${msmeData.source} | Last Updated: ${new Date(msmeData.lastUpdated).toLocaleDateString('en-IN')} |
                <a href="${msmeData.sourceUrl}" target="_blank">View Source</a></small>
            </div>
        </div>
    `;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        roleConfigs,
        filterDataForRole,
        renderCustomDashboard,
        renderMSMESection
    };
}

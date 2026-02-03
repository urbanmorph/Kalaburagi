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
        description: 'Law & order for 40K migrant workers, industrial security, crime prevention in industrial areas',
        tabs: ['command', 'baseline', 'roadmap'],
        kpis: ['jobs'],
        alerts: [1, 2],
        roadmap: ['phase1', 'phase2'],
        industries: ['all'],
        showLiveData: false,
        customDashboard: 'sp-security'
    },

    // Tier 2: Infrastructure & Planning
    'tpo': {
        id: 'tpo',
        name: 'Town Planning Officer (KUDA)',
        icon: '🏗️',
        description: 'Urban planning, zoning for 4 industrial clusters, worker housing zones, fast-track approvals',
        tabs: ['command', 'roadmap'],
        kpis: ['jobs', 'income'],
        alerts: [1, 2],
        roadmap: ['phase1', 'phase2', 'phase3'],
        industries: ['all'],
        showLiveData: false,
        customDashboard: 'tpo-planning'
    },

    'khb': {
        id: 'khb',
        name: 'Karnataka Housing Board',
        icon: '🏘️',
        description: 'Worker housing crisis: 8K hostel beds + 5K rental units, PMAY completion, slum rehabilitation',
        tabs: ['command', 'roadmap'],
        kpis: ['jobs', 'income'],
        alerts: [1],
        roadmap: ['phase1', 'phase2'],
        industries: ['all'],
        showLiveData: false,
        customDashboard: 'khb-housing'
    },

    'beo': {
        id: 'beo',
        name: 'Block Education Officer',
        icon: '📚',
        description: 'Education infrastructure, enrollment, skill development, school-to-employment pipeline',
        tabs: ['command', 'roadmap'],
        kpis: ['jobs', 'income'],
        alerts: [],
        roadmap: ['phase2'],
        industries: ['garments', 'aerospace', 'pharma', 'limestone'],
        showLiveData: false,
        customDashboard: 'beo-education'
    },

    'municipal-commissioner': {
        id: 'municipal-commissioner',
        name: 'Municipal Commissioner',
        icon: '🏛️',
        description: 'Urban administration, infrastructure, housing, sanitation, city services',
        tabs: ['command', 'roadmap'],
        kpis: ['jobs', 'income'],
        alerts: [1],
        roadmap: ['phase1', 'phase2', 'phase3'],
        industries: ['garments', 'aerospace', 'pharma'],
        showLiveData: false,
        customDashboard: 'municipal-commissioner-urban'
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
        description: 'Occupational health for 156K jobs, industrial worker clinics, PHCs near industrial areas',
        tabs: ['command', 'roadmap'],
        kpis: ['jobs'],
        alerts: [],
        roadmap: ['phase1', 'phase2'],
        industries: ['all'],
        showLiveData: false,
        customDashboard: 'health-occupational'
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
        description: 'Factory safety for 156K jobs, compliance inspections, worker welfare, dispute resolution',
        tabs: ['command', 'roadmap'],
        kpis: ['jobs'],
        alerts: [3],
        roadmap: ['all'],
        industries: ['all'],
        showLiveData: false,
        customDashboard: 'labour-safety'
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
        case 'municipal-commissioner-urban':
            return renderMunicipalCommissionerDashboard(data);
        case 'beo-education':
            return renderBEODashboard(data);
        case 'tpo-planning':
            return renderTPODashboard(data);
        case 'khb-housing':
            return renderKHBHousingDashboard(data);
        case 'sp-security':
            return renderSPDashboard(data);
        case 'health-occupational':
            return renderHealthDashboard(data);
        case 'labour-safety':
            return renderLabourDashboard(data);
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
            ${renderUdyogMitraSection()}
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

            ${renderFPOSection()}
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
 * Render Udyog Mitra Investment Pipeline Section
 * Shows investment proposals, clearances, and bottlenecks
 */
function renderUdyogMitraSection() {
    // Check if Udyog Mitra data is available
    if (typeof udyogMitraData === 'undefined') {
        return '<p class="data-note">Investment data loading...</p>';
    }

    const summary = udyogMitraData.summary;
    const efficiency = udyogMitraData.clearanceEfficiency;
    const bottlenecks = udyogMitraData.bottlenecks;

    return `
        <div class="custom-section investment-pipeline">
            <h3 class="section-subtitle">
                💼 Investment Pipeline & Clearances
                <span class="data-source-badge">${udyogMitraData.source}</span>
            </h3>

            ${udyogMitraData.note ? `<div class="alert alert-info">
                <strong>Note:</strong> ${udyogMitraData.note}
            </div>` : ''}

            <div class="kpi-grid-3">
                <div class="kpi-card">
                    <div class="kpi-label">Total Proposals</div>
                    <div class="kpi-value">${summary.totalProposals}</div>
                    <div class="kpi-detail">${summary.approvedProposals} approved, ${summary.pendingProposals} pending</div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-label">Proposed Investment</div>
                    <div class="kpi-value">₹${(summary.proposedInvestment / 10000000).toFixed(0)} Cr</div>
                    <div class="kpi-detail">Realized: ₹${(summary.realizedInvestment / 10000000).toFixed(0)} cr (${summary.realizationRate.toFixed(1)}%)</div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-label">Projected Employment</div>
                    <div class="kpi-value">${summary.projectedEmployment.toLocaleString('en-IN')}</div>
                    <div class="kpi-detail">From approved proposals</div>
                </div>
            </div>

            <div class="investment-breakdown">
                <div class="breakdown-section">
                    <h4>Investment by Sector</h4>
                    <div class="sector-bars">
                        ${Object.entries(udyogMitraData.proposalsBySector).map(([sector, data]) => `
                            <div class="sector-bar">
                                <div class="sector-label">${sector}</div>
                                <div class="sector-stats">
                                    <span>${data.count} proposals</span>
                                    <span>₹${(data.investment / 10000000).toFixed(0)}cr</span>
                                    <span>${data.employment.toLocaleString('en-IN')} jobs</span>
                                </div>
                                <div class="sector-progress">
                                    <div class="sector-fill approved" style="width: ${(data.status.approved / data.count * 100)}%" title="Approved: ${data.status.approved}"></div>
                                    <div class="sector-fill pending" style="width: ${(data.status.pending / data.count * 100)}%" title="Pending: ${data.status.pending}"></div>
                                    <div class="sector-fill rejected" style="width: ${(data.status.rejected / data.count * 100)}%" title="Rejected: ${data.status.rejected}"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="breakdown-section">
                    <h4>Clearance Efficiency</h4>
                    <div class="efficiency-metrics">
                        <div class="metric-row">
                            <span class="metric-label">Avg Processing Time</span>
                            <span class="metric-value ${efficiency.averageProcessingTime > efficiency.targetProcessingTime ? 'status-red' : 'status-green'}">
                                ${efficiency.averageProcessingTime} days
                            </span>
                        </div>
                        <div class="metric-row">
                            <span class="metric-label">Target Time</span>
                            <span class="metric-value">${efficiency.targetProcessingTime} days</span>
                        </div>
                        <div class="metric-row">
                            <span class="metric-label">Within 30 Days</span>
                            <span class="metric-value status-green">${efficiency.within30Days} approvals</span>
                        </div>
                        <div class="metric-row">
                            <span class="metric-label">Within 90 Days</span>
                            <span class="metric-value status-yellow">${efficiency.within90Days} approvals</span>
                        </div>
                        <div class="metric-row">
                            <span class="metric-label">Beyond 90 Days</span>
                            <span class="metric-value status-red">${efficiency.beyond90Days} approvals</span>
                        </div>
                    </div>
                </div>
            </div>

            ${bottlenecks && bottlenecks.length > 0 ? `
            <div class="bottlenecks-section">
                <h4>⚠️ Clearance Bottlenecks</h4>
                <div class="bottleneck-list">
                    ${bottlenecks.map(bottleneck => `
                        <div class="bottleneck-item">
                            <div class="bottleneck-header">
                                <span class="bottleneck-stage">${bottleneck.stage}</span>
                                <span class="bottleneck-delay">${bottleneck.avgDelay} days avg delay</span>
                            </div>
                            <div class="bottleneck-details">
                                <span>${bottleneck.delayedProposals} proposals affected</span>
                                <span class="bottleneck-impact">Impact: ${bottleneck.impact}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}

            <div class="data-source-note">
                <small>Source: ${udyogMitraData.source} | Last Updated: ${new Date(udyogMitraData.lastUpdated).toLocaleDateString('en-IN')} |
                <a href="${udyogMitraData.sourceUrl}" target="_blank">View Source</a></small>
            </div>
        </div>
    `;
}

/**
 * Render FPO Section
 * Shows Farmer Producer Organization data and formation progress
 */
function renderFPOSection() {
    // Check if FPO data is available
    if (typeof fpoData === 'undefined') {
        return '<p class="data-note">FPO data loading...</p>';
    }

    const summary = fpoData.summary;
    const financial = fpoData.financialMetrics;

    return `
        <div class="custom-section fpo-dashboard">
            <h3 class="section-subtitle">
                🌾 FPO Formation & Farmer Integration
                <span class="data-source-badge">${fpoData.source}</span>
            </h3>

            ${fpoData.note ? `<div class="alert alert-info">
                <strong>Note:</strong> ${fpoData.note}
            </div>` : ''}

            <div class="fpo-progress-card">
                <div class="fpo-progress-header">
                    <h4>FPO Formation Progress</h4>
                    <div class="progress-percentage">${summary.percentComplete}%</div>
                </div>
                <div class="progress-bar large">
                    <div class="progress-fill" style="width: ${summary.percentComplete}%"></div>
                </div>
                <div class="progress-stats">
                    <div class="stat-item">
                        <span class="stat-label">Current</span>
                        <span class="stat-value">${summary.totalFPOs}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Target (2032)</span>
                        <span class="stat-value">${summary.targetBy2032}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Gap Remaining</span>
                        <span class="stat-value">${summary.gapRemaining}</span>
                    </div>
                </div>
            </div>

            <div class="kpi-grid-3">
                <div class="kpi-card">
                    <div class="kpi-label">Active FPOs</div>
                    <div class="kpi-value">${summary.activeFPOs}</div>
                    <div class="kpi-detail">${summary.underFormationFPOs} under formation</div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-label">Member Farmers</div>
                    <div class="kpi-value">${financial.totalMemberFarmers.toLocaleString('en-IN')}</div>
                    <div class="kpi-detail">Avg ${financial.averageMembersPerFPO} per FPO</div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-label">Annual Turnover</div>
                    <div class="kpi-value">₹${(financial.totalAnnualTurnover / 10000000).toFixed(1)} Cr</div>
                    <div class="kpi-detail">Avg ₹${(financial.averageTurnoverPerFPO / 10000000).toFixed(2)} cr/FPO</div>
                </div>
            </div>

            <div class="fpo-breakdown">
                <div class="breakdown-col">
                    <h4>By Taluk</h4>
                    <div class="type-list">
                        ${Object.entries(fpoData.byTaluk).map(([taluk, count]) => `
                            <div class="type-item">
                                <span class="type-name">${taluk}</span>
                                <span class="type-count">${count}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="breakdown-col">
                    <h4>By Commodity Focus</h4>
                    <div class="type-list">
                        ${Object.entries(fpoData.byCommodity).map(([commodity, count]) => `
                            <div class="type-item">
                                <span class="type-name">${commodity}</span>
                                <span class="type-count">${count}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="breakdown-col">
                    <h4>Roadmap Targets</h4>
                    <div class="growth-stats">
                        ${Object.entries(fpoData.roadmapTargets).map(([phase, details]) => `
                            <div class="growth-item">
                                <div class="growth-label">${details.years}</div>
                                <div class="growth-value">+${details.targetNew} FPOs</div>
                                <div class="growth-focus">${details.focus}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div class="data-source-note">
                <small>Source: ${fpoData.source} | Last Updated: ${new Date(fpoData.lastUpdated).toLocaleDateString('en-IN')} |
                <a href="${fpoData.sourceUrl}" target="_blank">View Source</a></small>
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

/**
 * Municipal Commissioner Urban Services Dashboard
 */
function renderMunicipalCommissionerDashboard(data) {
    // Calculate urban development metrics
    const cityPopulation = 550000; // 5.5 lakh (2024 estimate)
    const municipalArea = 62.5; // sq km
    const numWards = 55;
    const roadNetwork = 753; // km

    // Housing targets from Framework
    const pmayTarget = 15000;
    const pmayCompleted = 3200;
    const pmayProgress = ((pmayCompleted / pmayTarget) * 100).toFixed(1);

    // Worker housing for industries (from PM MITRA)
    const workerHousingNeeded = 8000; // beds
    const workerHousingAvailable = 850;
    const housingGap = workerHousingNeeded - workerHousingAvailable;

    // Infrastructure metrics
    const waterSupply24x7Coverage = 45; // % of wards
    const sanitationCoverage = 78; // % households with toilets
    const solidWasteCollection = 85; // % coverage
    const propertyTaxCollection = 68; // % efficiency

    // Jobs impact (from industries)
    const industrialJobsTarget = 156700;
    const currentJobs = 7400;

    return `
        <div class="custom-dashboard municipal-commissioner-dashboard">
            <div class="dashboard-header">
                <h2>🏛️ Municipal Commissioner - Urban Services Dashboard</h2>
                <p class="dashboard-subtitle">Kalaburagi City Corporation | Managing urban infrastructure for ${(cityPopulation/100000).toFixed(1)} lakh citizens</p>
            </div>

            <!-- City Overview Cards -->
            <div class="city-overview-grid">
                <div class="city-stat-card">
                    <div class="stat-icon">👥</div>
                    <div class="stat-content">
                        <div class="stat-value">${(cityPopulation/100000).toFixed(1)}L</div>
                        <div class="stat-label">City Population</div>
                        <div class="stat-meta">${numWards} wards | ${municipalArea} sq km</div>
                    </div>
                </div>

                <div class="city-stat-card">
                    <div class="stat-icon">🛣️</div>
                    <div class="stat-content">
                        <div class="stat-value">${roadNetwork} km</div>
                        <div class="stat-label">Road Network</div>
                        <div class="stat-meta">Urban connectivity</div>
                    </div>
                </div>

                <div class="city-stat-card alert-yellow">
                    <div class="stat-icon">🏭</div>
                    <div class="stat-content">
                        <div class="stat-value">${(industrialJobsTarget/1000).toFixed(0)}K</div>
                        <div class="stat-label">Jobs Target 2034</div>
                        <div class="stat-meta">Urban services must scale</div>
                    </div>
                </div>

                <div class="city-stat-card">
                    <div class="stat-icon">💰</div>
                    <div class="stat-content">
                        <div class="stat-value">${propertyTaxCollection}%</div>
                        <div class="stat-label">Tax Collection</div>
                        <div class="stat-meta">Property tax efficiency</div>
                    </div>
                </div>
            </div>

            <!-- Critical Urban Services -->
            <section class="dashboard-section">
                <h3 class="section-heading">Critical Urban Services Status</h3>

                <div class="services-grid">
                    <!-- Water Supply -->
                    <div class="service-card ${waterSupply24x7Coverage < 50 ? 'alert-yellow' : 'alert-green'}">
                        <div class="service-header">
                            <span class="service-icon">💧</span>
                            <h4>Water Supply (24x7)</h4>
                        </div>
                        <div class="service-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${waterSupply24x7Coverage}%"></div>
                            </div>
                            <div class="progress-labels">
                                <span>${waterSupply24x7Coverage}% wards covered</span>
                                <span>Target: 100% by 2029</span>
                            </div>
                        </div>
                        <div class="service-actions">
                            <div class="action-item">⚠️ Need 10 MLD additional supply for industrial expansion</div>
                            <div class="action-item">📋 AMRUT project implementation pending</div>
                        </div>
                    </div>

                    <!-- Sanitation -->
                    <div class="service-card ${sanitationCoverage < 90 ? 'alert-yellow' : 'alert-green'}">
                        <div class="service-header">
                            <span class="service-icon">🚽</span>
                            <h4>Sanitation & Sewerage</h4>
                        </div>
                        <div class="service-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${sanitationCoverage}%"></div>
                            </div>
                            <div class="progress-labels">
                                <span>${sanitationCoverage}% household toilets</span>
                                <span>Target: 100% by 2027</span>
                            </div>
                        </div>
                        <div class="service-actions">
                            <div class="action-item">✓ Swachh Bharat Mission ongoing</div>
                            <div class="action-item">📋 Drainage upgrades needed in 12 wards</div>
                        </div>
                    </div>

                    <!-- Solid Waste Management -->
                    <div class="service-card ${solidWasteCollection < 90 ? 'alert-yellow' : 'alert-green'}">
                        <div class="service-header">
                            <span class="service-icon">♻️</span>
                            <h4>Solid Waste Management</h4>
                        </div>
                        <div class="service-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${solidWasteCollection}%"></div>
                            </div>
                            <div class="progress-labels">
                                <span>${solidWasteCollection}% door-to-door collection</span>
                                <span>Target: 100% coverage</span>
                            </div>
                        </div>
                        <div class="service-actions">
                            <div class="action-item">⚠️ Scientific disposal: 65% (need waste-to-energy plant)</div>
                            <div class="action-item">📋 Segregation at source: 40%</div>
                        </div>
                    </div>

                    <!-- Roads & Infrastructure -->
                    <div class="service-card">
                        <div class="service-header">
                            <span class="service-icon">🛣️</span>
                            <h4>Roads & Street Infrastructure</h4>
                        </div>
                        <div class="service-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 72%"></div>
                            </div>
                            <div class="progress-labels">
                                <span>72% roads in good condition</span>
                                <span>Target: 90% by 2028</span>
                            </div>
                        </div>
                        <div class="service-actions">
                            <div class="action-item">⚠️ Bus Priority Lane (₹19.07 cr) - implementation pending</div>
                            <div class="action-item">📋 Approach roads to industrial areas need upgrades</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Housing Development -->
            <section class="dashboard-section">
                <h3 class="section-heading">Housing & Urban Development</h3>

                <div class="housing-grid">
                    <!-- PMAY Housing -->
                    <div class="housing-card">
                        <div class="housing-header">
                            <h4>🏘️ PMAY Urban Housing</h4>
                            <span class="housing-status status-yellow">In Progress</span>
                        </div>
                        <div class="housing-stats">
                            <div class="housing-metric">
                                <span class="metric-label">Sanctioned</span>
                                <span class="metric-value">${pmayTarget.toLocaleString('en-IN')}</span>
                            </div>
                            <div class="housing-metric">
                                <span class="metric-label">Completed</span>
                                <span class="metric-value">${pmayCompleted.toLocaleString('en-IN')}</span>
                            </div>
                            <div class="housing-metric">
                                <span class="metric-label">Progress</span>
                                <span class="metric-value">${pmayProgress}%</span>
                            </div>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${pmayProgress}%"></div>
                        </div>
                        <div class="housing-note">Target: 80% completion by 2030</div>
                    </div>

                    <!-- Worker Housing -->
                    <div class="housing-card alert-red">
                        <div class="housing-header">
                            <h4>🏭 Industrial Worker Housing</h4>
                            <span class="housing-status status-red">Critical Gap</span>
                        </div>
                        <div class="housing-stats">
                            <div class="housing-metric">
                                <span class="metric-label">Required (2034)</span>
                                <span class="metric-value">${workerHousingNeeded.toLocaleString('en-IN')} beds</span>
                            </div>
                            <div class="housing-metric">
                                <span class="metric-label">Available</span>
                                <span class="metric-value">${workerHousingAvailable}</span>
                            </div>
                            <div class="housing-metric alert-red">
                                <span class="metric-label">Gap</span>
                                <span class="metric-value">${housingGap.toLocaleString('en-IN')}</span>
                            </div>
                        </div>
                        <div class="housing-actions">
                            <div class="action-urgent">⚠️ URGENT: PM MITRA will bring 26,000 garment workers by 2034</div>
                            <div class="action-item">📋 Coordinate with KHB for worker hostel zones near industrial areas</div>
                            <div class="action-item">📋 Encourage private dormitory development (PPP model)</div>
                        </div>
                    </div>

                    <!-- Slum Development -->
                    <div class="housing-card alert-yellow">
                        <div class="housing-header">
                            <h4>🏚️ Slum Upgradation</h4>
                            <span class="housing-status status-yellow">Active</span>
                        </div>
                        <div class="housing-note">
                            Significant slum population requiring pucca housing, water, sanitation, and electricity.
                        </div>
                        <div class="housing-actions">
                            <div class="action-item">✓ Survey under PMAY in 8 major slum areas</div>
                            <div class="action-item">📋 Basic services extension to 15 informal settlements</div>
                            <div class="action-item">📋 In-situ development vs relocation assessment ongoing</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Industrial Coordination -->
            <section class="dashboard-section">
                <h3 class="section-heading">Industrial Growth Support (2026-2034)</h3>

                <div class="industrial-support-card">
                    <div class="support-header">
                        <h4>🏭 Municipal Role in Industrial Expansion</h4>
                        <p>Supporting ${(industrialJobsTarget/1000).toFixed(0)}K new industrial jobs requires major urban service expansion</p>
                    </div>

                    <div class="support-grid">
                        <div class="support-item">
                            <span class="support-icon">👔</span>
                            <div class="support-content">
                                <div class="support-title">PM MITRA Textile Park</div>
                                <div class="support-detail">26,000 workers → 8,000 hostel beds + transport</div>
                                <div class="support-action">Coordinate: Worker housing zones, bus connectivity</div>
                            </div>
                        </div>

                        <div class="support-item">
                            <span class="support-icon">✈️</span>
                            <div class="support-content">
                                <div class="support-title">Aerospace Cluster (Sedam)</div>
                                <div class="support-detail">12,000 jobs → skilled workforce housing needed</div>
                                <div class="support-action">Coordinate: Approach road upgrades, residential zones</div>
                            </div>
                        </div>

                        <div class="support-item">
                            <span class="support-icon">💊</span>
                            <div class="support-content">
                                <div class="support-title">Pharma Packaging</div>
                                <div class="support-detail">6,700 jobs → quality housing for skilled workers</div>
                                <div class="support-action">Coordinate: Urban amenities near industrial areas</div>
                            </div>
                        </div>
                    </div>

                    <div class="support-summary">
                        <strong>Municipal Priorities for Industrial Support:</strong>
                        <ul>
                            <li>Upgrade 45 km approach roads to KIADB industrial areas (₹125 cr needed)</li>
                            <li>Ensure 10 MLD additional water supply for industries and workers</li>
                            <li>Develop 3 worker housing zones near industrial clusters (8,000+ capacity)</li>
                            <li>Expand public transport: 25 buses for industrial area connectivity</li>
                            <li>Health facilities: 2 new urban PHCs near industrial zones</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Budget & Revenue -->
            <section class="dashboard-section">
                <h3 class="section-heading">Municipal Finance & Revenue</h3>

                <div class="finance-grid">
                    <div class="finance-card">
                        <h4>💰 Revenue Sources</h4>
                        <div class="revenue-list">
                            <div class="revenue-item">
                                <span class="revenue-source">Property Tax</span>
                                <span class="revenue-amount">₹45 cr/year</span>
                                <span class="revenue-efficiency">${propertyTaxCollection}% collection</span>
                            </div>
                            <div class="revenue-item">
                                <span class="revenue-source">User Charges (water, etc.)</span>
                                <span class="revenue-amount">₹18 cr/year</span>
                                <span class="revenue-efficiency">72% collection</span>
                            </div>
                            <div class="revenue-item">
                                <span class="revenue-source">State Grants</span>
                                <span class="revenue-amount">₹35 cr/year</span>
                                <span class="revenue-efficiency">Variable</span>
                            </div>
                            <div class="revenue-item">
                                <span class="revenue-source">Central Schemes</span>
                                <span class="revenue-amount">₹28 cr/year</span>
                                <span class="revenue-efficiency">AMRUT, SBM</span>
                            </div>
                        </div>
                        <div class="revenue-total">
                            <strong>Total Annual Budget: ~₹126 crore</strong>
                        </div>
                    </div>

                    <div class="finance-card">
                        <h4>📊 Budget Allocation Priorities</h4>
                        <div class="allocation-bars">
                            <div class="allocation-bar">
                                <div class="allocation-label">Water & Sanitation</div>
                                <div class="allocation-progress">
                                    <div class="allocation-fill" style="width: 35%; background: #3b82f6;"></div>
                                </div>
                                <div class="allocation-value">35% (₹44 cr)</div>
                            </div>
                            <div class="allocation-bar">
                                <div class="allocation-label">Roads & Infrastructure</div>
                                <div class="allocation-progress">
                                    <div class="allocation-fill" style="width: 25%; background: #8b5cf6;"></div>
                                </div>
                                <div class="allocation-value">25% (₹32 cr)</div>
                            </div>
                            <div class="allocation-bar">
                                <div class="allocation-label">Solid Waste Management</div>
                                <div class="allocation-progress">
                                    <div class="allocation-fill" style="width: 15%; background: #10b981;"></div>
                                </div>
                                <div class="allocation-value">15% (₹19 cr)</div>
                            </div>
                            <div class="allocation-bar">
                                <div class="allocation-label">Health & Public Services</div>
                                <div class="allocation-progress">
                                    <div class="allocation-fill" style="width: 12%; background: #f59e0b;"></div>
                                </div>
                                <div class="allocation-value">12% (₹15 cr)</div>
                            </div>
                            <div class="allocation-bar">
                                <div class="allocation-label">Administration & Other</div>
                                <div class="allocation-progress">
                                    <div class="allocation-fill" style="width: 13%; background: #6b7280;"></div>
                                </div>
                                <div class="allocation-value">13% (₹16 cr)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Action Items -->
            <section class="dashboard-section">
                <h3 class="section-heading">⚡ Priority Actions (Next 90 Days)</h3>

                <div class="actions-list">
                    <div class="action-card urgent">
                        <div class="action-priority">URGENT</div>
                        <div class="action-content">
                            <div class="action-title">Worker Housing Strategy for PM MITRA</div>
                            <div class="action-desc">Finalize 8,000-bed hostel development plan with KHB and private developers. First 2,000 beds needed by Q4 2026.</div>
                            <div class="action-owner">Coordinate: KHB, KIADB, Private Developers</div>
                        </div>
                    </div>

                    <div class="action-card high">
                        <div class="action-priority">HIGH</div>
                        <div class="action-content">
                            <div class="action-title">AMRUT Water Supply Project Acceleration</div>
                            <div class="action-desc">Release pending funds and expedite 24x7 water supply project. Target: 20 more wards by Dec 2026.</div>
                            <div class="action-owner">Coordinate: KUWSDB, State AMRUT Cell</div>
                        </div>
                    </div>

                    <div class="action-card high">
                        <div class="action-priority">HIGH</div>
                        <div class="action-content">
                            <div class="action-title">Industrial Area Road Upgrades</div>
                            <div class="action-desc">DPR for 45 km approach roads to KIADB areas (₹125 cr). Essential for aerospace and pharma cluster access.</div>
                            <div class="action-owner">Coordinate: PWD, KIADB, Industries Dept</div>
                        </div>
                    </div>

                    <div class="action-card medium">
                        <div class="action-priority">MEDIUM</div>
                        <div class="action-content">
                            <div class="action-title">Property Tax Collection Drive</div>
                            <div class="action-desc">Launch digitization and amnesty scheme. Target: Increase collection from 68% to 80% by March 2027.</div>
                            <div class="action-owner">Revenue Department, IT Cell</div>
                        </div>
                    </div>

                    <div class="action-card medium">
                        <div class="action-priority">MEDIUM</div>
                        <div class="action-content">
                            <div class="action-title">Slum Survey & PMAY Acceleration</div>
                            <div class="action-desc">Complete beneficiary survey in 8 major slum areas. Fast-track 5,000 pending PMAY sanctions.</div>
                            <div class="action-owner">Housing Cell, Ward Officers</div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="dashboard-footer">
                <p><strong>Data Sources:</strong> Kalaburagi City Corporation Records, PMAY Portal, AMRUT MIS, Framework v2.0</p>
                <p><strong>Role Context:</strong> As Municipal Commissioner, you are the chief executive officer responsible for urban services delivery to 5.5 lakh citizens and supporting 156,700 new industrial jobs by 2034. Your coordination with district administration, state departments, and industrial bodies is critical to Kalaburagi's transformation.</p>
            </div>
        </div>
    `;
}

/**
 * Block Education Officer - Education & Skills Dashboard
 */
function renderBEODashboard(data) {
    // Education infrastructure baseline
    const totalSchools = 4109;
    const primarySchools = 1177;
    const upperPrimarySchools = 1685;
    const totalEnrollment = 135000;
    const pupilTeacherRatio = 29;
    const literacyRate = 64.85;
    const stateAvgLiteracy = 75.6;

    // Framework goals relevant to education
    const totalJobsTarget = 156700;
    const skillBudget = 600; // crores in Phase 2

    // Industry-specific skill requirements
    const industries = [
        { name: 'Garments & Textiles', jobs: 26000, skillsNeeded: 'Sewing, quality control, basic English', annualTarget: 5200 },
        { name: 'Aerospace Components', jobs: 12000, skillsNeeded: 'STEM foundation, technical drawing, precision', annualTarget: 2400 },
        { name: 'Pharmaceutical Packaging', jobs: 6700, skillsNeeded: 'Chemistry, hygiene, documentation', annualTarget: 1340 },
        { name: 'Limestone & Cement', jobs: 12000, skillsNeeded: 'Safety, physical fitness, numerical skills', annualTarget: 2400 }
    ];

    // Education-to-employment pipeline gaps
    const currentClass10Pass = 18000; // per year
    const targetClass10Pass = 22000;
    const currentITIEnrollment = 2200; // Kalaburagi students per year
    const targetITIEnrollment = 8000;
    const currentDropoutRate = 35; // percentage
    const targetDropoutRate = 15;

    // Block-wise data
    const blocks = [
        { name: 'Chittapur', schools: 339, ptrPrimary: 25, ptrUpperPrimary: 32, focus: 'High enrollment maintenance' },
        { name: 'Kalaburagi South', schools: 178, ptrPrimary: 22, ptrUpperPrimary: 28, focus: 'Urban infrastructure strain' },
        { name: 'Jewargi', schools: 285, ptrPrimary: 28, ptrUpperPrimary: 44, focus: 'URGENT: Teacher shortage' },
        { name: 'Aland', schools: 245, ptrPrimary: 17, ptrUpperPrimary: 26, focus: 'Best PTR, rural access issues' },
        { name: 'Afzalpur', schools: 298, ptrPrimary: 24, ptrUpperPrimary: 35, focus: 'Male enrollment campaign needed' },
        { name: 'Chincholi', schools: 312, ptrPrimary: 26, ptrUpperPrimary: 38, focus: 'Infrastructure upgrades' },
        { name: 'Sedam', schools: 352, ptrPrimary: 27, ptrUpperPrimary: 36, focus: 'Industrial skills training hub' }
    ];

    return `
        <div class="custom-dashboard beo-dashboard">
            <div class="dashboard-header">
                <h2>📚 Block Education Officer - Education & Skills Pipeline Dashboard</h2>
                <p class="dashboard-subtitle">Building the skilled workforce for ${(totalJobsTarget/1000).toFixed(0)}K industrial jobs by 2034</p>
            </div>

            <!-- Education Infrastructure Overview -->
            <div class="edu-overview-grid">
                <div class="edu-stat-card">
                    <div class="stat-icon">🏫</div>
                    <div class="stat-content">
                        <div class="stat-value">${totalSchools.toLocaleString('en-IN')}</div>
                        <div class="stat-label">Total Schools</div>
                        <div class="stat-meta">${primarySchools} primary | ${upperPrimarySchools} upper-primary</div>
                    </div>
                </div>

                <div class="edu-stat-card">
                    <div class="stat-icon">👨‍🎓</div>
                    <div class="stat-content">
                        <div class="stat-value">${(totalEnrollment/1000).toFixed(0)}K</div>
                        <div class="stat-label">Student Enrollment</div>
                        <div class="stat-meta">Elementary level (Classes 1-8)</div>
                    </div>
                </div>

                <div class="edu-stat-card">
                    <div class="stat-icon">👩‍🏫</div>
                    <div class="stat-content">
                        <div class="stat-value">${pupilTeacherRatio}:1</div>
                        <div class="stat-label">Pupil-Teacher Ratio</div>
                        <div class="stat-meta">RTE Mandate: 30:1 (meets standard)</div>
                    </div>
                </div>

                <div class="edu-stat-card alert-yellow">
                    <div class="stat-icon">📖</div>
                    <div class="stat-content">
                        <div class="stat-value">${literacyRate}%</div>
                        <div class="stat-label">District Literacy</div>
                        <div class="stat-meta">State avg: ${stateAvgLiteracy}% (gap: ${(stateAvgLiteracy - literacyRate).toFixed(1)}%)</div>
                    </div>
                </div>
            </div>

            <!-- THE CRITICAL CHALLENGE -->
            <section class="dashboard-section alert-section">
                <div class="alert-banner alert-red">
                    <div class="alert-icon">⚠️</div>
                    <div class="alert-content">
                        <h3>THE EDUCATION-EMPLOYMENT PIPELINE CRISIS</h3>
                        <p><strong>Framework Goal:</strong> Create ${(totalJobsTarget/1000).toFixed(0)}K industrial jobs by 2034</p>
                        <p><strong>Reality:</strong> Current education system produces only 2,200 ITI-skilled youth/year</p>
                        <p><strong>Required:</strong> 15,000 industry-ready skilled workers annually by 2030</p>
                        <p><strong>Gap:</strong> 12,800 skilled workers/year shortfall → Industries will fail without your action</p>
                    </div>
                </div>
            </section>

            <!-- Industry Skill Requirements -->
            <section class="dashboard-section">
                <h3 class="section-heading">Industry-Specific Skill Requirements (Your Responsibility)</h3>

                <div class="industry-skills-grid">
                    ${industries.map(industry => `
                        <div class="industry-skill-card">
                            <div class="industry-header">
                                <h4>${industry.name}</h4>
                                <span class="jobs-badge">${(industry.jobs/1000).toFixed(0)}K jobs</span>
                            </div>
                            <div class="skill-requirements">
                                <div class="skill-label">Skills Needed:</div>
                                <div class="skill-list">${industry.skillsNeeded}</div>
                            </div>
                            <div class="annual-target">
                                <span class="target-label">Annual Target:</span>
                                <span class="target-value">${industry.annualTarget.toLocaleString('en-IN')} skilled youth/year</span>
                            </div>
                            <div class="education-actions">
                                <strong>BEO Action Required:</strong>
                                ${industry.name === 'Garments & Textiles' ? `
                                    <ul>
                                        <li>Introduce pre-vocational sewing in 15 model schools (Classes 8-10)</li>
                                        <li>Basic English proficiency programs for factory communication</li>
                                        <li>Quality mindset training (attention to detail)</li>
                                        <li>Partner with NTTF for curriculum</li>
                                    </ul>
                                ` : industry.name === 'Aerospace Components' ? `
                                    <ul>
                                        <li>Recruit 150 science teachers for rural schools (25% current vacancy)</li>
                                        <li>STEM camps with VTU partnership</li>
                                        <li>Establish 5 "Aerospace Prep" schools in Sedam block</li>
                                        <li>Technical drawing as elective subject</li>
                                    </ul>
                                ` : industry.name === 'Pharmaceutical Packaging' ? `
                                    <ul>
                                        <li>Upgrade science labs in 25 schools near industrial areas</li>
                                        <li>Guest lectures from pharma professionals</li>
                                        <li>Hygiene and cleanliness discipline programs</li>
                                        <li>Documentation skills training</li>
                                    </ul>
                                ` : `
                                    <ul>
                                        <li>Safety education modules in Classes 8-10</li>
                                        <li>School visits to mining sites (safety protocols)</li>
                                        <li>Physical fitness programs</li>
                                        <li>Numerical skills emphasis (measurements)</li>
                                    </ul>
                                `}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- Education Pipeline Gaps -->
            <section class="dashboard-section">
                <h3 class="section-heading">Critical Pipeline Gaps (2026-2034)</h3>

                <div class="pipeline-grid">
                    <div class="pipeline-card alert-yellow">
                        <div class="pipeline-header">
                            <span class="pipeline-icon">🎓</span>
                            <h4>Class 10 Completion</h4>
                        </div>
                        <div class="pipeline-stats">
                            <div class="pipeline-current">
                                <span class="stat-label">Current</span>
                                <span class="stat-value">${currentClass10Pass.toLocaleString('en-IN')}/year</span>
                            </div>
                            <div class="pipeline-arrow">→</div>
                            <div class="pipeline-target">
                                <span class="stat-label">Target (2030)</span>
                                <span class="stat-value">${targetClass10Pass.toLocaleString('en-IN')}/year</span>
                            </div>
                        </div>
                        <div class="pipeline-gap">
                            <strong>Gap:</strong> +${(targetClass10Pass - currentClass10Pass).toLocaleString('en-IN')} students/year
                        </div>
                        <div class="pipeline-action">
                            <strong>Action:</strong> Reduce dropout rate from ${currentDropoutRate}% to ${targetDropoutRate}%
                        </div>
                    </div>

                    <div class="pipeline-card alert-red">
                        <div class="pipeline-header">
                            <span class="pipeline-icon">🔧</span>
                            <h4>ITI Enrollment (Kalaburagi Students)</h4>
                        </div>
                        <div class="pipeline-stats">
                            <div class="pipeline-current">
                                <span class="stat-label">Current</span>
                                <span class="stat-value">${currentITIEnrollment.toLocaleString('en-IN')}/year</span>
                            </div>
                            <div class="pipeline-arrow">→</div>
                            <div class="pipeline-target">
                                <span class="stat-label">Target (2030)</span>
                                <span class="stat-value">${targetITIEnrollment.toLocaleString('en-IN')}/year</span>
                            </div>
                        </div>
                        <div class="pipeline-gap alert-red">
                            <strong>CRITICAL GAP:</strong> +${(targetITIEnrollment - currentITIEnrollment).toLocaleString('en-IN')} students/year (3.6x increase needed!)
                        </div>
                        <div class="pipeline-action">
                            <strong>Actions:</strong>
                            <ul>
                                <li>Change parent mindset: ITI = Good Career (not inferior to degrees)</li>
                                <li>Establish ITI awareness programs in all high schools</li>
                                <li>Coordinate with Industries Dept for hostel support (rural students)</li>
                                <li>Industry job guarantee tie-ups for ITI graduates</li>
                            </ul>
                        </div>
                    </div>

                    <div class="pipeline-card alert-yellow">
                        <div class="pipeline-header">
                            <span class="pipeline-icon">📉</span>
                            <h4>Dropout Crisis</h4>
                        </div>
                        <div class="dropout-stats">
                            <div class="dropout-current alert-red">
                                <div class="dropout-label">Current Dropout Rate</div>
                                <div class="dropout-value">${currentDropoutRate}%</div>
                                <div class="dropout-impact">~6,300 children drop out before Class 10 annually</div>
                            </div>
                            <div class="dropout-target alert-green">
                                <div class="dropout-label">Target (2030)</div>
                                <div class="dropout-value">${targetDropoutRate}%</div>
                                <div class="dropout-impact">Reduce by ${currentDropoutRate - targetDropoutRate}% points</div>
                            </div>
                        </div>
                        <div class="dropout-reasons">
                            <strong>Primary Reasons:</strong>
                            <ul>
                                <li><strong>Economic:</strong> Child labour in agriculture, family migration to Bangalore</li>
                                <li><strong>Academic:</strong> Poor learning outcomes → students lose interest</li>
                                <li><strong>Infrastructure:</strong> No high schools in village → can't afford to travel</li>
                                <li><strong>Gender:</strong> Girls face safety concerns, early marriage pressure</li>
                            </ul>
                        </div>
                        <div class="dropout-solutions">
                            <strong>BEO Solutions:</strong>
                            <ul>
                                <li>Bridge courses for Class 9-10 students at risk</li>
                                <li>Free transport/hostel for girls (coordinate with KHB)</li>
                                <li>Parent counseling: focus on long-term economic benefits</li>
                                <li>Track migrant families: ensure children enrolled in Bangalore schools</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Block-wise Performance -->
            <section class="dashboard-section">
                <h3 class="section-heading">Block-wise School Infrastructure & Priorities</h3>

                <div class="blocks-table-container">
                    <table class="blocks-table">
                        <thead>
                            <tr>
                                <th>Block</th>
                                <th>Schools</th>
                                <th>PTR Primary</th>
                                <th>PTR Upper-Primary</th>
                                <th>Priority Focus Area</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${blocks.map(block => `
                                <tr class="${block.ptrUpperPrimary > 40 ? 'alert-row-red' : block.ptrUpperPrimary > 35 ? 'alert-row-yellow' : ''}">
                                    <td><strong>${block.name}</strong></td>
                                    <td>${block.schools}</td>
                                    <td>${block.ptrPrimary}:1 ${block.ptrPrimary > 30 ? '⚠️' : '✓'}</td>
                                    <td class="${block.ptrUpperPrimary > 40 ? 'alert-red' : block.ptrUpperPrimary > 35 ? 'alert-yellow' : ''}">
                                        ${block.ptrUpperPrimary}:1 ${block.ptrUpperPrimary > 35 ? '⚠️' : '✓'}
                                    </td>
                                    <td>${block.focus}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                    <div class="table-note">
                        <strong>Note:</strong> RTE Mandate is 30:1 (primary) and 35:1 (upper-primary).
                        <span class="alert-text">Jewargi block urgently needs 45 additional teachers for upper-primary level.</span>
                    </div>
                </div>
            </section>

            <!-- Priority Actions -->
            <section class="dashboard-section">
                <h3 class="section-heading">⚡ Priority Actions (Next 12 Months)</h3>

                <div class="actions-list">
                    <div class="action-card urgent">
                        <div class="action-priority">URGENT</div>
                        <div class="action-content">
                            <div class="action-title">Recruit 150 Science Teachers for Rural Schools</div>
                            <div class="action-desc">25% science teacher positions vacant → directly undermines aerospace and pharma workforce pipeline. STEM proficiency below state average.</div>
                            <div class="action-owner">Coordinate: DDPI, KPSC (Karnataka Public Service Commission)</div>
                            <div class="action-timeline">Deadline: Q4 2026 (recruitment cycle)</div>
                        </div>
                    </div>

                    <div class="action-card urgent">
                        <div class="action-priority">URGENT</div>
                        <div class="action-content">
                            <div class="action-title">Launch "ITI = Good Career" Awareness Campaign</div>
                            <div class="action-desc">Need 3.6x increase in ITI enrollment (2,200 → 8,000/year). Parent mindset is biggest barrier. Industries offering ₹15-25K starting salaries for ITI graduates.</div>
                            <div class="action-owner">Coordinate: ITI Principals, Industries Dept, Udyog Mitra</div>
                            <div class="action-timeline">Launch: April 2026 (before Class 10 results)</div>
                        </div>
                    </div>

                    <div class="action-card high">
                        <div class="action-priority">HIGH</div>
                        <div class="action-content">
                            <div class="action-title">Establish 15 Pre-Vocational Model Schools (Garment Skills)</div>
                            <div class="action-desc">PM MITRA requires 26,000 garment workers by 2034. Introduce sewing, textile crafts in Classes 8-10 to prepare students for industry pathway.</div>
                            <div class="action-owner">Coordinate: NTTF (National Tool & Training Foundation), PM MITRA Project Office</div>
                            <div class="action-timeline">Pilot: 3 schools by July 2026 | Scale: 15 schools by 2027</div>
                        </div>
                    </div>

                    <div class="action-card high">
                        <div class="action-priority">HIGH</div>
                        <div class="action-content">
                            <div class="action-title">Upgrade Science Labs in 25 Schools Near Industrial Areas</div>
                            <div class="action-desc">Only 40% schools have functional science labs. Aerospace and pharma clusters need strong STEM foundation. Budget: ₹15 cr (₹60 lakh/school).</div>
                            <div class="action-owner">Coordinate: PWD (construction), Samagra Shiksha funds</div>
                            <div class="action-timeline">Target: 10 schools by Dec 2026 | 25 schools by June 2027</div>
                        </div>
                    </div>

                    <div class="action-card high">
                        <div class="action-priority">HIGH</div>
                        <div class="action-content">
                            <div class="action-title">Dropout Intervention: Girls' Hostel + Transport</div>
                            <div class="action-desc">35% dropout rate → 6,300 children lost annually. Girls especially vulnerable post-Class 8 (no high school in village). Free transport/hostel can retain 2,000+ girls/year.</div>
                            <div class="action-owner">Coordinate: KHB (hostel construction), Transport Dept</div>
                            <div class="action-timeline">Pilot: 5 hostels (100 girls each) by Jan 2027</div>
                        </div>
                    </div>

                    <div class="action-card medium">
                        <div class="action-priority">MEDIUM</div>
                        <div class="action-content">
                            <div class="action-title">Industry Exposure Visits for High School Students</div>
                            <div class="action-desc">50% high schools to have MoU with local industries for quarterly visits. Students see real careers → motivation to complete education and pursue ITI.</div>
                            <div class="action-owner">Coordinate: KIADB, Industry HR departments</div>
                            <div class="action-timeline">Target: 25 MoUs by Dec 2026</div>
                        </div>
                    </div>

                    <div class="action-card medium">
                        <div class="action-priority">MEDIUM</div>
                        <div class="action-content">
                            <div class="action-title">Teacher Training: 50 Hours/Year for All Teachers</div>
                            <div class="action-desc">Quality improvement essential. Focus: pedagogy, digital teaching tools, vocational awareness, student counseling.</div>
                            <div class="action-owner">DIET (District Institute of Education & Training)</div>
                            <div class="action-timeline">Ongoing - track quarterly compliance</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Success Metrics -->
            <section class="dashboard-section">
                <h3 class="section-heading">📊 Success Metrics (2026-2034 Targets)</h3>

                <div class="metrics-grid">
                    <div class="metric-box">
                        <div class="metric-title">Class 10 Pass Rate</div>
                        <div class="metric-progress">
                            <div class="metric-current">Current: 72%</div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 72%; background: #f59e0b;"></div>
                            </div>
                            <div class="metric-target">Target 2030: 85%</div>
                        </div>
                    </div>

                    <div class="metric-box">
                        <div class="metric-title">ITI Enrollment (Annual)</div>
                        <div class="metric-progress">
                            <div class="metric-current">Current: 2,200 students</div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 27.5%; background: #ef4444;"></div>
                            </div>
                            <div class="metric-target">Target 2030: 8,000 students</div>
                        </div>
                    </div>

                    <div class="metric-box">
                        <div class="metric-title">Dropout Rate</div>
                        <div class="metric-progress">
                            <div class="metric-current">Current: 35% (URGENT)</div>
                            <div class="progress-bar-reverse">
                                <div class="progress-fill-reverse" style="width: 35%; background: #ef4444;"></div>
                            </div>
                            <div class="metric-target">Target 2030: 15% (lower is better)</div>
                        </div>
                    </div>

                    <div class="metric-box">
                        <div class="metric-title">Science Teacher Vacancies</div>
                        <div class="metric-progress">
                            <div class="metric-current">Current: 150 vacant (25%)</div>
                            <div class="progress-bar-reverse">
                                <div class="progress-fill-reverse" style="width: 25%; background: #ef4444;"></div>
                            </div>
                            <div class="metric-target">Target 2027: 0 vacancies</div>
                        </div>
                    </div>

                    <div class="metric-box">
                        <div class="metric-title">Functional Science Labs</div>
                        <div class="metric-progress">
                            <div class="metric-current">Current: 40% schools</div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 40%; background: #f59e0b;"></div>
                            </div>
                            <div class="metric-target">Target 2029: 80% schools</div>
                        </div>
                    </div>

                    <div class="metric-box">
                        <div class="metric-title">Industry-Ready Youth (Annual Output)</div>
                        <div class="metric-progress">
                            <div class="metric-current">Current: ~1,500/year</div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 10%; background: #ef4444;"></div>
                            </div>
                            <div class="metric-target">Target 2034: 15,000/year</div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="dashboard-footer">
                <p><strong>Data Sources:</strong> District Education Statistics (IndiaStatDistricts), Karnataka School Education Department, Framework v2.0, DDPI Kalaburagi</p>
                <p><strong>Role Context:</strong> As Block Education Officer, you are THE CRITICAL LINCHPIN in the Framework v2.0 success. Without a skilled workforce pipeline, the ₹20,150 cr investment and 156,700 jobs will fail. Your actions in education directly determine whether industries thrive or collapse. The responsibility is enormous, but so is the impact.</p>
                <p><strong>Key Challenge:</strong> You must fundamentally transform mindsets → ITI is a dignified, well-paying career path. Parent counseling, industry exposure, and job guarantees are your weapons. Use them aggressively.</p>
            </div>
        </div>
    `;
}

/**
 * Town Planning Officer - Land Use & Zoning Dashboard
 */
function renderTPODashboard(data) {
    const industries = [
        { name: 'PM MITRA Textile Park', land: 300, status: 'Land identified - rezoning urgent', jobs: 26000, workers: 3000 },
        { name: 'Aerospace Cluster (Sedam)', land: 500, status: 'Expansion notification pending', jobs: 12000, workers: 2000 },
        { name: 'Pharmaceutical Packaging', land: 200, status: 'Pharma zone to be notified', jobs: 6700, workers: 800 },
        { name: 'Limestone & Cement Processing', land: 250, status: 'Mining buffer zones needed', jobs: 12000, workers: 2000 }
    ];

    const totalLandRequired = industries.reduce((sum, i) => sum + i.land, 0);
    const totalHousingBeds = industries.reduce((sum, i) => sum + i.workers, 0);
    const workerHousingLand = 375; // acres for 3 zones

    return `
        <div class="custom-dashboard tpo-dashboard">
            <div class="dashboard-header">
                <h2>🏗️ Town Planning Officer - Industrial Zoning & Land Use Dashboard</h2>
                <p class="dashboard-subtitle">KUDA Master Plan 2041 amendments for ${totalLandRequired} acres industrial + ${workerHousingLand} acres worker housing</p>
            </div>

            <!-- Land Crisis Alert -->
            <div class="alert-section">
                <div class="alert-banner alert-red">
                    <div class="alert-icon">⚠️</div>
                    <div class="alert-content">
                        <h3>URGENT: Industrial Land Zoning Crisis</h3>
                        <p><strong>Framework v2.0 requires ${totalLandRequired} acres</strong> for 4 industrial clusters + ${workerHousingLand} acres for ${totalHousingBeds} worker hostel beds</p>
                        <p><strong>Current KUDA Master Plan 2041:</strong> Prepared BEFORE Framework → Does not zone for these industries</p>
                        <p><strong>Your Action:</strong> Emergency master plan amendments + fast-track approvals needed Q2-Q3 2026</p>
                    </div>
                </div>
            </div>

            <!-- Industry Zoning Requirements -->
            <section class="dashboard-section">
                <h3 class="section-heading">Industry-Specific Land Use Planning Requirements</h3>
                <div class="industry-land-grid">
                    ${industries.map(industry => `
                        <div class="land-req-card">
                            <div class="land-header">
                                <h4>${industry.name}</h4>
                                <span class="jobs-badge">${(industry.jobs/1000).toFixed(1)}K jobs</span>
                            </div>
                            <div class="land-stats">
                                <div class="land-stat">
                                    <span class="stat-label">Land Required</span>
                                    <span class="stat-value">${industry.land} acres</span>
                                </div>
                                <div class="land-stat">
                                    <span class="stat-label">Worker Beds</span>
                                    <span class="stat-value">${industry.workers.toLocaleString('en-IN')}</span>
                                </div>
                            </div>
                            <div class="land-status ${industry.status.includes('urgent') || industry.status.includes('pending') ? 'alert-yellow' : 'alert-green'}">
                                <strong>Status:</strong> ${industry.status}
                            </div>
                            <div class="tpo-actions">
                                ${industry.name.includes('PM MITRA') ? `
                                    <strong>TPO Actions:</strong>
                                    <ul>
                                        <li>Rezone 300 acres agricultural→industrial (Sedam/Chittapur)</li>
                                        <li>125-acre mixed-use zone for 3,000 hostel beds</li>
                                        <li>FAR relaxation 2.5 (dormitories 6-8 stories)</li>
                                        <li>12 km approach road widening (NH-9 to park)</li>
                                        <li>500m greenbelt buffer from residential areas</li>
                                    </ul>
                                ` : industry.name.includes('Aerospace') ? `
                                    <strong>TPO Actions:</strong>
                                    <ul>
                                        <li>Expand Sedam Industrial Area by 550 acres</li>
                                        <li>"High-Precision Manufacturing Zone" (vibration/dust control)</li>
                                        <li>Height clearances with Airport Authority</li>
                                        <li>Engineer/technician housing (villas vs dormitories)</li>
                                        <li>R&D zone for IIT partnership</li>
                                    </ul>
                                ` : industry.name.includes('Pharmaceutical') ? `
                                    <strong>TPO Actions:</strong>
                                    <ul>
                                        <li>Dedicated pharma zone (200 acres)</li>
                                        <li>No polluting industries within 2 km</li>
                                        <li>Coordinate CETP location with KSPCB</li>
                                        <li>1 km residential buffer (chemical handling)</li>
                                        <li>Pharma-grade water certification required</li>
                                    </ul>
                                ` : `
                                    <strong>TPO Actions:</strong>
                                    <ul>
                                        <li>Industrial zone in Chincholi/Sedam (limestone belt)</li>
                                        <li>5 km buffer from residential (dust, noise, heavy traffic)</li>
                                        <li>Dedicated truck routes (no residential passage)</li>
                                        <li>Mandatory 30% greenbelt</li>
                                        <li>Forest clearance coordination</li>
                                    </ul>
                                `}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- Worker Housing Zones -->
            <section class="dashboard-section">
                <h3 class="section-heading">Critical: Worker Housing Zones (${workerHousingLand} acres)</h3>
                <div class="housing-zones-grid">
                    <div class="zone-card alert-red">
                        <h4>Zone 1: PM MITRA Worker Zone</h4>
                        <div class="zone-details">
                            <div class="zone-spec"><strong>Capacity:</strong> 3,000 beds + 1,500 rental units</div>
                            <div class="zone-spec"><strong>Land:</strong> 150 acres (Sedam/Chittapur)</div>
                            <div class="zone-spec"><strong>Zoning:</strong> Mixed-Use Residential-Commercial (MURC)</div>
                            <div class="zone-spec"><strong>FAR:</strong> 2.5 (allow 6-8 story dormitories)</div>
                            <div class="zone-spec"><strong>Distance:</strong> 3-5 km from textile park</div>
                        </div>
                        <div class="zone-action alert-red">
                            <strong>URGENT:</strong> Notify MURC zone by Q1 2027 | Fast-track KHB building approvals
                        </div>
                    </div>

                    <div class="zone-card alert-yellow">
                        <h4>Zone 2: Sedam Industrial Worker Zone</h4>
                        <div class="zone-details">
                            <div class="zone-spec"><strong>Capacity:</strong> 2,500 beds + 2,000 rental units</div>
                            <div class="zone-spec"><strong>Land:</strong> 150 acres</div>
                            <div class="zone-spec"><strong>Type:</strong> Skilled Worker Housing (aerospace/pharma)</div>
                            <div class="zone-spec"><strong>Mix:</strong> 60% dormitories, 40% 1-2 BHK apartments</div>
                        </div>
                        <div class="zone-action alert-yellow">
                            Notify by Q2 2027 | Higher quality for skilled workers
                        </div>
                    </div>

                    <div class="zone-card">
                        <h4>Zone 3: Limestone Belt Worker Colony</h4>
                        <div class="zone-details">
                            <div class="zone-spec"><strong>Capacity:</strong> 2,000 beds</div>
                            <div class="zone-spec"><strong>Land:</strong> 75 acres (Chincholi area)</div>
                            <div class="zone-spec"><strong>Type:</strong> Basic dormitories (away from mining dust)</div>
                            <div class="zone-spec"><strong>FAR:</strong> 1.8</div>
                        </div>
                        <div class="zone-action">
                            Notify by Q3 2027 | Health considerations (dust exposure)
                        </div>
                    </div>
                </div>
            </section>

            <!-- Fast-Track Approval System -->
            <section class="dashboard-section">
                <h3 class="section-heading">Approval Process Reform</h3>
                <div class="approval-reform-card">
                    <div class="reform-problem">
                        <strong>Current Problem:</strong> Building approval takes 90-120 days → Industries frustrated, investment delayed
                    </div>
                    <div class="reform-solution">
                        <strong>TPO's Fast-Track System for Framework v2.0:</strong>
                        <div class="reform-grid">
                            <div class="reform-item">
                                <div class="reform-title">1. Single-Window Cell</div>
                                <div class="reform-desc">Dedicated officer for Framework projects | Pre-approved layouts | 30-day target</div>
                            </div>
                            <div class="reform-item">
                                <div class="reform-title">2. Digital Approval</div>
                                <div class="reform-desc">Online submission | Auto-scrutiny software | Parallel NOC processing</div>
                            </div>
                            <div class="reform-item">
                                <div class="reform-title">3. Deemed Approval</div>
                                <div class="reform-desc">45-day rule: No response = Auto-approved | TPO liability for post-approval</div>
                            </div>
                        </div>
                    </div>
                    <div class="reform-target">
                        <strong>Target:</strong> 100% Framework projects approved within 45 days by 2027
                    </div>
                </div>
            </section>

            <!-- Priority Actions -->
            <section class="dashboard-section">
                <h3 class="section-heading">⚡ Priority Actions (Next 6 Months)</h3>
                <div class="actions-list">
                    <div class="action-card urgent">
                        <div class="action-priority">URGENT</div>
                        <div class="action-content">
                            <div class="action-title">Master Plan Amendment: Rezone 1,625 Acres</div>
                            <div class="action-desc">${totalLandRequired} acres industrial + ${workerHousingLand} acres worker housing. Submit to KUDA Commissioner by March 2026.</div>
                            <div class="action-owner">Coordinate: Revenue Dept (land conversion), KIADB, DC office</div>
                        </div>
                    </div>

                    <div class="action-card urgent">
                        <div class="action-priority">URGENT</div>
                        <div class="action-content">
                            <div class="action-title">PM MITRA Land Conversion Approval</div>
                            <div class="action-desc">300 acres agricultural→industrial conversion. MoU signed Dec 2024 but land NOT approved yet. Deadline: Q2 2026.</div>
                            <div class="action-owner">Coordinate: Revenue Officer, District Collector</div>
                        </div>
                    </div>

                    <div class="action-card high">
                        <div class="action-priority">HIGH</div>
                        <div class="action-content">
                            <div class="action-title">45 km Approach Road Widening Master Plan</div>
                            <div class="action-desc">Upgrade roads from 2-lane (15m) to 4-lane (30m). Budget: ₹125 cr. Coordinate land acquisition for 15m additional width.</div>
                            <div class="action-owner">Coordinate: PWD (construction), Revenue (acquisition)</div>
                        </div>
                    </div>

                    <div class="action-card high">
                        <div class="action-priority">HIGH</div>
                        <div class="action-content">
                            <div class="action-title">Aerospace Height Clearances (Airport Authority)</div>
                            <div class="action-desc">Sedam cluster near Kalaburagi Airport. Need height restriction zoning + security clearances (if defense applications).</div>
                            <div class="action-owner">Coordinate: Airport Authority, Defence (if applicable)</div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="dashboard-footer">
                <p><strong>Data Sources:</strong> KUDA Master Plan 2041, Framework v2.0, Karnataka Town & Country Planning Act 1961</p>
                <p><strong>Role Context:</strong> As TPO, you are the GATEKEEPER for Framework v2.0 land use. Without your master plan amendments and fast-track approvals, the ₹20,150 cr investment CANNOT happen. Industries need legal zoning + building permissions to start construction. Your urgency determines the timeline.</p>
            </div>
        </div>
    `;
}

/**
 * Karnataka Housing Board - Worker Housing Crisis Dashboard
 */
function renderKHBHousingDashboard(data) {
    const pmayTotal = 15000;
    const pmayCompleted = 3200;
    const pmayPending = pmayTotal - pmayCompleted;
    const pmayProgress = ((pmayCompleted / pmayTotal) * 100).toFixed(1);

    const workerHousingNeeded = 8000; // beds
    const workerHousingCurrent = 0;
    const rentalUnitsNeeded = 5000;

    const slumHouseholds = 9000;
    const slumUpgradable = 5200;
    const slumRelocate = 1300;

    return `
        <div class="custom-dashboard khb-dashboard">
            <div class="dashboard-header">
                <h2>🏘️ Karnataka Housing Board - Worker Housing Crisis Dashboard</h2>
                <p class="dashboard-subtitle">Build 8,000 hostel beds + 5,000 rental units by 2030 | Clear 11,800 PMAY backlog | Rehabilitate 9,000 slum families</p>
            </div>

            <!-- Worker Housing Crisis Alert -->
            <div class="alert-section">
                <div class="alert-banner alert-red">
                    <div class="alert-icon">🚨</div>
                    <div class="alert-content">
                        <h3>WORKER HOUSING CRISIS: Zero Purpose-Built Dormitories</h3>
                        <p><strong>Framework Reality:</strong> 156,700 jobs → 40,000-50,000 migrant workers by 2034</p>
                        <p><strong>Current Housing:</strong> ZERO purpose-built worker dormitories in Kalaburagi district</p>
                        <p><strong>Consequence:</strong> Workers will live in slums, illegal settlements, overcrowded rooms (10-15 people/room) → Social problems, health crisis, industrial productivity loss → Framework v2.0 FAILS</p>
                        <p><strong>KHB's Mission:</strong> Build ${workerHousingNeeded.toLocaleString('en-IN')} hostel beds + ${rentalUnitsNeeded.toLocaleString('en-IN')} affordable rental units by 2030 (₹645.5 cr investment)</p>
                    </div>
                </div>
            </div>

            <!-- Industry-Specific Worker Housing -->
            <section class="dashboard-section">
                <h3 class="section-heading">Industry-Specific Worker Housing Requirements</h3>
                <div class="worker-housing-grid">
                    <div class="worker-housing-card alert-red">
                        <div class="housing-header">
                            <h4>👔 PM MITRA Textile Park (26,000 workers)</h4>
                            <span class="urgent-badge">MOST URGENT</span>
                        </div>
                        <div class="housing-requirements">
                            <div class="req-item"><strong>Need:</strong> 3,000 hostel beds (2,100 women, 900 men)</div>
                            <div class="req-item"><strong>Profile:</strong> Age 18-35, rural migrants, ₹10-15K/month income</div>
                            <div class="req-item"><strong>Affordability:</strong> ₹1,200-1,500/month/bed (incl. food)</div>
                            <div class="req-item"><strong>Location:</strong> 3-5 km from textile park (cycling distance)</div>
                            <div class="req-item"><strong>Cost:</strong> ₹48.5 cr (7 women's + 3 men's hostels)</div>
                        </div>
                        <div class="housing-model">
                            <strong>Model:</strong> Women's hostels (4-6/room, 24x7 security) | Men's hostels (6-8/room) | Common kitchen, medical room, recreation
                        </div>
                        <div class="housing-timeline alert-red">
                            <strong>Timeline:</strong> Start construction Q3 2026 | First 1,000 beds by Dec 2027 | Full 3,000 beds by 2029
                        </div>
                        <div class="housing-coordination">
                            <strong>Coordination:</strong> KIADB (land allocation 25 acres), TPO (FAR relaxation 2.5), Industries Dept (₹20 cr subsidy from PM MITRA fund), Private developers (PPP model)
                        </div>
                    </div>

                    <div class="worker-housing-card alert-yellow">
                        <div class="housing-header">
                            <h4>✈️💊 Aerospace & Pharma (18,700 workers)</h4>
                        </div>
                        <div class="housing-requirements">
                            <div class="req-item"><strong>Need:</strong> 2,000 skilled worker apartments + 2,000 hostel beds</div>
                            <div class="req-item"><strong>Profile:</strong> ITI diploma holders, technicians, ₹15-25K/month</div>
                            <div class="req-item"><strong>Type:</strong> 1-2 BHK for married, shared hostels for single</div>
                            <div class="req-item"><strong>Location:</strong> Sedam town (near industrial cluster)</div>
                            <div class="req-item"><strong>Cost:</strong> ₹282 cr</div>
                        </div>
                        <div class="housing-model">
                            <strong>Model:</strong> PMAY Affordable Rental Housing Complex (ARHC) scheme | Rent ₹3,500-5,500/month (apartments), ₹2,000/month (hostels)
                        </div>
                        <div class="housing-timeline alert-yellow">
                            <strong>Timeline:</strong> 2028-2030
                        </div>
                    </div>

                    <div class="worker-housing-card">
                        <div class="housing-header">
                            <h4>🏗️ Limestone & Cement (12,000 workers)</h4>
                        </div>
                        <div class="housing-requirements">
                            <div class="req-item"><strong>Need:</strong> 2,000 basic dormitory beds</div>
                            <div class="req-item"><strong>Profile:</strong> Manual labor, machine operators, ₹12-18K/month</div>
                            <div class="req-item"><strong>Type:</strong> Barrack-style dormitories (8-10 workers/room)</div>
                            <div class="req-item"><strong>Location:</strong> Chincholi (10-15 km from mining - health reasons)</div>
                            <div class="req-item"><strong>Cost:</strong> ₹15 cr (highly subsidized)</div>
                        </div>
                        <div class="housing-model">
                            <strong>Model:</strong> Basic facilities | Rent ₹800/month/bed | Health screening (silicosis prevention) | Good ventilation (dust exposure)
                        </div>
                        <div class="housing-timeline">
                            <strong>Timeline:</strong> 2029-2031
                        </div>
                    </div>
                </div>

                <div class="total-investment-card">
                    <h4>Total Worker Housing Program (2026-2034)</h4>
                    <div class="investment-summary">
                        <div class="investment-item"><strong>Hostel Beds:</strong> 7,000 beds (₹100.5 cr)</div>
                        <div class="investment-item"><strong>Rental Apartments:</strong> 5,000 units (₹540 cr)</div>
                        <div class="investment-item"><strong>Total Investment:</strong> ₹645.5 cr over 8 years</div>
                    </div>
                    <div class="funding-mix">
                        <strong>Funding Mix:</strong> PMAY (54%) + Industries Dept (23%) + Private PPP (16%) + KHB (7%)
                    </div>
                </div>
            </section>

            <!-- PMAY Backlog -->
            <section class="dashboard-section">
                <h3 class="section-heading">PMAY Backlog: Clear Before Adding Worker Housing</h3>
                <div class="pmay-status-card alert-yellow">
                    <div class="pmay-stats">
                        <div class="pmay-stat">
                            <div class="stat-label">Sanctioned</div>
                            <div class="stat-value">${pmayTotal.toLocaleString('en-IN')}</div>
                        </div>
                        <div class="pmay-stat alert-green">
                            <div class="stat-label">Completed</div>
                            <div class="stat-value">${pmayCompleted.toLocaleString('en-IN')}</div>
                            <div class="stat-percent">${pmayProgress}%</div>
                        </div>
                        <div class="pmay-stat alert-red">
                            <div class="stat-label">Pending</div>
                            <div class="stat-value">${pmayPending.toLocaleString('en-IN')}</div>
                            <div class="stat-impact">5,800 under construction | 6,000 not started</div>
                        </div>
                    </div>
                    <div class="pmay-problem">
                        <strong>Problem:</strong> Slow completion (21%) → Must clear backlog BEFORE adding worker housing burden
                    </div>
                    <div class="pmay-actions">
                        <strong>Fast-Track Actions (2026-2028):</strong>
                        <ul>
                            <li>Blacklist slow contractors (impose penalties) | Mobilize new contractors with performance bonds</li>
                            <li>Re-verify 6,000 pending beneficiaries by Jun 2026 (15% can't be traced - migrated/dead/ineligible)</li>
                            <li>Third-party quality audits (25% completed houses have defects)</li>
                            <li>Target: Complete 8,000 pending houses by Dec 2028</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Slum Rehabilitation -->
            <section class="dashboard-section">
                <h3 class="section-heading">Slum Rehabilitation (9,000 households)</h3>
                <div class="slum-rehab-grid">
                    <div class="slum-card">
                        <h4>In-Situ Upgradation (Basava Vasati Yojana)</h4>
                        <div class="slum-stats">
                            <div class="slum-stat"><strong>Households:</strong> ${slumUpgradable.toLocaleString('en-IN')}</div>
                            <div class="slum-stat"><strong>Components:</strong> Pucca houses, individual toilets (35%→100%), electricity, water taps, drainage</div>
                            <div class="slum-stat"><strong>Cost:</strong> ₹2.5 lakh/household | Total: ₹130 cr</div>
                        </div>
                        <div class="slum-timeline">Target: Complete by 2029</div>
                    </div>

                    <div class="slum-card alert-yellow">
                        <h4>Relocation Projects</h4>
                        <div class="slum-stats">
                            <div class="slum-stat"><strong>Households:</strong> ${slumRelocate.toLocaleString('en-IN')} (hazardous locations - railway tracks, river banks)</div>
                            <div class="slum-stat"><strong>Land Needed:</strong> 65 acres for G+2 townships</div>
                            <div class="slum-stat"><strong>Compensation:</strong> Free housing + ₹50,000 shifting allowance</div>
                            <div class="slum-stat"><strong>Cost:</strong> ₹50 cr</div>
                        </div>
                        <div class="slum-timeline">Target: Complete by 2028</div>
                    </div>
                </div>
            </section>

            <!-- Priority Actions -->
            <section class="dashboard-section">
                <h3 class="section-heading">⚡ Priority Actions (Next 12 Months)</h3>
                <div class="actions-list">
                    <div class="action-card urgent">
                        <div class="action-priority">URGENT</div>
                        <div class="action-content">
                            <div class="action-title">Secure 125 Acres Land for Worker Housing Zones</div>
                            <div class="action-desc">Coordinate with KIADB (land allocation) and TPO (zoning notification) for 3 worker housing zones. Without land, cannot start construction.</div>
                            <div class="action-owner">Deadline: Q2 2026</div>
                        </div>
                    </div>

                    <div class="action-card urgent">
                        <div class="action-priority">URGENT</div>
                        <div class="action-content">
                            <div class="action-title">PM MITRA Worker Hostels: DPR + Funding Approval</div>
                            <div class="action-desc">Prepare Detailed Project Report for 3,000 hostel beds (₹48.5 cr). Secure ₹20 cr subsidy from PM MITRA fund + ₹15 cr PMAY ARHC + ₹13.5 cr private PPP.</div>
                            <div class="action-owner">Deadline: Q3 2026 | Start construction Q4 2026</div>
                        </div>
                    </div>

                    <div class="action-card high">
                        <div class="action-priority">HIGH</div>
                        <div class="action-content">
                            <div class="action-title">Empanel 25+ New Contractors</div>
                            <div class="action-desc">Currently only 12-15 contractors → Cannot handle simultaneous PMAY backlog + worker housing. Need performance-based contracts.</div>
                            <div class="action-owner">Deadline: Q2 2026</div>
                        </div>
                    </div>

                    <div class="action-card high">
                        <div class="action-priority">HIGH</div>
                        <div class="action-content">
                            <div class="action-title">Clear 8,000 Pending PMAY Houses</div>
                            <div class="action-desc">Fast-track completion: Blacklist slow contractors, re-verify beneficiaries, quality audits. Target: Dec 2028.</div>
                            <div class="action-owner">Monthly review with DC office</div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="dashboard-footer">
                <p><strong>Data Sources:</strong> KHB Records, PMAY Portal, Framework v2.0, Karnataka Affordable Housing Policy 2016</p>
                <p><strong>Role Context:</strong> As KHB Officer, you are responsible for preventing a humanitarian crisis. 40,000 workers without proper housing = slums, disease, crime, industrial failure. Your worker housing program (₹645.5 cr) is NOT optional - it's ESSENTIAL for Framework v2.0 success. Start land acquisition and DPRs immediately.</p>
            </div>
        </div>
    `;
}

/**
 * Superintendent of Police - Industrial Security Dashboard
 */
function renderSPDashboard(data) {
    const migrantWorkers = 40000; // by 2030
    const currentPoliceStrength = 2800; // district police force
    const industrialPoliceNeeded = 150; // for 4 clusters
    const policeStationsCurrent = 42;

    return `
        <div class="custom-dashboard sp-dashboard">
            <div class="dashboard-header">
                <h2>👮 Superintendent of Police - Industrial Security & Law Order Dashboard</h2>
                <p class="dashboard-subtitle">Managing 40K migrant workers | Industrial area security | Crime prevention for 156K jobs</p>
            </div>

            <div class="alert-section">
                <div class="alert-banner alert-yellow">
                    <div class="alert-icon">⚠️</div>
                    <div class="alert-content">
                        <h3>Law & Order Challenge: 40,000 Migrant Workers by 2030</h3>
                        <p><strong>Framework Reality:</strong> 156,700 jobs → ~40,000 migrant workers from other districts/states</p>
                        <p><strong>Security Risks:</strong> Worker housing clusters (8,000 beds), industrial area security, labor disputes, social tensions, crime prevention</p>
                        <p><strong>Current Capacity:</strong> ${currentPoliceStrength} district police | Need ${industrialPoliceNeeded} dedicated industrial security personnel</p>
                    </div>
                </div>
            </div>

            <section class="dashboard-section">
                <h3 class="section-heading">Industrial Area Security Requirements</h3>
                <div class="security-grid">
                    <div class="security-card">
                        <h4>👔 PM MITRA Textile Park (26K workers, 3K hostel beds)</h4>
                        <div class="security-needs">
                            <strong>Security Needs:</strong>
                            <ul>
                                <li>Dedicated police station within 5 km radius</li>
                                <li>30 personnel (3 shifts x 10 officers)</li>
                                <li>Women's safety: Special patrols for women's hostels (2,100 beds)</li>
                                <li>CCTV integration: Factory + hostel premises</li>
                                <li>Emergency response: <15 min response time</li>
                            </ul>
                        </div>
                    </div>

                    <div class="security-card">
                        <h4>✈️ Aerospace Cluster (12K workers)</h4>
                        <div class="security-needs">
                            <strong>Security Needs:</strong>
                            <ul>
                                <li>High-security protocols (defense applications possible)</li>
                                <li>20 personnel trained in industrial security</li>
                                <li>Access control coordination with companies</li>
                                <li>Theft prevention: High-value components</li>
                            </ul>
                        </div>
                    </div>

                    <div class="security-card">
                        <h4>🏗️ Worker Housing Zones (3 zones, 7.75K beds)</h4>
                        <div class="security-needs">
                            <strong>Security Needs:</strong>
                            <ul>
                                <li>Beat constables: 1 per 1,000 workers</li>
                                <li>Night patrols: Alcohol control, conflict resolution</li>
                                <li>Women's safety: Special focus (40% workforce female)</li>
                                <li>Community policing: Migrant worker liaison officers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="dashboard-section">
                <h3 class="section-heading">⚡ Priority Actions</h3>
                <div class="actions-list">
                    <div class="action-card high">
                        <div class="action-priority">HIGH</div>
                        <div class="action-content">
                            <div class="action-title">Establish Industrial Security Force (150 personnel)</div>
                            <div class="action-desc">Recruit & train 150 dedicated industrial police by 2028. State Industrial Security Force model. Budget: ₹25 cr (training, vehicles, infrastructure).</div>
                        </div>
                    </div>

                    <div class="action-card high">
                        <div class="action-priority">HIGH</div>
                        <div class="action-content">
                            <div class="action-title">2 New Police Stations Near Industrial Areas</div>
                            <div class="action-desc">Near PM MITRA Park (Sedam) & Aerospace Cluster. Response time <15 min. Construction: ₹8 cr (2 stations).</div>
                        </div>
                    </div>

                    <div class="action-card medium">
                        <div class="action-priority">MEDIUM</div>
                        <div class="action-content">
                            <div class="action-title">Migrant Worker Registration System</div>
                            <div class="action-desc">Digital database of all migrant workers (name, origin, employer, hostel). Track movements, prevent crime, respond to emergencies.</div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="dashboard-footer">
                <p><strong>Role Context:</strong> As SP, industrial expansion brings law & order challenges. 40K migrant workers = potential for crime, labor disputes, social tensions. Proactive policing (dedicated force, new stations, registration system) prevents these issues. Industrial security is district security.</p>
            </div>
        </div>
    `;
}

/**
 * Health Department - Occupational Health Dashboard
 */
function renderHealthDashboard(data) {
    const totalJobs = 156700;
    const industrialWorkers = 80000; // subset needing occupational health
    const currentPHCs = 85; // district primary health centers
    const industrialPHCsNeeded = 3;

    return `
        <div class="custom-dashboard health-dashboard">
            <div class="dashboard-header">
                <h2>🏥 Health Department - Occupational Health Dashboard</h2>
                <p class="dashboard-subtitle">Industrial worker health for 156K jobs | Occupational disease prevention | PHCs near industrial areas</p>
            </div>

            <div class="alert-section">
                <div class="alert-banner alert-yellow">
                    <div class="alert-icon">🏥</div>
                    <div class="alert-content">
                        <h3>Occupational Health Challenge: 80,000 Industrial Workers</h3>
                        <p><strong>Framework Reality:</strong> 156,700 jobs → ~80,000 in factories (garments, aerospace, pharma, cement)</p>
                        <p><strong>Health Risks:</strong> Factory accidents, chemical exposure (pharma), silicosis (limestone mining), repetitive strain (garments), long work hours</p>
                        <p><strong>Current Capacity:</strong> ${currentPHCs} PHCs district-wide | ZERO dedicated industrial worker clinics | Need ${industrialPHCsNeeded} new PHCs near industrial areas</p>
                    </div>
                </div>
            </div>

            <section class="dashboard-section">
                <h3 class="section-heading">Industry-Specific Occupational Health Needs</h3>
                <div class="health-needs-grid">
                    <div class="health-card">
                        <h4>👔 Garments (26K workers, 70% women)</h4>
                        <ul>
                            <li>Repetitive strain injuries (sewing, sitting 8-10 hours)</li>
                            <li>Eye strain (poor lighting, precision work)</li>
                            <li>Women's health: Menstrual hygiene, reproductive health</li>
                            <li>Mental health: Migrant worker stress, homesickness</li>
                        </ul>
                        <div class="health-solution"><strong>Solution:</strong> On-site clinic in textile park (1 doctor, 2 nurses) | Physiotherapy services | Women's health counselor</div>
                    </div>

                    <div class="health-card alert-red">
                        <h4>🏗️ Limestone Mining (12K workers)</h4>
                        <ul>
                            <li><strong>Silicosis risk:</strong> Lung disease from limestone dust (chronic, fatal)</li>
                            <li>Hearing loss (blasting, crushing machinery)</li>
                            <li>Accidents (mining operations, heavy machinery)</li>
                            <li>Heat stress (outdoor work, Kalaburagi temperatures)</li>
                        </ul>
                        <div class="health-solution alert-red"><strong>CRITICAL:</strong> Mandatory 6-month health screenings (chest X-ray, spirometry) | Dust masks enforcement | PHC 10 km from mining site</div>
                    </div>

                    <div class="health-card">
                        <h4>💊 Pharma Packaging (6.7K workers)</h4>
                        <ul>
                            <li>Chemical exposure (solvents, cleaning agents)</li>
                            <li>Eye/skin irritation</li>
                            <li>Allergic reactions</li>
                            <li>Clean room stress (restricted environment)</li>
                        </ul>
                        <div class="health-solution"><strong>Solution:</strong> Annual chemical exposure testing | Dermatology services | Emergency protocols for chemical accidents</div>
                    </div>

                    <div class="health-card">
                        <h4>✈️ Aerospace (12K workers)</h4>
                        <ul>
                            <li>Metal dust/fumes exposure</li>
                            <li>Precision work stress (zero-defect pressure)</li>
                            <li>Shift work fatigue (24x7 operations)</li>
                        </ul>
                        <div class="health-solution"><strong>Solution:</strong> Respiratory health monitoring | Mental health support (high-pressure environment)</div>
                    </div>
                </div>
            </section>

            <section class="dashboard-section">
                <h3 class="section-heading">⚡ Priority Actions</h3>
                <div class="actions-list">
                    <div class="action-card urgent">
                        <div class="action-priority">URGENT</div>
                        <div class="action-content">
                            <div class="action-title">3 New PHCs Near Industrial Areas</div>
                            <div class="action-desc">1 near PM MITRA, 1 near Sedam cluster, 1 near limestone belt. Budget: ₹15 cr (construction + equipment). Staff: 3 doctors, 9 nurses, lab technicians.</div>
                        </div>
                    </div>

                    <div class="action-card urgent">
                        <div class="action-priority">URGENT</div>
                        <div class="action-content">
                            <div class="action-title">Occupational Health Screening Protocol</div>
                            <div class="action-desc">Mandatory pre-employment + 6-month screenings for all industrial workers. Coordinate with Labour Dept for enforcement. Database of worker health records.</div>
                        </div>
                    </div>

                    <div class="action-card high">
                        <div class="action-priority">HIGH</div>
                        <div class="action-content">
                            <div class="action-title">Silicosis Prevention Program (Limestone Workers)</div>
                            <div class="action-desc">Most critical: Chronic lung disease affects 20-30% of limestone workers after 5-10 years exposure. Dust mask distribution + enforcement + health camps every 6 months.</div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="dashboard-footer">
                <p><strong>Role Context:</strong> As Health Officer, industrial expansion = occupational health crisis if unprepared. Silicosis, chemical exposure, workplace accidents → workers disabled, productivity loss, litigation. 3 new PHCs + screening protocols prevent this. Industrial health IS district health.</p>
            </div>
        </div>
    `;
}

/**
 * Labour Officer - Factory Safety Dashboard
 */
function renderLabourDashboard(data) {
    const totalJobs = 156700;
    const factoriesExpected = 450; // new factories by 2034
    const currentLabourInspectors = 8;
    const inspectorsNeeded = 25;

    return `
        <div class="custom-dashboard labour-dashboard">
            <div class="dashboard-header">
                <h2>👷 Labour Officer - Factory Safety & Compliance Dashboard</h2>
                <p class="dashboard-subtitle">156,700 jobs compliance | 450 new factories by 2034 | Worker safety inspections</p>
            </div>

            <div class="alert-section">
                <div class="alert-banner alert-red">
                    <div class="alert-icon">⚠️</div>
                    <div class="alert-content">
                        <h3>Compliance Crisis: 450 New Factories, 8 Inspectors</h3>
                        <p><strong>Framework Reality:</strong> 156,700 jobs → ~450 new factories (garments 30, aerospace 30, pharma 20, cement 5, others 365)</p>
                        <p><strong>Current Capacity:</strong> Only ${currentLabourInspectors} labour inspectors for entire district | Need ${inspectorsNeeded} inspectors (1 per 18 factories)</p>
                        <p><strong>Risk:</strong> Without inspections → workplace accidents, illegal working hours, child labor, wage theft → Worker exploitation, Framework v2.0 reputation damage</p>
                    </div>
                </div>
            </div>

            <section class="dashboard-section">
                <h3 class="section-heading">Factory Registration & Compliance</h3>
                <div class="compliance-stats">
                    <div class="compliance-card">
                        <div class="stat-big">450</div>
                        <div class="stat-label">New Factories Expected (2026-2034)</div>
                        <div class="stat-detail">30 garments | 30 aerospace | 20 pharma | 5 cement | 365 MSME/other</div>
                    </div>
                    <div class="compliance-card alert-yellow">
                        <div class="stat-big">8 → 25</div>
                        <div class="stat-label">Inspectors Needed</div>
                        <div class="stat-detail">Currently 8 | Need 25 by 2028 (1 per 18 factories)</div>
                    </div>
                    <div class="compliance-card">
                        <div class="stat-big">156.7K</div>
                        <div class="stat-label">Worker Registrations</div>
                        <div class="stat-detail">ESIC, PF, minimum wage compliance</div>
                    </div>
                </div>
            </section>

            <section class="dashboard-section">
                <h3 class="section-heading">Industry-Specific Compliance Challenges</h3>
                <div class="compliance-industry-grid">
                    <div class="compliance-industry-card">
                        <h4>👔 Garments (26K workers, 70% women)</h4>
                        <div class="compliance-issues">
                            <strong>Key Risks:</strong>
                            <ul>
                                <li>Excessive working hours (12-14 hr shifts during peak season)</li>
                                <li>Below minimum wage (₹8,000 vs mandated ₹10,500)</li>
                                <li>No maternity benefits (female workers)</li>
                                <li>Unsafe fire exits (overcrowded factories)</li>
                            </ul>
                        </div>
                        <div class="compliance-action"><strong>Action:</strong> Quarterly inspections | Fire safety audits | Wage payment digitization (prevent underpayment)</div>
                    </div>

                    <div class="compliance-industry-card alert-red">
                        <h4>🏗️ Limestone Mining (12K workers)</h4>
                        <div class="compliance-issues">
                            <strong>CRITICAL Risks:</strong>
                            <ul>
                                <li>Mining accidents (blasting, cave-ins, machinery)</li>
                                <li>No safety equipment (helmets, boots, dust masks often skipped)</li>
                                <li>Contractor exploitation (informal workers, no ESI/PF)</li>
                                <li>Silicosis = occupational disease (chronic, no compensation)</li>
                            </ul>
                        </div>
                        <div class="compliance-action alert-red"><strong>URGENT:</strong> Monthly safety inspections | Mandatory safety equipment | Workers compensation insurance | Coordinate with Mines Dept</div>
                    </div>

                    <div class="compliance-industry-card">
                        <h4>💊 Pharma & ✈️ Aerospace (18.7K skilled workers)</h4>
                        <div class="compliance-issues">
                            <strong>Key Risks:</strong>
                            <ul>
                                <li>Shift work violations (max 48 hr/week, rest periods)</li>
                                <li>Chemical safety protocols (pharma)</li>
                                <li>Skill certification verification (aerospace quality)</li>
                            </ul>
                        </div>
                        <div class="compliance-action"><strong>Action:</strong> Shift register audits | Chemical safety training verification | Grievance redressal systems</div>
                    </div>
                </div>
            </section>

            <section class="dashboard-section">
                <h3 class="section-heading">⚡ Priority Actions</h3>
                <div class="actions-list">
                    <div class="action-card urgent">
                        <div class="action-priority">URGENT</div>
                        <div class="action-content">
                            <div class="action-title">Recruit 17 Additional Labour Inspectors</div>
                            <div class="action-desc">8 → 25 inspectors by 2028. Training in factory safety, labor laws, digital compliance tracking. Budget: ₹5 cr/year (salaries + vehicles + equipment).</div>
                        </div>
                    </div>

                    <div class="action-card urgent">
                        <div class="action-priority">URGENT</div>
                        <div class="action-content">
                            <div class="action-title">Digital Factory Registration & Inspection System</div>
                            <div class="action-desc">Online factory registration | Digital inspection reports | Compliance dashboard (track violations) | Mobile app for surprise inspections. Reduces corruption, increases efficiency.</div>
                        </div>
                    </div>

                    <div class="action-card high">
                        <div class="action-priority">HIGH</div>
                        <div class="action-content">
                            <div class="action-title">Mining Safety Protocol (Limestone)</div>
                            <div class="action-desc">Most dangerous industry: Monthly inspections, safety equipment enforcement, workers' compensation insurance mandatory. Coordinate with Mines Dept + Health Dept (silicosis).</div>
                        </div>
                    </div>

                    <div class="action-card high">
                        <div class="action-priority">HIGH</div>
                        <div class="action-content">
                            <div class="action-title">Worker Grievance Redressal Cells</div>
                            <div class="action-desc">1 cell per industrial area. Workers can report wage theft, safety violations, harassment (especially women workers). Toll-free helpline. Fast resolution (30 days).</div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="dashboard-footer">
                <p><strong>Role Context:</strong> As Labour Officer, you are the LAST LINE OF DEFENSE for worker rights. Framework v2.0 creates 156K jobs - but if workers are exploited (low wages, unsafe conditions, no benefits), it's a FAILURE. Your inspections, compliance enforcement, and grievance redressal determine if these are GOOD jobs or EXPLOITATION. Reputation matters - companies won't invest if Kalaburagi known for labor violations.</p>
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
        renderMSMESection,
        renderFPOSection,
        renderUdyogMitraSection
    };
}

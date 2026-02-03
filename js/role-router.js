// ============================================
// Kalaburagi Development Dashboard - Role Router
// URL-based role detection and initialization
// ============================================

/**
 * Get current role from URL parameter
 * @returns {string} Role ID or 'default'
 */
function getCurrentRole() {
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get('role');

    // Validate role exists in configuration
    if (role && roleConfigs[role]) {
        return role;
    }

    return 'default';
}

/**
 * Initialize role-specific view
 * @param {string} roleId - The role to initialize
 */
function initializeRoleView(roleId) {
    const config = roleConfigs[roleId];
    if (!config) {
        console.error(`Role configuration not found for: ${roleId}`);
        return;
    }

    console.log(`Initializing role view: ${config.name}`);

    // 1. Update page title
    document.title = `${config.name} - Kalaburagi Development Dashboard`;

    // 2. Render role header
    renderRoleHeader(config);

    // 3. Update role switcher selection
    updateRoleSwitcher(roleId);

    // 4. Filter data for role
    const filteredData = filterDataForRole(roleId, dashboardData);

    // 5. Update tab visibility
    updateTabVisibility(config);

    // 6. Render custom dashboard (if applicable)
    if (config.customDashboard) {
        renderRoleCustomDashboard(roleId, filteredData);
    }

    // 7. Render standard components with filtered data
    renderKPIs(filteredData.kpis);
    renderAlerts(filteredData.alerts);

    // 7b. Conditionally render live data based on role configuration
    if (config.showLiveData) {
        renderLiveData();
    } else {
        // Hide live data section for roles that don't need it
        const liveDataSection = document.querySelector('.section:has(#liveDataGrid)');
        if (liveDataSection) {
            liveDataSection.style.display = 'none';
        }
    }

    // 8. Initialize tab navigation (critical for role views)
    initializeTabNavigation();

    // 9. Set default active tab
    setDefaultTab(config);

    // 10. Update last updated timestamp
    updateLastUpdated();
}

/**
 * Initialize tab navigation for role views
 * Ensures all visible tabs (including custom dashboard) can be clicked
 */
function initializeTabNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    navButtons.forEach(button => {
        // Remove any existing listeners by cloning the button
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);

        // Add fresh click listener
        newButton.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }

            // Scroll to top of page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
}

/**
 * Render role-specific header banner
 * @param {object} config - Role configuration
 */
function renderRoleHeader(config) {
    const headerMeta = document.querySelector('.header-meta');
    if (!headerMeta) return;

    // Remove existing role banner if present
    const existingBanner = headerMeta.querySelector('.role-banner');
    if (existingBanner) {
        existingBanner.remove();
    }

    // Create role info banner
    const roleBanner = document.createElement('div');
    roleBanner.className = 'role-banner';
    roleBanner.style.display = 'inline-flex'; // Ensure inline display
    roleBanner.innerHTML = `
        <span class="role-icon">${config.icon}</span>
        <span class="role-name">${config.name}</span>
    `;

    // Insert after the role switcher (which is always first)
    const roleSwitcher = headerMeta.querySelector('.role-switcher-container');
    if (roleSwitcher && roleSwitcher.nextSibling) {
        // Insert after the role switcher
        headerMeta.insertBefore(roleBanner, roleSwitcher.nextSibling);
    } else if (roleSwitcher) {
        // Switcher is the only child, insert after it
        headerMeta.appendChild(roleBanner);
    } else {
        // No switcher (shouldn't happen), insert at beginning
        const updateTime = headerMeta.querySelector('.update-time');
        if (updateTime) {
            headerMeta.insertBefore(roleBanner, updateTime);
        } else {
            headerMeta.appendChild(roleBanner);
        }
    }
}

/**
 * Update role switcher dropdown to reflect current role
 * @param {string} roleId - Current role ID
 */
function updateRoleSwitcher(roleId) {
    const switcher = document.getElementById('roleSwitcher');
    if (switcher) {
        switcher.value = roleId;
    }
}

/**
 * Update tab visibility based on role configuration
 * @param {object} config - Role configuration
 */
function updateTabVisibility(config) {
    const allTabs = ['about', 'command', 'baseline', 'roadmap', 'sources'];
    const navButtons = document.querySelectorAll('.nav-btn');

    navButtons.forEach(button => {
        const tabId = button.getAttribute('data-tab');
        if (config.tabs.includes(tabId)) {
            button.style.display = 'inline-block';
        } else {
            button.style.display = 'none';
        }
    });
}

/**
 * Set the default active tab for the role
 * @param {object} config - Role configuration
 */
function setDefaultTab(config) {
    // If role has a custom dashboard, make it the default tab
    // Otherwise, default to first visible tab (usually 'command' for roles)
    let defaultTab;

    if (config.customDashboard && document.getElementById('role-dashboard')) {
        defaultTab = 'role-dashboard';
    } else {
        defaultTab = config.tabs[0] || 'about';
    }

    // Remove active class from all tabs and buttons
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Activate default tab
    const targetButton = document.querySelector(`[data-tab="${defaultTab}"]`);
    const targetContent = document.getElementById(defaultTab);

    if (targetButton && targetContent) {
        targetButton.classList.add('active');
        targetContent.classList.add('active');
    } else {
        console.warn(`Could not activate default tab: ${defaultTab}`);
    }
}

/**
 * Render custom dashboard section for role
 * @param {string} roleId - Role ID
 * @param {object} data - Filtered dashboard data
 */
function renderRoleCustomDashboard(roleId, data) {
    // Check if custom dashboard section exists, create if not
    let customSection = document.getElementById('role-dashboard');

    if (!customSection) {
        // Create custom section before footer
        const main = document.querySelector('.main .container');
        const footer = document.querySelector('.footer');

        customSection = document.createElement('div');
        customSection.id = 'role-dashboard';
        customSection.className = 'tab-content';

        if (footer && footer.previousElementSibling) {
            footer.parentNode.insertBefore(customSection, footer);
        } else {
            main.appendChild(customSection);
        }
    }

    // Render custom dashboard content
    const customHTML = renderCustomDashboard(roleId, data);
    if (customHTML) {
        customSection.innerHTML = customHTML;
        // Don't set inline display style - let CSS handle it via .active class

        // Add custom dashboard to navigation if not already there
        addCustomDashboardTab(roleId);
    } else {
        console.warn(`No custom dashboard HTML generated for role: ${roleId}`);
    }
}

/**
 * Add custom dashboard tab to navigation
 * @param {string} roleId - Role ID
 */
function addCustomDashboardTab(roleId) {
    const config = roleConfigs[roleId];
    const nav = document.querySelector('.nav .container');

    // Check if already added
    if (document.querySelector('[data-tab="role-dashboard"]')) {
        return;
    }

    // Create new tab button
    const tabButton = document.createElement('button');
    tabButton.className = 'nav-btn';
    tabButton.setAttribute('data-tab', 'role-dashboard');
    tabButton.textContent = `${config.icon} Dashboard`;

    // Note: Click handler will be added by initializeTabNavigation()
    // No need for a separate click listener here

    // Insert as first button (after About if visible, otherwise first)
    const firstButton = nav.querySelector('.nav-btn');
    if (firstButton) {
        nav.insertBefore(tabButton, firstButton);
    } else {
        nav.appendChild(tabButton);
    }
}

/**
 * Render role switcher dropdown
 * @returns {string} HTML for role switcher
 */
function renderRoleSwitcher() {
    const roles = Object.values(roleConfigs);

    return `
        <select id="roleSwitcher" class="role-switcher" onchange="switchRole(this.value)">
            ${roles.map(role => `
                <option value="${role.id}">${role.icon} ${role.name}</option>
            `).join('')}
        </select>
    `;
}

/**
 * Switch to a different role
 * @param {string} roleId - Role ID to switch to
 */
function switchRole(roleId) {
    // Update URL without reloading page
    const url = new URL(window.location);

    if (roleId === 'default') {
        url.searchParams.delete('role');
    } else {
        url.searchParams.set('role', roleId);
    }

    window.history.pushState({}, '', url);

    // Reload page to apply new role
    window.location.reload();
}

/**
 * Initialize role switcher dropdown in header
 */
function initializeRoleSwitcher() {
    const headerMeta = document.querySelector('.header-meta');
    if (!headerMeta) {
        console.warn('Header meta element not found - cannot add role switcher');
        return;
    }

    // Check if switcher already exists
    const existingSwitcher = document.getElementById('roleSwitcher');
    if (existingSwitcher) {
        console.log('Role switcher already exists');
        // Make sure it's visible
        const switcherContainer = existingSwitcher.closest('.role-switcher-container');
        if (switcherContainer) {
            switcherContainer.style.display = 'flex';
        }
        return;
    }

    // Create switcher container
    const switcherContainer = document.createElement('div');
    switcherContainer.className = 'role-switcher-container';
    switcherContainer.style.display = 'inline-flex'; // Ensure inline display
    switcherContainer.innerHTML = renderRoleSwitcher();

    // Insert at the beginning of header-meta to ensure it's always visible
    headerMeta.insertBefore(switcherContainer, headerMeta.firstChild);

    console.log('Role switcher initialized');

    // Set current role
    const currentRole = getCurrentRole();
    updateRoleSwitcher(currentRole);
}

/**
 * Get role description for display
 * @param {string} roleId - Role ID
 * @returns {string} Role description
 */
function getRoleDescription(roleId) {
    const config = roleConfigs[roleId];
    return config ? config.description : '';
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    // Always add role switcher to header
    initializeRoleSwitcher();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getCurrentRole,
        initializeRoleView,
        switchRole,
        updateRoleSwitcher,
        getRoleDescription
    };
}

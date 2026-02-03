#!/usr/bin/env node
// ============================================
// Automated Role Page Testing Script
// Tests all 15 role configurations for errors
// ============================================

const fs = require('fs');
const path = require('path');

// Load required files
const rolesFile = fs.readFileSync(path.join(__dirname, 'js/roles.js'), 'utf8');
const dataFile = fs.readFileSync(path.join(__dirname, 'js/data.js'), 'utf8');

// Simple eval context (not ideal but works for testing)
let roleConfigs = {};
let dashboardData = {};

try {
    // Extract roleConfigs from roles.js
    const roleConfigMatch = rolesFile.match(/const roleConfigs = ({[\s\S]*?});/);
    if (roleConfigMatch) {
        eval('roleConfigs = ' + roleConfigMatch[1]);
    }

    // Extract dashboardData from data.js
    const dataMatch = dataFile.match(/const dashboardData = ({[\s\S]*?});[\s\S]*?(?=\/\/|const|$)/);
    if (dataMatch) {
        eval('dashboardData = ' + dataMatch[1]);
    }
} catch (error) {
    console.error('❌ Error loading configuration files:', error.message);
    process.exit(1);
}

// Test results
const results = {
    passed: [],
    failed: [],
    warnings: []
};

console.log('\n🧪 Testing All Role Configurations...\n');

// Test each role
Object.keys(roleConfigs).forEach(roleId => {
    const config = roleConfigs[roleId];
    const testName = `${config.icon} ${config.name} (${roleId})`;

    try {
        // Test 1: Basic configuration
        if (!config.name || !config.icon || !config.tabs) {
            throw new Error('Missing required fields (name, icon, or tabs)');
        }

        // Test 2: Tabs validation
        if (!Array.isArray(config.tabs) || config.tabs.length === 0) {
            throw new Error('Tabs must be a non-empty array');
        }

        // Test 3: KPIs validation
        if (!config.kpis) {
            throw new Error('KPIs field is required');
        }

        // Test 4: Alerts validation
        if (!config.alerts) {
            throw new Error('Alerts field is required');
        }

        // Test 5: showLiveData flag
        if (typeof config.showLiveData !== 'boolean') {
            results.warnings.push(`${testName}: showLiveData should be boolean (found: ${typeof config.showLiveData})`);
        }

        // Test 6: Data filtering simulation
        const kpis = config.kpis[0] === 'all' ? dashboardData.kpis :
                     dashboardData.kpis.filter(kpi => config.kpis.includes(kpi.id));

        const alerts = config.alerts[0] === 'all' ? dashboardData.alerts :
                       dashboardData.alerts.filter(alert => config.alerts.includes(alert.id));

        // Test 7: Valid KPI count
        if (kpis.length === 0 && config.kpis[0] !== 'all' && config.kpis.length > 0) {
            results.warnings.push(`${testName}: No KPIs matched (configured: ${config.kpis.join(', ')})`);
        }

        // Test 8: Valid alert count
        if (alerts.length === 0 && config.alerts[0] !== 'all' && config.alerts.length > 0) {
            results.warnings.push(`${testName}: No alerts matched (configured: ${config.alerts.join(', ')})`);
        }

        results.passed.push({
            role: testName,
            kpiCount: kpis.length,
            alertCount: alerts.length,
            tabCount: config.tabs.length,
            hasCustomDashboard: !!config.customDashboard
        });

    } catch (error) {
        results.failed.push({
            role: testName,
            error: error.message
        });
    }
});

// Print results
console.log('✅ PASSED TESTS:\n');
results.passed.forEach(test => {
    console.log(`  ✓ ${test.role}`);
    console.log(`    - KPIs: ${test.kpiCount}, Alerts: ${test.alertCount}, Tabs: ${test.tabCount}`);
    if (test.hasCustomDashboard) {
        console.log(`    - Has custom dashboard`);
    }
});

if (results.warnings.length > 0) {
    console.log('\n⚠️  WARNINGS:\n');
    results.warnings.forEach(warning => {
        console.log(`  ⚠ ${warning}`);
    });
}

if (results.failed.length > 0) {
    console.log('\n❌ FAILED TESTS:\n');
    results.failed.forEach(test => {
        console.log(`  ✗ ${test.role}`);
        console.log(`    Error: ${test.error}`);
    });
    process.exit(1);
}

console.log(`\n📊 SUMMARY: ${results.passed.length} passed, ${results.failed.length} failed, ${results.warnings.length} warnings\n`);

// Check for critical files
console.log('📁 Checking critical files...\n');
const criticalFiles = [
    'index.html',
    'js/roles.js',
    'js/role-router.js',
    'js/app.js',
    'js/data.js',
    'js/live-data.js',
    'css/roles.css',
    'css/styles.css'
];

let allFilesExist = true;
criticalFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        console.log(`  ✓ ${file} (${Math.round(stats.size / 1024)}KB)`);
    } else {
        console.log(`  ✗ ${file} - NOT FOUND`);
        allFilesExist = false;
    }
});

if (!allFilesExist) {
    console.error('\n❌ Some critical files are missing!');
    process.exit(1);
}

console.log('\n✅ All tests passed! Dashboard is ready for deployment.\n');

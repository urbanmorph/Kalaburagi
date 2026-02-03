# Role-Based Dashboard Testing Guide

## Quick Test - All 15 Roles

Open these URLs in your browser to test each role:

### Tier 1: Executive & Law Enforcement
- [ ] **Default Dashboard**: `index.html`
- [ ] **District Collector**: `index.html?role=dc`
- [ ] **Superintendent of Police**: `index.html?role=sp`

### Tier 2: Infrastructure & Planning
- [ ] **Town Planning Officer**: `index.html?role=tpo`
- [ ] **Karnataka Housing Board**: `index.html?role=khb`
- [ ] **Block Education Officer**: `index.html?role=beo`

### Tier 3: Development Departments
- [ ] **PWD Engineer**: `index.html?role=pwd`
- [ ] **KIADB Officer**: `index.html?role=kiadb`
- [ ] **Water Resources**: `index.html?role=water`
- [ ] **GESCOM**: `index.html?role=gescom`
- [ ] **Health**: `index.html?role=health`
- [ ] **Agriculture**: `index.html?role=agriculture`

### Tier 4: Regulatory & Support
- [ ] **Forest**: `index.html?role=forest`
- [ ] **Revenue**: `index.html?role=revenue`
- [ ] **Labour**: `index.html?role=labour`

### Tier 5: Consolidated View
- [ ] **Minister**: `index.html?role=minister`

## Detailed Test Checklist

### For Each Role (15 total)

#### Page Load
- [ ] Page loads without errors
- [ ] No JavaScript console errors
- [ ] No 404 errors for CSS/JS files

#### Header
- [ ] Role banner displays correct icon and name
- [ ] Role switcher dropdown is visible
- [ ] Current role is selected in dropdown
- [ ] Page title includes role name

#### Navigation Tabs
- [ ] Only relevant tabs are visible (check role configuration)
- [ ] Hidden tabs are not visible in navigation
- [ ] Default tab is active on load (usually "Command" for roles)
- [ ] Tab switching works correctly

#### KPIs
- [ ] Correct KPIs are displayed (match role configuration)
- [ ] No KPIs shown if role has none
- [ ] KPI cards render correctly with values
- [ ] Progress bars display

#### Alerts
- [ ] Correct alerts are displayed (match role configuration)
- [ ] No alerts shown if role has none
- [ ] Alert cards render with proper severity colors
- [ ] Alert actions buttons are present

#### Custom Dashboards
Test these 6 roles with custom sections:

**District Collector (`?role=dc`)**
- [ ] Executive Summary section displays
- [ ] 4 executive cards render (Critical Actions, Investment, Jobs, Rank)
- [ ] Top 3 alerts shown in summary
- [ ] All values populated correctly

**KIADB Officer (`?role=kiadb`)**
- [ ] Land Allocation table displays
- [ ] 4 industries listed (Garments, Limestone, Aerospace, Pharma)
- [ ] Infrastructure Readiness checklist shows
- [ ] Status badges colored correctly

**Agriculture Officer (`?role=agriculture`)**
- [ ] Crop Irrigation Dashboard displays
- [ ] 3 crop cards (Tur, Bengal Gram, Grapes)
- [ ] Dal Mill Status section shows
- [ ] FPO Tracker displays with progress bar

**PWD Engineer (`?role=pwd`)**
- [ ] Road Projects section displays
- [ ] Road overview metrics show (480/600 km, 80%)
- [ ] Block-wise breakdown table with 8 blocks
- [ ] Budget utilization section displays

**KHB Officer (`?role=khb`)**
- [ ] Housing Progress section displays
- [ ] PMAY metrics (Sanctioned/Grounded/Completed)
- [ ] Worker Housing Gap Analysis shows
- [ ] Urban vs Rural split displays

**Minister (`?role=minister`)**
- [ ] Consolidated dashboard displays
- [ ] 4 overview cards with highlight on first
- [ ] Central vs State schemes comparison
- [ ] Timeline displays with 4 milestones

#### Role Switcher Functionality
- [ ] Click role switcher dropdown
- [ ] Select different role
- [ ] Page reloads with new role
- [ ] URL updates with `?role=` parameter
- [ ] Data filters correctly for new role

#### Mobile Responsiveness
Test on mobile viewport (< 768px):
- [ ] Role switcher is accessible
- [ ] Role banner fits properly
- [ ] Navigation tabs wrap/scroll
- [ ] KPI cards stack vertically
- [ ] Alert cards stack vertically
- [ ] Custom dashboards are responsive
- [ ] Tables are readable (may need horizontal scroll)

## Expected KPI Counts by Role

| Role | Expected KPIs |
|------|---------------|
| default | 5 (all) |
| dc | 5 (all) |
| sp | 1 (jobs) |
| tpo | 2 (jobs, income) |
| khb | 2 (jobs, income) |
| beo | 3 (credit, jobs, income) |
| pwd | 1 (credit) |
| kiadb | 1 (jobs) |
| water | 2 (irrigation, credit) |
| gescom | 2 (credit, jobs) |
| health | 1 (jobs) |
| agriculture | 3 (irrigation, credit, dalmills) |
| forest | 0 (none) |
| revenue | 0 (none) |
| labour | 1 (jobs) |
| minister | 5 (all) |

## Expected Alert Counts by Role

| Role | Expected Alerts |
|------|-----------------|
| default | 7 (all) |
| dc | 7 (all) |
| sp | 2 (alerts 1, 2) |
| tpo | 1 (alert 1) |
| khb | 1 (alert 1) |
| beo | 0 (none) |
| pwd | 0 (none) |
| kiadb | 4 (alerts 1, 2, 3, 4) |
| water | 1 (alert 5) |
| gescom | 1 (alert 5) |
| health | 0 (none) |
| agriculture | 3 (alerts 5, 6, 7) |
| forest | 1 (alert 2) |
| revenue | 2 (alerts 1, 2) |
| labour | 1 (alert 3) |
| minister | 7 (all) |

## Browser Compatibility Testing

Test on these browsers:
- [ ] Chrome 90+ (primary target)
- [ ] Safari 14+ (macOS/iOS)
- [ ] Firefox 88+
- [ ] Edge 90+

## Performance Testing

- [ ] Page load time < 2 seconds
- [ ] Role switching is instant (< 100ms)
- [ ] No memory leaks after switching roles multiple times
- [ ] Smooth scrolling on all devices

## Error Handling

Test these scenarios:
- [ ] Invalid role parameter: `index.html?role=invalid` → Should show default dashboard
- [ ] Missing role parameter: `index.html` → Should show default dashboard
- [ ] Empty role parameter: `index.html?role=` → Should show default dashboard

## Console Verification

Open browser console (F12) and check:
- [ ] No JavaScript errors
- [ ] No 404 errors for resources
- [ ] Console log shows: "Initializing role view: [Role Name]"
- [ ] Data filtering logs (if enabled)

## Visual Regression Testing

Compare screenshots of:
- [ ] Each role's main view
- [ ] Custom dashboards render identically across browsers
- [ ] Mobile vs desktop layouts
- [ ] Role switcher dropdown appearance

## Accessibility Testing

- [ ] Role switcher is keyboard accessible (Tab + Enter)
- [ ] All interactive elements have focus states
- [ ] Color contrast meets WCAG 2.1 AA standards
- [ ] Screen readers can navigate role-specific content

## Data Integrity Testing

Verify for each role:
- [ ] KPIs match role configuration in `roles.js`
- [ ] Alerts match role configuration
- [ ] No data is modified (only filtered/presented differently)
- [ ] Values are accurate (match source data.js)

## Integration Testing

- [ ] Default dashboard still works (backward compatibility)
- [ ] Existing JavaScript functions work with roles
- [ ] Tab navigation works with filtered tabs
- [ ] Live data widget displays (if command tab visible)
- [ ] Modal dialogs work (plan detail modals)

## Stress Testing

- [ ] Switch between all 15 roles rapidly
- [ ] Open multiple role tabs simultaneously
- [ ] Resize browser window while viewing roles
- [ ] Navigate back/forward in browser history

## Final Validation

- [ ] All 15 roles tested and working
- [ ] No console errors across all roles
- [ ] Mobile responsiveness verified
- [ ] README.md documentation accurate
- [ ] Role switcher works in all scenarios

## Reporting Issues

If you find issues:
1. Note the role ID and URL
2. Describe expected vs actual behavior
3. Include browser and device details
4. Check console for error messages
5. Take screenshots if visual issues

## Sign-Off

Testing completed by: ________________
Date: ________________
All roles verified: [ ] Yes [ ] No
Issues found: [ ] None [ ] See issue tracker

---

**Note**: This is a client-side only implementation with no backend. All data filtering happens in the browser via JavaScript.

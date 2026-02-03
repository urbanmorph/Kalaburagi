# Kalaburagi District Development Dashboard

![Dashboard Preview](https://img.shields.io/badge/Status-MVP-green) ![Version](https://img.shields.io/badge/Version-1.0-blue)

A modern, data-driven development monitoring dashboard for Kalaburagi District, Karnataka. Built to enable district administrators to understand challenges, track progress, and make evidence-based decisions toward moving from rank 30/30 to top 15 in per capita income by 2030.

## 🎯 Purpose

This dashboard provides:
- **Real-time visibility** into development progress across 8-year roadmap
- **Evidence-based insights** from official government data sources
- **Action-oriented interface** for district officers and administrators
- **Transparency** through complete data source documentation
- **Mobile-first design** for access on any device

## 📊 Features

### Role-Based Dashboard Views (NEW!)
Access customized views for different government actors via URL parameters:
- **15 actor-specific dashboards** - District Collector, KIADB, Agriculture, PWD, etc.
- **Filtered data** - Only relevant KPIs, alerts, and roadmap phases
- **Custom sections** - Role-specific executive summaries and action dashboards
- **Easy sharing** - Share dashboard links like `index.html?role=dc`

See [Role-Based Access](#-role-based-dashboard-views) section below for complete list.

### Command Center
- Live metrics banner with 4 key indicators
- Phase-wise progress tracking (Foundation → Activation → Scale)
- Critical alerts requiring immediate action
- Top 5 KPI cards with confidence levels

### Baseline Data
- District rankings vs. 30 Karnataka districts
- GDDP sectoral composition
- Irrigation crisis visualization
- Demographics and migration analysis

### Development Roadmap
- 8-year investment plan (₹20,150 crore)
- Phase-wise breakdown with components
- Financing architecture (Central, State, Banks, Private)
- Progress tracking per component

### Data Sources
- Complete registry of data sources
- Data quality indicators
- Methodology documentation
- Important caveats and limitations

## 🚀 Quick Start

### View Locally

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. No build process or server required - it's pure HTML/CSS/JS

### Deploy to GitHub Pages

1. **Push to GitHub:**
```bash
cd /Users/sathya/Documents/GitHub/Kalaburagi
git add .
git commit -m "Initial commit: Kalaburagi Development Dashboard MVP"
git push origin main
```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Source: Deploy from a branch
   - Branch: `main` / `root`
   - Click Save

3. **Access your dashboard:**
   - URL: `https://[your-username].github.io/Kalaburagi/`
   - It will be live in 2-3 minutes

## 🎭 Role-Based Dashboard Views

Access customized dashboards for different government actors by adding `?role=` parameter to the URL:

### Tier 1: Executive & Law Enforcement

| Role | URL | Features |
|------|-----|----------|
| 👔 **District Collector** | `index.html?role=dc` | Executive summary, all departments, quick actions |
| 👮 **Superintendent of Police** | `index.html?role=sp` | Security, workforce monitoring, industrial safety |

### Tier 2: Infrastructure & Planning

| Role | URL | Features |
|------|-----|----------|
| 🏗️ **Town Planning Officer** | `index.html?role=tpo` | Urban planning, zoning, building approvals |
| 🏘️ **Karnataka Housing Board** | `index.html?role=khb` | PMAY progress, worker hostels, housing gap analysis |
| 📚 **Block Education Officer** | `index.html?role=beo` | School infrastructure, skill development |

### Tier 3: Development Departments

| Role | URL | Features |
|------|-----|----------|
| 🛣️ **PWD Engineer** | `index.html?role=pwd` | Road connectivity tracker, block-wise breakdown |
| 🏭 **KIADB Officer** | `index.html?role=kiadb` | Land allocation table, infrastructure readiness |
| 💧 **Water Resources Officer** | `index.html?role=water` | Irrigation coverage, dam levels, water allocation |
| ⚡ **GESCOM Officer** | `index.html?role=gescom` | Power distribution, industrial feeders |
| 🏥 **Health Department** | `index.html?role=health` | Health infrastructure, occupational health |
| 🌾 **Agriculture Officer** | `index.html?role=agriculture` | Crop irrigation dashboard, FPO tracker, dal mills |

### Tier 4: Regulatory & Support

| Role | URL | Features |
|------|-----|----------|
| 🌲 **Forest Officer** | `index.html?role=forest` | Forest clearances, afforestation |
| 📋 **Revenue Officer** | `index.html?role=revenue` | Land acquisition, conversions, mutations |
| 👷 **Labour Officer** | `index.html?role=labour` | Factory compliance, worker welfare |

### Tier 5: Consolidated View

| Role | URL | Features |
|------|-----|----------|
| 🏛️ **Minister's Dashboard** | `index.html?role=minister` | High-level consolidated view, scheme tracker |

### How to Use

1. **Direct Access**: Navigate to `index.html?role=agriculture` in your browser
2. **Role Switcher**: Use the dropdown in the header to switch between roles
3. **Share Links**: Copy and share role-specific URLs with team members
4. **Default View**: Access `index.html` without parameters for full dashboard

## 📁 Project Structure

```
Kalaburagi/
├── index.html              # Main dashboard page
├── css/
│   ├── styles.css          # Core styling and responsive design
│   └── roles.css           # Role-specific UI components
├── js/
│   ├── data.js             # All dashboard data (sourced from official docs)
│   ├── live-data.js        # Live market & weather data
│   ├── roles.js            # Role configurations and data filtering
│   ├── role-router.js      # URL-based role detection and routing
│   └── app.js              # Interactive functionality
└── README.md               # This file
```

## 📱 Responsive Design

- ✅ Desktop (1280px+): Full grid layout
- ✅ Tablet (768px-1024px): Adaptive grid
- ✅ Mobile (< 768px): Stacked layout, touch-optimized

## 🔗 Data Sources

All data sourced from official government documents:

1. **Economic Survey of Karnataka 2022-23** - GDDP, Per Capita Income
2. **NABARD PLP 2022-23** - Agriculture, Irrigation, Credit Flow
3. **IJFMR Research Paper (2023)** - District Rankings
4. **District at a Glance 2019-20** - Demographics, Infrastructure
5. **Census 2011** - Population data (awaiting 2021 release)
6. **Migration Studies (2024)** - SAGE Journals, NammaKPSC

Complete source documentation available in the "Data Sources" tab.

## 🎨 Design Philosophy

- **Data-driven**: Every metric sourced and cited
- **Honest**: Data quality labels (High/Medium/Low confidence)
- **Action-oriented**: Focus on "What needs attention now?"
- **Accessible**: Works on basic smartphones with 2G/3G
- **Transparent**: Full methodology documentation

## 🛠️ Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: Inter (Google Fonts)
- **No dependencies**: No React, Vue, or frameworks
- **No build tools**: Works directly in browser
- **Hosting**: GitHub Pages (free)

## 📈 Recent Updates

### Version 2.0 - Role-Based Dashboards (February 2026)
- ✅ 15 actor-specific dashboard views
- ✅ URL parameter-based role switching
- ✅ Custom executive summaries (DC, KIADB, Agriculture, PWD, KHB, Minister)
- ✅ Filtered KPIs, alerts, and roadmap phases per role
- ✅ Role switcher dropdown in header
- ✅ Mobile-responsive role-specific components

### Version 1.0 - MVP (January 2026)
- ✅ Command Center with live metrics
- ✅ Baseline data and district rankings
- ✅ 8-year development roadmap
- ✅ Complete data source documentation
- ✅ Mobile-first responsive design

## 📈 Future Enhancements (Phase 3)

- [ ] Real-time data integration via APIs
- [ ] User authentication for secure role-based access
- [ ] Mobile app (PWA)
- [ ] Offline capability
- [ ] WhatsApp alert integration
- [ ] Data download in Excel/CSV formats
- [ ] Interactive charts and visualizations
- [ ] Print-optimized reports

## 🤝 For District Administrators

This is an MVP (Minimum Viable Product) designed for quick deployment and immediate utility. The dashboard:

- Works completely offline once loaded
- Requires no login or authentication (public data)
- Can be viewed on any device with a browser
- Updates can be made by editing `js/data.js` file
- No technical skills needed to view and use

### How to Update Data

To update metrics:
1. Edit `/js/data.js`
2. Modify values in the `dashboardData` object
3. Save and refresh browser

Example:
```javascript
{
    title: "Irrigation Coverage",
    current: "111,200 ha",  // ← Change this
    percentage: 12.5,        // ← And this
    // ...
}
```

## 📞 Support

For questions or suggestions about this dashboard:
- Email: dashboard@kalaburagi.nic.in
- Helpline: 1800-XXX-XXXX

## 📄 License

This dashboard is created for Kalaburagi District Administration. Data sources remain property of their respective publishers. Dashboard code is open for use by other district administrations with appropriate attribution.

## 🙏 Credits

**Data Sources:**
- Government of Karnataka (Economic Survey)
- NABARD Kalaburagi District Office
- District Statistics Office, Kalaburagi
- Academic researchers (IJFMR, SAGE Journals)

**Built for:**
District Administration, Kalaburagi, Karnataka

---

**Version:** 1.0 (MVP)  
**Last Updated:** January 2025  
**Status:** Production Ready

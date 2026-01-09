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
- 8-year investment plan (₹15,500 crore)
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

## 📁 Project Structure

```
Kalaburagi/
├── index.html          # Main dashboard page
├── css/
│   └── styles.css      # All styling and responsive design
├── js/
│   ├── data.js         # All dashboard data (sourced from official docs)
│   └── app.js          # Interactive functionality
└── README.md           # This file
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

## 📈 Future Enhancements (Phase 2)

- [ ] Real-time data integration via APIs
- [ ] User authentication for role-based views
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

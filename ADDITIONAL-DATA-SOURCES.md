# Additional Data Sources for Kalaburagi Development Dashboard

## Overview

This document catalogs publicly available government data sources that can enhance the Kalaburagi District Development Dashboard. All sources listed are official government portals with public access (no authentication required for basic data access).

**Last Updated:** February 3, 2026
**Research Status:** Active - sources verified as of 2026

---

## Table of Contents

1. [Currently Integrated Sources](#currently-integrated-sources)
2. [Agriculture & Food](#agriculture--food)
3. [Water Resources & Irrigation](#water-resources--irrigation)
4. [Industry & Commerce](#industry--commerce)
5. [Infrastructure & Roads](#infrastructure--roads)
6. [Power & Energy](#power--energy)
7. [Labour & Employment](#labour--employment)
8. [Land Records & Revenue](#land-records--revenue)
9. [Environmental Clearances](#environmental-clearances)
10. [Health & Welfare](#health--welfare)
11. [Banking & Finance](#banking--finance)
12. [Open Data Platforms](#open-data-platforms)
13. [Integration Priority Matrix](#integration-priority-matrix)

---

## Currently Integrated Sources

### 1. Agmarknet - Commodity Prices
- **URL:** https://www.agmarknet.gov.in/
- **Department:** Agriculture & Farmers Welfare, Govt of India
- **Metrics Available:**
  - Daily commodity prices (Tur Dal, Bengal Gram, Green Gram)
  - Price trends and variations
  - Market arrivals data
- **Update Frequency:** Daily
- **Current Status:** ✅ Integrated (automated via GitHub Actions)
- **Data Format:** Web scraping (API available but requires registration)
- **Integration Complexity:** Medium
- **Sources:**
  - [Agmarknet Portal](https://www.agmarknet.gov.in/PriceAndArrivals/DatewiseCommodityReport.aspx)
  - [OGD Commodity Prices API](https://www.data.gov.in/resource/variety-wise-daily-market-prices-data-commodity)
  - [CEDA Agri Market Data](https://agmarknet.ceda.ashoka.edu.in/)

### 2. India Meteorological Department (IMD) - Rainfall Data
- **URL:** https://mausam.imd.gov.in/
- **Department:** Ministry of Earth Sciences, Govt of India
- **Metrics Available:**
  - Daily rainfall (mm)
  - Weekly/monthly cumulative rainfall
  - Seasonal deviation from normal
  - District-wise rainfall patterns
- **Update Frequency:** Daily
- **Current Status:** ✅ Integrated (automated via GitHub Actions)
- **Data Format:** Web scraping + API (limited public access)
- **Integration Complexity:** Medium
- **Sources:**
  - [IMD Mausam Portal](https://mausam.imd.gov.in/)
  - [IMD API List](https://mausam.imd.gov.in/imd_latest/contents/api.pdf)
  - [IMD Data Service Portal](https://dsp.imdpune.gov.in/)
  - [IMD Climate Data Service Portal](https://cdsp.imdpune.gov.in/)
  - [OGD Rainfall Data](https://www.data.gov.in/catalog/rainfall-india)

---

## Agriculture & Food

### 3. FPO (Farmer Producer Organization) Directory
- **URL:** https://coefpo.org/publications/fpo-list-english.pdf
- **Department:** Centre of Excellence for FPO, Multiple State Departments
- **Metrics Available:**
  - Number of FPOs in Kalaburagi district
  - FPO registration status
  - CEO contact details
  - Member coverage
- **Update Frequency:** Quarterly to Annual
- **Current Status:** ⏳ Not Integrated
- **Data Format:** PDF list, requires manual parsing
- **Integration Complexity:** Medium (PDF scraping required)
- **Dashboard Use:**
  - Track FPO formation progress (Target: 50 FPOs by 2032)
  - Show current vs target in Command Center
  - Link to Phase 2 agro-processing clusters
- **Sources:**
  - [COE-FPO List 2024](https://coefpo.org/publications/fpo-list-english.pdf)
  - [Karnataka Watershed Dept FPO Portal](https://watershed.karnataka.gov.in/new-page/Farmers+Producers+Organization+(FPO)/en)
  - [Department of Horticulture FPO Portal](https://horticulturedir.karnataka.gov.in/page/contact+us/farmer+producers+organization+(fpo)/en)

### 4. Karnataka Agriculture Portal
- **URL:** https://raitamitra.karnataka.gov.in/
- **Department:** Department of Agriculture, Govt of Karnataka
- **Metrics Available:**
  - Crop production statistics
  - Fertilizer distribution
  - Soil health card data
  - Agricultural schemes enrollment
- **Update Frequency:** Monthly
- **Current Status:** ⏳ Not Integrated
- **Data Format:** Web portal (no public API documented)
- **Integration Complexity:** Hard (requires web scraping or manual updates)
- **Dashboard Use:**
  - Track agricultural productivity improvements
  - Monitor scheme coverage in Kalaburagi
  - Link to irrigation expansion impact

---

## Water Resources & Irrigation

### 5. Karnataka Water Resources Information System (KWRIS)
- **URL:** https://water.karnataka.gov.in/
- **Department:** Water Resources Department, Govt of Karnataka
- **Metrics Available:**
  - Dam water levels (cusecs, feet, TMC)
  - Inflow and outflow data
  - Reservoir storage capacity
  - Real-time water level updates
- **Update Frequency:** Daily (real-time for major dams)
- **Current Status:** ⏳ Not Integrated
- **Data Format:** Web portal (no public API documented)
- **Integration Complexity:** Medium to Hard
- **Dashboard Use:**
  - Monitor irrigation availability
  - Track dam levels affecting Kalaburagi (Krishna, Bhima basin)
  - Link to irrigation expansion targets (11.3% → 25%)
- **Sources:**
  - [KWRIS Portal](https://water.karnataka.gov.in/)
  - [Water Resources Real-Time Data](https://waterresources.karnataka.gov.in/new-page/Real%20Time%20Data/en)
  - [Karnataka Dam Levels](https://mysoremedia.com/karnataka-dams-water-level-today/)

---

## Industry & Commerce

### 6. Karnataka Udyog Mitra - Single Window Portal
- **URL:** https://investkarnataka.co.in/ | https://ebiz.karnataka.gov.in/ebiz/
- **Department:** Department of Commerce & Industries, Govt of Karnataka
- **Metrics Available:**
  - New industrial registrations
  - Investment proposals (district-wise)
  - Employment projections
  - Clearance status (150+ services, 30+ departments)
  - Industry-wise investment data
- **Update Frequency:** Real-time for applications, monthly aggregates
- **Current Status:** ⏳ Not Integrated
- **Data Format:** Web portal + Open Data API (limited public access)
- **Integration Complexity:** Medium
- **Dashboard Use:**
  - Track new industry registrations in Kalaburagi
  - Monitor single-window clearance efficiency
  - Show investment pipeline vs realized
  - Track job creation from new industries
- **Sources:**
  - [Invest Karnataka Portal](https://investkarnataka.co.in/)
  - [Karnataka Udyog Mitra](https://ebiz.karnataka.gov.in/ebiz/)
  - [OGD Karnataka Udyog Mitra Data](https://karnataka.data.gov.in/catalog/karnataka-udyog-mitra-state-level-single-window-approval-industries)
  - [Business Standard - New Single Window System 2025](https://www.business-standard.com/industry/news/karnataka-govt-unveils-new-single-window-system-to-boost-investments-125021112053_1.html)

### 7. KIADB - Industrial Land Allocation
- **URL:** https://kiadb.karnataka.gov.in/en/
- **Department:** Karnataka Industrial Areas Development Board
- **Metrics Available:**
  - Available industrial plots (Sedam, other areas)
  - Plot allotment status
  - Industrial area development projects
  - GIS-based site selection
  - Land rates and availability
- **Update Frequency:** Monthly
- **Current Status:** ⏳ Not Integrated
- **Data Format:** Web portal + GIS system (no public API)
- **Integration Complexity:** Hard (GIS data extraction required)
- **Dashboard Use:**
  - Track land allotment for garments, aerospace, pharma clusters
  - Monitor Sedam industrial area development
  - Show available vs allocated land
- **Sources:**
  - [KIADB Official Portal](https://kiadb.karnataka.gov.in/en/)
  - [Invest Karnataka - KIADB Areas](https://investkarnataka.co.in/find-your-site/kiadb-industrial-area/)
  - [Karnataka Udyog Mitra - KIADB Services](https://ebiz.karnataka.gov.in/kum/kiadb.aspx)

### 8. MSME Registration Data (UDYAM)
- **URL:** https://udyamregistration.gov.in/
- **Department:** Ministry of MSME + Department of Industries, Karnataka
- **Metrics Available:**
  - Total MSME registrations (district-wise)
  - Investment in plant & machinery
  - Employment data
  - National Industrial Classification (NIC) codes
  - Type of organization
  - Registration dates
- **Update Frequency:** Real-time registrations, monthly aggregates
- **Current Status:** ⏳ Not Integrated
- **Data Format:** Open Government Data API available
- **Integration Complexity:** Easy to Medium
- **Dashboard Use:**
  - Track MSME growth in Kalaburagi
  - Monitor Phase 2 MSME ecosystem development (2,500 units target)
  - Show sector-wise MSME distribution
- **Sources:**
  - [OGD Karnataka MSME Data (Udyog Aadhaar)](https://www.data.gov.in/resource/list-msme-registered-units-under-udyog-aadhaar-memorandum-karnataka)
  - [OGD MSME Data (UDYAM)](https://www.data.gov.in/resource/list-msme-registered-units-under-udyam) - Updated 01/02/2026
  - [MSME Development Institute Bengaluru](https://msmedibangalore.gov.in/)

---

## Infrastructure & Roads

### 9. Karnataka State Highways Improvement Project (KSHIP)
- **URL:** https://www.kship.in/en/
- **Department:** Public Works, Ports & Inland Water Transport Department
- **Metrics Available:**
  - Highway improvement projects (km)
  - Project completion status (KSHIP-I, II, III)
  - Road network upgrades (2-lane to 4-lane)
  - Budget allocation and utilization
  - 17,000 km road network star rating data
- **Update Frequency:** Quarterly
- **Current Status:** ⏳ Not Integrated
- **Data Format:** Web portal (no public API)
- **Integration Complexity:** Medium
- **Dashboard Use:**
  - Track road connectivity improvements to Kalaburagi
  - Monitor Phase 1 rural connectivity (800 cr allocation)
  - Show highway upgrade impact on industrial access
- **Sources:**
  - [KSHIP Official Portal](https://www.kship.in/en/)
  - [KSHIP-III Project Details](https://www.adb.org/projects/42513-014/main)
  - [IndiaRAP - KSHIP-III Safety Assessments](https://indiarap.org/kship-iii/)

### 10. Karnataka PWD Road Projects
- **URL:** https://kpwd.karnataka.gov.in/english
- **Department:** Public Works Department, Govt of Karnataka
- **Metrics Available:**
  - Road network information (KRIMS system)
  - Project status and monitoring
  - Budget allocation
  - E-procurement tender data
- **Update Frequency:** Monthly
- **Current Status:** ⏳ Not Integrated
- **Data Format:** Web portal (no public API documented)
- **Integration Complexity:** Hard (requires web scraping)
- **Dashboard Use:**
  - Track PWD road projects in Kalaburagi district
  - Monitor budget utilization for rural connectivity
  - Link to Phase 1 infrastructure targets
- **Sources:**
  - [Karnataka PWD Portal](https://kpwd.karnataka.gov.in/english)
  - [Karnataka e-Procurement Portal](https://www.tendersontime.com/india/karnataka-tenders/)

### 11. National Highways Authority of India (NHAI)
- **URL:** https://nhai.gov.in/
- **Department:** Ministry of Road Transport & Highways, Govt of India
- **Metrics Available:**
  - National highway projects in Karnataka
  - Project completion timelines
  - HAM (Hybrid Annuity Mode) projects
  - Budget and expenditure data
- **Update Frequency:** Quarterly
- **Current Status:** ⏳ Not Integrated
- **Data Format:** Web portal + OGD Platform API
- **Integration Complexity:** Medium
- **Dashboard Use:**
  - Track NH improvements affecting Kalaburagi connectivity
  - Monitor expressway projects (Bengaluru-Vijayawada)
  - Show impact on industrial logistics
- **Sources:**
  - [NHAI Official Portal](https://nhai.gov.in/)
  - [OGD NHAI Data](https://www.data.gov.in/keywords/NHAI)
  - [Ongoing Highway Projects Karnataka](https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1577140)

---

## Power & Energy

### 12. GESCOM - Power Distribution Data
- **URL:** https://gescom.karnataka.gov.in/english
- **Department:** Gulbarga Electricity Supply Company Limited
- **Metrics Available:**
  - Total consumers served (3.4 million as of 2022)
  - Consumer category distribution (domestic, industrial, commercial, agricultural)
  - New connection statistics
  - Power distribution infrastructure
  - Service areas (8 districts including Kalaburagi)
- **Update Frequency:** Monthly to Quarterly
- **Current Status:** ⏳ Not Integrated
- **Data Format:** Web portal (no public API)
- **Integration Complexity:** Hard (requires coordination with GESCOM)
- **Dashboard Use:**
  - Track industrial power connections in Kalaburagi
  - Monitor Phase 1 power infrastructure (500 cr allocation)
  - Show power availability for industrial clusters
- **Sources:**
  - [GESCOM Official Portal](https://gescom.karnataka.gov.in/english)
  - [GESCOM Wikipedia](https://en.wikipedia.org/wiki/Gulbarga_Electricity_Supply_Company)

---

## Labour & Employment

### 13. e-Karmika Labour Registration Portal
- **URL:** https://www.ekarmika.karnataka.gov.in/ekarmika/static/home.aspx
- **Department:** Department of Labour, Govt of Karnataka
- **Metrics Available:**
  - Shop & establishment registrations
  - Contract labour registrations (R&A Act 1970)
  - Building & construction worker registrations
  - Renewal status
  - District-wise establishment data
- **Update Frequency:** Real-time registrations, monthly aggregates
- **Current Status:** ⏳ Not Integrated
- **Data Format:** Web portal (requires login for detailed data)
- **Integration Complexity:** Hard (restricted data access)
- **Dashboard Use:**
  - Track formal sector employment growth
  - Monitor compliance with labour laws
  - Link to job creation targets (156,700 jobs)
- **Sources:**
  - [e-Karmika Portal](https://www.ekarmika.karnataka.gov.in/ekarmika/static/home.aspx)
  - [Karnataka One - Labour Dept](https://www.karnatakaone.gov.in/Info/Public/DeptOfLabour)

### 14. ESIC Registrations - Karnataka
- **URL:** https://esic.gov.in/ | https://rokarnataka.esic.gov.in/
- **Department:** Employees' State Insurance Corporation
- **Metrics Available:**
  - Registered establishments
  - Covered employees
  - District-wise coverage
  - Factory compliance data
  - Beneficiary statistics
- **Update Frequency:** Monthly
- **Current Status:** ⏳ Not Integrated
- **Data Format:** Web portal (restricted access for detailed data)
- **Integration Complexity:** Hard (requires official data request)
- **Dashboard Use:**
  - Track formal industrial employment
  - Monitor factory registrations in Kalaburagi
  - Estimate direct job creation (current dashboard shows 1,800 ESIC registrations)
- **Note:** New ESIC rules effective from Dec 2025 expand coverage significantly
- **Sources:**
  - [ESIC Official Portal](https://esic.gov.in/)
  - [ESIC Karnataka Regional Office](https://rokarnataka.esic.gov.in/circulars/rosro_circular_list)
  - [New ESIC Rules 2025-26](https://www.key4comply.com/blogposts/new-esic-rule-2025-2026-explained-how-the-new-labour-codes-change-esic-applicability-salary-structure/)

---

## Land Records & Revenue

### 15. Bhoomi Land Records Portal
- **URL:** https://landrecords.karnataka.gov.in/
- **Department:** Revenue Department, Govt of Karnataka (Bhoomi Monitoring Cell)
- **Metrics Available:**
  - RTC (Record of Rights, Tenancy & Crops) / Pahani
  - Mutation status
  - Revenue maps (MR)
  - Land ownership verification
  - District-wise land records
- **Update Frequency:** Real-time (as mutations are processed)
- **Current Status:** ⏳ Not Integrated
- **Data Format:** Web portal + API available through API Setu
- **Integration Complexity:** Medium (API available but requires registration)
- **Dashboard Use:**
  - Track land acquisition status for industrial projects
  - Monitor mutation completion for KIADB plots
  - Verify land titles for infrastructure projects
- **Sources:**
  - [Bhoomi Official Portal](https://landrecords.karnataka.gov.in/)
  - [API Setu - Land Records Karnataka API](https://apis.guru/apis/apisetu.gov.in/landrecordskar)
  - [Mockoon - Land Records API Mock](https://mockoon.com/mock-samples/apisetugovin-landrecordskar/)

---

## Environmental Clearances

### 16. PARIVESH - Environmental & Forest Clearances
- **URL:** https://parivesh.nic.in/ | https://forestsclearance.nic.in/
- **Department:** Ministry of Environment, Forest & Climate Change, Govt of India
- **Metrics Available:**
  - Environment clearance (EC) status
  - Forest clearance (FC) status
  - Wildlife (WL) clearance status
  - Coastal Regulation Zone (CRZ) clearances
  - Proposal tracking at all stages
  - Compliance monitoring
- **Update Frequency:** Real-time (workflow-based)
- **Current Status:** ⏳ Not Integrated
- **Data Format:** Web portal (no public API for bulk data)
- **Integration Complexity:** Hard (requires proposal-specific queries)
- **Dashboard Use:**
  - Track environmental clearances for industrial projects
  - Monitor forest clearance status for limestone mining
  - Show compliance status for existing industries
  - Link to limestone mining delays (₹50L geological survey pending)
- **Note:** PARIVESH 2.0 migration deadline extended to Jan 31, 2026
- **Sources:**
  - [PARIVESH Portal](https://parivesh.nic.in/)
  - [Forest Clearances Portal](https://forestsclearance.nic.in/homenew.aspx)
  - [OGD Environmental Clearance Data](https://www.data.gov.in/catalog/environmental-clearance-granted-parivesh-20)
  - [NIC PARIVESH Project Page](https://www.nic.gov.in/project/parivesh/)

---

## Health & Welfare

### 17. PHC-MIS (Primary Health Centre Management Information System)
- **URL:** https://karunadu.karnataka.gov.in/hfw/Pages/PHC-MIS.aspx
- **Department:** Health & Family Welfare Department, Govt of Karnataka
- **Metrics Available:**
  - Patient treatment records (outpatients)
  - Delivery details
  - Disease reporting
  - Drug stock availability
  - GPS location of PHCs
  - District-wise PHC coverage
- **Update Frequency:** Daily
- **Current Status:** ⏳ Not Integrated
- **Data Format:** Web portal (limited public access)
- **Integration Complexity:** Hard (health data privacy restrictions)
- **Dashboard Use:**
  - Track PHC/health center availability near industrial areas
  - Monitor healthcare infrastructure in Kalaburagi
  - Link to Phase 3 healthcare upgrades
- **Sources:**
  - [PHC-MIS Portal](https://karunadu.karnataka.gov.in/hfw/Pages/PHC-MIS.aspx)
  - [OGD District-wise PHC Data](https://karnataka.data.gov.in/resource/district-wise-public-community-health-centers-karnataka)
  - [Karnataka Govt PHC Information](https://www.karnataka.gov.in/hfwsecretariat/Pages/Primary-Health-Centres.aspx)

---

## Banking & Finance

### 18. SLBC Karnataka - Credit Deposit Ratio Data
- **URL:** https://slbckarnataka.com/
- **Department:** State Level Bankers' Committee (Convenor: Canara Bank)
- **Metrics Available:**
  - District-wise Credit-Deposit (CD) ratio
  - Credit flow data (agriculture, MSME, industry)
  - Priority sector lending
  - Bank branch coverage
  - Financial inclusion metrics
  - Quarterly performance reports
- **Update Frequency:** Quarterly
- **Current Status:** ⏳ Not Integrated
- **Data Format:** PDF reports (district-wise annexures)
- **Integration Complexity:** Medium (requires PDF parsing)
- **Dashboard Use:**
  - Track credit flow to Kalaburagi (current target: ₹5,185 cr over 8 years)
  - Monitor bank credit growth vs deposits
  - Show sector-wise credit distribution
  - Link to NABARD PLP data
- **Note:** Karnataka state CD ratio was 78.21% as of Sept 2023
- **Sources:**
  - [SLBC Karnataka Portal](https://slbckarnataka.com/)
  - [SLBC Karnataka Meeting Minutes](https://slbckarnataka.com/UserFiles/slbc/163RDSLBCMINUTES.pdf)

### 19. NABARD District Credit Plan
- **URL:** https://www.nabard.org/ (District-specific PLPs)
- **Department:** National Bank for Agriculture and Rural Development
- **Metrics Available:**
  - Potential Linked Credit Plan (PLP) district-wise
  - Agriculture credit targets
  - Irrigation financing
  - Rural infrastructure credit
  - Banking infrastructure data
- **Update Frequency:** Annual
- **Current Status:** ⏳ Not Integrated (manual reference currently used)
- **Data Format:** PDF reports (district-level)
- **Integration Complexity:** Hard (manual updates required)
- **Dashboard Use:**
  - Currently used as baseline data source (PLP 2022-23)
  - Track agriculture credit flow
  - Monitor irrigation financing
- **Note:** Dashboard currently references NABARD PLP 2022-23 for Kalaburagi

---

## Open Data Platforms

### 20. Karnataka Open Data Portal
- **URL:** https://karnataka.data.gov.in/
- **Department:** Centre for e-Governance, Govt of Karnataka
- **Metrics Available:**
  - 71+ datasets across sectors (as of 2023)
  - Department-wise data publications
  - Sectoral statistics
  - API access to datasets
- **Update Frequency:** Varies by dataset (many updated within 1 year)
- **Current Status:** ⏳ Not Integrated (can be used as meta-source)
- **Data Format:** API + downloadable formats (CSV, JSON, XML)
- **Integration Complexity:** Easy to Medium (API key required)
- **Dashboard Use:**
  - Central aggregation point for multiple datasets
  - API-based integration for select datasets
  - Periodic data refresh from OGD catalog
- **Sources:**
  - [Karnataka Open Data Portal](https://karnataka.data.gov.in/)
  - [OGD Karnataka APIs](https://karnataka.data.gov.in/apis)
  - [OpenCity Karnataka Datasets](https://data.opencity.in/dataset?organization=government-of-karnataka)

### 21. India Open Government Data Platform (data.gov.in)
- **URL:** https://www.data.gov.in/
- **Department:** National Informatics Centre (NIC), Govt of India
- **Metrics Available:**
  - Central and state government datasets
  - Karnataka-specific datasets
  - Sector-wise data (agriculture, industry, finance, etc.)
  - API access to 100,000+ datasets
- **Update Frequency:** Varies by dataset
- **Current Status:** ⏳ Not Integrated (can be used as meta-source)
- **Data Format:** API + downloadable formats (CSV, JSON, XML)
- **Integration Complexity:** Easy (API key registration required)
- **Dashboard Use:**
  - Access central government data (NHAI, PARIVESH, IMD, etc.)
  - Supplement state data with national sources
  - API integration for select high-priority datasets
- **Sources:**
  - [OGD India Portal](https://www.data.gov.in/)
  - [OGD Karnataka Catalog](https://www.data.gov.in/catalogs/?state=Karnataka)
  - [OGD APIs](https://www.data.gov.in/apis)
  - [Python Wrapper for OGD](https://pypi.org/project/datagovindia/)

### 22. Mahiti Kanaja Portal
- **URL:** https://mahitikanaja.karnataka.gov.in/
- **Department:** Govt of Karnataka (Multi-departmental)
- **Metrics Available:**
  - Government scheme beneficiary data
  - Department-wise scheme information
  - District-wise scheme coverage
- **Update Frequency:** Varies by department
- **Current Status:** ⏳ Not Integrated
- **Data Format:** Web portal (no public API documented)
- **Integration Complexity:** Hard (restricted access)
- **Dashboard Use:**
  - Track beneficiary coverage of development schemes
  - Monitor scheme implementation in Kalaburagi

---

## Integration Priority Matrix

### High Priority (Immediate Integration Recommended)

| Data Source | Department | Complexity | Impact | Timeline |
|------------|------------|------------|--------|----------|
| **MSME Registration (UDYAM)** | Industries & Commerce | Easy-Medium | High | Phase 1 - Q1 2026 |
| **KIADB Land Allocation** | KIADB | Medium | High | Phase 1 - Q2 2026 |
| **FPO Directory** | Agriculture | Medium | Medium-High | Phase 2 - Q3 2026 |
| **SLBC Credit Data** | Banking | Medium | High | Phase 1 - Q2 2026 |
| **Karnataka Udyog Mitra** | Industries | Medium | High | Phase 1 - Q1 2026 |

**Justification:** These sources directly track dashboard KPIs (MSME growth, industrial land allocation, FPO formation, credit flow, investment pipeline) and have accessible data formats.

### Medium Priority (Integrate in Phase 2)

| Data Source | Department | Complexity | Impact | Timeline |
|------------|------------|------------|--------|----------|
| **KWRIS Dam Levels** | Water Resources | Medium-Hard | Medium | Phase 2 - Q3 2026 |
| **KSHIP Road Projects** | PWD | Medium | Medium | Phase 2 - Q4 2026 |
| **Bhoomi Land Records** | Revenue | Medium | Medium | Phase 2 - Q3 2026 |
| **PARIVESH Clearances** | Environment | Hard | Medium-High | Phase 2 - Q4 2026 |
| **GESCOM Power Data** | Energy | Hard | Medium | Phase 2 - Q4 2026 |

**Justification:** These require more complex integration but provide valuable context for infrastructure and environmental progress.

### Low Priority (Future Consideration)

| Data Source | Department | Complexity | Impact | Timeline |
|------------|------------|------------|--------|----------|
| **e-Karmika Labour** | Labour | Hard | Low-Medium | Phase 3+ |
| **ESIC Registrations** | Labour | Hard | Medium | Phase 3+ |
| **PHC-MIS Health Data** | Health | Hard | Low | Phase 3+ |
| **Karnataka Agriculture Portal** | Agriculture | Hard | Low-Medium | Phase 3+ |
| **PWD Projects** | PWD | Hard | Low | Phase 3+ |

**Justification:** Either restricted access, low direct impact on dashboard KPIs, or alternative data sources available.

---

## API Access & Authentication

### Datasets with Public APIs

1. **OGD Platform APIs** (data.gov.in, karnataka.data.gov.in)
   - Registration required: Yes (free API key)
   - Rate limits: Yes (varies by dataset)
   - Documentation: https://karnataka.data.gov.in/apis

2. **Bhoomi Land Records API** (via API Setu)
   - Registration required: Yes
   - Authentication: API key
   - Documentation: https://apis.guru/apis/apisetu.gov.in/landrecordskar

3. **Agmarknet API**
   - Registration required: Yes (under development)
   - Current method: Web scraping
   - Documentation: Limited public documentation

4. **IMD Weather API**
   - Registration required: Yes (for automated access)
   - Documentation: https://mausam.imd.gov.in/imd_latest/contents/api.pdf
   - Public data: Available via portal without API

### Datasets Requiring Web Scraping

1. KWRIS (water levels)
2. GESCOM (power distribution)
3. KSHIP (road projects)
4. SLBC Karnataka (credit data - PDF reports)
5. PARIVESH (clearance status)
6. e-Karmika (labour registrations)

### Datasets Requiring Manual Updates

1. NABARD PLP (annual PDF reports)
2. FPO Directory (quarterly PDF updates)
3. ESIC Karnataka (restricted data - manual requests)
4. PHC-MIS (privacy restrictions)

---

## Data Quality Considerations

### Update Frequency

- **Daily:** IMD rainfall, Agmarknet prices, KWRIS dam levels
- **Weekly:** PARIVESH clearances (workflow-based)
- **Monthly:** GESCOM, KSHIP, Karnataka Udyog Mitra, MSME registrations
- **Quarterly:** SLBC credit data, FPO updates, KIADB land allocation
- **Annual:** NABARD PLP, Census data

### Data Reliability Ratings

| Source Type | Reliability | Notes |
|------------|-------------|-------|
| **Government Official Portals** | High | Primary sources, updated by departments |
| **OGD Platform Datasets** | High | Curated and validated by NIC |
| **Third-party Aggregators** | Medium | Useful for visualization, verify against official sources |
| **PDF Reports** | Medium-High | Official but requires manual parsing, version control needed |
| **Web Scraped Data** | Medium | Dependent on site structure stability |

---

## Implementation Recommendations

### Phase 1 (Q1-Q2 2026): Foundation
1. Register for OGD API access (karnataka.data.gov.in, data.gov.in)
2. Integrate MSME UDYAM data via OGD API
3. Integrate Karnataka Udyog Mitra investment data
4. Set up SLBC credit data quarterly updates (PDF parsing)
5. Create data quality monitoring system

### Phase 2 (Q3-Q4 2026): Expansion
1. Integrate KIADB land allocation data
2. Add FPO directory with quarterly updates
3. Implement KWRIS dam level scraping
4. Add KSHIP road project tracking
5. Integrate Bhoomi land records API for specific projects

### Phase 3 (2027+): Advanced
1. PARIVESH clearance tracking for key projects
2. GESCOM power distribution data (requires partnership)
3. e-Karmika labour data (if public access improves)
4. PHC-MIS health infrastructure data
5. Advanced analytics and trend forecasting

### Technical Implementation Notes

1. **GitHub Actions Workflows:**
   - Extend existing `update-live-data.yml` workflow
   - Add separate workflows for different update frequencies
   - Implement error handling and fallback mechanisms

2. **Data Storage:**
   - Store live data in `js/live-data.js` (current approach)
   - Consider adding `js/monthly-data.js` for less-frequent updates
   - Use versioned data files for historical tracking

3. **API Key Management:**
   - Store API keys in GitHub Secrets
   - Document key rotation procedures
   - Monitor API rate limits and usage

4. **Error Handling:**
   - Implement graceful degradation (show last known data if fetch fails)
   - Add data quality indicators (live/cached/estimated)
   - Log failed updates for monitoring

5. **Data Validation:**
   - Implement sanity checks (e.g., prices shouldn't change >50% daily)
   - Cross-validate with historical trends
   - Flag anomalies for manual review

---

## Compliance & Legal

### Data Usage Rights

All sources listed are:
- ✅ **Publicly accessible** (no login required for basic access)
- ✅ **Government official data** (primary sources)
- ✅ **Permissible for public dashboard use** (open data licenses)
- ⚠️ **Subject to terms of service** (review individual portal T&C)

### Attribution Requirements

- Maintain "Data Sources" tab with source URLs
- Update "Last Updated" timestamps
- Attribute data to original departments
- Link to official portals in dashboard

### Privacy Compliance

- ❌ **Do NOT use:** Individual beneficiary data, personal health records, Aadhaar-linked data
- ✅ **Safe to use:** Aggregated statistics, district-level summaries, public schemes data

---

## Contact Information for Data Access

### For Official Data Partnerships

1. **Karnataka State Data Centre**
   - Website: https://ceg.karnataka.gov.in/ksdc/
   - Purpose: Coordinate data access across departments

2. **Department of Industries & Commerce**
   - Website: https://industries.karnataka.gov.in/
   - Contact: For Udyog Mitra, KIADB, MSME data

3. **GESCOM (for power data)**
   - Website: https://gescom.karnataka.gov.in/
   - Contact: For industrial connection statistics

4. **Karnataka Water Resources Department**
   - Website: https://waterresources.karnataka.gov.in/
   - Contact: For irrigation and dam level data

---

## Changelog

### Version 1.0 (February 3, 2026)
- Initial research and documentation
- Catalogued 22 data sources across 11 categories
- Verified current accessibility of all portals
- Created integration priority matrix
- Documented API availability and authentication requirements

---

## Sources & References

All URLs and information verified as of February 3, 2026. Key references include:

### Government Portals
- [Karnataka Open Data Portal](https://karnataka.data.gov.in/)
- [Open Government Data Platform India](https://www.data.gov.in/)
- [Invest Karnataka](https://investkarnataka.co.in/)
- [KIADB Official Portal](https://kiadb.karnataka.gov.in/en/)
- [Karnataka Water Resources](https://waterresources.karnataka.gov.in/)
- [GESCOM](https://gescom.karnataka.gov.in/english)
- [KSHIP](https://www.kship.in/en/)
- [Karnataka PWD](https://kpwd.karnataka.gov.in/english)
- [PARIVESH](https://parivesh.nic.in/)
- [Bhoomi Land Records](https://landrecords.karnataka.gov.in/)
- [e-Karmika](https://www.ekarmika.karnataka.gov.in/ekarmika/static/home.aspx)
- [ESIC](https://esic.gov.in/)
- [Agmarknet](https://www.agmarknet.gov.in/)
- [IMD](https://mausam.imd.gov.in/)
- [SLBC Karnataka](https://slbckarnataka.com/)
- [PHC-MIS](https://karunadu.karnataka.gov.in/hfw/Pages/PHC-MIS.aspx)
- [NHAI](https://nhai.gov.in/)

### Research & Analysis
- [Farmonaut - Agmarknet API Guide](https://farmonaut.com/api-development/agmarknet-api-access-crop-prices-market-data-india)
- [CEDA Agri Market Data](https://agmarknet.ceda.ashoka.edu.in/)
- [COE-FPO Publications](https://coefpo.org/publications/fpo-list-english.pdf)
- [API Setu - Land Records API](https://apis.guru/apis/apisetu.gov.in/landrecordskar)
- [KPMG India Open Data Initiative 2023](https://assets.kpmg.com/content/dam/kpmg/in/pdf/2023/04/india-open-data-initiative-opportunity-for-states.pdf)

---

**Document Status:** Active Research
**Next Review Date:** April 2026
**Maintainer:** Urban Morph / Kalaburagi Dashboard Team
**Version:** 1.0

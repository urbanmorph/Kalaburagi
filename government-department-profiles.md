# Karnataka Government Department Profiles for Dashboard Integration
## Supporting Industrial and Infrastructure Projects in Kalaburagi District

**Purpose:** This document provides profiles of nine major Karnataka government departments involved in industrial/infrastructure projects. Each profile includes legal mandate, key responsibilities, KPIs, information needs, and coordination requirements to inform dashboard design for the Kalaburagi District Transformation Framework.

**Document Version:** 1.0
**Last Updated:** February 3, 2026

---

## Table of Contents
1. [Public Works Department (PWD)](#1-public-works-department-pwd)
2. [Karnataka Industrial Areas Development Board (KIADB)](#2-karnataka-industrial-areas-development-board-kiadb)
3. [Water Resources Department](#3-water-resources-department)
4. [Electricity Distribution Companies (BESCOM/GESCOM)](#4-electricity-distribution-companies-bescomgescom)
5. [Health Department](#5-health-department)
6. [Agriculture Department](#6-agriculture-department)
7. [Forest Department](#7-forest-department)
8. [Revenue Department](#8-revenue-department)
9. [Labour Department](#9-labour-department)
10. [Coordination Framework](#coordination-framework)
11. [Single Window System Integration](#single-window-system-integration)

---

## 1. Public Works Department (PWD)

### Legal Mandate
- **Governing Framework:** Karnataka Public Works Revised Departmental Code 2014
- **Establishment:** 1856 (Mysore State era)
- **Status:** Government Ministry/Agency under Government of Karnataka

### Key Responsibilities in Industrial Projects

| Area | Responsibility |
|------|----------------|
| **Roads** | Construction and maintenance of National Highways, State Highways, and Major District Roads |
| **Buildings** | Construction and maintenance of government buildings, deposit contribution works for other departments |
| **Industrial Connectivity** | Approach roads to industrial areas, connectivity to KIADB industrial estates |
| **Bridge Construction** | Bridges for industrial corridors and connectivity |
| **Quality Standards** | Adherence to Karnataka Buildings Specifications (KBS), MORTH, IRC, and BIS standards |

### Administrative Structure
- **Zones:** 5 (C&B South, North, North East, Central, National Highways)
- **Hierarchy:** Chief Engineer → Superintending Engineer → Executive Engineer → Sub-Division
- **Related Organizations:** Karnataka Road Development Corporation Limited (KRDCL), Karnataka State Highway Improvement Project (KSHIP)

### KPIs and Information Needs

| KPI Category | Metrics | Data Source | Frequency |
|-------------|---------|-------------|-----------|
| **Road Network** | km of SH/MDR maintained, km upgraded | PWD MIS | Monthly |
| **Project Progress** | % completion, milestones achieved | KSHIP portal | Weekly |
| **Quality** | Safety incidents, defects reported | Field reports | Monthly |
| **Budget Utilization** | Sanctioned vs. released vs. utilized | Treasury data | Monthly |
| **Industrial Connectivity** | Approach roads completed to industrial areas | PMU tracking | Quarterly |
| **Timeline Adherence** | % projects on schedule | Project tracker | Monthly |

### Dashboard Requirements
```
PWD Dashboard Components:
├── Road Network Map (GIS integration)
├── Project Status Board
│   ├── Industrial corridor roads
│   ├── KIADB approach roads
│   └── Major infrastructure projects
├── Budget Tracker (scheme-wise)
├── Quality Metrics Panel
└── Coordination Alerts (land acquisition, forest clearance)
```

### Coordination Requirements
- **Revenue Department:** Land acquisition for road widening
- **Forest Department:** Forest clearance for road projects near forest areas
- **KIADB:** Industrial area road connectivity requirements
- **Water Resources:** Culverts and drainage coordination
- **Electricity Board:** Power line crossings, street lighting

---

## 2. Karnataka Industrial Areas Development Board (KIADB)

### Legal Mandate
- **Governing Act:** Karnataka Industrial Areas Development Act (KIAD Act), 1966
- **Establishment:** June 20, 1966 (Order No. Cl 67 GMI 66)
- **Extended Powers:** Karnataka Special Investment Regions (KSIR) Act
- **Parent Body:** Department of Industries & Commerce, Government of Karnataka

### Key Responsibilities in Industrial Projects

| Area | Responsibility |
|------|----------------|
| **Land Acquisition** | Acquire land for industrial purposes under KIAD Act |
| **Infrastructure Development** | Develop industrial areas with roads, power, water, drainage |
| **Plot Allotment** | Allocate developed plots to industries |
| **Industrial Townships** | Create townships with civic facilities (hospitals, schools, fire stations) |
| **Single Unit Complexes** | Develop individual industrial units |
| **Common Facilities** | Provide CETPs, STPs, technical training centers, R&D facilities |

### Scale of Operations
- **Industrial Areas:** 173 across 30 districts
- **Single Unit Complexes:** 490+ developed
- **Infrastructure Provided:** Roads, power substations, water supply, CETPs, STPs

### KPIs and Information Needs

| KPI Category | Metrics | Data Source | Frequency |
|-------------|---------|-------------|-----------|
| **Land Bank** | Total land acquired, land available, land allotted | KIADB MIS | Monthly |
| **Occupancy Rate** | % of plots occupied in each industrial area | Estate Manager reports | Quarterly |
| **Infrastructure Status** | % completion of roads, power, water in each area | Project tracker | Monthly |
| **Investment Generated** | ₹ investment per industrial area | Industry filings | Quarterly |
| **Employment Created** | Jobs in KIADB industrial areas | ESIC/Udyam data | Quarterly |
| **Revenue Collection** | Lease rent, maintenance charges collected | Finance dept | Monthly |
| **Land Acquisition Progress** | Applications pending, acquisitions completed | LA Cell | Weekly |

### Dashboard Requirements
```
KIADB Dashboard Components:
├── Industrial Areas Map (Kalaburagi-specific)
│   ├── Available plots
│   ├── Allocated plots
│   └── Infrastructure status
├── Land Acquisition Tracker
│   ├── PM MITRA land (390 cr project)
│   ├── Aerospace cluster land
│   └── Other industrial land
├── Investment Pipeline
│   ├── Enquiries received
│   ├── Applications processing
│   └── Allotments made
├── Infrastructure Development Status
└── Revenue Dashboard
```

### Coordination Requirements
- **Revenue Department:** Land records verification, land acquisition support
- **PWD:** Approach roads, internal road construction
- **Water Resources:** Industrial water supply arrangements
- **Electricity Board:** Power substation installation, HT connections
- **Forest Department:** Clearances for land near forest areas
- **Pollution Control Board:** CETP/STP approvals

---

## 3. Water Resources Department

### Legal Mandate
- **Governing Framework:** Karnataka State Water Policy 2019
- **Key Organizations:**
  - Karnataka Neeravari Nigam Limited (KNNL)
  - Water Resources Development Organization (WRDO)
  - Advanced Centre for Integrated Water Resources Management (ACIWRM)

### Key Responsibilities in Industrial Projects

| Area | Responsibility |
|------|----------------|
| **Industrial Water Allocation** | Allocate water for industrial use from surface water sources |
| **Canal Infrastructure** | Maintain and expand canal networks for industrial water supply |
| **Reservoir Management** | Manage reservoirs that supply industrial areas |
| **Water Quality** | Monitor water quality for industrial use standards |
| **Treated Wastewater** | Promote treated wastewater reuse for industry |
| **Policy Framework** | Inter-sectoral water allocation between agriculture, domestic, and industry |

### Strategic Context for Kalaburagi
- **Key Challenges:** Frequent droughts, uneven rainfall patterns
- **Industrial Corridor:** Chennai-Bangalore-Chitradurga Industrial corridor water requirements
- **Policy Direction:** Exploring desalination plants and recycled water supply to industries

### KPIs and Information Needs

| KPI Category | Metrics | Data Source | Frequency |
|-------------|---------|-------------|-----------|
| **Water Availability** | Dam storage levels, canal flow rates | WRDO | Daily |
| **Industrial Allocation** | Million liters allocated to industries | Allocation records | Monthly |
| **Water Quality** | BOD, COD, TDS at key points | KSPCB | Monthly |
| **Infrastructure Projects** | % completion of water supply schemes | Project MIS | Monthly |
| **Groundwater Levels** | Depth to water table by block | Hydrology unit | Monthly |
| **Rainfall Data** | Actual vs. normal rainfall | IMD | Daily |
| **Canal Efficiency** | Water delivery efficiency % | WRDO | Quarterly |

### Dashboard Requirements
```
Water Resources Dashboard Components:
├── Water Availability Map
│   ├── Dam/reservoir levels
│   ├── Canal network status
│   └── Groundwater levels by block
├── Industrial Water Supply Tracker
│   ├── Applications pending
│   ├── Allocations made
│   └── Connections installed
├── Water Quality Monitoring Panel
├── Rainfall & Hydrology Data
└── Project Progress Tracker
```

### Coordination Requirements
- **KIADB:** Water supply to industrial areas
- **Pollution Control Board:** Effluent discharge monitoring
- **Agriculture Department:** Water sharing between irrigation and industry
- **Revenue Department:** Land for water infrastructure projects
- **Forest Department:** Clearances for water projects in forest areas

---

## 4. Electricity Distribution Companies (BESCOM/GESCOM)

### Legal Mandate
- **Governing Act:** Electricity Act, 2003
- **Regulatory Body:** Karnataka Electricity Regulatory Commission (KERC)
- **Formation:** 1999 (KEB reform), unbundled June 2002
- **GESCOM Coverage:** Kalaburagi, Bidar, Bellary, Koppala, Raichur, Yadgir, Vijayanagar districts

### Key Responsibilities in Industrial Projects

| Area | Responsibility |
|------|----------------|
| **Power Distribution** | Distribute electricity to industrial consumers |
| **Industrial Connections** | Process HT/LT connection applications for industries |
| **Substation Development** | Establish substations for industrial areas |
| **Tariff Implementation** | Apply KERC-approved industrial tariffs |
| **Renewable Energy** | Meet Renewable Energy Purchase Obligations (RPO) |
| **Power Quality** | Maintain voltage and frequency standards |

### GESCOM Specifics (Kalaburagi Region)
- **Service Area:** 43,861 sq km, 7 districts
- **Consumers:** 3.59 million (as of March 2023)
- **Agricultural Connections:** 1.2 million
- **Peak Load:** 1,077 MW
- **Daily Consumption:** 21.98 MU
- **Distribution Lines:** 95,000+ km
- **Substations:** ~450 of various voltage levels

### KPIs and Information Needs

| KPI Category | Metrics | Data Source | Frequency |
|-------------|---------|-------------|-----------|
| **Industrial Load** | Connected load (MW), energy consumption (MU) | GESCOM MIS | Monthly |
| **Connection Processing** | Applications pending, avg. processing time | Connection cell | Weekly |
| **AT&C Losses** | Aggregate Technical & Commercial losses % | Technical dept | Monthly |
| **Power Purchase Cost** | ₹ per unit | Finance dept | Monthly |
| **DT Failure Rate** | Distribution transformer failures % | O&M | Monthly |
| **RPO Compliance** | Renewable energy % of total procurement | RE cell | Quarterly |
| **Industrial Revenue** | Revenue from C&I segment | Commercial dept | Monthly |
| **Open Access** | Industrial open access procurement (MUs) | Regulatory | Quarterly |

### Dashboard Requirements
```
GESCOM Dashboard Components:
├── Power Supply Status
│   ├── Load management
│   ├── Outage tracking
│   └── Feeder-wise status
├── Industrial Connection Tracker
│   ├── Pending applications
│   ├── Commissioning timeline
│   └── Substation capacity
├── Revenue & Losses Panel
├── Infrastructure Development
│   ├── New substations
│   ├── Line upgrades
│   └── Smart meter rollout
└── Renewable Energy Dashboard
```

### Coordination Requirements
- **KIADB:** Power infrastructure for industrial areas
- **Industries Department:** Industrial load forecasting
- **Pollution Control Board:** Emission standards for thermal sources
- **PWD:** Right of way for transmission lines
- **Revenue Department:** Land for substations

---

## 5. Health Department

### Legal Mandate
- **Governing Acts:**
  - Factories Act, 1948
  - Karnataka Factories Rules, 1969
  - Occupational Safety, Health and Working Conditions (Karnataka) Rules, 2021
- **Key Bodies:**
  - Department of Health and Family Welfare Services
  - Directorate of Factories, Boilers, Industrial Safety & Health (under Labour Ministry)
- **Establishment:** 1982

### Key Responsibilities in Industrial Projects

| Area | Responsibility |
|------|----------------|
| **Occupational Health** | Health standards for factory workers |
| **Medical Facilities** | Health infrastructure near industrial areas |
| **Health Inspections** | Periodic health inspections of factories |
| **Disease Surveillance** | Monitor industrial diseases |
| **Emergency Response** | Medical emergency preparedness |
| **Sanitation Standards** | Hygiene and sanitation in industrial areas |

### Occupational Health Requirements (Draft Rules 2021)
- Annual free medical examination for workers above 45 years
- Maximum 48 working hours per week
- Safety officer appointment requirements
- Industrial disease reporting protocols

### KPIs and Information Needs

| KPI Category | Metrics | Data Source | Frequency |
|-------------|---------|-------------|-----------|
| **Health Infrastructure** | PHCs, CHCs near industrial areas | Health MIS | Quarterly |
| **Worker Health Screening** | % workers screened, abnormalities detected | Factory reports | Annual |
| **Industrial Accidents** | Reportable injuries, fatalities | DISH dept | Monthly |
| **Occupational Diseases** | Cases reported, types | DISH dept | Quarterly |
| **Emergency Response** | Ambulance response time, bed availability | Health MIS | Daily |
| **Sanitation Coverage** | % industrial areas with adequate sanitation | Inspections | Quarterly |

### Dashboard Requirements
```
Health Department Dashboard Components:
├── Health Infrastructure Map
│   ├── PHCs, CHCs near industrial areas
│   ├── Hospital bed availability
│   └── Ambulance deployment
├── Occupational Health Panel
│   ├── Worker screening status
│   ├── Accident statistics
│   └── Disease surveillance
├── Compliance Tracker
│   ├── Factory health inspections
│   └── OSH compliance status
└── Emergency Response Metrics
```

### Coordination Requirements
- **Labour Department:** Factory health inspections, worker welfare
- **KIADB:** Health facilities in industrial townships
- **Industries Department:** Health compliance of MSMEs
- **Pollution Control Board:** Air quality impact on worker health
- **Fire Services:** Industrial emergency response

---

## 6. Agriculture Department

### Legal Mandate
- **Governing Acts:**
  - Karnataka Land Revenue Act, 1964 (land conversion)
  - Karnataka Land Reforms Act, 1961 (agricultural land purchase)
- **Key Organizations:**
  - Department of Agriculture (KSDA)
  - Directorate of Economics and Statistics
  - Food Karnataka Limited

### Key Responsibilities in Industrial Projects

| Area | Responsibility |
|------|----------------|
| **Land Conversion** | Regulate conversion of agricultural land to industrial use |
| **Raw Material Supply** | Ensure agricultural produce for agro-processing industries |
| **Food Processing Linkage** | Connect farmers to food processing units |
| **Crop Data** | Provide production data for industrial planning |
| **FPO Development** | Form FPOs to aggregate produce for processing |
| **Policy Advisory** | Guide industrial land use in agricultural zones |

### Agricultural Context for Kalaburagi
- **India's Largest Pulse Producer:** 500+ dal mills, GI-tagged Tur Dal
- **Agricultural Workforce:** 58.46% (vs. state 33%)
- **Processing Gap:** Only 1% of fruits/vegetables currently processed
- **Post-Harvest Loss:** 25-30% due to inadequate cold storage and processing

### Key Statistics
| Indicator | Kalaburagi/Karnataka Data |
|-----------|--------------------------|
| Foodgrain Production | 14.18 million tons (Karnataka 2023) |
| National Rankings | Largest producer of coarse cereals, coffee, raw silk, tomatoes |
| Horticulture Area | 16,300 km², 9.58 million tons production |
| Horticulture Income | 40%+ of agricultural income |

### KPIs and Information Needs

| KPI Category | Metrics | Data Source | Frequency |
|-------------|---------|-------------|-----------|
| **Crop Production** | District-wise production by crop | KSDA MIS | Seasonal |
| **Land Conversion** | Applications received, approved, rejected | Revenue dept | Monthly |
| **Agro-Processing** | Mill capacity utilization, raw material procurement | Industries dept | Quarterly |
| **FPO Status** | Number of FPOs, members, turnover | NABARD | Quarterly |
| **Market Prices** | APMC prices for key commodities | Agmarknet | Daily |
| **Cold Storage** | Capacity created, utilization % | Horticulture dept | Monthly |
| **Food Processing Investment** | ₹ investment in food processing | Industries | Quarterly |

### Dashboard Requirements
```
Agriculture Department Dashboard Components:
├── Crop Production Map
│   ├── Block-wise production
│   ├── Key commodities tracking
│   └── Seasonal trends
├── Land Conversion Tracker
│   ├── Pending applications
│   ├── Conversion approvals
│   └── Industrial land use
├── Agro-Processing Linkage Panel
│   ├── Mill-wise raw material sourcing
│   ├── FPO supply linkages
│   └── Cold chain status
├── Market Intelligence
│   ├── Price trends
│   ├── Arrival data
│   └── Export statistics
└── FPO Performance Dashboard
```

### Coordination Requirements
- **Industries Department:** Agro-processing industry development
- **Revenue Department:** Land conversion approvals
- **Water Resources:** Irrigation for crops supplying industries
- **KIADB:** Land for food processing zones
- **NABARD:** FPO financing and development

---

## 7. Forest Department

### Legal Mandate
- **Governing Act:** Karnataka Forest Act, 1963 (Act No. 5 of 1964)
- **Central Act:** Forest Conservation Act, 1980
- **Related Acts:** Wildlife Protection Act, 1972; Environment Protection Act, 1986
- **Clearance System:** PARIVESH (Pro Active and Responsive facilitation by Interactive, Virtuous and Environmental Single-window Hub)

### Key Responsibilities in Industrial Projects

| Area | Responsibility |
|------|----------------|
| **Forest Clearance** | Process forest land diversion for industrial projects |
| **Environmental Review** | Assess ecological impact of projects near forests |
| **Compensatory Afforestation** | Ensure afforestation against diverted forest land |
| **Wildlife Corridors** | Protect wildlife corridors from industrial encroachment |
| **Western Ghats Protection** | Strict limits on conversion in eco-sensitive areas |
| **Tree Felling Permits** | Issue permissions for tree removal in project areas |

### Forest Cover Statistics (Karnataka)
| Category | Area (sq km) |
|----------|-------------|
| Very Dense Forest (VDF) | 4,501 |
| Moderately Dense Forest (MDF) | 21,048 |
| Open Forest (OF) | 13,026 |
| Total Forest Cover | 38,575 |
| Recorded Forest Area (RFA) | 38,284 |
| Reserved Forest | 28,690 |
| Protected Forest | 3,931 |
| Unclassed Forest | 5,663 |

### Historical Diversion Data
- **Last 14 years (4 districts including Bellary):** 4,228.81 acres lost to mining
- **Last 40 years (Karnataka):** 64,355 hectares diverted for non-forestry activities

### KPIs and Information Needs

| KPI Category | Metrics | Data Source | Frequency |
|-------------|---------|-------------|-----------|
| **Forest Clearance** | Applications pending, cleared, rejected | PARIVESH | Weekly |
| **Land Diversion** | Hectares diverted for industry | FC records | Quarterly |
| **Compensatory Afforestation** | Hectares planted, survival rate | Forest dept | Quarterly |
| **Tree Cover** | Forest cover change (satellite analysis) | FSI | Biennial |
| **Biodiversity Index** | Species richness, protected area status | Research wing | Annual |
| **Wildlife Crime** | Cases registered, convictions | Garudakshi system | Monthly |
| **Eco-sensitive Zone Compliance** | Violations in ESZ | Enforcement wing | Monthly |

### Dashboard Requirements
```
Forest Department Dashboard Components:
├── Forest Cover Map (GIS)
│   ├── Dense/moderate/open forest
│   ├── Protected areas
│   └── Eco-sensitive zones
├── Forest Clearance Tracker
│   ├── Applications pending
│   ├── Stage-wise status
│   └── Compensatory afforestation compliance
├── Industrial Project Impact Panel
│   ├── Projects near forest areas
│   ├── Wildlife corridor assessment
│   └── Environmental impact status
├── Biodiversity Indicators
└── Enforcement Dashboard
```

### Coordination Requirements
- **KIADB:** Forest clearance for industrial land
- **Mining Department:** Mining project clearances
- **Revenue Department:** Land demarcation near forests
- **Pollution Control Board:** Environmental compliance
- **PWD:** Road projects through forest areas

---

## 8. Revenue Department

### Legal Mandate
- **Governing Acts:**
  - Karnataka Land Revenue Act, 1964
  - Karnataka Land Revenue Rules, 1966
  - Karnataka Land Reforms Act, 1961
  - Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013
- **Key Bodies:**
  - Survey, Settlement & Land Records (SSLR)
  - Bhoomi (online land records system)

### Key Responsibilities in Industrial Projects

| Area | Responsibility |
|------|----------------|
| **Land Records** | Maintain RTC (Record of Rights), mutation records |
| **Land Acquisition** | Acquire land for public purposes including industries |
| **Land Conversion** | Process agricultural to industrial land conversion |
| **Title Verification** | Verify land ownership for industrial projects |
| **Land Grants** | Process government land grants for industrial use |
| **Dispute Resolution** | Resolve land disputes affecting projects |

### Land Administration Structure
- **Hierarchy:** State → Division → District → Taluk → Hobli → Village
- **Key Officers:** Deputy Commissioner (DC), Sub-Divisional Officer (SDO), Tahsildar
- **Online Systems:** Bhoomi (land records), Mojini V3 (survey)

### Land Conversion Process (Section 95, KLR Act)
1. Application to Deputy Commissioner
2. Verification against Master Plan (KTCP Act)
3. Environmental clearance (if required)
4. Payment of conversion fees
5. Issuance of conversion order

### KPIs and Information Needs

| KPI Category | Metrics | Data Source | Frequency |
|-------------|---------|-------------|-----------|
| **Land Acquisition** | Cases pending, completed, compensation paid | LA Cell | Weekly |
| **Land Conversion** | Applications received, approved, rejected | DC office | Monthly |
| **Title Clearance** | Encumbrance certificate requests, clearances | Sub-registrar | Monthly |
| **Land Records** | RTCs updated, mutations completed | Bhoomi | Monthly |
| **Disputes Pending** | Land dispute cases by category | Courts/DC | Monthly |
| **Compensation Disbursement** | ₹ disbursed, beneficiaries covered | Treasury | Monthly |
| **KIADB Support** | Land acquired for KIADB, cleared for allotment | KIADB | Quarterly |

### Dashboard Requirements
```
Revenue Department Dashboard Components:
├── Land Records Portal Integration
│   ├── Survey numbers for industrial projects
│   ├── Ownership verification status
│   └── Encumbrance status
├── Land Acquisition Tracker
│   ├── Project-wise acquisition status
│   ├── Compensation disbursement
│   └── R&R compliance
├── Land Conversion Panel
│   ├── Pending applications
│   ├── Processing timeline
│   └── Master Plan compliance
├── Dispute Resolution Status
└── Revenue Collection Dashboard
```

### Coordination Requirements
- **KIADB:** Land acquisition for industrial areas
- **PWD:** Land for road projects
- **Agriculture Department:** Agricultural land use regulation
- **Forest Department:** Forest land demarcation
- **Water Resources:** Land for water projects

---

## 9. Labour Department

### Legal Mandate
- **Key Acts Administered:**
  - Factories Act, 1948
  - Karnataka Shop and Commercial Establishment Act, 1961
  - Contract Labour (Regulation and Abolition) Act, 1970
  - Building and Other Construction Workers Act, 1996
  - Payment of Wages Act, 1936
  - Minimum Wages Act, 1948
  - Payment of Bonus Act, 1965
  - Payment of Gratuity Act, 1972
  - Child Labour and Adolescent Labour Act, 1986
  - Maternity Benefit Act, 1961
- **Key Bodies:**
  - Department of Labour
  - Department of Factories, Boilers, Industrial Safety & Health
  - Building and Other Construction Workers' Welfare Board

### Key Responsibilities in Industrial Projects

| Area | Responsibility |
|------|----------------|
| **Factory Registration** | Register factories under Factories Act |
| **Labour Inspections** | Conduct periodic factory inspections |
| **Industrial Safety** | Ensure compliance with safety standards |
| **Wage Compliance** | Monitor minimum wage and timely payment |
| **Worker Welfare** | Implement welfare schemes for workers |
| **Dispute Resolution** | Mediate industrial disputes |
| **Boiler Registration** | Register and inspect industrial boilers |

### Online Services (e-Karmika, Karmika Sahayoga)
- Registration under Shops & Establishments Act
- Contract Labour registration
- BOCW worker registration
- Returns filing
- Inspection scheduling

### KPIs and Information Needs

| KPI Category | Metrics | Data Source | Frequency |
|-------------|---------|-------------|-----------|
| **Factory Registration** | New registrations, renewals, total registered | e-Karmika | Monthly |
| **Inspections** | Inspections conducted, violations found | DISH dept | Monthly |
| **Industrial Accidents** | Accidents reported, fatalities, injuries | DISH dept | Monthly |
| **Wage Compliance** | Complaints received, resolved | Labour office | Monthly |
| **Workers Registered** | ESIC, EPF, BOCW registrations | Online portals | Monthly |
| **Dispute Resolution** | Cases pending, conciliated, referred to tribunal | Labour courts | Monthly |
| **Safety Compliance** | Safety audits, fire safety compliance | Inspections | Quarterly |
| **Boiler Inspections** | Boilers registered, inspected, certified | DISH dept | Monthly |

### Dashboard Requirements
```
Labour Department Dashboard Components:
├── Employment Statistics
│   ├── ESIC registrations by industry
│   ├── EPF coverage
│   └── BOCW workers
├── Compliance Panel
│   ├── Factory registration status
│   ├── Inspection schedule/results
│   └── Violation tracking
├── Safety Metrics
│   ├── Accident statistics
│   ├── Safety audit compliance
│   └── Boiler status
├── Wage Monitoring
│   ├── Minimum wage compliance
│   ├── Grievances pending
│   └── Resolution timeline
└── Worker Welfare Dashboard
    ├── Scheme beneficiaries
    ├── Welfare fund status
    └── Training programs
```

### Coordination Requirements
- **Industries Department:** Factory establishment approvals
- **Health Department:** Occupational health standards
- **KIADB:** Labour welfare facilities in industrial areas
- **Skill Development:** Worker training programs
- **Pollution Control Board:** Worker exposure to hazardous substances

---

## Coordination Framework

### Multi-Department Coordination Matrix for Industrial Projects

| Stage | Primary Dept | Supporting Departments | Approvals Required |
|-------|-------------|----------------------|-------------------|
| **Land Identification** | KIADB | Revenue, Agriculture, Forest | Land suitability certificate |
| **Land Acquisition** | Revenue | KIADB, Agriculture | DC approval, compensation order |
| **Land Conversion** | Revenue | Agriculture | DC conversion order |
| **Forest Clearance** | Forest | KIADB, Revenue | FC Stage I & II |
| **Environmental Clearance** | KSPCB | Forest, Health | CTE/CTO |
| **Water Connection** | Water Resources | KIADB, KSPCB | Water allocation order |
| **Power Connection** | GESCOM | KIADB | HT connection sanction |
| **Road Connectivity** | PWD | KIADB, Revenue | Approach road sanction |
| **Factory License** | Labour | Health, Fire Services | Factory registration |
| **Occupation Certificate** | Labour/ULB | All departments | Compliance certificate |

### Critical Path Timeline (Industrial Project)

```
Typical Industrial Project Clearance Timeline:
Week 1-4:     Land identification & application (KIADB)
Week 5-12:    Land acquisition proceedings (Revenue)
Week 8-16:    Forest clearance if applicable (Forest)
Week 12-20:   Environmental clearance (KSPCB)
Week 16-24:   Infrastructure development (PWD, GESCOM, Water)
Week 20-28:   Factory construction
Week 24-32:   Inspections and compliance (Labour, Health)
Week 28-36:   Trial production and final approvals

Total Timeline: 9-12 months (best case)
```

---

## Single Window System Integration

### Karnataka Udyog Mitra (KUM) Integration

The Government of Karnataka has implemented a Single Window System that integrates 150+ business services from 30+ state departments. The dashboard should integrate with this system.

### Clearance Committee Structure

| Investment Level | Committee | Chair |
|-----------------|-----------|-------|
| Up to ₹15 crore | District Level SWCC | Deputy Commissioner |
| ₹15-500 crore | State Level SWCC (SLSWCC) | Minister for Industries |
| Above ₹500 crore | State High Level CC (SHLCC) | Chief Minister |

### Key Features to Leverage
1. **Unified Application:** Single application for multiple departments
2. **Online Tracking:** Real-time status tracking for investors
3. **Affidavit-Based Clearance (ABC):** Construction allowed before all approvals
4. **UMA Chatbot:** AI-powered multilingual assistance
5. **National Integration:** Connected to National Single Window System

### Dashboard Integration Requirements
```
Single Window System Integration:
├── Application Status Sync
│   ├── Pull pending applications
│   ├── Track clearance timeline
│   └── Alert on delays
├── Inter-Department Workflow
│   ├── Sequential approvals tracking
│   ├── Parallel processing status
│   └── Bottleneck identification
├── Investment Pipeline
│   ├── Applications by sector
│   ├── Investment value tracking
│   └── Employment projections
└── Compliance Dashboard
    ├── Post-clearance monitoring
    ├── Condition compliance
    └── Annual renewal tracking
```

---

## Appendix: Karnataka State Pollution Control Board (KSPCB)

### Legal Mandate
- **Governing Acts:**
  - Water (Prevention & Control of Pollution) Act, 1974
  - Air (Prevention & Control of Pollution) Act, 1981
  - Environment Protection Act, 1986
- **Establishment:** September 21, 1974

### Key Responsibilities
| Area | Responsibility |
|------|----------------|
| **Consent Management** | Issue CTE (Consent to Establish), CTO (Consent to Operate) |
| **Pollution Monitoring** | Monitor air, water, land pollution |
| **Effluent Standards** | Enforce discharge standards |
| **Industry Classification** | Categorize industries (Red/Orange/Green) |
| **Compliance Enforcement** | Take action against violators |

### Industry Categories
- **Green:** Least polluting units
- **Orange:** Moderate pollution potential
- **Red:** High pollution potential

### KPIs
| KPI | Metric | Frequency |
|-----|--------|-----------|
| CTE Processing | Applications pending, avg. processing time | Weekly |
| CTO Compliance | Valid CTOs, expired CTOs | Monthly |
| Air Quality Index | AQI at monitoring stations | Daily |
| Water Quality | BOD, COD, pH at discharge points | Monthly |
| Violations | Notices issued, closures ordered | Monthly |

---

## Summary: Department-Wise Dashboard Priority

### High Priority (Direct Industrial Impact)
1. **KIADB** - Land availability, allotment, infrastructure
2. **Revenue** - Land acquisition, conversion
3. **GESCOM** - Power supply, connections
4. **KSPCB** - Environmental clearances

### Medium Priority (Supporting Infrastructure)
5. **PWD** - Road connectivity
6. **Water Resources** - Water supply
7. **Labour** - Factory registration, compliance
8. **Forest** - Forest clearance (where applicable)

### Enabling Departments
9. **Agriculture** - Raw material for agro-processing
10. **Health** - Occupational health, emergency services

---

## Sources

### Government Portals
- [Karnataka PWD](https://kpwd.karnataka.gov.in/english)
- [KIADB](https://kiadb.karnataka.gov.in/en/)
- [Water Resources Department](https://waterresources.karnataka.gov.in/english)
- [GESCOM](https://gescom.karnataka.gov.in/english)
- [Labour Department](https://labour.karnataka.gov.in/english)
- [Forest Department](https://forest.karnataka.gov.in/en)
- [KSPCB](https://kspcb.karnataka.gov.in/)
- [Karnataka Udyog Mitra](https://ebiz.karnataka.gov.in/kum/)
- [Invest Karnataka](https://investkarnataka.co.in/)

### Legal References
- [Karnataka Industrial Areas Development Act, 1966](https://www.indiacode.nic.in/bitstream/123456789/7148/1/18%20of%201966%20(E).pdf)
- [Karnataka Land Revenue Act, 1964](https://www.indiacode.nic.in/bitstream/123456789/7741/1/12_of_1964(e).pdf)
- [Karnataka State Water Policy 2019](https://prod-qt-images.s3.amazonaws.com/indiawaterportal/import/sites/default/files/iwp2/karnataka_state_water_policy_kja_recommendation_2019.pdf)

### Industry Reports
- [India State of Forest Report 2019](https://fsi.nic.in/isfr19/vol2/isfr-2019-vol-ii-karnataka.pdf)
- [Karnataka Distribution Sector Landscape](https://shaktifoundation.in/wp-content/uploads/2019/02/Karnataka-Distribution-Sector-Landscape-2.pdf)
- [MOFPI Karnataka State Profile](https://www.mofpi.gov.in/sites/default/files/KnowledgeCentre/State%20Profile/Karnataka.pdf)

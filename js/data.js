// ============================================
// Kalaburagi Development Dashboard - Data
// All data sourced from official documents
// ============================================

const dashboardData = {
    // Last updated timestamp
    lastUpdated: "December 2024",
    
    // Key Performance Indicators
    kpis: [
        {
            id: "irrigation",
            title: "Irrigation Coverage",
            current: "111,200 ha",
            percentage: 12.5,
            target: "130,000 ha (2024)",
            targetYear: "225,000 ha (2030)",
            gap: "18,800 ha remaining",
            status: "green",
            confidence: "high",
            source: "Agriculture Department",
            updated: "Dec 2024",
            details: [
                "Net sown area: 890,897 ha",
                "Irrigated: 111,200 ha (12.5%)",
                "Target increase: +124% by 2030",
                "Methods: Borewells, drip, sprinkler, LIS"
            ]
        },
        {
            id: "credit",
            title: "Credit Disbursement",
            current: "₹2,750 cr",
            percentage: 79,
            target: "₹3,500 cr (FY 24-25)",
            targetYear: "₹8,000 cr (2030)",
            gap: "₹750 cr remaining (78 days left)",
            status: "yellow",
            confidence: "high",
            source: "SLBC",
            updated: "Dec 2024",
            details: [
                "Priority sector: ₹2,750 cr (79% of target)",
                "Agriculture: ₹1,800 cr (73%)",
                "MSME: ₹220 cr (9%)",
                "CD Ratio: 69% (Target: 85%+)"
            ]
        },
        {
            id: "jobs",
            title: "Non-Farm Jobs Created",
            current: "6,400-8,400 jobs",
            percentage: 8,
            target: "100,000 jobs (2030)",
            targetYear: "100,000 jobs",
            gap: "91,600-93,600 remaining",
            status: "yellow",
            confidence: "medium",
            source: "ESIC + Udyam + Surveys",
            updated: "Q3 2024",
            details: [
                "Direct (ESIC): 1,800 jobs (High confidence)",
                "Government: 400 jobs",
                "Training placements: 200 jobs",
                "Indirect (estimated): 4,000-6,000 jobs",
                "Note: Excludes informal sector"
            ]
        },
        {
            id: "dalmills",
            title: "Dal Mill Upgradation",
            current: "45 mills",
            percentage: 15,
            target: "300 mills (2027)",
            targetYear: "300 mills",
            gap: "255 mills remaining",
            status: "red",
            confidence: "high",
            source: "Industries Dept",
            updated: "Jan 2025",
            details: [
                "Mills upgraded: 45/300 (15%)",
                "Jobs created: 1,350/9,000",
                "Value addition: ₹180 cr (Target: ₹1,600 cr)",
                "Need 3x acceleration"
            ]
        },
        {
            id: "income",
            title: "Per Capita Income (Est.)",
            current: "₹1.30-1.40 lakh",
            percentage: 62,
            target: "₹2.10 lakh (2030)",
            targetYear: "₹2.10 lakh",
            gap: "₹70,000-80,000 increase needed",
            status: "yellow",
            confidence: "medium",
            source: "Deposit growth proxy",
            updated: "Q3 2024",
            details: [
                "Official (2021-22): ₹1.25 lakh",
                "Estimated (2023-24): ₹1.30-1.40 lakh",
                "Method: Bank deposit growth extrapolation",
                "Margin of error: ±10%",
                "State average: ₹2.65 lakh"
            ]
        }
    ],
    
    // District baseline data
    baseline: {
        rankings: {
            perCapitaIncome: {
                rank: "30/30",
                value: "₹1,24,998",
                stateAvg: "₹2,65,623",
                status: "Lowest in Karnataka",
                severity: "red"
            },
            gddpTotal: {
                rank: "14/30",
                value: "₹40,500 crore",
                status: "Middle of the pack",
                severity: "yellow"
            },
            industryShare: {
                rank: "22/30",
                value: "20.8% of GDDP",
                target: "28%",
                status: "Need to reach 28%",
                severity: "yellow"
            },
            irrigation: {
                rank: "26/30",
                value: "11.3% of net sown area",
                status: "Critical constraint",
                severity: "yellow"
            }
        },
        
        gddp: {
            total: 40500,
            agriculture: {
                share: 25.5,
                value: 10327
            },
            industry: {
                share: 20.8,
                value: 8424
            },
            services: {
                share: 53.7,
                value: 21749
            }
        },
        
        irrigation: {
            totalSownArea: 890897,
            irrigated: 100632,
            irrigatedPercent: 11.3,
            rainfed: 790265,
            rainfedPercent: 88.7,
            target2030: 225000,
            target2030Percent: 25.0
        },
        
        demographics: {
            totalPopulation: 2566000,
            rural: 1699000,
            ruralPercent: 66.2,
            agriculturalWorkers: 58.46,
            literacy: 64.85
        },
        
        migration: {
            toBangalore: 43,
            reasons: [
                "Drought & agricultural underdevelopment",
                "Lack of employment opportunities",
                "Low and uncertain income from farming",
                "Limited non-farm jobs in the district"
            ]
        }
    },
    
    // Roadmap data
    roadmap: {
        totalInvestment: 15500,
        targetRank: "15/30",
        perCapitaGoal: 210000,
        jobsToCreate: 100000,
        
        phases: {
            phase1: {
                name: "Foundation",
                years: "Years 1-2",
                budget: 3500,
                progress: 80,
                status: "green",
                components: [
                    {
                        name: "Water Security Infrastructure",
                        budget: 2200,
                        progress: 75,
                        items: [
                            "Borewell rehabilitation: 285/357 completed",
                            "New borewells: 1,450/2,200 drilled",
                            "Micro-irrigation: 38,000/50,000 ha",
                            "Farm ponds: 2,100/3,250 built",
                            "Solar pumps: 450/1,910 installed"
                        ],
                        plan: {
                            title: "Water Security Infrastructure - Detailed Action Plan",
                            objective: "Increase irrigation coverage from 11.3% to 14.6% by end of Year 2, targeting 25% by 2030",
                            components: [
                                {
                                    name: "Borewell Rehabilitation & New Drilling",
                                    budget: "₹150 crore",
                                    target: "Fix 357 defunct + drill 2,200 new borewells",
                                    impact: "+15,000 ha irrigated area",
                                    tasks: [
                                        "Survey and technical assessment of 357 defunct borewells (28% failure rate)",
                                        "Depth enhancement, cleaning, and pump replacement operations",
                                        "Identify optimal locations for 2,200 new borewells using groundwater maps",
                                        "Contractor empanelment with performance bonds",
                                        "Quality testing and yield certification (minimum 2,000 liters/hour)",
                                        "Geo-tagging of all borewells for monitoring",
                                        "Block-wise targets: Sedam (450), Aland (380), Chincholi (320), others (1,407)"
                                    ],
                                    timeline: "18 months",
                                    responsibleDept: "Minor Irrigation Department"
                                },
                                {
                                    name: "Micro-irrigation Expansion",
                                    budget: "₹650 crore",
                                    target: "50,000 ha (drip + sprinkler)",
                                    impact: "Water use efficiency +40%, crop yield +25%",
                                    tasks: [
                                        "Farmer awareness campaigns: 500 demonstrations across 264 GPs",
                                        "Subsidy disbursement: 75-90% for SC/ST, 50% for general category",
                                        "Supplier quality certification and empanelment (minimum 10 vendors)",
                                        "Installation supervision by Agriculture Department",
                                        "Training programs: Operation, maintenance, fertigation",
                                        "Spare parts supply chain through Custom Hiring Centers",
                                        "Priority crops: Tur (25,000 ha), Grapes (2,000 ha), Vegetables (15,000 ha)"
                                    ],
                                    timeline: "24 months (continuous)",
                                    responsibleDept: "Agriculture Department + Horticulture Department"
                                },
                                {
                                    name: "Farm Ponds & Rainwater Harvesting",
                                    budget: "₹420 crore",
                                    target: "3,250 structures",
                                    impact: "15,000 farmers, soil moisture retention +30 days",
                                    tasks: [
                                        "Site selection: Soil type assessment, topography analysis",
                                        "Design standardization: 100-500 cubic meter capacity based on land holding",
                                        "Contractor selection through e-procurement portal",
                                        "Construction monitoring with mandatory geo-tagged photos",
                                        "Plastic lining provision where soil permeability is high",
                                        "Integration with micro-irrigation systems",
                                        "Annual de-silting schedule and maintenance protocol",
                                        "Insurance coverage for structural damage"
                                    ],
                                    timeline: "18 months",
                                    responsibleDept: "Watershed Development Department"
                                },
                                {
                                    name: "Lift Irrigation Schemes (LIS)",
                                    budget: "₹280 crore",
                                    target: "1,360 schemes (command area: 10-40 ha each)",
                                    impact: "+27,200 ha irrigated from surface water sources",
                                    tasks: [
                                        "Water source identification: Rivers (Bhima, tributaries), canals, tanks",
                                        "Water User Association (WUA) formation and registration",
                                        "Pump selection: Capacity based on lift height and distance",
                                        "Pipeline network design (PVC/HDPE pipes)",
                                        "Power connection coordination with BESCOM (priority agricultural tariff)",
                                        "Operation & Maintenance training for WUA members",
                                        "Electricity bill payment mechanism through WUAs",
                                        "Block prioritization: Jewargi (280 schemes), Afzalpur (240), others (840)"
                                    ],
                                    timeline: "24 months",
                                    responsibleDept: "Minor Irrigation + Agriculture Department"
                                },
                                {
                                    name: "Solar Pump Sets (10 HP)",
                                    budget: "₹550 crore",
                                    target: "1,910 solar pump installations",
                                    impact: "Electricity cost savings ₹30,000 per pump per year",
                                    tasks: [
                                        "Beneficiary selection: SC/ST (50%), Small/Marginal farmers (30%), Others (20%)",
                                        "Subsidy structure: 90% for SC/ST, 70% for small farmers, 50% for others",
                                        "Empanelment of MNRE-certified suppliers only",
                                        "Technical specifications: 10 HP pump + 12-15 panels + controller + structure",
                                        "Installation quality checks: Electrical safety, panel angle optimization",
                                        "5-year comprehensive warranty mandate",
                                        "After-sales service network: District-level service centers",
                                        "Insurance against theft and natural calamities"
                                    ],
                                    timeline: "18 months",
                                    responsibleDept: "Energy Department + Agriculture Department"
                                },
                                {
                                    name: "Check Dams & Percolation Tanks",
                                    budget: "₹150 crore",
                                    target: "500 structures",
                                    impact: "Groundwater recharge +15%, base flow in streams",
                                    tasks: [
                                        "Hydrological survey for optimal placement (stream order, catchment area)",
                                        "Environmental clearance process (Forest, Pollution Control Board)",
                                        "Community participation in design and location finalization",
                                        "Construction using local materials (boulders, cement)",
                                        "Silt trap design for longevity",
                                        "Monitoring wells installation for water table tracking",
                                        "Annual pre-monsoon inspection and repairs",
                                        "Community ownership model for maintenance"
                                    ],
                                    timeline: "18 months (pre-monsoon completion)",
                                    responsibleDept: "Watershed Development + Forest Department"
                                }
                            ],
                            financing: {
                                sources: [
                                    "NABARD RIDF/MIF: ₹1,100 crore (50%)",
                                    "State budget (PMKSY + state schemes): ₹660 crore (30%)",
                                    "Bank credit to farmers: ₹440 crore (20%)"
                                ],
                                disbursementSchedule: [
                                    "Year 1 Q1: ₹400 cr (surveys, planning, pilot)",
                                    "Year 1 Q2-Q4: ₹900 cr (major implementation)",
                                    "Year 2 Q1-Q4: ₹900 cr (completion, monitoring)"
                                ]
                            },
                            successMetrics: [
                                "Net irrigated area: 100,632 ha → 130,000 ha (+29%)",
                                "Irrigation intensity: 117% → 135%",
                                "Crop loan disbursement increase: ₹1,682 cr → ₹2,400 cr (+43%)",
                                "Groundwater level improvement: Average +3 meters in hard rock areas",
                                "Farmer satisfaction: >80% positive feedback on water availability"
                            ],
                            risks: [
                                "Monsoon failure: Mitigate with insurance, crop diversification",
                                "Contractor delays: Performance bonds, penalty clauses",
                                "Land acquisition issues: Use government land, voluntary participation",
                                "Power supply constraints: Prioritize solar pumps, feeder separation"
                            ]
                        }
                    },
                    {
                        name: "Rural Connectivity",
                        budget: 800,
                        progress: 80,
                        items: [
                            "Village-to-market roads: 480/600 km",
                            "All-weather roads to dal mills: 80/100 km"
                        ],
                        plan: {
                            title: "Rural Connectivity - Last-Mile Access",
                            objective: "Connect 150 villages to markets, reduce transport time by 30%, enable all-season access to 50 dal mills",
                            components: [
                                {
                                    name: "Village-to-Market Roads (PMGSY-III)",
                                    budget: "₹450 crore",
                                    target: "600 km covering 150 villages",
                                    impact: "Market access for 2.5 lakh rural population",
                                    tasks: [
                                        "Village prioritization matrix: Population >500, agricultural output >₹5 cr, distance to market >10 km",
                                        "Detailed Project Reports (DPRs) by KRDCL/Consultants",
                                        "Land acquisition through voluntary donation/government land",
                                        "Environmental and social safeguard clearances",
                                        "E-procurement tender process on state portal",
                                        "Quality monitoring: Soil tests, compaction tests, surface finish",
                                        "5-year maintenance contracts with performance guarantees",
                                        "Culverts and cross-drainage structures at identified locations"
                                    ],
                                    specifications: [
                                        "Road width: 3.75 meters (single lane with 2 passing bays per km)",
                                        "Pavement: WBM + SDBC / Concrete (based on traffic)",
                                        "Side drains: Mandatory for proper water flow",
                                        "Signage: Distance markers, village name boards"
                                    ],
                                    timeline: "24 months",
                                    responsibleDept: "Rural Development & Panchayat Raj"
                                },
                                {
                                    name: "All-Weather Roads to Dal Mills",
                                    budget: "₹200 crore",
                                    target: "100 km connecting 50 critical mills",
                                    impact: "Reduce transportation losses, faster evacuation during peak season",
                                    tasks: [
                                        "Map all 300 dal mills and assess connectivity status",
                                        "Identify 50 priority mills (capacity >100 MT/day, high throughput)",
                                        "Design for heavy vehicle loads: 10-ton trucks, tandem axles",
                                        "Pavement design: Concrete (M-30 grade) or bituminous (100 mm SDBC)",
                                        "Coordinate with Industries Department for mill cluster planning",
                                        "Cluster prioritization: Kalaburagi City (90 mills), Jewargi (60 mills), Sedam (50 mills)",
                                        "Streetlights at mill entry points for night operations",
                                        "Parking bays for waiting trucks"
                                    ],
                                    timeline: "18 months",
                                    responsibleDept: "PWD + Industries Department"
                                },
                                {
                                    name: "Rural Haats Upgradation to GrAMs",
                                    budget: "₹100 crore",
                                    target: "25 haats → Gramin Agricultural Markets",
                                    impact: "Better price discovery, reduced middlemen exploitation",
                                    tasks: [
                                        "Infrastructure: Covered sheds (500 sq m), weighing platforms, storage room",
                                        "Facilities: Clean toilets, drinking water, parking area",
                                        "E-NAM integration: Internet connectivity, price display boards",
                                        "Quality testing equipment: Moisture meters for pulses, grading tables",
                                        "Farmer training: Market operations, price negotiation, quality standards",
                                        "Trader registration system and licensing",
                                        "Mobile app for price alerts and market arrivals",
                                        "Weekly market days coordination with APMCs"
                                    ],
                                    timeline: "18 months",
                                    responsibleDept: "Agricultural Marketing Department"
                                },
                                {
                                    name: "Agricultural Produce Collection Yards",
                                    budget: "₹50 crore",
                                    target: "35 yards at hobli level",
                                    impact: "Reduce distress sales, aggregation point for FPOs",
                                    tasks: [
                                        "Land identification: 1-2 acres per yard near main road",
                                        "Construction: Concrete platform (1,000 sq m), drainage system",
                                        "Covered storage area (500 sq ft) for temporary holding",
                                        "Weighing equipment: Electronic platform weighbridge (5-ton capacity)",
                                        "Price information display board (linked to APMC)",
                                        "CCTV cameras for security",
                                        "FPO/Cooperative management model",
                                        "Insurance facility for stored produce"
                                    ],
                                    timeline: "12 months",
                                    responsibleDept: "Agriculture Department + Cooperatives"
                                }
                            ],
                            financing: {
                                sources: [
                                    "RIDF (NABARD): ₹480 crore (60%)",
                                    "State budget: ₹320 crore (40%)"
                                ]
                            },
                            successMetrics: [
                                "150 villages with all-weather road connectivity",
                                "50 dal mills accessible in all seasons",
                                "Average transportation time reduced by 30%",
                                "Post-harvest losses reduced from 15% to 8%"
                            ]
                        }
                    },
                    {
                        name: "Power Infrastructure",
                        budget: 500,
                        progress: 65,
                        items: [
                            "Feeder separation in progress",
                            "Sub-station upgrades: 18/25 completed"
                        ],
                        plan: {
                            title: "Power Infrastructure - Reliable Supply",
                            objective: "18-hour agricultural power supply, reduce voltage fluctuations, electrify 50 off-grid villages",
                            components: [
                                {
                                    name: "Agricultural Feeder Separation",
                                    budget: "₹300 crore",
                                    target: "8 blocks with dedicated agricultural feeders",
                                    impact: "58,995 agricultural pumpsets receive 18-hour supply (currently 8-12 hours)",
                                    tasks: [
                                        "Block prioritization: Sedam, Afzalpur, Aland, Jewargi, Chincholi, Chittapur, Kamalapur, Yedrami",
                                        "Separate 11 KV lines exclusively for agricultural pumpsets",
                                        "Install dedicated meters on all agricultural feeders",
                                        "Supply schedule: 6 AM - 12 PM (6 hrs) + 6 PM - 12 AM (6 hrs) + Night hours (6 hrs)",
                                        "Smart metering for load management and theft detection",
                                        "Remote monitoring through SCADA system",
                                        "Reduce transmission losses from 18% to 12%",
                                        "Farmer awareness on supply timings and conservation"
                                    ],
                                    timeline: "24 months",
                                    responsibleDept: "BESCOM + Energy Department"
                                },
                                {
                                    name: "Sub-station Capacity Upgradation",
                                    budget: "₹150 crore",
                                    target: "25 sub-stations (new + upgraded)",
                                    impact: "Voltage stability, reduced tripping, capacity for future load growth",
                                    tasks: [
                                        "Load assessment and demand forecasting (5-year horizon)",
                                        "Transformer upgrades: 25 MVA → 63 MVA at high-load stations",
                                        "New 66/11 KV sub-stations in underserved areas (5 locations)",
                                        "Distribution network strengthening: Replace old conductors, insulators",
                                        "Lightning arrestors and surge protection equipment",
                                        "SCADA integration for remote fault identification",
                                        "Automatic Voltage Regulators (AVRs) at all sub-stations",
                                        "Compound wall and security systems"
                                    ],
                                    timeline: "18 months",
                                    responsibleDept: "KPTCL + BESCOM"
                                },
                                {
                                    name: "Solar Mini-Grids for Off-Grid Villages",
                                    budget: "₹50 crore",
                                    target: "50 villages (1,500 households) > 5 km from grid",
                                    impact: "24×7 power access, reduce kerosene dependence",
                                    tasks: [
                                        "Village identification: Distance from grid, population, energy needs",
                                        "Solar system sizing: 100-250 kWp per village based on load",
                                        "Battery storage: Li-ion / Lead-acid (4-6 hours backup)",
                                        "Distribution network: Single-phase lines to households",
                                        "Smart meters with prepaid billing system",
                                        "Community management model: Village Energy Committees",
                                        "Training for local youth: System operation, basic maintenance",
                                        "AMC with supplier for 5 years (remote monitoring + annual visits)"
                                    ],
                                    timeline: "18 months",
                                    responsibleDept: "Energy Department + Rural Development"
                                }
                            ],
                            financing: {
                                sources: [
                                    "State budget: ₹300 crore (60%)",
                                    "RIDF: ₹150 crore (30%)",
                                    "MNRE solar schemes: ₹50 crore (10%)"
                                ]
                            },
                            successMetrics: [
                                "18-hour agricultural power supply in 8 blocks",
                                "Voltage complaints reduced from 500/month to 250/month (50% reduction)",
                                "50 off-grid villages electrified with 24×7 power",
                                "Transmission & distribution losses: 18% → 12%"
                            ]
                        }
                    }
                ]
            },
            phase2: {
                name: "Activation",
                years: "Years 3-5",
                budget: 5800,
                progress: 30,
                status: "yellow",
                components: [
                    {
                        name: "Agro-Processing Clusters",
                        budget: 2400,
                        progress: 15,
                        items: [
                            "Dal mills upgraded: 45/300",
                            "New jobs created: 1,350/9,000",
                            "Value addition: ₹180 cr (Target: ₹1,600 cr)"
                        ],
                        plan: {
                            title: "Agro-Processing Clusters - Value Addition Strategy",
                            objective: "Transform 300 basic dal mills into modern processing units, add ₹1,420 crore in value, create 9,000 jobs",
                            components: [
                                {
                                    name: "Technology Upgradation Package",
                                    budget: "₹1,800 crore (₹60 lakh per mill × 300)",
                                    target: "300 dal mills",
                                    impact: "Processing efficiency +35%, quality +50%, waste -20%",
                                    tasks: [
                                        "Automated cleaning lines: Destoners, magnetic separators, gravity separators",
                                        "Color sorters: Electronic sorting (removes discolored grains)",
                                        "Pneumatic dal mills: Replace traditional stone mills (power efficiency +40%)",
                                        "Nitrogen flushing packaging: Extend shelf life to 12 months",
                                        "Quality control lab: Moisture meters, protein analyzers per cluster",
                                        "Subsidy structure: 50% under PMFME, 30% bank loan, 20% promoter",
                                        "Cluster-wise rollout: Kalaburagi (90 mills), Jewargi (60), Sedam (50), others (100)"
                                    ],
                                    timeline: "36 months (phased)",
                                    responsibleDept: "Industries & Commerce + Food Processing"
                                },
                                {
                                    name: "Shared Cluster Infrastructure",
                                    budget: "₹345 crore",
                                    target: "6 clusters across district",
                                    impact: "Reduce individual mill costs, improve bargaining power",
                                    tasks: [
                                        "Warehouses (2,000 MT each): 15 units × ₹7.7 cr = ₹115 cr",
                                        "Cold storages (2,000 MT): 5 units × ₹22 cr = ₹110 cr",
                                        "Common quality testing labs: 6 units × ₹5 cr = ₹30 cr (NABL accredited)",
                                        "Common effluent treatment plants: 6 units × ₹15 cr = ₹90 cr",
                                        "Professional management: Cluster development executives",
                                        "Bulk procurement of raw materials through FPOs",
                                        "Shared marketing and branding initiatives"
                                    ],
                                    timeline: "30 months",
                                    responsibleDept: "Industries Department"
                                },
                                {
                                    name: "Market Linkages & Branding",
                                    budget: "₹255 crore",
                                    target: "GI tag amplification, export markets, e-commerce",
                                    impact: "15% price premium, export volume ₹200 cr/year",
                                    tasks: [
                                        "Gulbarga Tur Dal GI tag marketing campaign (national level)",
                                        "Export certification: APEDA registration, FSSAI compliance for 100 mills",
                                        "Buyer-seller meets: Dubai, Middle East, USA (Indian diaspora)",
                                        "E-commerce integration: Amazon, Flipkart, BigBasket (direct sales)",
                                        "Packaging design competition and branding workshop",
                                        "Trade fair participation: SIAL (Paris), Annapoorna (Bangalore)",
                                        "B2B portal for institutional buyers (hotels, caterers, wholesalers)",
                                        "Contract farming linkages with FPOs for quality raw material"
                                    ],
                                    timeline: "Continuous (Years 3-5)",
                                    responsibleDept: "APEDA + KSPAML"
                                }
                            ],
                            clusterDetails: [
                                {
                                    cluster: "Kalaburagi City Cluster",
                                    mills: 90,
                                    investment: "₹720 crore",
                                    focus: "Automated cleaning + packaging lines",
                                    jobs: 2700
                                },
                                {
                                    cluster: "Jewargi Cluster",
                                    mills: 60,
                                    investment: "₹480 crore",
                                    focus: "Food park expansion + cold chain",
                                    jobs: 1800
                                },
                                {
                                    cluster: "Sedam Cluster",
                                    mills: 50,
                                    investment: "₹400 crore",
                                    focus: "Organic certification + branding",
                                    jobs: 1500
                                },
                                {
                                    cluster: "Afzalpur Cluster",
                                    mills: 40,
                                    investment: "₹320 crore",
                                    focus: "Pulse flour + ready-to-eat",
                                    jobs: 1200
                                },
                                {
                                    cluster: "Chincholi Cluster",
                                    mills: 30,
                                    investment: "₹240 crore",
                                    focus: "Export quality grading",
                                    jobs: 900
                                },
                                {
                                    cluster: "Other Locations",
                                    mills: 30,
                                    investment: "₹240 crore",
                                    focus: "Distributed processing",
                                    jobs: 900
                                }
                            ],
                            financing: {
                                sources: [
                                    "PMFME (50% subsidy): ₹1,200 crore",
                                    "AHIDF/AIF loans: ₹800 crore",
                                    "Private equity: ₹400 crore"
                                ]
                            },
                            successMetrics: [
                                "Processed tur value: ₹2,400 cr → ₹4,000 cr (+67%)",
                                "Employment: 9,000 direct + 18,000 indirect jobs",
                                "Farmer realization: +15% over MSP due to quality premium",
                                "Export volume: ₹200 crore per year"
                            ]
                        }
                    },
                    {
                        name: "FPO Development",
                        budget: 300,
                        progress: 30,
                        items: [
                            "FPOs formed: 15/50",
                            "Farmers covered: 30,000/100,000"
                        ],
                        plan: {
                            title: "Farmer Producer Organizations - Collective Strength",
                            objective: "Form 50 viable FPOs covering 100,000 farmers, achieve ₹1,500 cr annual turnover",
                            components: [
                                {
                                    name: "FPO Formation & Registration",
                                    budget: "₹50 crore",
                                    target: "50 FPOs (25 Tur/Pulse, 10 Horticulture, 8 Dairy, 7 Multi-commodity)",
                                    impact: "Collective bargaining, bulk procurement, value addition",
                                    tasks: [
                                        "Village-level awareness campaigns (SHGs, farmer groups)",
                                        "Membership drive: 1,500-3,000 farmers per FPO",
                                        "Registration under Companies Act 2013 (Sec 465)",
                                        "Board of Directors election (9-15 members from farmer-shareholders)",
                                        "CEO hiring through NABARD panel",
                                        "Business plan preparation (turnover, margins, growth)",
                                        "Block-wise allocation based on crop dominance",
                                        "Tie-up with Resource Institutions (NGOs) for handholding (2 years)"
                                    ],
                                    timeline: "24 months (rolling)",
                                    responsibleDept: "Agriculture + Horticulture + Cooperatives"
                                },
                                {
                                    name: "Equity Capital & Infrastructure",
                                    budget: "₹150 crore (₹3 cr per FPO × 50)",
                                    target: "Physical infrastructure for operations",
                                    impact: "Enable procurement, storage, value addition",
                                    tasks: [
                                        "Equity capital: ₹1 crore per FPO (NABKISAN/PODF/SFAC)",
                                        "Collection centers: 2-3 per FPO (100 MT capacity each)",
                                        "Grading and cleaning equipment",
                                        "Packaging machinery for consumer packs",
                                        "Office space with computer, internet",
                                        "Weighing equipment, quality testing kits",
                                        "Storage godowns (500 MT per FPO)",
                                        "Transport vehicles: Mini-trucks for aggregation (2 per FPO)"
                                    ],
                                    timeline: "30 months",
                                    responsibleDept: "NABARD + Agriculture Department"
                                },
                                {
                                    name: "Working Capital & Market Linkages",
                                    budget: "₹100 crore",
                                    target: "Credit linkage, buyer contracts, value addition",
                                    impact: "₹1,500 cr annual procurement from members",
                                    tasks: [
                                        "Bank credit linkage: ₹2 crore working capital per FPO",
                                        "Buyer contracts: Dal mills, HOPCOMS, retail chains",
                                        "Direct procurement from members (avoid middlemen)",
                                        "Input supply: Seeds, fertilizers, pesticides at 10-15% lower cost",
                                        "Value addition: Cleaning, grading, branding (25% margin)",
                                        "Bonus payment to members from profits",
                                        "Technology platform: ERP for transactions, traceability",
                                        "Insurance tie-ups: Crop, livestock, health for members"
                                    ],
                                    timeline: "Continuous (Years 3-5)",
                                    responsibleDept: "Banks + Marketing Department"
                                }
                            ],
                            fpoTypes: [
                                {
                                    type: "Tur/Pulse FPOs",
                                    number: 25,
                                    members: "50,000 farmers",
                                    focus: "Tur, Bengal gram, Green gram procurement and marketing"
                                },
                                {
                                    type: "Horticulture FPOs",
                                    number: 10,
                                    members: "15,000 farmers",
                                    focus: "Banana, Grapes, Pomegranate, Vegetables"
                                },
                                {
                                    type: "Dairy FPOs",
                                    number: 8,
                                    members: "24,000 farmers",
                                    focus: "Milk collection, chilling, value-added products"
                                },
                                {
                                    type: "Multi-commodity FPOs",
                                    number: 7,
                                    members: "10,500 farmers",
                                    focus: "Mixed cropping areas, diverse produce"
                                }
                            ],
                            financing: {
                                sources: [
                                    "NABKISAN Finance Ltd: ₹150 crore",
                                    "PODF (Producer Organization Development Fund): ₹80 crore",
                                    "State budget: ₹70 crore"
                                ]
                            },
                            successMetrics: [
                                "50 FPOs operational with ₹1,500 cr annual turnover",
                                "Member income: +20% vs. non-members",
                                "Input cost reduction: 15% through bulk procurement",
                                "Market access: Direct contracts with 100+ buyers"
                            ]
                        }
                    },
                    {
                        name: "Skill Development",
                        budget: 600,
                        progress: 25,
                        items: [
                            "Youth trained: 9,000/36,000",
                            "Placements: 7,200/30,600"
                        ],
                        plan: {
                            title: "Skill Development - Industry-Linked Training",
                            objective: "Train 36,000 youth with 80%+ placement rate in emerging sectors",
                            components: [
                                {
                                    name: "Agro-processing Technology",
                                    budget: "₹150 crore",
                                    target: "3,000 trainees/year × 3 years = 9,000",
                                    impact: "Placement in 300 dal mills + food processing units",
                                    tasks: [
                                        "Course design: 6-month diploma (3 months theory + 3 months internship)",
                                        "Modules: Grain processing, quality control, packaging, safety standards",
                                        "Training partners: ITIs (4 in district) + CFTRI Mysore (curriculum design)",
                                        "Industry apprenticeships: Guaranteed placement in dal mills",
                                        "Certification: NSDC-approved + industry-recognized",
                                        "Stipend during training: ₹5,000/month",
                                        "Job guarantee: 80% placement commitment",
                                        "Salary expectation: ₹12,000-18,000 per month"
                                    ],
                                    timeline: "Years 3-5 (continuous batches)",
                                    responsibleDept: "Industries + Skill Development"
                                },
                                {
                                    name: "Solar Installation & Maintenance",
                                    budget: "₹80 crore",
                                    target: "2,000 trainees/year × 3 years = 6,000",
                                    impact: "Support 1,910 solar pumps + future installations",
                                    tasks: [
                                        "Course: 3-month intensive (electrical safety, solar fundamentals, installation)",
                                        "Practical training: On-site with solar pump beneficiaries",
                                        "Certification: MNRE-approved solar technician",
                                        "Tools kit provided: Multimeter, crimping tool, safety equipment",
                                        "Business development: Self-employment as service providers",
                                        "Tie-up with solar pump suppliers for service contracts",
                                        "Placement: 90% (high demand sector)",
                                        "Salary/Income: ₹15,000-20,000 per month (employment) or ₹30,000+ (self-employed)"
                                    ],
                                    timeline: "Years 3-5",
                                    responsibleDept: "Energy + Skill Development"
                                },
                                {
                                    name: "Food Safety & Quality Control",
                                    budget: "₹100 crore",
                                    target: "1,500 trainees/year × 3 years = 4,500",
                                    impact: "Quality assurance in food processing units",
                                    tasks: [
                                        "Course: 4-month program (FSSAI standards, lab testing, audits)",
                                        "Lab training: Moisture analysis, protein testing, contamination checks",
                                        "NABL procedures and documentation",
                                        "Placement: Quality control labs, processing units, APMCs",
                                        "Salary: ₹15,000-25,000 per month",
                                        "Career progression: QC Manager, FSSAI inspector",
                                        "Partner institutions: CFTRI, NIFTEM",
                                        "Placement rate: 80%"
                                    ],
                                    timeline: "Years 3-5",
                                    responsibleDept: "Food Processing + Health Department"
                                },
                                {
                                    name: "Cold Chain & Logistics",
                                    budget: "₹120 crore",
                                    target: "2,500 trainees/year × 3 years = 7,500",
                                    impact: "Support cold storage, warehouses, transport sector",
                                    tasks: [
                                        "Course: 3-month program (refrigeration, warehouse management, transport)",
                                        "Modules: Cold storage operations, inventory management, vehicle maintenance",
                                        "Commercial driving license (LMV/HMV) included",
                                        "Forklift operation certification",
                                        "Placement: Cold storages, warehouses, transport companies",
                                        "Salary: ₹12,000-20,000 per month (operators), ₹25,000+ (managers)",
                                        "Tie-ups: Logistics companies (VRL, TCI, Gati), cold storage operators",
                                        "Placement rate: 85%"
                                    ],
                                    timeline: "Years 3-5",
                                    responsibleDept: "Industries + Transport"
                                },
                                {
                                    name: "Dairy Technology",
                                    budget: "₹90 crore",
                                    target: "1,500 trainees/year × 3 years = 4,500",
                                    impact: "Support dairy FPOs, chilling centers, processing units",
                                    tasks: [
                                        "Course: 4-month diploma (milk testing, processing, value addition)",
                                        "Modules: Quality testing, chilling operations, product development",
                                        "Placement: Dairy FPOs, KMF units, private dairies",
                                        "Certification: NDDB-recognized",
                                        "Self-employment: Milk collection center operators",
                                        "Salary: ₹10,000-18,000 per month",
                                        "Business opportunity: Milk procurement agency (₹30,000+ per month)",
                                        "Placement rate: 75%"
                                    ],
                                    timeline: "Years 3-5",
                                    responsibleDept: "Animal Husbandry + Dairy Department"
                                },
                                {
                                    name: "Farm Mechanization Repair",
                                    budget: "₹60 crore",
                                    target: "1,000 trainees/year × 3 years = 3,000",
                                    impact: "Service 2,975 tractors + farm equipment",
                                    tasks: [
                                        "Course: 6-month intensive (engine repair, electrical, hydraulics)",
                                        "Practical: Work on tractors, tillers, harvesters",
                                        "Certification: ITI + manufacturer-authorized (Mahindra, TAFE)",
                                        "Tools kit provided: Basic mechanic tools",
                                        "Placement: Implement dealers, Custom Hiring Centers, self-employment",
                                        "Income: ₹15,000-20,000 (employment) or ₹40,000+ (own workshop)",
                                        "Business support: Loan for workshop setup (PMEGP)",
                                        "Placement rate: 80%"
                                    ],
                                    timeline: "Years 3-5",
                                    responsibleDept: "Agriculture + ITI"
                                }
                            ],
                            financing: {
                                sources: [
                                    "NAPS (National Apprenticeship Promotion Scheme): ₹240 crore",
                                    "State Skill Mission: ₹200 crore",
                                    "Industry CSR: ₹100 crore",
                                    "District budget: ₹60 crore"
                                ]
                            },
                            successMetrics: [
                                "36,000 youth trained over 3 years",
                                "Overall placement rate: 80%+ (30,600 placed)",
                                "Average starting salary: ₹15,000 per month",
                                "Youth migration to Bangalore reduced by 25%"
                            ]
                        }
                    },
                    {
                        name: "MSME Ecosystem",
                        budget: 2500,
                        progress: 20,
                        items: [
                            "New MSMEs: 500/2,500",
                            "Jobs created: 5,000/25,000"
                        ],
                        plan: {
                            title: "MSME Ecosystem - Diversified Industrial Base",
                            objective: "Add 2,500 MSMEs, create 25,000 jobs, increase industry share from 20.8% to 24%",
                            components: [
                                {
                                    name: "Agri-input Manufacturing",
                                    budget: "₹800 crore",
                                    target: "500 units",
                                    impact: "Local manufacturing of micro-irrigation, implements, organic inputs",
                                    tasks: [
                                        "Micro-irrigation components: Drip pipes, emitters, sprinklers, filters",
                                        "Agricultural implements: Weeders, seeders, harvesting tools",
                                        "Organic fertilizer units: Vermicompost, bio-fertilizers, bio-pesticides",
                                        "Seed processing units: Cleaning, grading, treatment, packaging",
                                        "Land allocation: 100 acres industrial plots at ₹10 lakh/acre (subsidy)",
                                        "Common facilities: Testing lab, raw material bank, tool room",
                                        "Technology transfer: IIT Bombay (micro-irrigation), UAS (implements)",
                                        "Market linkage: Tie-ups with Agriculture Department for procurement"
                                    ],
                                    timeline: "Years 3-5",
                                    responsibleDept: "Industries + KSSIDC"
                                },
                                {
                                    name: "Food Processing MSMEs",
                                    budget: "₹1,000 crore",
                                    target: "880 units",
                                    impact: "Diversified food products, value addition",
                                    tasks: [
                                        "Spice processing: 100 units (turmeric powder, chili powder, coriander)",
                                        "Pulse flour mills: 50 units (besan, tur dal flour, multi-grain flour)",
                                        "Ready-to-eat foods: 30 units (instant dosa mix, idli mix, papad)",
                                        "Bakery products: 200 units (bread, biscuits, namkeen)",
                                        "Pickle & chutney: 50 units (mango, lemon, mixed vegetable)",
                                        "Snack foods: 100 units (chips, extruded snacks, traditional snacks)",
                                        "FSSAI licensing support and compliance training",
                                        "E-commerce enablement: Amazon Saheli, Flipkart Samarth"
                                    ],
                                    timeline: "Years 3-5",
                                    responsibleDept: "Food Processing + KSSIDC"
                                },
                                {
                                    name: "Service Sector MSMEs",
                                    budget: "₹700 crore",
                                    target: "1,120 units",
                                    impact: "Support infrastructure for agriculture and industry",
                                    tasks: [
                                        "Cold chain operators: 50 units (refrigerated transport, last-mile delivery)",
                                        "Custom hiring centers: 100 units (tractors, harvesters, specialized equipment)",
                                        "Agri-logistics: 80 units (warehouse services, transportation)",
                                        "Food testing labs: 15 units (NABL-accredited, private sector)",
                                        "Packaging services: 75 units (corrugated boxes, flexible packaging)",
                                        "IT services: 100 units (accounting, inventory management software)",
                                        "Marketing services: 50 units (branding, photography, e-commerce support)",
                                        "Repair & maintenance: 150 units (electronics, machinery, vehicles)"
                                    ],
                                    timeline: "Years 3-5",
                                    responsibleDept: "Industries + IT-BT"
                                }
                            ],
                            enablers: [
                                {
                                    name: "Industrial Plots Development",
                                    budget: "₹200 crore",
                                    target: "500 acres (1-acre plots for MSMEs)",
                                    tasks: [
                                        "Land acquisition near highway corridors",
                                        "Plot development: Leveling, boundary walls, internal roads",
                                        "Allotment at subsidized rate: ₹10 lakh/acre (market: ₹30 lakh)",
                                        "Separate zones: Food processing, agri-inputs, service sector"
                                    ]
                                },
                                {
                                    name: "Common Facilities",
                                    budget: "₹150 crore",
                                    target: "Shared infrastructure to reduce individual costs",
                                    tasks: [
                                        "Food testing lab (NABL): ₹15 crore",
                                        "Effluent treatment plant: ₹40 crore",
                                        "Tool room for precision parts: ₹25 crore",
                                        "Design center & training facility: ₹20 crore",
                                        "Common warehouse (10,000 sq ft): ₹30 crore",
                                        "Business incubation center: ₹20 crore"
                                    ]
                                },
                                {
                                    name: "Single-Window Clearance",
                                    budget: "Process reform (no capital cost)",
                                    target: "All clearances within 30 days",
                                    tasks: [
                                        "Digital portal for application submission",
                                        "Deemed approval after 30 days if no objection",
                                        "Parallel processing of clearances (not sequential)",
                                        "Dedicated MSME cell at district collectorate"
                                    ]
                                },
                                {
                                    name: "Dedicated Industrial Feeders",
                                    budget: "Included in Phase 1 power component",
                                    target: "24×7 uninterrupted power for industries",
                                    tasks: [
                                        "Separate 11 KV lines for industrial areas",
                                        "No load shedding on industrial feeders",
                                        "Premium tariff (₹6-7 per unit) but guaranteed supply"
                                    ]
                                }
                            ],
                            financing: {
                                sources: [
                                    "MUDRA/PMEGP: ₹1,000 crore",
                                    "SIDBI refinance: ₹800 crore",
                                    "Commercial banks: ₹700 crore"
                                ],
                                creditSupport: [
                                    "CGTMSE (Credit Guarantee): 85% guarantee for loans up to ₹2 crore",
                                    "Interest subvention: 3% for 5 years",
                                    "Collateral-free loans up to ₹1 crore"
                                ]
                            },
                            successMetrics: [
                                "2,500 new MSMEs operational",
                                "25,000 direct jobs created",
                                "Industry GDDP: ₹8,424 cr → ₹12,000 cr (+42%)",
                                "Industrial electricity consumption: +30%"
                            ]
                        }
                    }
                ]
            },
            phase3: {
                name: "Scale",
                years: "Years 6-8",
                budget: 6200,
                progress: 0,
                status: "notstarted",
                description: "Strategic industrial attraction, healthcare/education upgrades, and urban infrastructure development. Scheduled to begin in Year 6.",
                note: "Detailed plans will be developed in Year 4 based on Phase 1-2 outcomes"
            }
        },
        
        financing: [
            {
                source: "Central Schemes",
                amount: 5500,
                percent: 35,
                details: "RIDF, PMKSY, PMFME, Smart Cities, AMRUT"
            },
            {
                source: "State Budget",
                amount: 3500,
                percent: 23,
                details: "State schemes & budget allocation"
            },
            {
                source: "Bank Credit",
                amount: 4000,
                percent: 26,
                details: "Agriculture + MSME lending"
            },
            {
                source: "Private Investment",
                amount: 2500,
                percent: 16,
                details: "Industry + Processing units"
            }
        ]
    },
    
    // Critical alerts
    alerts: [
        {
            id: 1,
            severity: "red",
            icon: "🔴",
            title: "Solar Pump Installation: 40% Behind Schedule",
            meta: {
                current: "450/1,910 (24%)",
                target: "1,150 (60%)"
            },
            description: "Q3 target missed. Need immediate contractor review and acceleration plan.",
            deadline: "This week",
            actions: ["View Details", "Escalate Issue"]
        },
        {
            id: 2,
            severity: "red",
            icon: "🔴",
            title: "Dal Mill Funding Release Pending (₹8 cr)",
            meta: {
                pending: "3 days",
                impact: "12 mills, 360 jobs"
            },
            description: "Awaiting District Collector approval. Delay affecting mill upgradation timeline.",
            deadline: "Urgent",
            actions: ["Approve Now", "Request Info"]
        },
        {
            id: 3,
            severity: "yellow",
            icon: "🟡",
            title: "FPO Formation: Behind Target",
            meta: {
                current: "15/50 FPOs",
                need: "20% acceleration"
            },
            description: "Only 30% of target achieved. Schedule review with Horticulture Department.",
            deadline: "This month",
            actions: ["Schedule Meeting", "View Plan"]
        }
    ],
    
    // Data sources
    dataSources: [
        {
            title: "Economic Survey of Karnataka 2022-23 (Volume 45)",
            publisher: "Planning, Programme Monitoring & Statistics Dept, GoK",
            updated: "March 2023",
            vintage: "2021-22",
            coverage: "District-wise GDDP, Per Capita Income, Sectoral composition",
            quality: "high",
            url: "https://data.opencity.in/dataset/economic-survey-of-karnataka-2022-23"
        },
        {
            title: "NABARD Potential Linked Credit Plan (PLP) 2022-23",
            publisher: "NABARD Kalaburagi District Office",
            updated: "July 2022",
            vintage: "2022-23",
            coverage: "Agriculture infrastructure, Irrigation, Credit flow, Banking profile",
            quality: "high",
            url: null
        },
        {
            title: "Regional Disparities in Economic Growth of Karnataka",
            publisher: "International Journal for Multidisciplinary Research (IJFMR)",
            updated: "September 2023",
            vintage: "2023",
            coverage: "District rankings, Per capita income comparisons, Economic analysis",
            quality: "high",
            url: "https://www.ijfmr.com/papers/2023/5/7383.pdf"
        },
        {
            title: "District at a Glance 2019-20",
            publisher: "District Statistics Office, Kalaburagi",
            updated: "2019-20",
            vintage: "2019-20",
            coverage: "Demographics, Land utilization, Crop production, Infrastructure",
            quality: "medium",
            note: "Pre-COVID data, may not reflect current situation"
        },
        {
            title: "Census of India 2011",
            publisher: "Office of the Registrar General & Census Commissioner",
            updated: "2011",
            vintage: "2011",
            coverage: "Population, Literacy, Households, Demographics",
            quality: "low",
            note: "13+ years old. Census 2021 data still not released"
        },
        {
            title: "Migration Studies (Multiple Sources)",
            publisher: "SAGE Journals, NammaKPSC, The News Minute",
            updated: "2024-2025",
            vintage: "2024",
            coverage: "Poverty-induced migration, construction worker demographics",
            quality: "medium",
            note: "Survey-based, sample sizes vary"
        }
    ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = dashboardData;
}

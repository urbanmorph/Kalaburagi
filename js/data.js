// ============================================
// Kalaburagi Development Dashboard - Data
// All data sourced from official documents
// Updated: January 2026 (2026-2034 Baseline)
// ============================================

const dashboardData = {
    // Last updated timestamp
    lastUpdated: "January 2026",
    
    // Key Performance Indicators
    kpis: [
        {
            id: "irrigation",
            title: "Irrigation Coverage",
            current: "119,327 ha",
            percentage: 13.4,
            target: "145,000 ha (2029)",
            targetYear: "222,000 ha (2034)",
            gap: "25,673 ha to 2029 target",
            status: "green",
            confidence: "high",
            source: "Agriculture Department",
            updated: "Jan 2026",
            details: [
                "Net sown area: 890,897 ha",
                "Irrigated: 119,327 ha (13.4%)",
                "Target increase: +86% by 2034",
                "Methods: Borewells, drip, sprinkler, LIS"
            ]
        },
        {
            id: "credit",
            title: "Credit Disbursement",
            current: "₹2,750 cr",
            percentage: 79,
            target: "₹3,500 cr (FY 24-25)",
            targetYear: "₹9,100 cr (2034)",
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
            target: "156,700 jobs (2034)",
            targetYear: "156,700 jobs",
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
            current: "75 mills (15%)",
            percentage: 15,
            target: "500 mills (2032)",
            targetYear: "500 mills (2034)",
            gap: "425 mills remaining",
            status: "red",
            confidence: "high",
            source: "Industries Dept + IK Profile 2016",
            updated: "Jan 2026",
            details: [
                "Mills upgraded: 75/500 (15%)",
                "Total mills in district: 500+ (verified 2024)",
                "Jobs created: 2,250/15,000",
                "Value addition: ₹180 cr (Target: ₹2,400 cr)",
                "Need 3x acceleration"
            ]
        },
        {
            id: "income",
            title: "Per Capita Income (Est.)",
            current: "₹1.46 lakh (est.)",
            percentage: 58,
            target: "₹2.00 lakh (2029)",
            targetYear: "₹2.50 lakh (2034)",
            gap: "₹1.04 lakh increase needed",
            status: "yellow",
            confidence: "medium",
            source: "GDDP projection",
            updated: "Jan 2026",
            details: [
                "Official (2021-22): ₹1.25 lakh (rank 30/30)",
                "Estimated (2025-26): ₹1.46 lakh",
                "Method: GDDP growth + population projection",
                "Margin of error: ±8%",
                "State average: ₹2.85 lakh (2025-26 est.)"
            ]
        }
    ],
    
    // District baseline data
    baseline: {
        rankings: {
            perCapitaIncome: {
                rank: "30/30",
                value: "₹1,24,998 (2021-22 official)",
                stateAvg: "₹2,85,000 (2025-26 est.)",
                status: "Lowest in Karnataka",
                severity: "red"
            },
            gddpTotal: {
                rank: "14/30",
                value: "₹41,500 crore (2025-26 est.)",
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
                value: "13.4% of net sown area (2024 verified)",
                status: "Critical constraint",
                severity: "yellow"
            }
        },
        
        gddp: {
            total: 41500,
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
            irrigated: 119327,
            irrigatedPercent: 13.4,
            rainfed: 771570,
            rainfedPercent: 86.6,
            target2034: 222000,
            target2034Percent: 25.0
        },
        
        demographics: {
            totalPopulation: 2840000,
            rural: 1880000,
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
        totalInvestment: 20150,
        targetRank: "15/30",
        perCapitaGoal: 250000,
        jobsToCreate: 156700,
        
        phases: {
            phase1: {
                name: "Foundation",
                years: "Years 1-3 (2026-2029)",
                budget: 4000,
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
                years: "Years 4-6 (2029-2032)",
                budget: 6600,
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
                years: "Years 7-8 (2032-2034)",
                budget: 7100,
                progress: 0,
                status: "notstarted",
                description: "Strategic industrial attraction, healthcare/education upgrades, and urban infrastructure development. Scheduled to begin in Year 6.",
                note: "Detailed plans will be developed in Year 4 based on Phase 1-2 outcomes"
            }
        },
        
        financing: [
            {
                source: "Central Schemes",
                amount: 6270,
                percent: 35,
                details: "RIDF, PMKSY, PMFME, Smart Cities, AMRUT (inflation-adjusted)"
            },
            {
                source: "State Budget",
                amount: 4070,
                percent: 23,
                details: "State schemes & budget allocation (3 budget cycles)"
            },
            {
                source: "Bank Credit",
                amount: 4600,
                percent: 26,
                details: "Agriculture + MSME lending"
            },
            {
                source: "Private Investment",
                amount: 2760,
                percent: 16,
                details: "Industry + Processing units"
            }
        ]
    },
    
    // Alternate Industries Analysis
    alternateIndustries: {
        overview: { totalInvestment: 2450, totalJobs: 56700, gddpContribution: 1242, percentOfTarget: 3.58, status: "Planning & Feasibility Stage" },
        industries: [
            { id: "garments", name: "Garments & Textiles", icon: "👔", priority: "HIGHEST", priorityNote: "₹390cr PM MITRA funding approved (Dec 2024)", investment: { total: 650, breakdown: { infrastructure: 150, factories: 200, machinery: 300 }, financing: { pmMitra: 390, private: 195, banks: 65 } }, impact: { jobs: { direct: 26000, indirect: 17000, total: 43000, skillLevel: "Semi-skilled (60% women)", salary: "₹12,000-18,000/month" }, revenue: { year2034: 1800, domestic: 1080, export: 720, exportPercent: 40 }, gddp: { contribution: 540, percentOfTarget: 1.55, multiplier: 1.5 } }, timeline: { phase1: "2026-2027: Land acquisition, first 5 units operational", phase2: "2027-2029: Scale to 15 units, exports begin", phase3: "2029-2034: Full 30 units, ₹1,800cr revenue", firstRevenue: "18 months", fullScale: "96 months" }, location: "Sedam/Afzalpur (300 acres near NH-50)", products: ["Readymade garments (shirts, trousers, kurtas)", "Home textiles (bedsheets, curtains, towels)", "Export quality apparel (EU, Middle East)"], buyers: { domestic: ["Reliance Trends", "Pantaloons", "Max Fashion", "V-Mart"], export: ["H&M India", "Zara India", "Marks & Spencer"], ecommerce: ["Amazon Fashion", "Flipkart Fashion", "Myntra"] }, risks: [{ risk: "Labor shortage (26,000 workers)", severity: "high", mitigation: "ITI training, attract women workers, return migrants" }, { risk: "PM MITRA delays", severity: "medium", mitigation: "Direct engagement with Ministry of Textiles" }], confidence: "HIGH (85%)", recommendation: "PROCEED IMMEDIATELY - Funding approved, fastest job creation", nextSteps: ["Q1 2026: PM MITRA MoU signing, land identification", "Q2 2026: DPIIT application, investor roadshow Bangalore", "Q3 2026: Land acquisition (200 acres), ITI curriculum", "Q4 2026: First 5 factories construction begins"] },
            { id: "limestone", name: "Limestone & Cement", icon: "🏗️", priority: "HIGH", priorityNote: "2.5-4 billion MT reserves, 200-400 year supply", investment: { total: 500, breakdown: { mining: 100, crushers: 80, cement: 320 }, financing: { private: 350, banks: 100, government: 50 } }, impact: { jobs: { direct: 12000, indirect: 8000, total: 20000, skillLevel: "Mix (operators, engineers, managers)", salary: "₹15,000-50,000/month" }, revenue: { year2034: 750, cement: 600, aggregates: 150, exportPotential: "Minimal (local consumption)" }, gddp: { contribution: 338, percentOfTarget: 0.97, multiplier: 1.5 } }, timeline: { phase1: "2026-2028: Mining leases, 3 crushers operational", phase2: "2028-2030: First mini cement plant (1,000 TPD)", phase3: "2030-2034: Scale to 3,000 TPD, 2nd plant", firstRevenue: "24-30 months", fullScale: "96 months" }, location: "Chincholi, Sedam, Chittapur taluks (existing deposits)", products: ["Cement (OPC 43/53 grade, PPC)", "Aggregates (construction, road building)", "Ready-mix concrete (urban Kalaburagi)"], buyers: { local: "Kalaburagi construction (40%)", regional: "Hyderabad, North Karnataka (50%)", infrastructure: "NH-50 widening, airports, metros (10%)" }, risks: [{ risk: "Mining lease delays (24-36 months)", severity: "high", mitigation: "Parallel applications, political support, fast-track" }, { risk: "Environmental clearances", severity: "medium", mitigation: "Comprehensive EIA, community engagement" }, { risk: "Cement market oversupply", severity: "medium", mitigation: "Gradual scaling, specialty cements" }], confidence: "MEDIUM-HIGH (75%)", recommendation: "PROCEED - Resource proven, but regulatory timeline critical", nextSteps: ["Q1 2026: Geological survey ₹50L, revenue sharing model with GoK", "Q2 2026: Mining lease applications (3-5 sites), investor outreach", "Q3-Q4 2026: Environmental baseline studies, crusher site selection", "2027: First lease approval target, crusher construction"] },
            { id: "aerospace", name: "Aerospace Components", icon: "✈️", priority: "MEDIUM-HIGH", priorityNote: "200km from Hyderabad aerospace cluster ($2.5B)", investment: { total: 800, breakdown: { infrastructure: 150, buildings: 200, machinery: 450 }, financing: { private: 240, banks: 320, subsidies: 120, vendorCredit: 80, ridf: 40 } }, impact: { jobs: { direct: 12000, indirect: 8000, total: 20000, skillLevel: "Highly skilled (63% ITI+, 20% engineers)", salary: "₹20,000-80,000/month" }, revenue: { year2034: 1200, defence: 480, commercial: 600, mro: 120, exportPercent: 60 }, gddp: { contribution: 360, percentOfTarget: 1.04, multiplier: 1.7 } }, timeline: { phase1: "2026-2028: Land, ITI curriculum, first 5 factories, AS9100 consultant", phase2: "2027-2028: Trial production, AS9100 certification", phase3: "2028-2031: Scale to 15 factories, exports, NADCAP", phase4: "2032-2034: 30 factories, R&D center", firstRevenue: "45-63 months", fullScale: "96 months" }, location: "Sedam/Afzalpur (500 acres, industrial zone)", products: ["Non-critical precision components (brackets, fasteners)", "Sheet metal parts (aircraft interiors)", "CNC machined parts (landing gear components)"], buyers: { defence: ["HAL (₹260cr)", "Tata Advanced Systems (₹100cr)", "Bharat Forge (₹120cr)"], commercial: ["Boeing India (₹200cr)", "Airbus (₹160cr)"], tier1: ["Collins Aerospace (₹80cr)", "Safran (₹160cr)"], mro: ["Air India Engineering", "GMR Aero Technic"] }, risks: [{ risk: "Quality failures (aerospace 10-100 PPM standard)", severity: "critical", mitigation: "Triple-layer quality, German/Israeli partnership ₹5cr, 100% CMM inspection" }, { risk: "AS9100 certification failure (60% first-time fail rate)", severity: "critical", mitigation: "Consultant from Day 1, build compliance into factory design, mock audits" }, { risk: "Long sales cycles (12-18 months OEM approval)", severity: "high", mitigation: "Start OEM outreach Year 1, parallel approvals" }], confidence: "MEDIUM-HIGH (70-75%)", recommendation: "PROCEED with heavy quality investment - Unforgiving industry, one defect destroys reputation", nextSteps: ["Q1 2026: Feasibility study ₹25L, aerospace consultant RFP, contact Hyderabad OEMs", "Q2 2026: Market study (OEM interviews), ITI curriculum (partner HAL), 24×7 power coordination", "Q3 2026: Interim report, investor roadshows Bangalore/Hyderabad, land MoU KIADB", "Q4 2026: AS9100 consultant hired, ITI equipment ₹7.5cr, 3-5 OEM MoUs"] },
            { id: "pharma", name: "Pharma Packaging", icon: "💊", priority: "MEDIUM-HIGH", priorityNote: "250km from Hyderabad Pharma City (world's largest)", investment: { total: 500, breakdown: { infrastructure: 80, buildings: 120, machinery: 300 }, financing: { private: 150, banks: 200, subsidies: 75, vendorCredit: 50, ridf: 25 } }, impact: { jobs: { direct: 4000, indirect: 2700, total: 6700, skillLevel: "Skilled (60% GMP-certified)", salary: "₹15,000-50,000/month" }, revenue: { year2034: 900, domestic: 630, export: 270, exportPercent: 30 }, gddp: { contribution: 270, percentOfTarget: 0.78, multiplier: 1.3 } }, timeline: { phase1: "2026-2027: Land, Schedule M consultant, pharma MoUs", phase2: "2027-2028: First 5 factories, Schedule M licensing, trial production", phase3: "2028-2031: Scale to 15 factories, ISO 15378, exports", phase4: "2032-2034: 20 factories, WHO-GMP, ₹900cr revenue", firstRevenue: "24-30 months", fullScale: "96 months" }, location: "Sedam/Afzalpur (200 acres, pharma zone)", products: ["Blister packs (Alu-Alu, PVC-Alu for tablets/capsules)", "HDPE/PET bottles (child-resistant caps)", "Cartons & labels (secondary packaging)"], buyers: { hyderabad: ["Dr. Reddy's (₹250cr)", "Hetero (₹216cr)", "Aurobindo (₹176cr)", "Laurus Labs (₹120cr)"], bangalore: ["Biocon (₹60cr)", "Strides (₹60cr)"], export: ["Africa (₹120cr antimalarials/ARVs)", "Middle East (₹60cr)"] }, risks: [{ risk: "Schedule M license delays (6-9 months normal, 12-18 if issues)", severity: "critical", mitigation: "Hire ex-CDSCO inspector ₹30L/year, mock audits quarterly, build right from Day 1" }, { risk: "Quality failures (pharma zero-tolerance)", severity: "high", mitigation: "Triple-check quality, 100% vision inspection, zero-defect guarantee" }, { risk: "Hyderabad Pharma City Phase 2 delays", severity: "medium", mitigation: "Diversify to Bangalore 15%, export 30%, other cities 10%" }], confidence: "MEDIUM-HIGH (75-80%)", recommendation: "PROCEED - Perfect timing for Pharma City Phase 2 (2029-2030), higher value/job than garments", nextSteps: ["Q1 2026: Market study ₹15L, 200 acres land identified, contact 10 Hyderabad pharma companies", "Q2 2026: Land acquisition (KIADB, 150 acres), Schedule M consultant ₹30L/year, MoU with 2-3 pharma companies", "Q3-Q4 2026: Infrastructure tenders (roads ₹25cr, power ₹20cr, water ₹10cr), first 5 entrepreneurs, ITI course design"] }
        ],
        comparison: { headers: ["Industry", "Investment", "Jobs", "Revenue 2034", "GDDP %", "Value/Job", "Time to Revenue", "Risk Level"], data: [{ industry: "Garments", investment: "₹650cr", jobs: "26,000", revenue: "₹1,800cr", gddp: "1.55%", valuePerJob: "₹5.1L", timeToRevenue: "18 months", risk: "Low-Medium" }, { industry: "Limestone", investment: "₹500cr", revenue: "₹750cr", jobs: "12,000", gddp: "0.97%", valuePerJob: "₹28.2L", timeToRevenue: "24-30 months", risk: "Medium-High (regulatory)" }, { industry: "Aerospace", investment: "₹800cr", jobs: "12,000", revenue: "₹1,200cr", gddp: "1.04%", valuePerJob: "₹30L (HIGHEST)", timeToRevenue: "45-63 months (LONGEST)", risk: "Medium-High (quality)" }, { industry: "Pharma Packaging", investment: "₹500cr", jobs: "6,700", revenue: "₹900cr", gddp: "0.78%", valuePerJob: "₹33.8L (HIGHEST)", timeToRevenue: "24-30 months", risk: "Medium (regulatory)" }] },
        recommendations: { immediate: { priority1: { industry: "Garments & Textiles", action: "Execute immediately - ₹390cr PM MITRA approved (gazetted Dec 2024)", timeline: "Q1 2026: Land acquisition, MoU signing", rationale: "Funding secured, fastest job creation (26,000), proven model, 18-month revenue" }, priority2: { industry: "Limestone & Cement", action: "Initiate geological survey & mining lease applications in parallel", timeline: "Q1 2026: Survey ₹50L, lease applications", rationale: "Resource proven (2.5-4 billion MT), but regulatory lead time 24-36 months - start NOW" } }, shortTerm: { priority3: { industry: "Pharma Packaging", action: "Market validation + Schedule M consultant hiring", timeline: "Q2 2026: Pharma company MoUs, consultant onboarding", rationale: "Perfect timing for Pharma City Phase 2 (2029-2030), medium complexity, 30-month revenue" }, priority4: { industry: "Aerospace Components", action: "Feasibility study + OEM engagement + quality infrastructure planning", timeline: "Q2-Q3 2026: Consultant selection, Hyderabad OEM meetings, ITI curriculum", rationale: "Highest value/job (₹30L) BUT longest timeline (45-63 months) and most unforgiving quality standards" } }, sequencing: { rationale: "Stagger to avoid overwhelming PMU and financing capacity", year1: "Garments (execute) + Limestone (regulatory)", year2: "Pharma (execute) + Aerospace (planning)", year3: "Aerospace (execute) + All 4 operational" } },
        frameworkIntegration: { totalBudget: { original: 17700, withIndustries: 20150, increase: 2450, percentIncrease: 13.8 }, phaseAllocation: { phase1: { garments: 150, limestone: 100, aerospace: 150, pharma: 80, subtotal: 480 }, phase2: { garments: 350, limestone: 300, aerospace: 350, pharma: 325, subtotal: 1325 }, phase3: { garments: 150, limestone: 100, aerospace: 300, pharma: 95, subtotal: 645 } }, synergies: ["Phase 1 power: 24×7 industrial feeders essential for aerospace/pharma clean rooms (₹50 MVA substation by Q4 2027)", "Skills: Convert 3 ITIs to aerospace/pharma trades, train 1,500/year × 8 years = 12,000 (covers aerospace + pharma needs)", "Return migrants: Target 2,400 from Bangalore (20% of aerospace, 5% of garments, 4% of pharma)", "Limestone: Supplies cement ₹40cr for garment/aerospace/pharma factory construction (20 factories × ₹2cr each)", "NH-44 Kalaburagi-Hyderabad: Lobby NHAI for 6-lane upgrade ₹500cr (benefits aerospace + pharma JIT logistics)"] }
    },

    alerts: [
        {
            id: 1,
            severity: "red",
            icon: "🔴",
            title: "Garments & Textiles: Land Acquisition Deadline (Q1 2026)",
            meta: {
                priority: "HIGHEST",
                funding: "₹390cr PM MITRA approved Dec 2024",
                deadline: "March 31, 2026"
            },
            description: "Critical Q1 action: PM MITRA MoU signing + 200-acre land identification. Delay risks ₹390cr funding lapse.",
            deadline: "This quarter (15 weeks remaining)",
            impact: "26,000 jobs at risk",
            actions: ["Initiate Land Search", "Schedule MoU Meeting", "View Full Plan"]
        },
        {
            id: 2,
            severity: "red",
            icon: "🔴",
            title: "Limestone & Cement: Geological Survey Overdue",
            meta: {
                priority: "HIGH",
                timeline: "Mining leases take 24-36 months",
                resource: "2.5-4 billion MT proven reserves"
            },
            description: "Q1 2026 deadline missed. Need ₹50L survey + 3-5 mining lease applications immediately. Regulatory delays will push revenue to 2028+.",
            deadline: "Start this month",
            impact: "12,000 jobs, 2-year delay risk",
            actions: ["Release ₹50L Survey Fund", "Draft Lease Applications", "View Risks"]
        },
        {
            id: 3,
            severity: "yellow",
            icon: "🟡",
            title: "Aerospace Components: Quality Infrastructure Planning Required",
            meta: {
                priority: "MEDIUM-HIGH",
                risk: "AS9100 certification (60% first-time fail rate)",
                value: "Highest value/job: ₹30L"
            },
            description: "Q2 2026 action: AS9100 consultant RFP + OEM outreach. Aerospace has zero-tolerance quality (10-100 PPM). Must invest in triple-layer quality from Day 1.",
            deadline: "Q2 2026 (June 30)",
            impact: "12,000 high-skill jobs, ₹1,200cr revenue",
            actions: ["Issue Consultant RFP", "Contact Hyderabad OEMs", "View Quality Plan"]
        },
        {
            id: 4,
            severity: "yellow",
            icon: "🟡",
            title: "Pharma Packaging: Market Validation Pending",
            meta: {
                priority: "MEDIUM-HIGH",
                opportunity: "250km from Hyderabad Pharma City",
                timeline: "24-30 months to revenue"
            },
            description: "Q1-Q2 2026 action: Market study ₹15L + MoUs with 2-3 Hyderabad pharma companies (Dr. Reddy's, Hetero, Aurobindo). Schedule M consultant hiring critical.",
            deadline: "Q2 2026",
            impact: "6,700 jobs, ₹900cr revenue by 2034",
            actions: ["Fund Market Study", "Contact Pharma Companies", "View Schedule M Plan"]
        },
        {
            id: 5,
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
            id: 6,
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
            id: 7,
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
            title: "Invest Karnataka - District Profile: Kalaburagi",
            publisher: "Department of Commerce & Industries, GoK",
            updated: "2024",
            vintage: "2024",
            coverage: "Irrigation (119,327 ha verified), GDDP, Universities (4), Total area, Infrastructure",
            quality: "high",
            url: "https://investkarnataka.co.in/our-districts/kalaburagi/",
            note: "Primary source for 2026 baseline updates - irrigation and infrastructure data"
        },
        {
            title: "District Industrial Profile - Kalaburagi",
            publisher: "Industries & Commerce Department, GoK",
            updated: "2024",
            vintage: "2016-2024",
            coverage: "Dal mills count (500+ verified), Industrial infrastructure, MSME data",
            quality: "high",
            url: "https://industries.karnataka.gov.in/storage/pdf-files/DISTRICT%20PROFILE-KALABURGI.pdf",
            note: "Used to verify dal mill count (500+ vs 300 assumed)"
        },
        {
            title: "FPO List 2024",
            publisher: "Centre of Excellence for FPO (COE-FPO)",
            updated: "2024",
            vintage: "2024",
            coverage: "FPO registrations (23 FPOs verified in Kalaburagi)",
            quality: "high",
            url: "https://coefpo.org/publications/fpo-list-english.pdf",
            note: "Used to verify current FPO count"
        },
        {
            title: "DULT Karnataka - Comprehensive Traffic & Transportation Plan",
            publisher: "Directorate of Urban Land Transport, GoK",
            updated: "2011-2024",
            vintage: "2011",
            coverage: "Bus Priority Lane (₹19.07 cr), Road network (753 km), Urban transport infrastructure",
            quality: "high",
            url: "https://dult.karnataka.gov.in/uploads/media_to_upload1643374475.pdf",
            note: "Referenced in framework for urban transport baseline"
        },
        {
            title: "Census 2011 - Gulbarga District",
            publisher: "Census of India",
            updated: "2011",
            vintage: "2011",
            coverage: "Population (25,66,326), Demographics, Literacy (64.85%)",
            quality: "medium",
            url: "https://www.census2011.co.in/census/district/256-gulbarga.html",
            note: "Used for population CAGR projections (0.69% annual growth). Census 2021 data pending."
        },
        {
            title: "Economic Survey of Karnataka 2022-23 (Volume 45)",
            publisher: "Planning, Programme Monitoring & Statistics Dept, GoK",
            updated: "March 2023",
            vintage: "2021-22",
            coverage: "District-wise GDDP, Per Capita Income (₹1,24,998), District rankings (30/30)",
            quality: "high",
            url: "https://data.opencity.in/dataset/economic-survey-of-karnataka-2022-23",
            note: "Official source for 2021-22 baseline per capita income and district ranking"
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
        }
    ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = dashboardData;
}

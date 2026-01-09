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
                        ]
                    },
                    {
                        name: "Rural Connectivity",
                        budget: 800,
                        progress: 80,
                        items: [
                            "Village-to-market roads: 480/600 km",
                            "All-weather roads to dal mills: 80/100 km"
                        ]
                    },
                    {
                        name: "Power Infrastructure",
                        budget: 500,
                        progress: 65,
                        items: [
                            "Feeder separation in progress",
                            "Sub-station upgrades: 18/25 completed"
                        ]
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
                        ]
                    },
                    {
                        name: "FPO Development",
                        budget: 300,
                        progress: 30,
                        items: [
                            "FPOs formed: 15/50",
                            "Farmers covered: 30,000/100,000"
                        ]
                    },
                    {
                        name: "Skill Development",
                        budget: 600,
                        progress: 25,
                        items: [
                            "Youth trained: 9,000/36,000",
                            "Placements: 7,200/30,600"
                        ]
                    },
                    {
                        name: "MSME Ecosystem",
                        budget: 2500,
                        progress: 20,
                        items: [
                            "New MSMEs: 500/2,500",
                            "Jobs created: 5,000/25,000"
                        ]
                    }
                ]
            },
            phase3: {
                name: "Scale",
                years: "Years 6-8",
                budget: 6200,
                progress: 0,
                status: "notstarted",
                description: "Strategic industrial attraction, healthcare/education upgrades, and urban infrastructure development. Scheduled to begin in Year 6."
            }
        },
        
        financing: [
            {
                source: "Central Schemes",
                amount: 5500,
                percent: 35,
                details: "RIDF, PMKSY, PMFME, Smart Cities"
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

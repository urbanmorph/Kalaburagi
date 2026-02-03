// ============================================
// KIADB Land Allocation Data for Kalaburagi District
// Source: Karnataka Industrial Areas Development Board
// Auto-generated - DO NOT EDIT MANUALLY
// Last Updated: 3/2/2026, 2:15:41 pm IST
// ============================================

const kiadbLandData = {
    "districtName": "Kalaburagi",
    "lastUpdated": "2026-02-03T08:45:41.237Z",
    "source": "Baseline Estimate (pending KIADB portal integration)",
    "sourceUrl": "https://kiadb.karnataka.gov.in/en/",
    "note": "Baseline data - requires web scraping or KIADB coordination for live updates",
    "industrialAreas": [
        {
            "name": "Sedam Industrial Area",
            "location": "Sedam Taluk",
            "totalArea": 485,
            "developedArea": 320,
            "availableForAllotment": 165,
            "allottedPlots": 42,
            "vacantPlots": 28,
            "underDevelopment": 95,
            "infrastructureStatus": {
                "power": "Available - 11KV line, transformer capacity 2500 KVA",
                "water": "Available - Borewells + tanker supply",
                "roads": "Good - Internal roads paved, NH connectivity 8km",
                "drainage": "Partial - 60% coverage",
                "streetLights": "Available",
                "security": "Planned"
            },
            "majorAllotments": [
                {
                    "company": "Aerospace Component Manufacturers",
                    "area": 50,
                    "status": "Allotted - Awaiting Possession"
                },
                {
                    "company": "Pharma Unit 1",
                    "area": 25,
                    "status": "Allotted - Construction Started"
                },
                {
                    "company": "Pharma Unit 2",
                    "area": 18,
                    "status": "Allotted - Construction Started"
                },
                {
                    "company": "Food Processing Units",
                    "area": 35,
                    "status": "Allotted - Operational"
                }
            ]
        },
        {
            "name": "Kalaburagi Growth Centre",
            "location": "Kalaburagi Taluk",
            "totalArea": 280,
            "developedArea": 210,
            "availableForAllotment": 35,
            "allottedPlots": 58,
            "vacantPlots": 12,
            "underDevelopment": 35,
            "infrastructureStatus": {
                "power": "Excellent - 24x7 industrial feeder",
                "water": "Good - Municipal + borewell",
                "roads": "Excellent - Within city limits",
                "drainage": "Complete",
                "streetLights": "Available",
                "security": "Available - CCTV"
            },
            "majorAllotments": [
                {
                    "company": "Existing Dal Mills",
                    "area": 45,
                    "status": "Operational"
                },
                {
                    "company": "Logistics Hub",
                    "area": 28,
                    "status": "Operational"
                },
                {
                    "company": "MSME Units (15+)",
                    "area": 82,
                    "status": "Mixed - Operational/Under Construction"
                }
            ]
        }
    ],
    "projectWiseLandRequirement": {
        "PM MITRA Textile Park": {
            "landRequired": 300,
            "landIdentified": 300,
            "landAcquired": 0,
            "landDeveloped": 0,
            "status": "Land Acquisition Pending",
            "location": "Sedam/Chittapur (under finalization)",
            "timeline": {
                "acquisitionTarget": "Q2 2026",
                "developmentStart": "Q4 2026",
                "allotmentStart": "Q2 2027"
            },
            "infrastructureNeeds": {
                "power": "50 MVA substation required",
                "water": "5 MLD supply needed",
                "effluent": "CETP required (10 MLD capacity)",
                "roads": "Approach road 4-lane upgrade needed"
            }
        },
        "Aerospace Cluster": {
            "landRequired": 500,
            "landIdentified": 450,
            "landAcquired": 50,
            "landDeveloped": 0,
            "status": "Partial Acquisition - Awaiting Clearances",
            "location": "Sedam Industrial Area + Expansion",
            "timeline": {
                "acquisitionTarget": "Q3 2026",
                "developmentStart": "Q1 2027",
                "allotmentStart": "Q3 2027"
            },
            "infrastructureNeeds": {
                "power": "24x7 reliable supply critical",
                "water": "Moderate (2 MLD)",
                "quality": "Clean room facilities needed",
                "certification": "AS9100 support infrastructure"
            }
        },
        "Pharma Cluster": {
            "landRequired": 200,
            "landIdentified": 180,
            "landAcquired": 43,
            "landDeveloped": 43,
            "status": "Partially Allotted - Active",
            "location": "Sedam Industrial Area",
            "timeline": {
                "acquisitionTarget": "Q4 2026",
                "developmentStart": "Q1 2027",
                "allotmentStart": "Q2 2027"
            },
            "infrastructureNeeds": {
                "power": "Stable supply (pharma-grade)",
                "water": "High quality (3 MLD)",
                "effluent": "Pharma-specific CETP",
                "validation": "WHO-GMP infrastructure support"
            }
        },
        "Limestone Mining & Processing": {
            "landRequired": 200,
            "landIdentified": 250,
            "landAcquired": 0,
            "landDeveloped": 0,
            "status": "Geological Survey Pending",
            "location": "Chincholi/Sedam (limestone belt)",
            "timeline": {
                "surveyCompletion": "Q3 2026",
                "miningLease": "Q1 2027",
                "processingUnitLand": "Q2 2027"
            },
            "infrastructureNeeds": {
                "power": "Heavy load (crushing units)",
                "water": "Moderate",
                "transport": "Heavy vehicle access roads",
                "environment": "Dust control, forest clearances"
            }
        }
    },
    "summary": {
        "totalIndustrialLand": 765,
        "developedLand": 530,
        "allottedLand": 398,
        "vacantLand": 132,
        "underDevelopment": 130,
        "availableForAllotment": 200,
        "pipelineLandRequirement": 1200,
        "pipelineLandAcquired": 93,
        "pipelineLandGap": 1107,
        "totalPlots": 100,
        "allottedPlots": 100,
        "occupiedPlots": 73,
        "vacantAllottedPlots": 27
    },
    "infrastructureReadiness": {
        "power": {
            "status": "Good",
            "capacity": "24x7 supply to existing areas",
            "gap": "50 MVA substation needed for PM MITRA",
            "rating": 75
        },
        "water": {
            "status": "Moderate",
            "capacity": "Adequate for current, insufficient for expansion",
            "gap": "15 MLD additional supply needed",
            "rating": 60
        },
        "roads": {
            "status": "Good",
            "capacity": "NH connectivity good, internal roads adequate",
            "gap": "Sedam IA approach road needs widening",
            "rating": 80
        },
        "drainage": {
            "status": "Moderate",
            "capacity": "Partial coverage in IAs",
            "gap": "Complete drainage system for expansions",
            "rating": 55
        },
        "effluent": {
            "status": "Critical Gap",
            "capacity": "No CETP in district",
            "gap": "CETP mandatory for PM MITRA, pharma clusters",
            "rating": 20
        }
    },
    "allotmentProcess": {
        "averageProcessingTime": 90,
        "targetTime": 30,
        "steps": [
            {
                "step": "Application Submission",
                "avgDays": 1
            },
            {
                "step": "Site Inspection",
                "avgDays": 15
            },
            {
                "step": "Feasibility Assessment",
                "avgDays": 20
            },
            {
                "step": "Board Approval",
                "avgDays": 30
            },
            {
                "step": "Allotment Order",
                "avgDays": 14
            },
            {
                "step": "Payment & Possession",
                "avgDays": 10
            }
        ],
        "recentAllotments": 8,
        "pendingApplications": 12
    },
    "landPricing": {
        "sedamIA": {
            "developedPlot": 2500000,
            "undevelopedPlot": 1800000
        },
        "kalaburagGC": {
            "developedPlot": 3500000,
            "undevelopedPlot": 2500000
        },
        "note": "Prices indicative, subject to KIADB board rates"
    }
};

// Export for use in dashboard
if (typeof module !== 'undefined' && module.exports) {
    module.exports = kiadbLandData;
}

// ============================================
// SLBC Credit Data for Kalaburagi District
// Source: State Level Bankers' Committee Karnataka
// Auto-generated - DO NOT EDIT MANUALLY
// Last Updated: 3/2/2026, 2:14:29 pm IST
// ============================================

const slbcCreditData = {
    "districtName": "Kalaburagi",
    "lastUpdated": "2026-02-03T08:44:29.381Z",
    "currentQuarter": {
        "quarter": "Q3 FY 2025-26",
        "period": "October - December 2025",
        "asOfDate": "2025-12-31"
    },
    "source": "Baseline Estimate (pending SLBC quarterly report integration)",
    "sourceUrl": "https://slbckarnataka.com/",
    "note": "Baseline data - requires PDF parsing for quarterly SLBC reports",
    "summary": {
        "totalCredit": 18450000000,
        "totalDeposits": 28600000000,
        "creditDepositRatio": 64.5,
        "stateAvgCDRatio": 78.2,
        "prioritySectorCredit": 9680000000,
        "nonPrioritySectorCredit": 8770000000,
        "totalBankBranches": 387,
        "totalATMs": 412
    },
    "sectorWiseCredit": {
        "agriculture": {
            "outstanding": 7420000000,
            "percentOfTotal": 40.2,
            "yearlyTarget": 8500000000,
            "achievement": 87.3,
            "subcategories": {
                "Crop Loans": 4850000000,
                "Investment Credit": 1920000000,
                "Allied Activities": 650000000
            }
        },
        "msme": {
            "outstanding": 5630000000,
            "percentOfTotal": 30.5,
            "yearlyTarget": 6200000000,
            "achievement": 90.8,
            "subcategories": {
                "Micro": 2340000000,
                "Small": 2150000000,
                "Medium": 1140000000
            }
        },
        "industry": {
            "outstanding": 3280000000,
            "percentOfTotal": 17.8,
            "yearlyTarget": 3800000000,
            "achievement": 86.3,
            "subcategories": {
                "Textiles & Garments": 1450000000,
                "Food Processing": 820000000,
                "Engineering": 680000000,
                "Others": 330000000
            }
        },
        "others": {
            "outstanding": 2120000000,
            "percentOfTotal": 11.5,
            "subcategories": {
                "Education": 840000000,
                "Housing": 780000000,
                "Personal": 500000000
            }
        }
    },
    "quarterlyTrend": {
        "Q1 FY24": {
            "credit": 16200000000,
            "deposits": 26800000000,
            "cdRatio": 60.4
        },
        "Q2 FY24": {
            "credit": 16800000000,
            "deposits": 27400000000,
            "cdRatio": 61.3
        },
        "Q3 FY24": {
            "credit": 17100000000,
            "deposits": 27900000000,
            "cdRatio": 61.3
        },
        "Q4 FY24": {
            "credit": 17650000000,
            "deposits": 28200000000,
            "cdRatio": 62.6
        },
        "Q1 FY25": {
            "credit": 17900000000,
            "deposits": 28400000000,
            "cdRatio": 63
        },
        "Q2 FY25": {
            "credit": 18200000000,
            "deposits": 28500000000,
            "cdRatio": 63.9
        },
        "Q3 FY25": {
            "credit": 18450000000,
            "deposits": 28600000000,
            "cdRatio": 64.5
        }
    },
    "bankWiseCredit": {
        "Nationalized Banks": {
            "credit": 9870000000,
            "deposits": 15200000000,
            "branches": 168
        },
        "Private Banks": {
            "credit": 4250000000,
            "deposits": 8100000000,
            "branches": 87
        },
        "Regional Rural Banks": {
            "credit": 2680000000,
            "deposits": 3800000000,
            "branches": 95
        },
        "Cooperative Banks": {
            "credit": 1650000000,
            "deposits": 1500000000,
            "branches": 37
        }
    },
    "prioritySectorPerformance": {
        "agriculture": {
            "target": 8500000000,
            "disbursed": 7420000000,
            "achievement": 87.3,
            "status": "Good"
        },
        "msmeWeakerSections": {
            "target": 4200000000,
            "disbursed": 3890000000,
            "achievement": 92.6,
            "status": "Excellent"
        },
        "totalPrioritySector": {
            "target": 9680000000,
            "disbursed": 9680000000,
            "achievement": 100,
            "status": "Target Met"
        }
    },
    "roadmapAlignment": {
        "phase1Target": 186250000000,
        "currentAnnualDisbursement": 74000000000,
        "projectedPhase1": 222000000000,
        "gapAnalysis": "On track to exceed Phase 1 target by 19%",
        "sectorTargets": {
            "agriculture": {
                "phase1Target": 65100000000,
                "currentAnnual": 742000000,
                "onTrack": true
            },
            "msmeIndustry": {
                "phase1Target": 111600000000,
                "currentAnnual": 1067000000,
                "onTrack": true
            }
        }
    },
    "challenges": [
        {
            "issue": "CD Ratio Below State Average",
            "current": 64.5,
            "target": 78.2,
            "gap": 13.7,
            "impact": "Need ₹392 cr additional credit to match state average"
        },
        {
            "issue": "Low Industrial Credit",
            "current": 17.8,
            "target": 25,
            "gap": 7.2,
            "impact": "Insufficient lending for Phase 1 industrial expansion"
        },
        {
            "issue": "Branch Network Density",
            "current": 387,
            "target": 450,
            "gap": 63,
            "impact": "Rural areas underserved, especially for FPO financing"
        }
    ]
};

// Export for use in dashboard
if (typeof module !== 'undefined' && module.exports) {
    module.exports = slbcCreditData;
}

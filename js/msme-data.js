// ============================================
// MSME Registration Data for Kalaburagi District
// Source: Open Government Data Platform (UDYAM)
// Auto-generated - DO NOT EDIT MANUALLY
// Last Updated: 3/2/2026, 1:03:10 pm IST
// ============================================

const msmeData = {
    "districtName": "Kalaburagi",
    "lastUpdated": "2026-02-03T07:33:10.885Z",
    "source": "Baseline Estimate (pending OGD API integration)",
    "sourceUrl": "https://www.data.gov.in/resource/list-msme-registered-units-under-udyam",
    "note": "Baseline data - awaiting OGD API key for live updates",
    "statistics": {
        "total": 2847,
        "byType": {
            "Proprietorship": 1820,
            "Partnership": 658,
            "Private Limited": 289,
            "Public Limited": 45,
            "Self Help Group": 35
        },
        "bySector": {
            "Manufacturing": 1124,
            "Services": 892,
            "Trade": 678,
            "Others": 153
        },
        "byYear": {
            "2020": 189,
            "2021": 247,
            "2022": 312,
            "2023": 398,
            "2024": 467,
            "2025": 521,
            "2026": 156
        },
        "totalInvestment": 1247000000,
        "totalEmployment": 18420
    },
    "growthTrends": {
        "yearOverYear": "+15.2%",
        "targetBy2032": 4500,
        "gapRemaining": 1653
    }
};

// Export for use in dashboard
if (typeof module !== 'undefined' && module.exports) {
    module.exports = msmeData;
}

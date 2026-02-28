// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 28/2/2026, 6:18:38 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-28T00:48:38.541Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9505,
            "unit": "₹/quintal",
            "date": "2026-02-28",
            "priceChange": -36,
            "percentChange": -0.4,
            "lastWeekPrice": 9541
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5741,
            "unit": "₹/quintal",
            "date": "2026-02-28",
            "priceChange": -29,
            "percentChange": -0.5,
            "lastWeekPrice": 5770
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7123,
            "unit": "₹/quintal",
            "date": "2026-02-28",
            "priceChange": -124,
            "percentChange": -1.7,
            "lastWeekPrice": 7247
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-28"
        },
        "thisWeek": {
            "amount": 3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.7,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 459.9,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-26"
        }
    },
    "dataQuality": {
        "commodityPrices": {
            "status": "live",
            "source": "Agmarknet API",
            "confidence": "high"
        },
        "rainfall": {
            "status": "live",
            "source": "IMD API",
            "confidence": "high"
        }
    }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = liveData;
}

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 23/2/2026, 6:25:44 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-23T00:55:44.918Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9432,
            "unit": "₹/quintal",
            "date": "2026-02-23",
            "priceChange": -13,
            "percentChange": -0.1,
            "lastWeekPrice": 9445
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5773,
            "unit": "₹/quintal",
            "date": "2026-02-23",
            "priceChange": -2,
            "percentChange": 0,
            "lastWeekPrice": 5775
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7217,
            "unit": "₹/quintal",
            "date": "2026-02-23",
            "priceChange": 78,
            "percentChange": 1.1,
            "lastWeekPrice": 7139
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-23"
        },
        "thisWeek": {
            "amount": 8.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 18.2,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 424.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-21"
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

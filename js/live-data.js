// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 18/2/2026, 6:25:41 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-18T00:55:41.166Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9518,
            "unit": "₹/quintal",
            "date": "2026-02-18",
            "priceChange": 93,
            "percentChange": 1,
            "lastWeekPrice": 9425
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5844,
            "unit": "₹/quintal",
            "date": "2026-02-18",
            "priceChange": 103,
            "percentChange": 1.8,
            "lastWeekPrice": 5741
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7228,
            "unit": "₹/quintal",
            "date": "2026-02-18",
            "priceChange": 112,
            "percentChange": 1.6,
            "lastWeekPrice": 7116
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-18"
        },
        "thisWeek": {
            "amount": 9.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 8.4,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 438.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-16"
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

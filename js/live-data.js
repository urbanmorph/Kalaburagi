// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 9/1/2026, 11:22:05 pm
// ============================================

const liveData = {
    "lastUpdated": "2026-01-09T17:52:05.411Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9498,
            "unit": "₹/quintal",
            "date": "2026-01-09",
            "priceChange": 0,
            "percentChange": 0,
            "lastWeekPrice": 9498
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5790,
            "unit": "₹/quintal",
            "date": "2026-01-09",
            "priceChange": 0,
            "percentChange": 0,
            "lastWeekPrice": 5790
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7183,
            "unit": "₹/quintal",
            "date": "2026-01-09",
            "priceChange": 0,
            "percentChange": 0,
            "lastWeekPrice": 7183
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 1.2,
            "unit": "mm",
            "date": "2026-01-09"
        },
        "thisWeek": {
            "amount": 9.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 18.9,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 450.9,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-07"
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

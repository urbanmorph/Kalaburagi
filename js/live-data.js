// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 11/6/2026, 6:59:29 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-11T01:29:29.406Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9512,
            "unit": "₹/quintal",
            "date": "2026-06-11",
            "priceChange": -2,
            "percentChange": 0,
            "lastWeekPrice": 9514
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5898,
            "unit": "₹/quintal",
            "date": "2026-06-11",
            "priceChange": 62,
            "percentChange": 1.1,
            "lastWeekPrice": 5836
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7218,
            "unit": "₹/quintal",
            "date": "2026-06-11",
            "priceChange": -58,
            "percentChange": -0.8,
            "lastWeekPrice": 7276
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 2.1,
            "unit": "mm",
            "date": "2026-06-11"
        },
        "thisWeek": {
            "amount": 2.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 15.7,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 472.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-09"
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

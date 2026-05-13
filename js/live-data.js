// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 13/5/2026, 6:48:44 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-13T01:18:44.403Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9479,
            "unit": "₹/quintal",
            "date": "2026-05-13",
            "priceChange": -32,
            "percentChange": -0.3,
            "lastWeekPrice": 9511
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5840,
            "unit": "₹/quintal",
            "date": "2026-05-13",
            "priceChange": 39,
            "percentChange": 0.7,
            "lastWeekPrice": 5801
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7137,
            "unit": "₹/quintal",
            "date": "2026-05-13",
            "priceChange": -141,
            "percentChange": -1.9,
            "lastWeekPrice": 7278
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 2.6,
            "unit": "mm",
            "date": "2026-05-13"
        },
        "thisWeek": {
            "amount": 7.9,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 19.1,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 407.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-11"
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

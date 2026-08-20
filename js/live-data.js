// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 20/8/2026, 7:27:30 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-20T01:57:30.975Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9421,
            "unit": "₹/quintal",
            "date": "2026-08-20",
            "priceChange": -171,
            "percentChange": -1.8,
            "lastWeekPrice": 9592
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5705,
            "unit": "₹/quintal",
            "date": "2026-08-20",
            "priceChange": -76,
            "percentChange": -1.3,
            "lastWeekPrice": 5781
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7233,
            "unit": "₹/quintal",
            "date": "2026-08-20",
            "priceChange": -64,
            "percentChange": -0.9,
            "lastWeekPrice": 7297
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-20"
        },
        "thisWeek": {
            "amount": 3.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 9.4,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 425.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-18"
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

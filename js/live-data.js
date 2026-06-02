// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 2/6/2026, 7:01:24 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-02T01:31:24.375Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9559,
            "unit": "₹/quintal",
            "date": "2026-06-02",
            "priceChange": 140,
            "percentChange": 1.5,
            "lastWeekPrice": 9419
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5848,
            "unit": "₹/quintal",
            "date": "2026-06-02",
            "priceChange": 139,
            "percentChange": 2.4,
            "lastWeekPrice": 5709
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7270,
            "unit": "₹/quintal",
            "date": "2026-06-02",
            "priceChange": 5,
            "percentChange": 0.1,
            "lastWeekPrice": 7265
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-02"
        },
        "thisWeek": {
            "amount": 5.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 13.2,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 482.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-31"
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

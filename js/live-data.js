// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 3/6/2026, 7:05:34 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-03T01:35:34.855Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9457,
            "unit": "₹/quintal",
            "date": "2026-06-03",
            "priceChange": -102,
            "percentChange": -1.1,
            "lastWeekPrice": 9559
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5840,
            "unit": "₹/quintal",
            "date": "2026-06-03",
            "priceChange": -8,
            "percentChange": -0.1,
            "lastWeekPrice": 5848
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7122,
            "unit": "₹/quintal",
            "date": "2026-06-03",
            "priceChange": -148,
            "percentChange": -2,
            "lastWeekPrice": 7270
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-03"
        },
        "thisWeek": {
            "amount": 10,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 8.5,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 450.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-01"
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

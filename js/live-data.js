// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 22/8/2026, 7:26:16 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-22T01:56:16.748Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9559,
            "unit": "₹/quintal",
            "date": "2026-08-22",
            "priceChange": -16,
            "percentChange": -0.2,
            "lastWeekPrice": 9575
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5896,
            "unit": "₹/quintal",
            "date": "2026-08-22",
            "priceChange": 60,
            "percentChange": 1,
            "lastWeekPrice": 5836
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7265,
            "unit": "₹/quintal",
            "date": "2026-08-22",
            "priceChange": 69,
            "percentChange": 1,
            "lastWeekPrice": 7196
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-22"
        },
        "thisWeek": {
            "amount": 3.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 10.9,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 437,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-20"
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

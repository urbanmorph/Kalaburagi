// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 8/4/2026, 6:31:13 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-08T01:01:13.776Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9531,
            "unit": "₹/quintal",
            "date": "2026-04-08",
            "priceChange": -8,
            "percentChange": -0.1,
            "lastWeekPrice": 9539
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5783,
            "unit": "₹/quintal",
            "date": "2026-04-08",
            "priceChange": -28,
            "percentChange": -0.5,
            "lastWeekPrice": 5811
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7127,
            "unit": "₹/quintal",
            "date": "2026-04-08",
            "priceChange": -104,
            "percentChange": -1.4,
            "lastWeekPrice": 7231
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 1.8,
            "unit": "mm",
            "date": "2026-04-08"
        },
        "thisWeek": {
            "amount": 5.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 10.9,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 401.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-06"
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

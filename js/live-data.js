// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 23/4/2026, 6:38:13 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-23T01:08:13.413Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9401,
            "unit": "₹/quintal",
            "date": "2026-04-23",
            "priceChange": -177,
            "percentChange": -1.8,
            "lastWeekPrice": 9578
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5783,
            "unit": "₹/quintal",
            "date": "2026-04-23",
            "priceChange": -7,
            "percentChange": -0.1,
            "lastWeekPrice": 5790
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7170,
            "unit": "₹/quintal",
            "date": "2026-04-23",
            "priceChange": -81,
            "percentChange": -1.1,
            "lastWeekPrice": 7251
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-23"
        },
        "thisWeek": {
            "amount": 3.8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 8.2,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 439,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-21"
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

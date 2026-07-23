// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 23/7/2026, 9:22:23 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-23T03:52:23.850Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9430,
            "unit": "₹/quintal",
            "date": "2026-07-23",
            "priceChange": -72,
            "percentChange": -0.8,
            "lastWeekPrice": 9502
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5724,
            "unit": "₹/quintal",
            "date": "2026-07-23",
            "priceChange": 14,
            "percentChange": 0.2,
            "lastWeekPrice": 5710
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7218,
            "unit": "₹/quintal",
            "date": "2026-07-23",
            "priceChange": 21,
            "percentChange": 0.3,
            "lastWeekPrice": 7197
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-23"
        },
        "thisWeek": {
            "amount": 9.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 13.1,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 495.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-21"
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

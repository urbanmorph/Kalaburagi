// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 7/3/2026, 6:21:15 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-07T00:51:15.352Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9519,
            "unit": "₹/quintal",
            "date": "2026-03-07",
            "priceChange": -69,
            "percentChange": -0.7,
            "lastWeekPrice": 9588
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5873,
            "unit": "₹/quintal",
            "date": "2026-03-07",
            "priceChange": 122,
            "percentChange": 2.1,
            "lastWeekPrice": 5751
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7119,
            "unit": "₹/quintal",
            "date": "2026-03-07",
            "priceChange": -124,
            "percentChange": -1.7,
            "lastWeekPrice": 7243
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-07"
        },
        "thisWeek": {
            "amount": 5.8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 18.6,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 477.7,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-05"
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

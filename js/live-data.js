// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 23/3/2026, 6:28:29 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-23T00:58:29.030Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9577,
            "unit": "₹/quintal",
            "date": "2026-03-23",
            "priceChange": 103,
            "percentChange": 1.1,
            "lastWeekPrice": 9474
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5797,
            "unit": "₹/quintal",
            "date": "2026-03-23",
            "priceChange": 29,
            "percentChange": 0.5,
            "lastWeekPrice": 5768
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7262,
            "unit": "₹/quintal",
            "date": "2026-03-23",
            "priceChange": 19,
            "percentChange": 0.3,
            "lastWeekPrice": 7243
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-23"
        },
        "thisWeek": {
            "amount": 9.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 5,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 499.7,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-21"
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

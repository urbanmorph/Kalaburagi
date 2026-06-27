// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 27/6/2026, 6:51:13 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-27T01:21:13.666Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9462,
            "unit": "₹/quintal",
            "date": "2026-06-27",
            "priceChange": -35,
            "percentChange": -0.4,
            "lastWeekPrice": 9497
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5709,
            "unit": "₹/quintal",
            "date": "2026-06-27",
            "priceChange": -55,
            "percentChange": -1,
            "lastWeekPrice": 5764
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7231,
            "unit": "₹/quintal",
            "date": "2026-06-27",
            "priceChange": -5,
            "percentChange": -0.1,
            "lastWeekPrice": 7236
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-27"
        },
        "thisWeek": {
            "amount": 7.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 6.5,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 497.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-25"
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

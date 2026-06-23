// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 23/6/2026, 6:50:52 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-23T01:20:52.742Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9409,
            "unit": "₹/quintal",
            "date": "2026-06-23",
            "priceChange": -24,
            "percentChange": -0.3,
            "lastWeekPrice": 9433
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5711,
            "unit": "₹/quintal",
            "date": "2026-06-23",
            "priceChange": -32,
            "percentChange": -0.6,
            "lastWeekPrice": 5743
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7266,
            "unit": "₹/quintal",
            "date": "2026-06-23",
            "priceChange": -17,
            "percentChange": -0.2,
            "lastWeekPrice": 7283
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-23"
        },
        "thisWeek": {
            "amount": 5.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 13.3,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 449.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-21"
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

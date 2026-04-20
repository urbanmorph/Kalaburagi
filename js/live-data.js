// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 20/4/2026, 6:37:20 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-20T01:07:20.540Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9462,
            "unit": "₹/quintal",
            "date": "2026-04-20",
            "priceChange": -21,
            "percentChange": -0.2,
            "lastWeekPrice": 9483
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5802,
            "unit": "₹/quintal",
            "date": "2026-04-20",
            "priceChange": -79,
            "percentChange": -1.3,
            "lastWeekPrice": 5881
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7127,
            "unit": "₹/quintal",
            "date": "2026-04-20",
            "priceChange": 1,
            "percentChange": 0,
            "lastWeekPrice": 7126
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-20"
        },
        "thisWeek": {
            "amount": 0,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 15.1,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 473.7,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-18"
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

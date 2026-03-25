// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 25/3/2026, 6:26:05 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-25T00:56:05.233Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9480,
            "unit": "₹/quintal",
            "date": "2026-03-25",
            "priceChange": -14,
            "percentChange": -0.1,
            "lastWeekPrice": 9494
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5802,
            "unit": "₹/quintal",
            "date": "2026-03-25",
            "priceChange": 85,
            "percentChange": 1.5,
            "lastWeekPrice": 5717
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7288,
            "unit": "₹/quintal",
            "date": "2026-03-25",
            "priceChange": 59,
            "percentChange": 0.8,
            "lastWeekPrice": 7229
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-25"
        },
        "thisWeek": {
            "amount": 7.8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 10.4,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 498.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-23"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 20/7/2026, 9:41:58 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-20T04:11:58.394Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9475,
            "unit": "₹/quintal",
            "date": "2026-07-20",
            "priceChange": -86,
            "percentChange": -0.9,
            "lastWeekPrice": 9561
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5814,
            "unit": "₹/quintal",
            "date": "2026-07-20",
            "priceChange": -51,
            "percentChange": -0.9,
            "lastWeekPrice": 5865
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7202,
            "unit": "₹/quintal",
            "date": "2026-07-20",
            "priceChange": -57,
            "percentChange": -0.8,
            "lastWeekPrice": 7259
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-20"
        },
        "thisWeek": {
            "amount": 0.5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 14.7,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 401.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-18"
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

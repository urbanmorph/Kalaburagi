// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 9/8/2026, 8:04:14 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-09T02:34:14.271Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9533,
            "unit": "₹/quintal",
            "date": "2026-08-09",
            "priceChange": 33,
            "percentChange": 0.3,
            "lastWeekPrice": 9500
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5881,
            "unit": "₹/quintal",
            "date": "2026-08-09",
            "priceChange": 124,
            "percentChange": 2.2,
            "lastWeekPrice": 5757
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7170,
            "unit": "₹/quintal",
            "date": "2026-08-09",
            "priceChange": -25,
            "percentChange": -0.3,
            "lastWeekPrice": 7195
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 2.2,
            "unit": "mm",
            "date": "2026-08-09"
        },
        "thisWeek": {
            "amount": 5.9,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 8.7,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 435.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-07"
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

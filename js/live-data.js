// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 11/1/2026, 6:19:54 am
// ============================================

const liveData = {
    "lastUpdated": "2026-01-11T00:49:54.483Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9448,
            "unit": "₹/quintal",
            "date": "2026-01-11",
            "priceChange": -8,
            "percentChange": -0.1,
            "lastWeekPrice": 9456
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5715,
            "unit": "₹/quintal",
            "date": "2026-01-11",
            "priceChange": -140,
            "percentChange": -2.4,
            "lastWeekPrice": 5855
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7273,
            "unit": "₹/quintal",
            "date": "2026-01-11",
            "priceChange": 12,
            "percentChange": 0.2,
            "lastWeekPrice": 7261
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-01-11"
        },
        "thisWeek": {
            "amount": 4.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 19.2,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 489.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-09"
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

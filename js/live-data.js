// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 9/5/2026, 6:42:41 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-09T01:12:41.774Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9404,
            "unit": "₹/quintal",
            "date": "2026-05-09",
            "priceChange": -1,
            "percentChange": 0,
            "lastWeekPrice": 9405
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5717,
            "unit": "₹/quintal",
            "date": "2026-05-09",
            "priceChange": -12,
            "percentChange": -0.2,
            "lastWeekPrice": 5729
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7148,
            "unit": "₹/quintal",
            "date": "2026-05-09",
            "priceChange": -36,
            "percentChange": -0.5,
            "lastWeekPrice": 7184
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-09"
        },
        "thisWeek": {
            "amount": 3.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 13.4,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 485.7,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-07"
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

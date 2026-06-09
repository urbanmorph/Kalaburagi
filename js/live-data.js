// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 9/6/2026, 6:51:51 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-09T01:21:51.819Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9451,
            "unit": "₹/quintal",
            "date": "2026-06-09",
            "priceChange": -30,
            "percentChange": -0.3,
            "lastWeekPrice": 9481
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5843,
            "unit": "₹/quintal",
            "date": "2026-06-09",
            "priceChange": -56,
            "percentChange": -0.9,
            "lastWeekPrice": 5899
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7204,
            "unit": "₹/quintal",
            "date": "2026-06-09",
            "priceChange": 79,
            "percentChange": 1.1,
            "lastWeekPrice": 7125
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-09"
        },
        "thisWeek": {
            "amount": 1.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 9.6,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 497.9,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-07"
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

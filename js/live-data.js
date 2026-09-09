// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 9/9/2026, 10:27:46 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-09T04:57:46.617Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9552,
            "unit": "₹/quintal",
            "date": "2026-09-09",
            "priceChange": 24,
            "percentChange": 0.3,
            "lastWeekPrice": 9528
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5872,
            "unit": "₹/quintal",
            "date": "2026-09-09",
            "priceChange": 143,
            "percentChange": 2.5,
            "lastWeekPrice": 5729
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7249,
            "unit": "₹/quintal",
            "date": "2026-09-09",
            "priceChange": -12,
            "percentChange": -0.2,
            "lastWeekPrice": 7261
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-09"
        },
        "thisWeek": {
            "amount": 1.5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 15.9,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 476.7,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-07"
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

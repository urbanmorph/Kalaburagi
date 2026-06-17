// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 17/6/2026, 7:04:47 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-17T01:34:47.262Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9449,
            "unit": "₹/quintal",
            "date": "2026-06-17",
            "priceChange": -60,
            "percentChange": -0.6,
            "lastWeekPrice": 9509
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5844,
            "unit": "₹/quintal",
            "date": "2026-06-17",
            "priceChange": 136,
            "percentChange": 2.4,
            "lastWeekPrice": 5708
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7137,
            "unit": "₹/quintal",
            "date": "2026-06-17",
            "priceChange": 24,
            "percentChange": 0.3,
            "lastWeekPrice": 7113
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-17"
        },
        "thisWeek": {
            "amount": 3.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 10.8,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 482,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-15"
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

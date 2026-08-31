// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 31/8/2026, 11:22:51 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-31T05:52:51.601Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9413,
            "unit": "₹/quintal",
            "date": "2026-08-31",
            "priceChange": -82,
            "percentChange": -0.9,
            "lastWeekPrice": 9495
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5804,
            "unit": "₹/quintal",
            "date": "2026-08-31",
            "priceChange": -52,
            "percentChange": -0.9,
            "lastWeekPrice": 5856
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7178,
            "unit": "₹/quintal",
            "date": "2026-08-31",
            "priceChange": -94,
            "percentChange": -1.3,
            "lastWeekPrice": 7272
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-31"
        },
        "thisWeek": {
            "amount": 7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 17.1,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 449.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-29"
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

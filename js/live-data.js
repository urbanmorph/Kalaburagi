// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 3/5/2026, 6:46:13 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-03T01:16:13.183Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9599,
            "unit": "₹/quintal",
            "date": "2026-05-03",
            "priceChange": 86,
            "percentChange": 0.9,
            "lastWeekPrice": 9513
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5882,
            "unit": "₹/quintal",
            "date": "2026-05-03",
            "priceChange": 74,
            "percentChange": 1.3,
            "lastWeekPrice": 5808
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7194,
            "unit": "₹/quintal",
            "date": "2026-05-03",
            "priceChange": 68,
            "percentChange": 1,
            "lastWeekPrice": 7126
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-03"
        },
        "thisWeek": {
            "amount": 5.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 5.5,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 444,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-01"
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

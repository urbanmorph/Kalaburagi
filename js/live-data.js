// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 25/4/2026, 6:32:39 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-25T01:02:39.652Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9509,
            "unit": "₹/quintal",
            "date": "2026-04-25",
            "priceChange": 10,
            "percentChange": 0.1,
            "lastWeekPrice": 9499
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5772,
            "unit": "₹/quintal",
            "date": "2026-04-25",
            "priceChange": 1,
            "percentChange": 0,
            "lastWeekPrice": 5771
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7261,
            "unit": "₹/quintal",
            "date": "2026-04-25",
            "priceChange": 156,
            "percentChange": 2.2,
            "lastWeekPrice": 7105
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-25"
        },
        "thisWeek": {
            "amount": 8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.2,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 415.2,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-23"
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

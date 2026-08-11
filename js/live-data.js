// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 11/8/2026, 8:03:31 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-11T02:33:31.043Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9444,
            "unit": "₹/quintal",
            "date": "2026-08-11",
            "priceChange": 5,
            "percentChange": 0.1,
            "lastWeekPrice": 9439
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5893,
            "unit": "₹/quintal",
            "date": "2026-08-11",
            "priceChange": 4,
            "percentChange": 0.1,
            "lastWeekPrice": 5889
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7206,
            "unit": "₹/quintal",
            "date": "2026-08-11",
            "priceChange": 45,
            "percentChange": 0.6,
            "lastWeekPrice": 7161
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 3.6,
            "unit": "mm",
            "date": "2026-08-11"
        },
        "thisWeek": {
            "amount": 5.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 17.3,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 474.7,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-09"
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

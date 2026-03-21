// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 21/3/2026, 6:21:20 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-21T00:51:20.780Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9413,
            "unit": "₹/quintal",
            "date": "2026-03-21",
            "priceChange": -97,
            "percentChange": -1,
            "lastWeekPrice": 9510
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5733,
            "unit": "₹/quintal",
            "date": "2026-03-21",
            "priceChange": -47,
            "percentChange": -0.8,
            "lastWeekPrice": 5780
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7130,
            "unit": "₹/quintal",
            "date": "2026-03-21",
            "priceChange": -124,
            "percentChange": -1.7,
            "lastWeekPrice": 7254
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-21"
        },
        "thisWeek": {
            "amount": 7.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 13.8,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 451,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-19"
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

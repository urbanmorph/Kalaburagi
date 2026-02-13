// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 13/2/2026, 6:28:25 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-13T00:58:25.716Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9491,
            "unit": "₹/quintal",
            "date": "2026-02-13",
            "priceChange": -11,
            "percentChange": -0.1,
            "lastWeekPrice": 9502
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5891,
            "unit": "₹/quintal",
            "date": "2026-02-13",
            "priceChange": 56,
            "percentChange": 1,
            "lastWeekPrice": 5835
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7266,
            "unit": "₹/quintal",
            "date": "2026-02-13",
            "priceChange": -33,
            "percentChange": -0.5,
            "lastWeekPrice": 7299
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-13"
        },
        "thisWeek": {
            "amount": 0.8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 18,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 402.9,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-11"
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

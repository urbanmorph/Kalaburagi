// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 12/2/2026, 6:25:23 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-12T00:55:23.762Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9502,
            "unit": "₹/quintal",
            "date": "2026-02-12",
            "priceChange": -42,
            "percentChange": -0.4,
            "lastWeekPrice": 9544
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5835,
            "unit": "₹/quintal",
            "date": "2026-02-12",
            "priceChange": 108,
            "percentChange": 1.9,
            "lastWeekPrice": 5727
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7299,
            "unit": "₹/quintal",
            "date": "2026-02-12",
            "priceChange": 138,
            "percentChange": 1.9,
            "lastWeekPrice": 7161
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-12"
        },
        "thisWeek": {
            "amount": 4.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 6.7,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 438.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-10"
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

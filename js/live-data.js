// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 21/2/2026, 6:21:25 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-21T00:51:25.415Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9441,
            "unit": "₹/quintal",
            "date": "2026-02-21",
            "priceChange": 7,
            "percentChange": 0.1,
            "lastWeekPrice": 9434
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5791,
            "unit": "₹/quintal",
            "date": "2026-02-21",
            "priceChange": -55,
            "percentChange": -0.9,
            "lastWeekPrice": 5846
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7233,
            "unit": "₹/quintal",
            "date": "2026-02-21",
            "priceChange": 57,
            "percentChange": 0.8,
            "lastWeekPrice": 7176
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-21"
        },
        "thisWeek": {
            "amount": 7.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 17.5,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 409.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-19"
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

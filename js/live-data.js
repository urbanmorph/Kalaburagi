// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 14/2/2026, 6:22:43 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-14T00:52:43.568Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9418,
            "unit": "₹/quintal",
            "date": "2026-02-14",
            "priceChange": -73,
            "percentChange": -0.8,
            "lastWeekPrice": 9491
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5786,
            "unit": "₹/quintal",
            "date": "2026-02-14",
            "priceChange": -105,
            "percentChange": -1.8,
            "lastWeekPrice": 5891
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7121,
            "unit": "₹/quintal",
            "date": "2026-02-14",
            "priceChange": -145,
            "percentChange": -2,
            "lastWeekPrice": 7266
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0.7,
            "unit": "mm",
            "date": "2026-02-14"
        },
        "thisWeek": {
            "amount": 7.8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 7.5,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 455,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-12"
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

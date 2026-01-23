// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 23/1/2026, 6:18:43 am
// ============================================

const liveData = {
    "lastUpdated": "2026-01-23T00:48:43.463Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9569,
            "unit": "₹/quintal",
            "date": "2026-01-23",
            "priceChange": 49,
            "percentChange": 0.5,
            "lastWeekPrice": 9520
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5743,
            "unit": "₹/quintal",
            "date": "2026-01-23",
            "priceChange": -121,
            "percentChange": -2.1,
            "lastWeekPrice": 5864
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7174,
            "unit": "₹/quintal",
            "date": "2026-01-23",
            "priceChange": 43,
            "percentChange": 0.6,
            "lastWeekPrice": 7131
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-01-23"
        },
        "thisWeek": {
            "amount": 8.5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 5,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 447.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-21"
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

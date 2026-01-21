// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 21/1/2026, 6:18:42 am
// ============================================

const liveData = {
    "lastUpdated": "2026-01-21T00:48:42.294Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9534,
            "unit": "₹/quintal",
            "date": "2026-01-21",
            "priceChange": 104,
            "percentChange": 1.1,
            "lastWeekPrice": 9430
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5875,
            "unit": "₹/quintal",
            "date": "2026-01-21",
            "priceChange": 89,
            "percentChange": 1.5,
            "lastWeekPrice": 5786
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7189,
            "unit": "₹/quintal",
            "date": "2026-01-21",
            "priceChange": -108,
            "percentChange": -1.5,
            "lastWeekPrice": 7297
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-01-21"
        },
        "thisWeek": {
            "amount": 2.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 11.3,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 464,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-19"
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

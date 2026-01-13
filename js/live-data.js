// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 13/1/2026, 6:18:32 am
// ============================================

const liveData = {
    "lastUpdated": "2026-01-13T00:48:32.961Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9535,
            "unit": "₹/quintal",
            "date": "2026-01-13",
            "priceChange": 105,
            "percentChange": 1.1,
            "lastWeekPrice": 9430
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5885,
            "unit": "₹/quintal",
            "date": "2026-01-13",
            "priceChange": 27,
            "percentChange": 0.5,
            "lastWeekPrice": 5858
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7193,
            "unit": "₹/quintal",
            "date": "2026-01-13",
            "priceChange": 41,
            "percentChange": 0.6,
            "lastWeekPrice": 7152
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 3.3,
            "unit": "mm",
            "date": "2026-01-13"
        },
        "thisWeek": {
            "amount": 4.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 10.7,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 441.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-11"
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

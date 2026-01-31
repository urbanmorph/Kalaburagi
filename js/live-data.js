// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 31/1/2026, 6:19:57 am
// ============================================

const liveData = {
    "lastUpdated": "2026-01-31T00:49:57.864Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9494,
            "unit": "₹/quintal",
            "date": "2026-01-31",
            "priceChange": -91,
            "percentChange": -0.9,
            "lastWeekPrice": 9585
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5740,
            "unit": "₹/quintal",
            "date": "2026-01-31",
            "priceChange": -57,
            "percentChange": -1,
            "lastWeekPrice": 5797
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7214,
            "unit": "₹/quintal",
            "date": "2026-01-31",
            "priceChange": -29,
            "percentChange": -0.4,
            "lastWeekPrice": 7243
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-01-31"
        },
        "thisWeek": {
            "amount": 4.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.3,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 442.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-29"
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

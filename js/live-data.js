// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 13/4/2026, 6:37:07 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-13T01:07:07.200Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9552,
            "unit": "₹/quintal",
            "date": "2026-04-13",
            "priceChange": 105,
            "percentChange": 1.1,
            "lastWeekPrice": 9447
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5743,
            "unit": "₹/quintal",
            "date": "2026-04-13",
            "priceChange": -99,
            "percentChange": -1.7,
            "lastWeekPrice": 5842
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7265,
            "unit": "₹/quintal",
            "date": "2026-04-13",
            "priceChange": 13,
            "percentChange": 0.2,
            "lastWeekPrice": 7252
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-13"
        },
        "thisWeek": {
            "amount": 2.9,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 11.1,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 416.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-11"
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

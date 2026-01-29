// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 29/1/2026, 6:22:13 am
// ============================================

const liveData = {
    "lastUpdated": "2026-01-29T00:52:13.222Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9455,
            "unit": "₹/quintal",
            "date": "2026-01-29",
            "priceChange": -42,
            "percentChange": -0.4,
            "lastWeekPrice": 9497
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5876,
            "unit": "₹/quintal",
            "date": "2026-01-29",
            "priceChange": 175,
            "percentChange": 3.1,
            "lastWeekPrice": 5701
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7202,
            "unit": "₹/quintal",
            "date": "2026-01-29",
            "priceChange": -33,
            "percentChange": -0.5,
            "lastWeekPrice": 7235
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-01-29"
        },
        "thisWeek": {
            "amount": 1.9,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 6.1,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 476,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-27"
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

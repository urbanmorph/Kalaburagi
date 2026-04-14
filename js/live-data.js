// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 14/4/2026, 6:36:22 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-14T01:06:22.516Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9584,
            "unit": "₹/quintal",
            "date": "2026-04-14",
            "priceChange": 32,
            "percentChange": 0.3,
            "lastWeekPrice": 9552
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5895,
            "unit": "₹/quintal",
            "date": "2026-04-14",
            "priceChange": 152,
            "percentChange": 2.6,
            "lastWeekPrice": 5743
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7183,
            "unit": "₹/quintal",
            "date": "2026-04-14",
            "priceChange": -82,
            "percentChange": -1.1,
            "lastWeekPrice": 7265
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-14"
        },
        "thisWeek": {
            "amount": 8.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 15.2,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 477.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-12"
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

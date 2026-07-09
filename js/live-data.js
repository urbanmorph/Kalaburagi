// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 9/7/2026, 9:58:56 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-09T04:28:56.213Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9509,
            "unit": "₹/quintal",
            "date": "2026-07-09",
            "priceChange": 51,
            "percentChange": 0.5,
            "lastWeekPrice": 9458
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5817,
            "unit": "₹/quintal",
            "date": "2026-07-09",
            "priceChange": 114,
            "percentChange": 2,
            "lastWeekPrice": 5703
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7257,
            "unit": "₹/quintal",
            "date": "2026-07-09",
            "priceChange": 2,
            "percentChange": 0,
            "lastWeekPrice": 7255
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 2.1,
            "unit": "mm",
            "date": "2026-07-09"
        },
        "thisWeek": {
            "amount": 6.9,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 7.3,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 448.2,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-07"
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

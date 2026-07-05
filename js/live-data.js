// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 5/7/2026, 10:08:09 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-05T04:38:09.463Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9561,
            "unit": "₹/quintal",
            "date": "2026-07-05",
            "priceChange": 61,
            "percentChange": 0.6,
            "lastWeekPrice": 9500
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5750,
            "unit": "₹/quintal",
            "date": "2026-07-05",
            "priceChange": 19,
            "percentChange": 0.3,
            "lastWeekPrice": 5731
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7168,
            "unit": "₹/quintal",
            "date": "2026-07-05",
            "priceChange": 42,
            "percentChange": 0.6,
            "lastWeekPrice": 7126
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 1.8,
            "unit": "mm",
            "date": "2026-07-05"
        },
        "thisWeek": {
            "amount": 7.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 10.4,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 424.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-03"
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

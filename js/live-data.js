// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 3/8/2026, 9:34:48 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-03T04:04:48.866Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9532,
            "unit": "₹/quintal",
            "date": "2026-08-03",
            "priceChange": -7,
            "percentChange": -0.1,
            "lastWeekPrice": 9539
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5788,
            "unit": "₹/quintal",
            "date": "2026-08-03",
            "priceChange": 39,
            "percentChange": 0.7,
            "lastWeekPrice": 5749
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7282,
            "unit": "₹/quintal",
            "date": "2026-08-03",
            "priceChange": 108,
            "percentChange": 1.5,
            "lastWeekPrice": 7174
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-03"
        },
        "thisWeek": {
            "amount": 1.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 11.7,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 426.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-01"
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

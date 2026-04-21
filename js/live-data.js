// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 21/4/2026, 6:36:23 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-21T01:06:23.026Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9405,
            "unit": "₹/quintal",
            "date": "2026-04-21",
            "priceChange": -57,
            "percentChange": -0.6,
            "lastWeekPrice": 9462
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5732,
            "unit": "₹/quintal",
            "date": "2026-04-21",
            "priceChange": -70,
            "percentChange": -1.2,
            "lastWeekPrice": 5802
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7291,
            "unit": "₹/quintal",
            "date": "2026-04-21",
            "priceChange": 164,
            "percentChange": 2.3,
            "lastWeekPrice": 7127
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-21"
        },
        "thisWeek": {
            "amount": 1.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 12.2,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 402.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-19"
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

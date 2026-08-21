// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 21/8/2026, 7:36:15 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-21T02:06:15.693Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9575,
            "unit": "₹/quintal",
            "date": "2026-08-21",
            "priceChange": 154,
            "percentChange": 1.6,
            "lastWeekPrice": 9421
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5836,
            "unit": "₹/quintal",
            "date": "2026-08-21",
            "priceChange": 131,
            "percentChange": 2.3,
            "lastWeekPrice": 5705
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7196,
            "unit": "₹/quintal",
            "date": "2026-08-21",
            "priceChange": -37,
            "percentChange": -0.5,
            "lastWeekPrice": 7233
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-21"
        },
        "thisWeek": {
            "amount": 8.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 19.8,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 451.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-19"
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

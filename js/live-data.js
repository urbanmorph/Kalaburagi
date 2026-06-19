// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 19/6/2026, 7:07:49 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-19T01:37:49.370Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9543,
            "unit": "₹/quintal",
            "date": "2026-06-19",
            "priceChange": 135,
            "percentChange": 1.4,
            "lastWeekPrice": 9408
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5783,
            "unit": "₹/quintal",
            "date": "2026-06-19",
            "priceChange": -81,
            "percentChange": -1.4,
            "lastWeekPrice": 5864
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7252,
            "unit": "₹/quintal",
            "date": "2026-06-19",
            "priceChange": 61,
            "percentChange": 0.8,
            "lastWeekPrice": 7191
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-19"
        },
        "thisWeek": {
            "amount": 9.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 15.8,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 417.7,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-17"
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

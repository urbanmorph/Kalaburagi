// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 11/9/2026, 10:27:42 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-11T04:57:42.050Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9439,
            "unit": "₹/quintal",
            "date": "2026-09-11",
            "priceChange": -110,
            "percentChange": -1.2,
            "lastWeekPrice": 9549
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5703,
            "unit": "₹/quintal",
            "date": "2026-09-11",
            "priceChange": -119,
            "percentChange": -2,
            "lastWeekPrice": 5822
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7235,
            "unit": "₹/quintal",
            "date": "2026-09-11",
            "priceChange": 13,
            "percentChange": 0.2,
            "lastWeekPrice": 7222
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 3.1,
            "unit": "mm",
            "date": "2026-09-11"
        },
        "thisWeek": {
            "amount": 5.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.7,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 447,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-09"
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

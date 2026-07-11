// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 11/7/2026, 9:20:36 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-11T03:50:36.947Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9460,
            "unit": "₹/quintal",
            "date": "2026-07-11",
            "priceChange": 19,
            "percentChange": 0.2,
            "lastWeekPrice": 9441
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5830,
            "unit": "₹/quintal",
            "date": "2026-07-11",
            "priceChange": -69,
            "percentChange": -1.2,
            "lastWeekPrice": 5899
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7266,
            "unit": "₹/quintal",
            "date": "2026-07-11",
            "priceChange": 11,
            "percentChange": 0.2,
            "lastWeekPrice": 7255
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-11"
        },
        "thisWeek": {
            "amount": 9.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 7.8,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 452.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-09"
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

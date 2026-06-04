// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 4/6/2026, 7:06:43 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-04T01:36:43.472Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9483,
            "unit": "₹/quintal",
            "date": "2026-06-04",
            "priceChange": 26,
            "percentChange": 0.3,
            "lastWeekPrice": 9457
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5788,
            "unit": "₹/quintal",
            "date": "2026-06-04",
            "priceChange": -52,
            "percentChange": -0.9,
            "lastWeekPrice": 5840
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7265,
            "unit": "₹/quintal",
            "date": "2026-06-04",
            "priceChange": 143,
            "percentChange": 2,
            "lastWeekPrice": 7122
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-04"
        },
        "thisWeek": {
            "amount": 1.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 17.4,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 481.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-02"
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

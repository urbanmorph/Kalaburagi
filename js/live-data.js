// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 4/9/2026, 10:23:20 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-04T04:53:20.425Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9599,
            "unit": "₹/quintal",
            "date": "2026-09-04",
            "priceChange": 23,
            "percentChange": 0.2,
            "lastWeekPrice": 9576
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5770,
            "unit": "₹/quintal",
            "date": "2026-09-04",
            "priceChange": -44,
            "percentChange": -0.8,
            "lastWeekPrice": 5814
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7221,
            "unit": "₹/quintal",
            "date": "2026-09-04",
            "priceChange": 35,
            "percentChange": 0.5,
            "lastWeekPrice": 7186
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-04"
        },
        "thisWeek": {
            "amount": 0.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 9,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 423.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-02"
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

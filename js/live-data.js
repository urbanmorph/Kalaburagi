// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 6/9/2026, 10:25:49 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-06T04:55:49.427Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9428,
            "unit": "₹/quintal",
            "date": "2026-09-06",
            "priceChange": -59,
            "percentChange": -0.6,
            "lastWeekPrice": 9487
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5862,
            "unit": "₹/quintal",
            "date": "2026-09-06",
            "priceChange": 160,
            "percentChange": 2.8,
            "lastWeekPrice": 5702
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7168,
            "unit": "₹/quintal",
            "date": "2026-09-06",
            "priceChange": -61,
            "percentChange": -0.8,
            "lastWeekPrice": 7229
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 1.9,
            "unit": "mm",
            "date": "2026-09-06"
        },
        "thisWeek": {
            "amount": 8.8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 6.5,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 421.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-04"
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

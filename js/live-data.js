// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 6/7/2026, 10:20:05 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-06T04:50:05.696Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9452,
            "unit": "₹/quintal",
            "date": "2026-07-06",
            "priceChange": -109,
            "percentChange": -1.1,
            "lastWeekPrice": 9561
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5713,
            "unit": "₹/quintal",
            "date": "2026-07-06",
            "priceChange": -37,
            "percentChange": -0.6,
            "lastWeekPrice": 5750
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7113,
            "unit": "₹/quintal",
            "date": "2026-07-06",
            "priceChange": -55,
            "percentChange": -0.8,
            "lastWeekPrice": 7168
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 3.5,
            "unit": "mm",
            "date": "2026-07-06"
        },
        "thisWeek": {
            "amount": 7.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 8.8,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 432,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-04"
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

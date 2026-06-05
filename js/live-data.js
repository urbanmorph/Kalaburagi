// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 5/6/2026, 6:57:03 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-05T01:27:03.264Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9461,
            "unit": "₹/quintal",
            "date": "2026-06-05",
            "priceChange": -22,
            "percentChange": -0.2,
            "lastWeekPrice": 9483
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5794,
            "unit": "₹/quintal",
            "date": "2026-06-05",
            "priceChange": 6,
            "percentChange": 0.1,
            "lastWeekPrice": 5788
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7179,
            "unit": "₹/quintal",
            "date": "2026-06-05",
            "priceChange": -86,
            "percentChange": -1.2,
            "lastWeekPrice": 7265
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-05"
        },
        "thisWeek": {
            "amount": 2.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 15.2,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 414.7,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-03"
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

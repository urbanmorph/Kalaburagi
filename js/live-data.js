// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 27/4/2026, 6:40:33 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-27T01:10:33.207Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9585,
            "unit": "₹/quintal",
            "date": "2026-04-27",
            "priceChange": 91,
            "percentChange": 1,
            "lastWeekPrice": 9494
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5723,
            "unit": "₹/quintal",
            "date": "2026-04-27",
            "priceChange": -102,
            "percentChange": -1.8,
            "lastWeekPrice": 5825
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7153,
            "unit": "₹/quintal",
            "date": "2026-04-27",
            "priceChange": 3,
            "percentChange": 0,
            "lastWeekPrice": 7150
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-27"
        },
        "thisWeek": {
            "amount": 5.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 9,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 497,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-25"
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

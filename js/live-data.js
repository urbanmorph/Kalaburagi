// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 26/4/2026, 6:40:15 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-26T01:10:15.415Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9494,
            "unit": "₹/quintal",
            "date": "2026-04-26",
            "priceChange": -15,
            "percentChange": -0.2,
            "lastWeekPrice": 9509
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5825,
            "unit": "₹/quintal",
            "date": "2026-04-26",
            "priceChange": 53,
            "percentChange": 0.9,
            "lastWeekPrice": 5772
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7150,
            "unit": "₹/quintal",
            "date": "2026-04-26",
            "priceChange": -111,
            "percentChange": -1.5,
            "lastWeekPrice": 7261
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-26"
        },
        "thisWeek": {
            "amount": 3.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 11,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 436.2,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-24"
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

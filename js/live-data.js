// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 31/7/2026, 9:28:58 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-31T03:58:58.510Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9576,
            "unit": "₹/quintal",
            "date": "2026-07-31",
            "priceChange": 108,
            "percentChange": 1.1,
            "lastWeekPrice": 9468
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5887,
            "unit": "₹/quintal",
            "date": "2026-07-31",
            "priceChange": 63,
            "percentChange": 1.1,
            "lastWeekPrice": 5824
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7200,
            "unit": "₹/quintal",
            "date": "2026-07-31",
            "priceChange": 1,
            "percentChange": 0,
            "lastWeekPrice": 7199
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-31"
        },
        "thisWeek": {
            "amount": 0.8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.4,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 430.7,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-29"
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

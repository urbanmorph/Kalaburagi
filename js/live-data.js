// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 26/2/2026, 6:22:01 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-26T00:52:01.480Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9499,
            "unit": "₹/quintal",
            "date": "2026-02-26",
            "priceChange": 68,
            "percentChange": 0.7,
            "lastWeekPrice": 9431
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5793,
            "unit": "₹/quintal",
            "date": "2026-02-26",
            "priceChange": 77,
            "percentChange": 1.3,
            "lastWeekPrice": 5716
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7197,
            "unit": "₹/quintal",
            "date": "2026-02-26",
            "priceChange": -97,
            "percentChange": -1.3,
            "lastWeekPrice": 7294
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-26"
        },
        "thisWeek": {
            "amount": 2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 7.2,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 422,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-24"
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

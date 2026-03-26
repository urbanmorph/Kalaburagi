// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 26/3/2026, 6:29:26 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-26T00:59:26.735Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9515,
            "unit": "₹/quintal",
            "date": "2026-03-26",
            "priceChange": 35,
            "percentChange": 0.4,
            "lastWeekPrice": 9480
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5833,
            "unit": "₹/quintal",
            "date": "2026-03-26",
            "priceChange": 31,
            "percentChange": 0.5,
            "lastWeekPrice": 5802
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7105,
            "unit": "₹/quintal",
            "date": "2026-03-26",
            "priceChange": -183,
            "percentChange": -2.5,
            "lastWeekPrice": 7288
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-26"
        },
        "thisWeek": {
            "amount": 5.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.6,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 419.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-24"
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

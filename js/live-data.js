// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 27/3/2026, 6:29:39 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-27T00:59:39.717Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9543,
            "unit": "₹/quintal",
            "date": "2026-03-27",
            "priceChange": 28,
            "percentChange": 0.3,
            "lastWeekPrice": 9515
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5737,
            "unit": "₹/quintal",
            "date": "2026-03-27",
            "priceChange": -96,
            "percentChange": -1.6,
            "lastWeekPrice": 5833
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7281,
            "unit": "₹/quintal",
            "date": "2026-03-27",
            "priceChange": 176,
            "percentChange": 2.5,
            "lastWeekPrice": 7105
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-27"
        },
        "thisWeek": {
            "amount": 0.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.5,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 475.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-25"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 4/4/2026, 6:25:28 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-04T00:55:28.989Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9402,
            "unit": "₹/quintal",
            "date": "2026-04-04",
            "priceChange": -114,
            "percentChange": -1.2,
            "lastWeekPrice": 9516
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5881,
            "unit": "₹/quintal",
            "date": "2026-04-04",
            "priceChange": 7,
            "percentChange": 0.1,
            "lastWeekPrice": 5874
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7224,
            "unit": "₹/quintal",
            "date": "2026-04-04",
            "priceChange": -57,
            "percentChange": -0.8,
            "lastWeekPrice": 7281
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-04"
        },
        "thisWeek": {
            "amount": 9.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 13.8,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 448.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-02"
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

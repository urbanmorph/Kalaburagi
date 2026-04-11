// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 11/4/2026, 6:28:45 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-11T00:58:45.848Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9554,
            "unit": "₹/quintal",
            "date": "2026-04-11",
            "priceChange": -4,
            "percentChange": 0,
            "lastWeekPrice": 9558
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5767,
            "unit": "₹/quintal",
            "date": "2026-04-11",
            "priceChange": -75,
            "percentChange": -1.3,
            "lastWeekPrice": 5842
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7161,
            "unit": "₹/quintal",
            "date": "2026-04-11",
            "priceChange": -1,
            "percentChange": 0,
            "lastWeekPrice": 7162
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 2.8,
            "unit": "mm",
            "date": "2026-04-11"
        },
        "thisWeek": {
            "amount": 11.9,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 12.4,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 438.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-09"
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

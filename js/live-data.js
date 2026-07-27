// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 27/7/2026, 9:41:30 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-27T04:11:30.607Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9532,
            "unit": "₹/quintal",
            "date": "2026-07-27",
            "priceChange": 7,
            "percentChange": 0.1,
            "lastWeekPrice": 9525
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5706,
            "unit": "₹/quintal",
            "date": "2026-07-27",
            "priceChange": -56,
            "percentChange": -1,
            "lastWeekPrice": 5762
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7146,
            "unit": "₹/quintal",
            "date": "2026-07-27",
            "priceChange": 31,
            "percentChange": 0.4,
            "lastWeekPrice": 7115
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-27"
        },
        "thisWeek": {
            "amount": 8.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 9.5,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 492.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-25"
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

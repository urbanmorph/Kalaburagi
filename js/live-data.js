// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 2/9/2026, 10:22:35 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-02T04:52:35.274Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9417,
            "unit": "₹/quintal",
            "date": "2026-09-02",
            "priceChange": -183,
            "percentChange": -1.9,
            "lastWeekPrice": 9600
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5780,
            "unit": "₹/quintal",
            "date": "2026-09-02",
            "priceChange": -74,
            "percentChange": -1.3,
            "lastWeekPrice": 5854
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7116,
            "unit": "₹/quintal",
            "date": "2026-09-02",
            "priceChange": -149,
            "percentChange": -2.1,
            "lastWeekPrice": 7265
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-02"
        },
        "thisWeek": {
            "amount": 6.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 18.7,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 464,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-31"
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

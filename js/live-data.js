// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 2/8/2026, 9:32:30 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-02T04:02:30.095Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9539,
            "unit": "₹/quintal",
            "date": "2026-08-02",
            "priceChange": -55,
            "percentChange": -0.6,
            "lastWeekPrice": 9594
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5749,
            "unit": "₹/quintal",
            "date": "2026-08-02",
            "priceChange": -53,
            "percentChange": -0.9,
            "lastWeekPrice": 5802
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7174,
            "unit": "₹/quintal",
            "date": "2026-08-02",
            "priceChange": -90,
            "percentChange": -1.2,
            "lastWeekPrice": 7264
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-02"
        },
        "thisWeek": {
            "amount": 5.5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 5.6,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 466.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-31"
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

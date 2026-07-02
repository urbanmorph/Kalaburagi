// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 2/7/2026, 6:52:18 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-02T01:22:18.663Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9535,
            "unit": "₹/quintal",
            "date": "2026-07-02",
            "priceChange": -41,
            "percentChange": -0.4,
            "lastWeekPrice": 9576
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5882,
            "unit": "₹/quintal",
            "date": "2026-07-02",
            "priceChange": 14,
            "percentChange": 0.2,
            "lastWeekPrice": 5868
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7219,
            "unit": "₹/quintal",
            "date": "2026-07-02",
            "priceChange": 72,
            "percentChange": 1,
            "lastWeekPrice": 7147
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0.9,
            "unit": "mm",
            "date": "2026-07-02"
        },
        "thisWeek": {
            "amount": 2.5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 14,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 443.7,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-30"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 16/6/2026, 7:06:07 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-16T01:36:07.951Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9509,
            "unit": "₹/quintal",
            "date": "2026-06-16",
            "priceChange": 5,
            "percentChange": 0.1,
            "lastWeekPrice": 9504
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5708,
            "unit": "₹/quintal",
            "date": "2026-06-16",
            "priceChange": -9,
            "percentChange": -0.2,
            "lastWeekPrice": 5717
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7113,
            "unit": "₹/quintal",
            "date": "2026-06-16",
            "priceChange": -50,
            "percentChange": -0.7,
            "lastWeekPrice": 7163
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-16"
        },
        "thisWeek": {
            "amount": 2.9,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 19.6,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 410.9,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-14"
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

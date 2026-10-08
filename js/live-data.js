// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 8/10/2026, 11:56:06 am
// ============================================

const liveData = {
    "lastUpdated": "2026-10-08T06:26:06.574Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9503,
            "unit": "₹/quintal",
            "date": "2026-10-08",
            "priceChange": -9,
            "percentChange": -0.1,
            "lastWeekPrice": 9512
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5831,
            "unit": "₹/quintal",
            "date": "2026-10-08",
            "priceChange": 14,
            "percentChange": 0.2,
            "lastWeekPrice": 5817
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7223,
            "unit": "₹/quintal",
            "date": "2026-10-08",
            "priceChange": 75,
            "percentChange": 1,
            "lastWeekPrice": 7148
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-10-08"
        },
        "thisWeek": {
            "amount": 2.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 18.2,
            "unit": "mm",
            "period": "October 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 418.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-10-06"
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

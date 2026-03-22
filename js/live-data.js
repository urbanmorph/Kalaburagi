// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 22/3/2026, 6:27:39 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-22T00:57:39.996Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9474,
            "unit": "₹/quintal",
            "date": "2026-03-22",
            "priceChange": 61,
            "percentChange": 0.6,
            "lastWeekPrice": 9413
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5768,
            "unit": "₹/quintal",
            "date": "2026-03-22",
            "priceChange": 35,
            "percentChange": 0.6,
            "lastWeekPrice": 5733
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7243,
            "unit": "₹/quintal",
            "date": "2026-03-22",
            "priceChange": 113,
            "percentChange": 1.6,
            "lastWeekPrice": 7130
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-22"
        },
        "thisWeek": {
            "amount": 4.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 7.7,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 446.2,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-20"
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

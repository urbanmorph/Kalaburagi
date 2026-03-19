// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 19/3/2026, 6:26:40 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-19T00:56:40.970Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9443,
            "unit": "₹/quintal",
            "date": "2026-03-19",
            "priceChange": -61,
            "percentChange": -0.6,
            "lastWeekPrice": 9504
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5706,
            "unit": "₹/quintal",
            "date": "2026-03-19",
            "priceChange": -177,
            "percentChange": -3,
            "lastWeekPrice": 5883
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7263,
            "unit": "₹/quintal",
            "date": "2026-03-19",
            "priceChange": -2,
            "percentChange": 0,
            "lastWeekPrice": 7265
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-19"
        },
        "thisWeek": {
            "amount": 5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 7.9,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 437.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-17"
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

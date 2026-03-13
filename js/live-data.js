// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 13/3/2026, 6:23:25 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-13T00:53:25.450Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9559,
            "unit": "₹/quintal",
            "date": "2026-03-13",
            "priceChange": 142,
            "percentChange": 1.5,
            "lastWeekPrice": 9417
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5850,
            "unit": "₹/quintal",
            "date": "2026-03-13",
            "priceChange": -33,
            "percentChange": -0.6,
            "lastWeekPrice": 5883
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7263,
            "unit": "₹/quintal",
            "date": "2026-03-13",
            "priceChange": -23,
            "percentChange": -0.3,
            "lastWeekPrice": 7286
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 2,
            "unit": "mm",
            "date": "2026-03-13"
        },
        "thisWeek": {
            "amount": 9,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 10.8,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 452.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-11"
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

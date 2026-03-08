// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 8/3/2026, 6:25:08 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-08T00:55:08.103Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9419,
            "unit": "₹/quintal",
            "date": "2026-03-08",
            "priceChange": -100,
            "percentChange": -1.1,
            "lastWeekPrice": 9519
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5863,
            "unit": "₹/quintal",
            "date": "2026-03-08",
            "priceChange": -10,
            "percentChange": -0.2,
            "lastWeekPrice": 5873
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7254,
            "unit": "₹/quintal",
            "date": "2026-03-08",
            "priceChange": 135,
            "percentChange": 1.9,
            "lastWeekPrice": 7119
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-08"
        },
        "thisWeek": {
            "amount": 8.5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 18.7,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 401.2,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-06"
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

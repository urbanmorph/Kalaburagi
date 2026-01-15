// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 15/1/2026, 6:18:36 am
// ============================================

const liveData = {
    "lastUpdated": "2026-01-15T00:48:36.671Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9559,
            "unit": "₹/quintal",
            "date": "2026-01-15",
            "priceChange": 91,
            "percentChange": 1,
            "lastWeekPrice": 9468
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5826,
            "unit": "₹/quintal",
            "date": "2026-01-15",
            "priceChange": -65,
            "percentChange": -1.1,
            "lastWeekPrice": 5891
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7104,
            "unit": "₹/quintal",
            "date": "2026-01-15",
            "priceChange": -171,
            "percentChange": -2.4,
            "lastWeekPrice": 7275
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-01-15"
        },
        "thisWeek": {
            "amount": 4.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 15.5,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 450.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-13"
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

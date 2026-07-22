// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 22/7/2026, 9:25:45 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-22T03:55:45.909Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9502,
            "unit": "₹/quintal",
            "date": "2026-07-22",
            "priceChange": 2,
            "percentChange": 0,
            "lastWeekPrice": 9500
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5710,
            "unit": "₹/quintal",
            "date": "2026-07-22",
            "priceChange": -111,
            "percentChange": -1.9,
            "lastWeekPrice": 5821
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7197,
            "unit": "₹/quintal",
            "date": "2026-07-22",
            "priceChange": 68,
            "percentChange": 1,
            "lastWeekPrice": 7129
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-22"
        },
        "thisWeek": {
            "amount": 7.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 15,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 473.7,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-20"
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

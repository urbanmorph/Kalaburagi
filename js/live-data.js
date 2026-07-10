// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 10/7/2026, 10:01:32 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-10T04:31:32.000Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9441,
            "unit": "₹/quintal",
            "date": "2026-07-10",
            "priceChange": -68,
            "percentChange": -0.7,
            "lastWeekPrice": 9509
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5899,
            "unit": "₹/quintal",
            "date": "2026-07-10",
            "priceChange": 82,
            "percentChange": 1.4,
            "lastWeekPrice": 5817
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7255,
            "unit": "₹/quintal",
            "date": "2026-07-10",
            "priceChange": -2,
            "percentChange": 0,
            "lastWeekPrice": 7257
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 1.3,
            "unit": "mm",
            "date": "2026-07-10"
        },
        "thisWeek": {
            "amount": 1.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 15.2,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 480.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-08"
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

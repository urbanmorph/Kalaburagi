// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 27/5/2026, 6:55:41 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-27T01:25:41.212Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9449,
            "unit": "₹/quintal",
            "date": "2026-05-27",
            "priceChange": -55,
            "percentChange": -0.6,
            "lastWeekPrice": 9504
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5848,
            "unit": "₹/quintal",
            "date": "2026-05-27",
            "priceChange": -35,
            "percentChange": -0.6,
            "lastWeekPrice": 5883
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7243,
            "unit": "₹/quintal",
            "date": "2026-05-27",
            "priceChange": -43,
            "percentChange": -0.6,
            "lastWeekPrice": 7286
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-27"
        },
        "thisWeek": {
            "amount": 0.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 11.5,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 491.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-25"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 12/7/2026, 9:35:40 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-12T04:05:40.341Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9479,
            "unit": "₹/quintal",
            "date": "2026-07-12",
            "priceChange": 19,
            "percentChange": 0.2,
            "lastWeekPrice": 9460
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5834,
            "unit": "₹/quintal",
            "date": "2026-07-12",
            "priceChange": 4,
            "percentChange": 0.1,
            "lastWeekPrice": 5830
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7106,
            "unit": "₹/quintal",
            "date": "2026-07-12",
            "priceChange": -160,
            "percentChange": -2.2,
            "lastWeekPrice": 7266
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-12"
        },
        "thisWeek": {
            "amount": 3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 8.2,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 431.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-10"
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

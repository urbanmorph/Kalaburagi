// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 18/7/2026, 9:10:36 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-18T03:40:36.378Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9514,
            "unit": "₹/quintal",
            "date": "2026-07-18",
            "priceChange": 8,
            "percentChange": 0.1,
            "lastWeekPrice": 9506
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5880,
            "unit": "₹/quintal",
            "date": "2026-07-18",
            "priceChange": 103,
            "percentChange": 1.8,
            "lastWeekPrice": 5777
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7206,
            "unit": "₹/quintal",
            "date": "2026-07-18",
            "priceChange": -25,
            "percentChange": -0.3,
            "lastWeekPrice": 7231
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-18"
        },
        "thisWeek": {
            "amount": 1.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 6.5,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 457.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-16"
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

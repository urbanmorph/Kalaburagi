// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 17/4/2026, 6:36:14 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-17T01:06:14.275Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9521,
            "unit": "₹/quintal",
            "date": "2026-04-17",
            "priceChange": 40,
            "percentChange": 0.4,
            "lastWeekPrice": 9481
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5749,
            "unit": "₹/quintal",
            "date": "2026-04-17",
            "priceChange": 29,
            "percentChange": 0.5,
            "lastWeekPrice": 5720
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7135,
            "unit": "₹/quintal",
            "date": "2026-04-17",
            "priceChange": -150,
            "percentChange": -2.1,
            "lastWeekPrice": 7285
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-17"
        },
        "thisWeek": {
            "amount": 0.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 19.4,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 419.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-15"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 18/1/2026, 6:19:00 am
// ============================================

const liveData = {
    "lastUpdated": "2026-01-18T00:49:00.288Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9536,
            "unit": "₹/quintal",
            "date": "2026-01-18",
            "priceChange": -60,
            "percentChange": -0.6,
            "lastWeekPrice": 9596
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5830,
            "unit": "₹/quintal",
            "date": "2026-01-18",
            "priceChange": -4,
            "percentChange": -0.1,
            "lastWeekPrice": 5834
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7179,
            "unit": "₹/quintal",
            "date": "2026-01-18",
            "priceChange": -113,
            "percentChange": -1.5,
            "lastWeekPrice": 7292
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-01-18"
        },
        "thisWeek": {
            "amount": 7.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 5.1,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 462.9,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-16"
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

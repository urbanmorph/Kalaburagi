// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 17/1/2026, 6:18:33 am
// ============================================

const liveData = {
    "lastUpdated": "2026-01-17T00:48:33.188Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9596,
            "unit": "₹/quintal",
            "date": "2026-01-17",
            "priceChange": 99,
            "percentChange": 1,
            "lastWeekPrice": 9497
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5834,
            "unit": "₹/quintal",
            "date": "2026-01-17",
            "priceChange": -8,
            "percentChange": -0.1,
            "lastWeekPrice": 5842
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7292,
            "unit": "₹/quintal",
            "date": "2026-01-17",
            "priceChange": 20,
            "percentChange": 0.3,
            "lastWeekPrice": 7272
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-01-17"
        },
        "thisWeek": {
            "amount": 9.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 6.5,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 403,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-15"
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

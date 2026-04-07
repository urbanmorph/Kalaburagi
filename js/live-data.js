// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 7/4/2026, 6:30:49 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-07T01:00:49.391Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9539,
            "unit": "₹/quintal",
            "date": "2026-04-07",
            "priceChange": 5,
            "percentChange": 0.1,
            "lastWeekPrice": 9534
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5811,
            "unit": "₹/quintal",
            "date": "2026-04-07",
            "priceChange": 93,
            "percentChange": 1.6,
            "lastWeekPrice": 5718
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7231,
            "unit": "₹/quintal",
            "date": "2026-04-07",
            "priceChange": 10,
            "percentChange": 0.1,
            "lastWeekPrice": 7221
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-07"
        },
        "thisWeek": {
            "amount": 3.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.7,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 421.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-05"
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

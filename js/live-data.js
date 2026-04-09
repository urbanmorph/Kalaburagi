// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 9/4/2026, 6:26:05 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-09T00:56:05.514Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9518,
            "unit": "₹/quintal",
            "date": "2026-04-09",
            "priceChange": -13,
            "percentChange": -0.1,
            "lastWeekPrice": 9531
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5857,
            "unit": "₹/quintal",
            "date": "2026-04-09",
            "priceChange": 74,
            "percentChange": 1.3,
            "lastWeekPrice": 5783
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7207,
            "unit": "₹/quintal",
            "date": "2026-04-09",
            "priceChange": 80,
            "percentChange": 1.1,
            "lastWeekPrice": 7127
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-09"
        },
        "thisWeek": {
            "amount": 9.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 17.3,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 402.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-07"
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

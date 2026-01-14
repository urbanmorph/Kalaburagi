// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 14/1/2026, 6:18:59 am
// ============================================

const liveData = {
    "lastUpdated": "2026-01-14T00:48:59.116Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9468,
            "unit": "₹/quintal",
            "date": "2026-01-14",
            "priceChange": -67,
            "percentChange": -0.7,
            "lastWeekPrice": 9535
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5891,
            "unit": "₹/quintal",
            "date": "2026-01-14",
            "priceChange": 6,
            "percentChange": 0.1,
            "lastWeekPrice": 5885
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7275,
            "unit": "₹/quintal",
            "date": "2026-01-14",
            "priceChange": 82,
            "percentChange": 1.1,
            "lastWeekPrice": 7193
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 1.2,
            "unit": "mm",
            "date": "2026-01-14"
        },
        "thisWeek": {
            "amount": 6.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 13.8,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 452.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-12"
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

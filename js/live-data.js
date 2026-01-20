// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 20/1/2026, 6:18:38 am
// ============================================

const liveData = {
    "lastUpdated": "2026-01-20T00:48:38.868Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9430,
            "unit": "₹/quintal",
            "date": "2026-01-20",
            "priceChange": -113,
            "percentChange": -1.2,
            "lastWeekPrice": 9543
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5786,
            "unit": "₹/quintal",
            "date": "2026-01-20",
            "priceChange": -73,
            "percentChange": -1.2,
            "lastWeekPrice": 5859
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7297,
            "unit": "₹/quintal",
            "date": "2026-01-20",
            "priceChange": 10,
            "percentChange": 0.1,
            "lastWeekPrice": 7287
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-01-20"
        },
        "thisWeek": {
            "amount": 5.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 17.1,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 467.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-18"
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

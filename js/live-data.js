// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 28/3/2026, 6:25:14 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-28T00:55:14.833Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9506,
            "unit": "₹/quintal",
            "date": "2026-03-28",
            "priceChange": -37,
            "percentChange": -0.4,
            "lastWeekPrice": 9543
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5837,
            "unit": "₹/quintal",
            "date": "2026-03-28",
            "priceChange": 100,
            "percentChange": 1.7,
            "lastWeekPrice": 5737
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7106,
            "unit": "₹/quintal",
            "date": "2026-03-28",
            "priceChange": -175,
            "percentChange": -2.4,
            "lastWeekPrice": 7281
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-28"
        },
        "thisWeek": {
            "amount": 9.9,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.7,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 481,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-26"
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

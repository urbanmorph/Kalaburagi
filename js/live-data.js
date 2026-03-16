// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 16/3/2026, 6:31:24 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-16T01:01:24.961Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9555,
            "unit": "₹/quintal",
            "date": "2026-03-16",
            "priceChange": 36,
            "percentChange": 0.4,
            "lastWeekPrice": 9519
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5781,
            "unit": "₹/quintal",
            "date": "2026-03-16",
            "priceChange": -87,
            "percentChange": -1.5,
            "lastWeekPrice": 5868
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7294,
            "unit": "₹/quintal",
            "date": "2026-03-16",
            "priceChange": 110,
            "percentChange": 1.5,
            "lastWeekPrice": 7184
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-16"
        },
        "thisWeek": {
            "amount": 2.5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 10.3,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 449.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-14"
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

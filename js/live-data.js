// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 10/2/2026, 6:31:48 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-10T01:01:48.482Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9552,
            "unit": "₹/quintal",
            "date": "2026-02-10",
            "priceChange": 118,
            "percentChange": 1.3,
            "lastWeekPrice": 9434
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5737,
            "unit": "₹/quintal",
            "date": "2026-02-10",
            "priceChange": -87,
            "percentChange": -1.5,
            "lastWeekPrice": 5824
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7220,
            "unit": "₹/quintal",
            "date": "2026-02-10",
            "priceChange": -30,
            "percentChange": -0.4,
            "lastWeekPrice": 7250
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-10"
        },
        "thisWeek": {
            "amount": 0.5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 7.8,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 490.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-08"
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

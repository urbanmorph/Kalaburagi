// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 19/8/2026, 7:28:28 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-19T01:58:28.091Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9592,
            "unit": "₹/quintal",
            "date": "2026-08-19",
            "priceChange": 27,
            "percentChange": 0.3,
            "lastWeekPrice": 9565
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5781,
            "unit": "₹/quintal",
            "date": "2026-08-19",
            "priceChange": -72,
            "percentChange": -1.2,
            "lastWeekPrice": 5853
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7297,
            "unit": "₹/quintal",
            "date": "2026-08-19",
            "priceChange": 143,
            "percentChange": 2,
            "lastWeekPrice": 7154
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-19"
        },
        "thisWeek": {
            "amount": 3.9,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 15.7,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 442.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-17"
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

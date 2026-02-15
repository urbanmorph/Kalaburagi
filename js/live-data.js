// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 15/2/2026, 6:28:29 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-15T00:58:29.102Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9436,
            "unit": "₹/quintal",
            "date": "2026-02-15",
            "priceChange": 18,
            "percentChange": 0.2,
            "lastWeekPrice": 9418
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5754,
            "unit": "₹/quintal",
            "date": "2026-02-15",
            "priceChange": -32,
            "percentChange": -0.6,
            "lastWeekPrice": 5786
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7134,
            "unit": "₹/quintal",
            "date": "2026-02-15",
            "priceChange": 13,
            "percentChange": 0.2,
            "lastWeekPrice": 7121
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-15"
        },
        "thisWeek": {
            "amount": 4.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 11,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 486.9,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-13"
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

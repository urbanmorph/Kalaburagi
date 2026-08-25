// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 25/8/2026, 7:28:30 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-25T01:58:30.563Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9586,
            "unit": "₹/quintal",
            "date": "2026-08-25",
            "priceChange": 79,
            "percentChange": 0.8,
            "lastWeekPrice": 9507
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5743,
            "unit": "₹/quintal",
            "date": "2026-08-25",
            "priceChange": 1,
            "percentChange": 0,
            "lastWeekPrice": 5742
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7144,
            "unit": "₹/quintal",
            "date": "2026-08-25",
            "priceChange": 24,
            "percentChange": 0.3,
            "lastWeekPrice": 7120
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-25"
        },
        "thisWeek": {
            "amount": 7.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 18.3,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 479.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-23"
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

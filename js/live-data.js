// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 26/8/2026, 7:37:25 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-26T02:07:25.077Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9453,
            "unit": "₹/quintal",
            "date": "2026-08-26",
            "priceChange": -133,
            "percentChange": -1.4,
            "lastWeekPrice": 9586
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5774,
            "unit": "₹/quintal",
            "date": "2026-08-26",
            "priceChange": 31,
            "percentChange": 0.5,
            "lastWeekPrice": 5743
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7248,
            "unit": "₹/quintal",
            "date": "2026-08-26",
            "priceChange": 104,
            "percentChange": 1.5,
            "lastWeekPrice": 7144
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-26"
        },
        "thisWeek": {
            "amount": 4.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 10.5,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 465.9,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-24"
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

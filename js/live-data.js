// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 17/8/2026, 7:30:38 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-17T02:00:38.049Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9565,
            "unit": "₹/quintal",
            "date": "2026-08-17",
            "priceChange": 127,
            "percentChange": 1.3,
            "lastWeekPrice": 9438
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5769,
            "unit": "₹/quintal",
            "date": "2026-08-17",
            "priceChange": -57,
            "percentChange": -1,
            "lastWeekPrice": 5826
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7219,
            "unit": "₹/quintal",
            "date": "2026-08-17",
            "priceChange": 99,
            "percentChange": 1.4,
            "lastWeekPrice": 7120
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-17"
        },
        "thisWeek": {
            "amount": 3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 18.9,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 497.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-15"
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

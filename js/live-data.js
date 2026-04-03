// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 3/4/2026, 6:30:02 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-03T01:00:02.594Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9516,
            "unit": "₹/quintal",
            "date": "2026-04-03",
            "priceChange": -38,
            "percentChange": -0.4,
            "lastWeekPrice": 9554
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5874,
            "unit": "₹/quintal",
            "date": "2026-04-03",
            "priceChange": 161,
            "percentChange": 2.8,
            "lastWeekPrice": 5713
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7281,
            "unit": "₹/quintal",
            "date": "2026-04-03",
            "priceChange": 27,
            "percentChange": 0.4,
            "lastWeekPrice": 7254
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-03"
        },
        "thisWeek": {
            "amount": 7.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 5.2,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 477.2,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-01"
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

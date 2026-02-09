// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 9/2/2026, 6:26:44 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-09T00:56:44.791Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9434,
            "unit": "₹/quintal",
            "date": "2026-02-09",
            "priceChange": -77,
            "percentChange": -0.8,
            "lastWeekPrice": 9511
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5824,
            "unit": "₹/quintal",
            "date": "2026-02-09",
            "priceChange": 9,
            "percentChange": 0.2,
            "lastWeekPrice": 5815
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7250,
            "unit": "₹/quintal",
            "date": "2026-02-09",
            "priceChange": -41,
            "percentChange": -0.6,
            "lastWeekPrice": 7291
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 2.6,
            "unit": "mm",
            "date": "2026-02-09"
        },
        "thisWeek": {
            "amount": 4.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 13.7,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 424.7,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-07"
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

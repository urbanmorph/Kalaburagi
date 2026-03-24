// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 24/3/2026, 6:21:23 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-24T00:51:23.407Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9494,
            "unit": "₹/quintal",
            "date": "2026-03-24",
            "priceChange": -83,
            "percentChange": -0.9,
            "lastWeekPrice": 9577
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5717,
            "unit": "₹/quintal",
            "date": "2026-03-24",
            "priceChange": -80,
            "percentChange": -1.4,
            "lastWeekPrice": 5797
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7229,
            "unit": "₹/quintal",
            "date": "2026-03-24",
            "priceChange": -33,
            "percentChange": -0.5,
            "lastWeekPrice": 7262
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-24"
        },
        "thisWeek": {
            "amount": 2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 14,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 418.9,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-22"
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

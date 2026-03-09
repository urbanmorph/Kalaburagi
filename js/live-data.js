// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 9/3/2026, 6:25:09 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-09T00:55:09.762Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9462,
            "unit": "₹/quintal",
            "date": "2026-03-09",
            "priceChange": 43,
            "percentChange": 0.5,
            "lastWeekPrice": 9419
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5817,
            "unit": "₹/quintal",
            "date": "2026-03-09",
            "priceChange": -46,
            "percentChange": -0.8,
            "lastWeekPrice": 5863
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7127,
            "unit": "₹/quintal",
            "date": "2026-03-09",
            "priceChange": -127,
            "percentChange": -1.8,
            "lastWeekPrice": 7254
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-09"
        },
        "thisWeek": {
            "amount": 5.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 15.6,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 490.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-07"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 6/2/2026, 6:21:43 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-06T00:51:43.243Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9436,
            "unit": "₹/quintal",
            "date": "2026-02-06",
            "priceChange": -12,
            "percentChange": -0.1,
            "lastWeekPrice": 9448
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5722,
            "unit": "₹/quintal",
            "date": "2026-02-06",
            "priceChange": -96,
            "percentChange": -1.7,
            "lastWeekPrice": 5818
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7116,
            "unit": "₹/quintal",
            "date": "2026-02-06",
            "priceChange": -22,
            "percentChange": -0.3,
            "lastWeekPrice": 7138
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-06"
        },
        "thisWeek": {
            "amount": 2.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 7.3,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 400.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-04"
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

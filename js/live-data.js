// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 7/2/2026, 6:21:47 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-07T00:51:47.175Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9599,
            "unit": "₹/quintal",
            "date": "2026-02-07",
            "priceChange": 163,
            "percentChange": 1.7,
            "lastWeekPrice": 9436
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5774,
            "unit": "₹/quintal",
            "date": "2026-02-07",
            "priceChange": 52,
            "percentChange": 0.9,
            "lastWeekPrice": 5722
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7171,
            "unit": "₹/quintal",
            "date": "2026-02-07",
            "priceChange": 55,
            "percentChange": 0.8,
            "lastWeekPrice": 7116
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-07"
        },
        "thisWeek": {
            "amount": 4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 6.2,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 417.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-05"
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

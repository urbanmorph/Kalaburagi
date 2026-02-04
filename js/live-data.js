// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 4/2/2026, 6:20:40 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-04T00:50:40.918Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9453,
            "unit": "₹/quintal",
            "date": "2026-02-04",
            "priceChange": -88,
            "percentChange": -0.9,
            "lastWeekPrice": 9541
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5708,
            "unit": "₹/quintal",
            "date": "2026-02-04",
            "priceChange": -177,
            "percentChange": -3,
            "lastWeekPrice": 5885
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7137,
            "unit": "₹/quintal",
            "date": "2026-02-04",
            "priceChange": -67,
            "percentChange": -0.9,
            "lastWeekPrice": 7204
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 2,
            "unit": "mm",
            "date": "2026-02-04"
        },
        "thisWeek": {
            "amount": 4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.6,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 495.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-02"
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

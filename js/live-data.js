// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 17/2/2026, 6:25:00 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-17T00:55:00.915Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9425,
            "unit": "₹/quintal",
            "date": "2026-02-17",
            "priceChange": -31,
            "percentChange": -0.3,
            "lastWeekPrice": 9456
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5741,
            "unit": "₹/quintal",
            "date": "2026-02-17",
            "priceChange": 16,
            "percentChange": 0.3,
            "lastWeekPrice": 5725
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7116,
            "unit": "₹/quintal",
            "date": "2026-02-17",
            "priceChange": -126,
            "percentChange": -1.7,
            "lastWeekPrice": 7242
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-17"
        },
        "thisWeek": {
            "amount": 4.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 13.3,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 412.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-15"
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

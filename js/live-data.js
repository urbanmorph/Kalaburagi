// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 22/2/2026, 6:25:20 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-22T00:55:20.323Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9445,
            "unit": "₹/quintal",
            "date": "2026-02-22",
            "priceChange": 4,
            "percentChange": 0,
            "lastWeekPrice": 9441
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5775,
            "unit": "₹/quintal",
            "date": "2026-02-22",
            "priceChange": -16,
            "percentChange": -0.3,
            "lastWeekPrice": 5791
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7139,
            "unit": "₹/quintal",
            "date": "2026-02-22",
            "priceChange": -94,
            "percentChange": -1.3,
            "lastWeekPrice": 7233
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-22"
        },
        "thisWeek": {
            "amount": 2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 7.4,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 422.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-20"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 5/2/2026, 6:24:47 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-05T00:54:47.224Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9448,
            "unit": "₹/quintal",
            "date": "2026-02-05",
            "priceChange": -5,
            "percentChange": -0.1,
            "lastWeekPrice": 9453
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5818,
            "unit": "₹/quintal",
            "date": "2026-02-05",
            "priceChange": 110,
            "percentChange": 1.9,
            "lastWeekPrice": 5708
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7138,
            "unit": "₹/quintal",
            "date": "2026-02-05",
            "priceChange": 1,
            "percentChange": 0,
            "lastWeekPrice": 7137
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-05"
        },
        "thisWeek": {
            "amount": 6.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 12.4,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 411,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-03"
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

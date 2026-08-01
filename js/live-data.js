// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 1/8/2026, 9:28:52 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-01T03:58:52.523Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9594,
            "unit": "₹/quintal",
            "date": "2026-08-01",
            "priceChange": 18,
            "percentChange": 0.2,
            "lastWeekPrice": 9576
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5802,
            "unit": "₹/quintal",
            "date": "2026-08-01",
            "priceChange": -85,
            "percentChange": -1.4,
            "lastWeekPrice": 5887
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7264,
            "unit": "₹/quintal",
            "date": "2026-08-01",
            "priceChange": 64,
            "percentChange": 0.9,
            "lastWeekPrice": 7200
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-01"
        },
        "thisWeek": {
            "amount": 2.8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 11.7,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 417.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-30"
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

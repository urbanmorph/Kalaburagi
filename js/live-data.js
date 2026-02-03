// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 3/2/2026, 6:25:22 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-03T00:55:22.390Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9541,
            "unit": "₹/quintal",
            "date": "2026-02-03",
            "priceChange": 103,
            "percentChange": 1.1,
            "lastWeekPrice": 9438
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5885,
            "unit": "₹/quintal",
            "date": "2026-02-03",
            "priceChange": 137,
            "percentChange": 2.4,
            "lastWeekPrice": 5748
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7204,
            "unit": "₹/quintal",
            "date": "2026-02-03",
            "priceChange": -61,
            "percentChange": -0.8,
            "lastWeekPrice": 7265
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-03"
        },
        "thisWeek": {
            "amount": 0.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 17.1,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 407.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-01"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 1/3/2026, 6:30:40 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-01T01:00:40.481Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9579,
            "unit": "₹/quintal",
            "date": "2026-03-01",
            "priceChange": 74,
            "percentChange": 0.8,
            "lastWeekPrice": 9505
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5802,
            "unit": "₹/quintal",
            "date": "2026-03-01",
            "priceChange": 61,
            "percentChange": 1.1,
            "lastWeekPrice": 5741
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7215,
            "unit": "₹/quintal",
            "date": "2026-03-01",
            "priceChange": 92,
            "percentChange": 1.3,
            "lastWeekPrice": 7123
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 3.7,
            "unit": "mm",
            "date": "2026-03-01"
        },
        "thisWeek": {
            "amount": 7.8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 8,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 469.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-27"
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

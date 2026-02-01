// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 1/2/2026, 6:31:37 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-01T01:01:37.706Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9422,
            "unit": "₹/quintal",
            "date": "2026-02-01",
            "priceChange": -72,
            "percentChange": -0.8,
            "lastWeekPrice": 9494
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5747,
            "unit": "₹/quintal",
            "date": "2026-02-01",
            "priceChange": 7,
            "percentChange": 0.1,
            "lastWeekPrice": 5740
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7130,
            "unit": "₹/quintal",
            "date": "2026-02-01",
            "priceChange": -84,
            "percentChange": -1.2,
            "lastWeekPrice": 7214
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-01"
        },
        "thisWeek": {
            "amount": 3.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.7,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 413.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-30"
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

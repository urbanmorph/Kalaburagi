// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 27/2/2026, 6:24:02 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-27T00:54:02.941Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9541,
            "unit": "₹/quintal",
            "date": "2026-02-27",
            "priceChange": 42,
            "percentChange": 0.4,
            "lastWeekPrice": 9499
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5770,
            "unit": "₹/quintal",
            "date": "2026-02-27",
            "priceChange": -23,
            "percentChange": -0.4,
            "lastWeekPrice": 5793
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7247,
            "unit": "₹/quintal",
            "date": "2026-02-27",
            "priceChange": 50,
            "percentChange": 0.7,
            "lastWeekPrice": 7197
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-27"
        },
        "thisWeek": {
            "amount": 6.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 19,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 488.9,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-25"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 2/3/2026, 6:24:26 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-02T00:54:26.559Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9583,
            "unit": "₹/quintal",
            "date": "2026-03-02",
            "priceChange": 4,
            "percentChange": 0,
            "lastWeekPrice": 9579
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5812,
            "unit": "₹/quintal",
            "date": "2026-03-02",
            "priceChange": 10,
            "percentChange": 0.2,
            "lastWeekPrice": 5802
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7115,
            "unit": "₹/quintal",
            "date": "2026-03-02",
            "priceChange": -100,
            "percentChange": -1.4,
            "lastWeekPrice": 7215
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-02"
        },
        "thisWeek": {
            "amount": 5.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 18.8,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 447.7,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-28"
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

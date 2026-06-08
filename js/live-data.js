// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 8/6/2026, 7:00:39 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-08T01:30:39.286Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9481,
            "unit": "₹/quintal",
            "date": "2026-06-08",
            "priceChange": -56,
            "percentChange": -0.6,
            "lastWeekPrice": 9537
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5899,
            "unit": "₹/quintal",
            "date": "2026-06-08",
            "priceChange": 180,
            "percentChange": 3.1,
            "lastWeekPrice": 5719
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7125,
            "unit": "₹/quintal",
            "date": "2026-06-08",
            "priceChange": -130,
            "percentChange": -1.8,
            "lastWeekPrice": 7255
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-08"
        },
        "thisWeek": {
            "amount": 1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 11.4,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 430,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-06"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 7/8/2026, 8:55:42 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-07T03:25:42.583Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9410,
            "unit": "₹/quintal",
            "date": "2026-08-07",
            "priceChange": -160,
            "percentChange": -1.7,
            "lastWeekPrice": 9570
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5806,
            "unit": "₹/quintal",
            "date": "2026-08-07",
            "priceChange": 25,
            "percentChange": 0.4,
            "lastWeekPrice": 5781
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7182,
            "unit": "₹/quintal",
            "date": "2026-08-07",
            "priceChange": -25,
            "percentChange": -0.3,
            "lastWeekPrice": 7207
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-07"
        },
        "thisWeek": {
            "amount": 5.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 8.6,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 496.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-05"
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

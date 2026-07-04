// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 4/7/2026, 9:39:18 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-04T04:09:18.806Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9500,
            "unit": "₹/quintal",
            "date": "2026-07-04",
            "priceChange": -39,
            "percentChange": -0.4,
            "lastWeekPrice": 9539
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5731,
            "unit": "₹/quintal",
            "date": "2026-07-04",
            "priceChange": 8,
            "percentChange": 0.1,
            "lastWeekPrice": 5723
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7126,
            "unit": "₹/quintal",
            "date": "2026-07-04",
            "priceChange": -82,
            "percentChange": -1.1,
            "lastWeekPrice": 7208
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-04"
        },
        "thisWeek": {
            "amount": 0.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 9.4,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 408.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-02"
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

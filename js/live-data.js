// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 2/10/2026, 11:28:22 am
// ============================================

const liveData = {
    "lastUpdated": "2026-10-02T05:58:22.305Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9543,
            "unit": "₹/quintal",
            "date": "2026-10-02",
            "priceChange": -9,
            "percentChange": -0.1,
            "lastWeekPrice": 9552
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5748,
            "unit": "₹/quintal",
            "date": "2026-10-02",
            "priceChange": -81,
            "percentChange": -1.4,
            "lastWeekPrice": 5829
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7252,
            "unit": "₹/quintal",
            "date": "2026-10-02",
            "priceChange": 129,
            "percentChange": 1.8,
            "lastWeekPrice": 7123
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-10-02"
        },
        "thisWeek": {
            "amount": 7.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 7.5,
            "unit": "mm",
            "period": "October 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 484.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-30"
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

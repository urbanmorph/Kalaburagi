// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 4/10/2026, 11:39:55 am
// ============================================

const liveData = {
    "lastUpdated": "2026-10-04T06:09:55.471Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9542,
            "unit": "₹/quintal",
            "date": "2026-10-04",
            "priceChange": 26,
            "percentChange": 0.3,
            "lastWeekPrice": 9516
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5783,
            "unit": "₹/quintal",
            "date": "2026-10-04",
            "priceChange": 29,
            "percentChange": 0.5,
            "lastWeekPrice": 5754
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7246,
            "unit": "₹/quintal",
            "date": "2026-10-04",
            "priceChange": -46,
            "percentChange": -0.6,
            "lastWeekPrice": 7292
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-10-04"
        },
        "thisWeek": {
            "amount": 9.5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 19,
            "unit": "mm",
            "period": "October 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 495.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-10-02"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 23/5/2026, 6:48:17 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-23T01:18:17.693Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9489,
            "unit": "₹/quintal",
            "date": "2026-05-23",
            "priceChange": -108,
            "percentChange": -1.1,
            "lastWeekPrice": 9597
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5872,
            "unit": "₹/quintal",
            "date": "2026-05-23",
            "priceChange": 80,
            "percentChange": 1.4,
            "lastWeekPrice": 5792
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7298,
            "unit": "₹/quintal",
            "date": "2026-05-23",
            "priceChange": 18,
            "percentChange": 0.2,
            "lastWeekPrice": 7280
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-23"
        },
        "thisWeek": {
            "amount": 0.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 11.5,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 417.2,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-21"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 6/6/2026, 6:51:45 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-06T01:21:45.607Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9558,
            "unit": "₹/quintal",
            "date": "2026-06-06",
            "priceChange": 97,
            "percentChange": 1,
            "lastWeekPrice": 9461
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5820,
            "unit": "₹/quintal",
            "date": "2026-06-06",
            "priceChange": 26,
            "percentChange": 0.4,
            "lastWeekPrice": 5794
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7209,
            "unit": "₹/quintal",
            "date": "2026-06-06",
            "priceChange": 30,
            "percentChange": 0.4,
            "lastWeekPrice": 7179
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-06"
        },
        "thisWeek": {
            "amount": 2.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 18,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 443.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-04"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 6/3/2026, 6:27:10 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-06T00:57:10.732Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9588,
            "unit": "₹/quintal",
            "date": "2026-03-06",
            "priceChange": 122,
            "percentChange": 1.3,
            "lastWeekPrice": 9466
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5751,
            "unit": "₹/quintal",
            "date": "2026-03-06",
            "priceChange": -60,
            "percentChange": -1,
            "lastWeekPrice": 5811
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7243,
            "unit": "₹/quintal",
            "date": "2026-03-06",
            "priceChange": 129,
            "percentChange": 1.8,
            "lastWeekPrice": 7114
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-06"
        },
        "thisWeek": {
            "amount": 4.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 13,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 488.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-04"
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

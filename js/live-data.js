// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 20/3/2026, 6:24:13 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-20T00:54:13.092Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9510,
            "unit": "₹/quintal",
            "date": "2026-03-20",
            "priceChange": 67,
            "percentChange": 0.7,
            "lastWeekPrice": 9443
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5780,
            "unit": "₹/quintal",
            "date": "2026-03-20",
            "priceChange": 74,
            "percentChange": 1.3,
            "lastWeekPrice": 5706
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7254,
            "unit": "₹/quintal",
            "date": "2026-03-20",
            "priceChange": -9,
            "percentChange": -0.1,
            "lastWeekPrice": 7263
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-20"
        },
        "thisWeek": {
            "amount": 8.5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 6,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 406,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-18"
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

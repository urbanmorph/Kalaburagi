// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 11/3/2026, 6:20:59 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-11T00:50:59.656Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9470,
            "unit": "₹/quintal",
            "date": "2026-03-11",
            "priceChange": -25,
            "percentChange": -0.3,
            "lastWeekPrice": 9495
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5727,
            "unit": "₹/quintal",
            "date": "2026-03-11",
            "priceChange": 19,
            "percentChange": 0.3,
            "lastWeekPrice": 5708
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7112,
            "unit": "₹/quintal",
            "date": "2026-03-11",
            "priceChange": -128,
            "percentChange": -1.8,
            "lastWeekPrice": 7240
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-11"
        },
        "thisWeek": {
            "amount": 7.5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 14.7,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 400.2,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-09"
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

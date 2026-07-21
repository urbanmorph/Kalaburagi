// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 21/7/2026, 9:23:59 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-21T03:53:59.510Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9500,
            "unit": "₹/quintal",
            "date": "2026-07-21",
            "priceChange": 25,
            "percentChange": 0.3,
            "lastWeekPrice": 9475
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5821,
            "unit": "₹/quintal",
            "date": "2026-07-21",
            "priceChange": 7,
            "percentChange": 0.1,
            "lastWeekPrice": 5814
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7129,
            "unit": "₹/quintal",
            "date": "2026-07-21",
            "priceChange": -73,
            "percentChange": -1,
            "lastWeekPrice": 7202
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-21"
        },
        "thisWeek": {
            "amount": 7.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 19.1,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 450.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-19"
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

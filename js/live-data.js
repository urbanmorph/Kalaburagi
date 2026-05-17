// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 17/5/2026, 6:50:53 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-17T01:20:53.813Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9430,
            "unit": "₹/quintal",
            "date": "2026-05-17",
            "priceChange": -111,
            "percentChange": -1.2,
            "lastWeekPrice": 9541
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5738,
            "unit": "₹/quintal",
            "date": "2026-05-17",
            "priceChange": 5,
            "percentChange": 0.1,
            "lastWeekPrice": 5733
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7249,
            "unit": "₹/quintal",
            "date": "2026-05-17",
            "priceChange": -38,
            "percentChange": -0.5,
            "lastWeekPrice": 7287
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-17"
        },
        "thisWeek": {
            "amount": 0.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 14.1,
            "unit": "mm",
            "period": "May 2026",
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
            "date": "2026-05-15"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 30/7/2026, 9:09:52 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-30T03:39:52.896Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9468,
            "unit": "₹/quintal",
            "date": "2026-07-30",
            "priceChange": -47,
            "percentChange": -0.5,
            "lastWeekPrice": 9515
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5824,
            "unit": "₹/quintal",
            "date": "2026-07-30",
            "priceChange": 39,
            "percentChange": 0.7,
            "lastWeekPrice": 5785
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7199,
            "unit": "₹/quintal",
            "date": "2026-07-30",
            "priceChange": 89,
            "percentChange": 1.3,
            "lastWeekPrice": 7110
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-30"
        },
        "thisWeek": {
            "amount": 8.8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.9,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 407,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-28"
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

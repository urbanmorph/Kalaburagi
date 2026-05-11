// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 11/5/2026, 6:49:30 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-11T01:19:30.514Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9417,
            "unit": "₹/quintal",
            "date": "2026-05-11",
            "priceChange": -139,
            "percentChange": -1.5,
            "lastWeekPrice": 9556
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5771,
            "unit": "₹/quintal",
            "date": "2026-05-11",
            "priceChange": 16,
            "percentChange": 0.3,
            "lastWeekPrice": 5755
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7287,
            "unit": "₹/quintal",
            "date": "2026-05-11",
            "priceChange": 174,
            "percentChange": 2.4,
            "lastWeekPrice": 7113
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-11"
        },
        "thisWeek": {
            "amount": 4.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.6,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 456.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-09"
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

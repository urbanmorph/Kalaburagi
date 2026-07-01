// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 1/7/2026, 6:59:00 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-01T01:29:00.717Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9576,
            "unit": "₹/quintal",
            "date": "2026-07-01",
            "priceChange": 139,
            "percentChange": 1.5,
            "lastWeekPrice": 9437
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5868,
            "unit": "₹/quintal",
            "date": "2026-07-01",
            "priceChange": 15,
            "percentChange": 0.3,
            "lastWeekPrice": 5853
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7147,
            "unit": "₹/quintal",
            "date": "2026-07-01",
            "priceChange": -1,
            "percentChange": 0,
            "lastWeekPrice": 7148
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 1,
            "unit": "mm",
            "date": "2026-07-01"
        },
        "thisWeek": {
            "amount": 7.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.2,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 476.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-29"
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

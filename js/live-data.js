// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 25/5/2026, 6:55:32 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-25T01:25:32.521Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9516,
            "unit": "₹/quintal",
            "date": "2026-05-25",
            "priceChange": -42,
            "percentChange": -0.4,
            "lastWeekPrice": 9558
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5827,
            "unit": "₹/quintal",
            "date": "2026-05-25",
            "priceChange": 44,
            "percentChange": 0.8,
            "lastWeekPrice": 5783
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7141,
            "unit": "₹/quintal",
            "date": "2026-05-25",
            "priceChange": -72,
            "percentChange": -1,
            "lastWeekPrice": 7213
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-25"
        },
        "thisWeek": {
            "amount": 2.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 7,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 475.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-23"
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

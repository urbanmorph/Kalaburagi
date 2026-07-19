// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 19/7/2026, 9:32:33 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-19T04:02:33.886Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9561,
            "unit": "₹/quintal",
            "date": "2026-07-19",
            "priceChange": 47,
            "percentChange": 0.5,
            "lastWeekPrice": 9514
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5865,
            "unit": "₹/quintal",
            "date": "2026-07-19",
            "priceChange": -15,
            "percentChange": -0.3,
            "lastWeekPrice": 5880
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7259,
            "unit": "₹/quintal",
            "date": "2026-07-19",
            "priceChange": 53,
            "percentChange": 0.7,
            "lastWeekPrice": 7206
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-19"
        },
        "thisWeek": {
            "amount": 6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 9.8,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 489.9,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-17"
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

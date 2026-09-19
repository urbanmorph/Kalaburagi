// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 19/9/2026, 10:20:51 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-19T04:50:51.341Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9533,
            "unit": "₹/quintal",
            "date": "2026-09-19",
            "priceChange": 61,
            "percentChange": 0.6,
            "lastWeekPrice": 9472
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5759,
            "unit": "₹/quintal",
            "date": "2026-09-19",
            "priceChange": -133,
            "percentChange": -2.3,
            "lastWeekPrice": 5892
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7164,
            "unit": "₹/quintal",
            "date": "2026-09-19",
            "priceChange": -118,
            "percentChange": -1.6,
            "lastWeekPrice": 7282
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-19"
        },
        "thisWeek": {
            "amount": 6.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 19.9,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 411.2,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-17"
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

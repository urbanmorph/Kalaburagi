// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 28/6/2026, 6:57:25 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-28T01:27:25.153Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9571,
            "unit": "₹/quintal",
            "date": "2026-06-28",
            "priceChange": 109,
            "percentChange": 1.2,
            "lastWeekPrice": 9462
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5741,
            "unit": "₹/quintal",
            "date": "2026-06-28",
            "priceChange": 32,
            "percentChange": 0.6,
            "lastWeekPrice": 5709
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7230,
            "unit": "₹/quintal",
            "date": "2026-06-28",
            "priceChange": -1,
            "percentChange": 0,
            "lastWeekPrice": 7231
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-28"
        },
        "thisWeek": {
            "amount": 8.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 13.9,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 402.9,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-26"
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

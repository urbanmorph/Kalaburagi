// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 20/6/2026, 6:55:38 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-20T01:25:38.697Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9577,
            "unit": "₹/quintal",
            "date": "2026-06-20",
            "priceChange": 34,
            "percentChange": 0.4,
            "lastWeekPrice": 9543
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5800,
            "unit": "₹/quintal",
            "date": "2026-06-20",
            "priceChange": 17,
            "percentChange": 0.3,
            "lastWeekPrice": 5783
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7206,
            "unit": "₹/quintal",
            "date": "2026-06-20",
            "priceChange": -46,
            "percentChange": -0.6,
            "lastWeekPrice": 7252
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-20"
        },
        "thisWeek": {
            "amount": 3.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 19.3,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 437.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-18"
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

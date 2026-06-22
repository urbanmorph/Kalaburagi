// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 22/6/2026, 7:05:59 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-22T01:35:59.136Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9433,
            "unit": "₹/quintal",
            "date": "2026-06-22",
            "priceChange": -117,
            "percentChange": -1.2,
            "lastWeekPrice": 9550
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5743,
            "unit": "₹/quintal",
            "date": "2026-06-22",
            "priceChange": -128,
            "percentChange": -2.2,
            "lastWeekPrice": 5871
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7283,
            "unit": "₹/quintal",
            "date": "2026-06-22",
            "priceChange": 62,
            "percentChange": 0.9,
            "lastWeekPrice": 7221
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-22"
        },
        "thisWeek": {
            "amount": 4.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 9.1,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 455.9,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-20"
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

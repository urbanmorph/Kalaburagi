// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 29/4/2026, 6:43:57 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-29T01:13:57.653Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9547,
            "unit": "₹/quintal",
            "date": "2026-04-29",
            "priceChange": 37,
            "percentChange": 0.4,
            "lastWeekPrice": 9510
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5863,
            "unit": "₹/quintal",
            "date": "2026-04-29",
            "priceChange": 119,
            "percentChange": 2.1,
            "lastWeekPrice": 5744
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7228,
            "unit": "₹/quintal",
            "date": "2026-04-29",
            "priceChange": 24,
            "percentChange": 0.3,
            "lastWeekPrice": 7204
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-29"
        },
        "thisWeek": {
            "amount": 10,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 19,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 462.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-27"
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

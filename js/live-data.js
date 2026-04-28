// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 28/4/2026, 6:43:00 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-28T01:13:00.053Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9510,
            "unit": "₹/quintal",
            "date": "2026-04-28",
            "priceChange": -75,
            "percentChange": -0.8,
            "lastWeekPrice": 9585
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5744,
            "unit": "₹/quintal",
            "date": "2026-04-28",
            "priceChange": 21,
            "percentChange": 0.4,
            "lastWeekPrice": 5723
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7204,
            "unit": "₹/quintal",
            "date": "2026-04-28",
            "priceChange": 51,
            "percentChange": 0.7,
            "lastWeekPrice": 7153
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-28"
        },
        "thisWeek": {
            "amount": 3.9,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 13.3,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 468,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-26"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 21/5/2026, 6:55:04 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-21T01:25:04.681Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9470,
            "unit": "₹/quintal",
            "date": "2026-05-21",
            "priceChange": 1,
            "percentChange": 0,
            "lastWeekPrice": 9469
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5720,
            "unit": "₹/quintal",
            "date": "2026-05-21",
            "priceChange": -41,
            "percentChange": -0.7,
            "lastWeekPrice": 5761
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7159,
            "unit": "₹/quintal",
            "date": "2026-05-21",
            "priceChange": -138,
            "percentChange": -1.9,
            "lastWeekPrice": 7297
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-21"
        },
        "thisWeek": {
            "amount": 7.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 19.3,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 473.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-19"
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

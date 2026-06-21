// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 21/6/2026, 7:05:53 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-21T01:35:53.857Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9550,
            "unit": "₹/quintal",
            "date": "2026-06-21",
            "priceChange": -27,
            "percentChange": -0.3,
            "lastWeekPrice": 9577
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5871,
            "unit": "₹/quintal",
            "date": "2026-06-21",
            "priceChange": 71,
            "percentChange": 1.2,
            "lastWeekPrice": 5800
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7221,
            "unit": "₹/quintal",
            "date": "2026-06-21",
            "priceChange": 15,
            "percentChange": 0.2,
            "lastWeekPrice": 7206
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-21"
        },
        "thisWeek": {
            "amount": 9.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 19.6,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 421.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-19"
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

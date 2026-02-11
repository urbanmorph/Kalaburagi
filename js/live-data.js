// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 11/2/2026, 6:30:40 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-11T01:00:40.243Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9544,
            "unit": "₹/quintal",
            "date": "2026-02-11",
            "priceChange": -8,
            "percentChange": -0.1,
            "lastWeekPrice": 9552
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5727,
            "unit": "₹/quintal",
            "date": "2026-02-11",
            "priceChange": -10,
            "percentChange": -0.2,
            "lastWeekPrice": 5737
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7161,
            "unit": "₹/quintal",
            "date": "2026-02-11",
            "priceChange": -59,
            "percentChange": -0.8,
            "lastWeekPrice": 7220
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-11"
        },
        "thisWeek": {
            "amount": 2.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 15.1,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 466.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-09"
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

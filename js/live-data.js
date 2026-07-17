// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 17/7/2026, 9:15:41 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-17T03:45:41.647Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9506,
            "unit": "₹/quintal",
            "date": "2026-07-17",
            "priceChange": 76,
            "percentChange": 0.8,
            "lastWeekPrice": 9430
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5777,
            "unit": "₹/quintal",
            "date": "2026-07-17",
            "priceChange": 31,
            "percentChange": 0.5,
            "lastWeekPrice": 5746
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7231,
            "unit": "₹/quintal",
            "date": "2026-07-17",
            "priceChange": 84,
            "percentChange": 1.2,
            "lastWeekPrice": 7147
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-17"
        },
        "thisWeek": {
            "amount": 0.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 12.4,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 469.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-15"
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

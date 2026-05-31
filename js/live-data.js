// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 31/5/2026, 6:58:41 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-31T01:28:41.413Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9583,
            "unit": "₹/quintal",
            "date": "2026-05-31",
            "priceChange": -8,
            "percentChange": -0.1,
            "lastWeekPrice": 9591
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5740,
            "unit": "₹/quintal",
            "date": "2026-05-31",
            "priceChange": -1,
            "percentChange": 0,
            "lastWeekPrice": 5741
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7173,
            "unit": "₹/quintal",
            "date": "2026-05-31",
            "priceChange": -14,
            "percentChange": -0.2,
            "lastWeekPrice": 7187
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-31"
        },
        "thisWeek": {
            "amount": 7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 7.3,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 406.2,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-29"
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

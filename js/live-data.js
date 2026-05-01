// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 1/5/2026, 6:48:14 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-01T01:18:14.761Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9544,
            "unit": "₹/quintal",
            "date": "2026-05-01",
            "priceChange": 89,
            "percentChange": 0.9,
            "lastWeekPrice": 9455
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5895,
            "unit": "₹/quintal",
            "date": "2026-05-01",
            "priceChange": 49,
            "percentChange": 0.8,
            "lastWeekPrice": 5846
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7154,
            "unit": "₹/quintal",
            "date": "2026-05-01",
            "priceChange": 43,
            "percentChange": 0.6,
            "lastWeekPrice": 7111
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-01"
        },
        "thisWeek": {
            "amount": 1.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.3,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 407.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-29"
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

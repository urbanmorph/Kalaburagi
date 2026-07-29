// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 29/7/2026, 9:18:32 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-29T03:48:32.245Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9515,
            "unit": "₹/quintal",
            "date": "2026-07-29",
            "priceChange": 73,
            "percentChange": 0.8,
            "lastWeekPrice": 9442
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5785,
            "unit": "₹/quintal",
            "date": "2026-07-29",
            "priceChange": 62,
            "percentChange": 1.1,
            "lastWeekPrice": 5723
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7110,
            "unit": "₹/quintal",
            "date": "2026-07-29",
            "priceChange": -8,
            "percentChange": -0.1,
            "lastWeekPrice": 7118
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-29"
        },
        "thisWeek": {
            "amount": 3.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 18,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 486.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-27"
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

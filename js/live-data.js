// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 10/5/2026, 6:48:34 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-10T01:18:34.081Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9556,
            "unit": "₹/quintal",
            "date": "2026-05-10",
            "priceChange": 152,
            "percentChange": 1.6,
            "lastWeekPrice": 9404
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5755,
            "unit": "₹/quintal",
            "date": "2026-05-10",
            "priceChange": 38,
            "percentChange": 0.7,
            "lastWeekPrice": 5717
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7113,
            "unit": "₹/quintal",
            "date": "2026-05-10",
            "priceChange": -35,
            "percentChange": -0.5,
            "lastWeekPrice": 7148
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-10"
        },
        "thisWeek": {
            "amount": 5.9,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 14.8,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 462.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-08"
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

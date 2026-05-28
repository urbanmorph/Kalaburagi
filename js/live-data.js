// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 28/5/2026, 6:47:39 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-28T01:17:39.677Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9593,
            "unit": "₹/quintal",
            "date": "2026-05-28",
            "priceChange": 144,
            "percentChange": 1.5,
            "lastWeekPrice": 9449
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5819,
            "unit": "₹/quintal",
            "date": "2026-05-28",
            "priceChange": -29,
            "percentChange": -0.5,
            "lastWeekPrice": 5848
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7139,
            "unit": "₹/quintal",
            "date": "2026-05-28",
            "priceChange": -104,
            "percentChange": -1.4,
            "lastWeekPrice": 7243
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-28"
        },
        "thisWeek": {
            "amount": 1.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 14.1,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 499.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-26"
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

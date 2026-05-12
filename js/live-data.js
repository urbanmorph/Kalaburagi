// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 12/5/2026, 6:42:58 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-12T01:12:58.740Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9511,
            "unit": "₹/quintal",
            "date": "2026-05-12",
            "priceChange": 94,
            "percentChange": 1,
            "lastWeekPrice": 9417
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5801,
            "unit": "₹/quintal",
            "date": "2026-05-12",
            "priceChange": 30,
            "percentChange": 0.5,
            "lastWeekPrice": 5771
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7278,
            "unit": "₹/quintal",
            "date": "2026-05-12",
            "priceChange": -9,
            "percentChange": -0.1,
            "lastWeekPrice": 7287
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 2.4,
            "unit": "mm",
            "date": "2026-05-12"
        },
        "thisWeek": {
            "amount": 3.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 11.5,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 426.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-10"
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

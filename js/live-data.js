// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 10/6/2026, 6:56:17 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-10T01:26:17.798Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9514,
            "unit": "₹/quintal",
            "date": "2026-06-10",
            "priceChange": 63,
            "percentChange": 0.7,
            "lastWeekPrice": 9451
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5836,
            "unit": "₹/quintal",
            "date": "2026-06-10",
            "priceChange": -7,
            "percentChange": -0.1,
            "lastWeekPrice": 5843
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7276,
            "unit": "₹/quintal",
            "date": "2026-06-10",
            "priceChange": 72,
            "percentChange": 1,
            "lastWeekPrice": 7204
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-10"
        },
        "thisWeek": {
            "amount": 4.8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 15.7,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 400.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-08"
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

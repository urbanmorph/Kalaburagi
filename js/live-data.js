// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 24/6/2026, 6:48:32 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-24T01:18:32.460Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9537,
            "unit": "₹/quintal",
            "date": "2026-06-24",
            "priceChange": 128,
            "percentChange": 1.4,
            "lastWeekPrice": 9409
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5770,
            "unit": "₹/quintal",
            "date": "2026-06-24",
            "priceChange": 59,
            "percentChange": 1,
            "lastWeekPrice": 5711
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7226,
            "unit": "₹/quintal",
            "date": "2026-06-24",
            "priceChange": -40,
            "percentChange": -0.6,
            "lastWeekPrice": 7266
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-24"
        },
        "thisWeek": {
            "amount": 7.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 14.7,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 433.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-22"
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

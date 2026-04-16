// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 16/4/2026, 6:37:46 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-16T01:07:46.018Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9481,
            "unit": "₹/quintal",
            "date": "2026-04-16",
            "priceChange": -5,
            "percentChange": -0.1,
            "lastWeekPrice": 9486
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5720,
            "unit": "₹/quintal",
            "date": "2026-04-16",
            "priceChange": -107,
            "percentChange": -1.8,
            "lastWeekPrice": 5827
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7285,
            "unit": "₹/quintal",
            "date": "2026-04-16",
            "priceChange": 159,
            "percentChange": 2.2,
            "lastWeekPrice": 7126
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-16"
        },
        "thisWeek": {
            "amount": 6.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 13.2,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 409.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-14"
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

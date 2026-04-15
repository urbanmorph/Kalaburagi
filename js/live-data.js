// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 15/4/2026, 6:35:57 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-15T01:05:57.788Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9486,
            "unit": "₹/quintal",
            "date": "2026-04-15",
            "priceChange": -98,
            "percentChange": -1,
            "lastWeekPrice": 9584
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5827,
            "unit": "₹/quintal",
            "date": "2026-04-15",
            "priceChange": -68,
            "percentChange": -1.2,
            "lastWeekPrice": 5895
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7126,
            "unit": "₹/quintal",
            "date": "2026-04-15",
            "priceChange": -57,
            "percentChange": -0.8,
            "lastWeekPrice": 7183
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-15"
        },
        "thisWeek": {
            "amount": 4.9,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.4,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 431.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-13"
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

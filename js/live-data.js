// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 12/1/2026, 6:18:53 am
// ============================================

const liveData = {
    "lastUpdated": "2026-01-12T00:48:53.709Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9430,
            "unit": "₹/quintal",
            "date": "2026-01-12",
            "priceChange": -18,
            "percentChange": -0.2,
            "lastWeekPrice": 9448
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5858,
            "unit": "₹/quintal",
            "date": "2026-01-12",
            "priceChange": 143,
            "percentChange": 2.5,
            "lastWeekPrice": 5715
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7152,
            "unit": "₹/quintal",
            "date": "2026-01-12",
            "priceChange": -121,
            "percentChange": -1.7,
            "lastWeekPrice": 7273
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-01-12"
        },
        "thisWeek": {
            "amount": 5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 11.3,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 422.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-10"
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

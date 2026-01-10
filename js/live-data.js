// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 10/1/2026, 6:18:33 am
// ============================================

const liveData = {
    "lastUpdated": "2026-01-10T00:48:33.340Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9456,
            "unit": "₹/quintal",
            "date": "2026-01-10",
            "priceChange": 44,
            "percentChange": 0.5,
            "lastWeekPrice": 9412
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5855,
            "unit": "₹/quintal",
            "date": "2026-01-10",
            "priceChange": -33,
            "percentChange": -0.6,
            "lastWeekPrice": 5888
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7261,
            "unit": "₹/quintal",
            "date": "2026-01-10",
            "priceChange": 31,
            "percentChange": 0.4,
            "lastWeekPrice": 7230
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-01-10"
        },
        "thisWeek": {
            "amount": 7.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 8.3,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 458,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-08"
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

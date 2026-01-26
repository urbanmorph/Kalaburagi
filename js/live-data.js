// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 26/1/2026, 6:19:26 am
// ============================================

const liveData = {
    "lastUpdated": "2026-01-26T00:49:26.327Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9436,
            "unit": "₹/quintal",
            "date": "2026-01-26",
            "priceChange": -64,
            "percentChange": -0.7,
            "lastWeekPrice": 9500
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5719,
            "unit": "₹/quintal",
            "date": "2026-01-26",
            "priceChange": -109,
            "percentChange": -1.9,
            "lastWeekPrice": 5828
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7156,
            "unit": "₹/quintal",
            "date": "2026-01-26",
            "priceChange": -116,
            "percentChange": -1.6,
            "lastWeekPrice": 7272
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-01-26"
        },
        "thisWeek": {
            "amount": 9.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 18.4,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 479.7,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-24"
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

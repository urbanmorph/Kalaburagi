// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 25/1/2026, 6:20:28 am
// ============================================

const liveData = {
    "lastUpdated": "2026-01-25T00:50:28.799Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9500,
            "unit": "₹/quintal",
            "date": "2026-01-25",
            "priceChange": -83,
            "percentChange": -0.9,
            "lastWeekPrice": 9583
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5828,
            "unit": "₹/quintal",
            "date": "2026-01-25",
            "priceChange": 127,
            "percentChange": 2.2,
            "lastWeekPrice": 5701
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7272,
            "unit": "₹/quintal",
            "date": "2026-01-25",
            "priceChange": 128,
            "percentChange": 1.8,
            "lastWeekPrice": 7144
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-01-25"
        },
        "thisWeek": {
            "amount": 8.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 9.6,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 404.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-23"
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

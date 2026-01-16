// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 16/1/2026, 6:18:45 am
// ============================================

const liveData = {
    "lastUpdated": "2026-01-16T00:48:45.178Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9497,
            "unit": "₹/quintal",
            "date": "2026-01-16",
            "priceChange": -62,
            "percentChange": -0.6,
            "lastWeekPrice": 9559
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5842,
            "unit": "₹/quintal",
            "date": "2026-01-16",
            "priceChange": 16,
            "percentChange": 0.3,
            "lastWeekPrice": 5826
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7272,
            "unit": "₹/quintal",
            "date": "2026-01-16",
            "priceChange": 168,
            "percentChange": 2.4,
            "lastWeekPrice": 7104
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-01-16"
        },
        "thisWeek": {
            "amount": 4.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 5.2,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 498.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-14"
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

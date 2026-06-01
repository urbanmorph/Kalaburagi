// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 1/6/2026, 7:02:32 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-01T01:32:32.499Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9419,
            "unit": "₹/quintal",
            "date": "2026-06-01",
            "priceChange": -164,
            "percentChange": -1.7,
            "lastWeekPrice": 9583
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5709,
            "unit": "₹/quintal",
            "date": "2026-06-01",
            "priceChange": -31,
            "percentChange": -0.5,
            "lastWeekPrice": 5740
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7265,
            "unit": "₹/quintal",
            "date": "2026-06-01",
            "priceChange": 92,
            "percentChange": 1.3,
            "lastWeekPrice": 7173
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 2,
            "unit": "mm",
            "date": "2026-06-01"
        },
        "thisWeek": {
            "amount": 7.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 12.5,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 409.2,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-30"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 24/1/2026, 6:18:31 am
// ============================================

const liveData = {
    "lastUpdated": "2026-01-24T00:48:31.096Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9583,
            "unit": "₹/quintal",
            "date": "2026-01-24",
            "priceChange": 14,
            "percentChange": 0.1,
            "lastWeekPrice": 9569
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5701,
            "unit": "₹/quintal",
            "date": "2026-01-24",
            "priceChange": -42,
            "percentChange": -0.7,
            "lastWeekPrice": 5743
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7144,
            "unit": "₹/quintal",
            "date": "2026-01-24",
            "priceChange": -30,
            "percentChange": -0.4,
            "lastWeekPrice": 7174
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-01-24"
        },
        "thisWeek": {
            "amount": 8.8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 17.7,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 446.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-22"
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

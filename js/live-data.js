// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 24/2/2026, 6:22:19 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-24T00:52:19.401Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9590,
            "unit": "₹/quintal",
            "date": "2026-02-24",
            "priceChange": 158,
            "percentChange": 1.7,
            "lastWeekPrice": 9432
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5730,
            "unit": "₹/quintal",
            "date": "2026-02-24",
            "priceChange": -43,
            "percentChange": -0.7,
            "lastWeekPrice": 5773
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7252,
            "unit": "₹/quintal",
            "date": "2026-02-24",
            "priceChange": 35,
            "percentChange": 0.5,
            "lastWeekPrice": 7217
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-24"
        },
        "thisWeek": {
            "amount": 1.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.5,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 405.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-22"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 25/2/2026, 6:27:23 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-25T00:57:23.850Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9431,
            "unit": "₹/quintal",
            "date": "2026-02-25",
            "priceChange": -159,
            "percentChange": -1.7,
            "lastWeekPrice": 9590
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5716,
            "unit": "₹/quintal",
            "date": "2026-02-25",
            "priceChange": -14,
            "percentChange": -0.2,
            "lastWeekPrice": 5730
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7294,
            "unit": "₹/quintal",
            "date": "2026-02-25",
            "priceChange": 42,
            "percentChange": 0.6,
            "lastWeekPrice": 7252
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-25"
        },
        "thisWeek": {
            "amount": 3.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 14.3,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 492,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-23"
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

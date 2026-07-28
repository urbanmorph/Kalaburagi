// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 28/7/2026, 9:14:44 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-28T03:44:44.783Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9442,
            "unit": "₹/quintal",
            "date": "2026-07-28",
            "priceChange": -90,
            "percentChange": -0.9,
            "lastWeekPrice": 9532
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5723,
            "unit": "₹/quintal",
            "date": "2026-07-28",
            "priceChange": 17,
            "percentChange": 0.3,
            "lastWeekPrice": 5706
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7118,
            "unit": "₹/quintal",
            "date": "2026-07-28",
            "priceChange": -28,
            "percentChange": -0.4,
            "lastWeekPrice": 7146
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-28"
        },
        "thisWeek": {
            "amount": 1.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 19.3,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 459.2,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-26"
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

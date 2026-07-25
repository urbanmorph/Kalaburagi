// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 25/7/2026, 9:16:30 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-25T03:46:30.414Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9532,
            "unit": "₹/quintal",
            "date": "2026-07-25",
            "priceChange": 74,
            "percentChange": 0.8,
            "lastWeekPrice": 9458
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5787,
            "unit": "₹/quintal",
            "date": "2026-07-25",
            "priceChange": 54,
            "percentChange": 0.9,
            "lastWeekPrice": 5733
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7288,
            "unit": "₹/quintal",
            "date": "2026-07-25",
            "priceChange": 41,
            "percentChange": 0.6,
            "lastWeekPrice": 7247
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-25"
        },
        "thisWeek": {
            "amount": 9.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 18.7,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 413.2,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-23"
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

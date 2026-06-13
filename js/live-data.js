// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 13/6/2026, 6:59:10 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-13T01:29:10.158Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9463,
            "unit": "₹/quintal",
            "date": "2026-06-13",
            "priceChange": -44,
            "percentChange": -0.5,
            "lastWeekPrice": 9507
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5836,
            "unit": "₹/quintal",
            "date": "2026-06-13",
            "priceChange": 43,
            "percentChange": 0.7,
            "lastWeekPrice": 5793
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7217,
            "unit": "₹/quintal",
            "date": "2026-06-13",
            "priceChange": 79,
            "percentChange": 1.1,
            "lastWeekPrice": 7138
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-13"
        },
        "thisWeek": {
            "amount": 0.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 10.4,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 463.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-11"
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

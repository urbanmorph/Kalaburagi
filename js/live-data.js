// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 10/4/2026, 6:31:13 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-10T01:01:13.446Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9558,
            "unit": "₹/quintal",
            "date": "2026-04-10",
            "priceChange": 40,
            "percentChange": 0.4,
            "lastWeekPrice": 9518
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5842,
            "unit": "₹/quintal",
            "date": "2026-04-10",
            "priceChange": -15,
            "percentChange": -0.3,
            "lastWeekPrice": 5857
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7162,
            "unit": "₹/quintal",
            "date": "2026-04-10",
            "priceChange": -45,
            "percentChange": -0.6,
            "lastWeekPrice": 7207
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-10"
        },
        "thisWeek": {
            "amount": 7.9,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 5.5,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 403.9,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-08"
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

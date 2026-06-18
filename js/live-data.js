// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 18/6/2026, 7:01:47 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-18T01:31:47.791Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9408,
            "unit": "₹/quintal",
            "date": "2026-06-18",
            "priceChange": -41,
            "percentChange": -0.4,
            "lastWeekPrice": 9449
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5864,
            "unit": "₹/quintal",
            "date": "2026-06-18",
            "priceChange": 20,
            "percentChange": 0.3,
            "lastWeekPrice": 5844
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7191,
            "unit": "₹/quintal",
            "date": "2026-06-18",
            "priceChange": 54,
            "percentChange": 0.8,
            "lastWeekPrice": 7137
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-18"
        },
        "thisWeek": {
            "amount": 6.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 11.3,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 418.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-16"
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

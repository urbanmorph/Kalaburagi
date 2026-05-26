// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 26/5/2026, 6:50:48 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-26T01:20:48.088Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9504,
            "unit": "₹/quintal",
            "date": "2026-05-26",
            "priceChange": -12,
            "percentChange": -0.1,
            "lastWeekPrice": 9516
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5883,
            "unit": "₹/quintal",
            "date": "2026-05-26",
            "priceChange": 56,
            "percentChange": 1,
            "lastWeekPrice": 5827
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7286,
            "unit": "₹/quintal",
            "date": "2026-05-26",
            "priceChange": 145,
            "percentChange": 2,
            "lastWeekPrice": 7141
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-26"
        },
        "thisWeek": {
            "amount": 3.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 17.1,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 401.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-24"
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

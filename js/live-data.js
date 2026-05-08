// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 8/5/2026, 6:44:19 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-08T01:14:19.637Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9405,
            "unit": "₹/quintal",
            "date": "2026-05-08",
            "priceChange": -90,
            "percentChange": -0.9,
            "lastWeekPrice": 9495
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5729,
            "unit": "₹/quintal",
            "date": "2026-05-08",
            "priceChange": -92,
            "percentChange": -1.6,
            "lastWeekPrice": 5821
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7184,
            "unit": "₹/quintal",
            "date": "2026-05-08",
            "priceChange": -60,
            "percentChange": -0.8,
            "lastWeekPrice": 7244
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0.9,
            "unit": "mm",
            "date": "2026-05-08"
        },
        "thisWeek": {
            "amount": 6.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 9.4,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 491.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-06"
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

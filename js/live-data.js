// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 8/9/2026, 10:28:20 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-08T04:58:20.740Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9528,
            "unit": "₹/quintal",
            "date": "2026-09-08",
            "priceChange": 79,
            "percentChange": 0.8,
            "lastWeekPrice": 9449
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5729,
            "unit": "₹/quintal",
            "date": "2026-09-08",
            "priceChange": 4,
            "percentChange": 0.1,
            "lastWeekPrice": 5725
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7261,
            "unit": "₹/quintal",
            "date": "2026-09-08",
            "priceChange": 121,
            "percentChange": 1.7,
            "lastWeekPrice": 7140
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-08"
        },
        "thisWeek": {
            "amount": 4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 5.8,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 456.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-06"
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

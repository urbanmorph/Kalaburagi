// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 7/9/2026, 10:30:11 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-07T05:00:11.919Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9449,
            "unit": "₹/quintal",
            "date": "2026-09-07",
            "priceChange": 21,
            "percentChange": 0.2,
            "lastWeekPrice": 9428
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5725,
            "unit": "₹/quintal",
            "date": "2026-09-07",
            "priceChange": -137,
            "percentChange": -2.3,
            "lastWeekPrice": 5862
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7140,
            "unit": "₹/quintal",
            "date": "2026-09-07",
            "priceChange": -28,
            "percentChange": -0.4,
            "lastWeekPrice": 7168
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-07"
        },
        "thisWeek": {
            "amount": 6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 10.2,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 487.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-05"
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

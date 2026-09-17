// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 17/9/2026, 10:35:33 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-17T05:05:33.210Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9415,
            "unit": "₹/quintal",
            "date": "2026-09-17",
            "priceChange": -88,
            "percentChange": -0.9,
            "lastWeekPrice": 9503
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5795,
            "unit": "₹/quintal",
            "date": "2026-09-17",
            "priceChange": -39,
            "percentChange": -0.7,
            "lastWeekPrice": 5834
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7194,
            "unit": "₹/quintal",
            "date": "2026-09-17",
            "priceChange": 7,
            "percentChange": 0.1,
            "lastWeekPrice": 7187
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-17"
        },
        "thisWeek": {
            "amount": 4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 11.5,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 432.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-15"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 8/8/2026, 7:57:24 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-08T02:27:24.914Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9500,
            "unit": "₹/quintal",
            "date": "2026-08-08",
            "priceChange": 90,
            "percentChange": 1,
            "lastWeekPrice": 9410
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5757,
            "unit": "₹/quintal",
            "date": "2026-08-08",
            "priceChange": -49,
            "percentChange": -0.8,
            "lastWeekPrice": 5806
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7195,
            "unit": "₹/quintal",
            "date": "2026-08-08",
            "priceChange": 13,
            "percentChange": 0.2,
            "lastWeekPrice": 7182
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-08"
        },
        "thisWeek": {
            "amount": 5.8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 10.5,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 421.2,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-06"
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

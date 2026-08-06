// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 6/8/2026, 9:17:56 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-06T03:47:56.895Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9570,
            "unit": "₹/quintal",
            "date": "2026-08-06",
            "priceChange": 36,
            "percentChange": 0.4,
            "lastWeekPrice": 9534
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5781,
            "unit": "₹/quintal",
            "date": "2026-08-06",
            "priceChange": -10,
            "percentChange": -0.2,
            "lastWeekPrice": 5791
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7207,
            "unit": "₹/quintal",
            "date": "2026-08-06",
            "priceChange": 46,
            "percentChange": 0.6,
            "lastWeekPrice": 7161
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 2.8,
            "unit": "mm",
            "date": "2026-08-06"
        },
        "thisWeek": {
            "amount": 7.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 11.1,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 409.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-04"
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

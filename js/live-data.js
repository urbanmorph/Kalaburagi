// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 16/9/2026, 10:32:53 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-16T05:02:53.963Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9503,
            "unit": "₹/quintal",
            "date": "2026-09-16",
            "priceChange": 71,
            "percentChange": 0.8,
            "lastWeekPrice": 9432
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5834,
            "unit": "₹/quintal",
            "date": "2026-09-16",
            "priceChange": -44,
            "percentChange": -0.7,
            "lastWeekPrice": 5878
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7187,
            "unit": "₹/quintal",
            "date": "2026-09-16",
            "priceChange": 47,
            "percentChange": 0.7,
            "lastWeekPrice": 7140
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-16"
        },
        "thisWeek": {
            "amount": 5.1,
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
            "amount": 468.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-14"
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

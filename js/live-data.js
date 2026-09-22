// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 22/9/2026, 10:43:28 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-22T05:13:28.857Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9567,
            "unit": "₹/quintal",
            "date": "2026-09-22",
            "priceChange": 14,
            "percentChange": 0.1,
            "lastWeekPrice": 9553
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5765,
            "unit": "₹/quintal",
            "date": "2026-09-22",
            "priceChange": -14,
            "percentChange": -0.2,
            "lastWeekPrice": 5779
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7199,
            "unit": "₹/quintal",
            "date": "2026-09-22",
            "priceChange": 61,
            "percentChange": 0.9,
            "lastWeekPrice": 7138
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-22"
        },
        "thisWeek": {
            "amount": 7.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 14.5,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 421.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-20"
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

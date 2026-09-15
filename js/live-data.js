// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 15/9/2026, 10:37:01 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-15T05:07:01.458Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9432,
            "unit": "₹/quintal",
            "date": "2026-09-15",
            "priceChange": -104,
            "percentChange": -1.1,
            "lastWeekPrice": 9536
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5878,
            "unit": "₹/quintal",
            "date": "2026-09-15",
            "priceChange": 139,
            "percentChange": 2.4,
            "lastWeekPrice": 5739
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7140,
            "unit": "₹/quintal",
            "date": "2026-09-15",
            "priceChange": -127,
            "percentChange": -1.7,
            "lastWeekPrice": 7267
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-15"
        },
        "thisWeek": {
            "amount": 5.8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 6.4,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 438.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-13"
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

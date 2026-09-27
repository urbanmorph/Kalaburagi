// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 27/9/2026, 11:01:42 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-27T05:31:42.783Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9478,
            "unit": "₹/quintal",
            "date": "2026-09-27",
            "priceChange": -56,
            "percentChange": -0.6,
            "lastWeekPrice": 9534
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5701,
            "unit": "₹/quintal",
            "date": "2026-09-27",
            "priceChange": -27,
            "percentChange": -0.5,
            "lastWeekPrice": 5728
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7207,
            "unit": "₹/quintal",
            "date": "2026-09-27",
            "priceChange": -78,
            "percentChange": -1.1,
            "lastWeekPrice": 7285
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-27"
        },
        "thisWeek": {
            "amount": 6.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 8.8,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 461,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-25"
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

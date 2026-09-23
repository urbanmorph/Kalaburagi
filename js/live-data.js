// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 23/9/2026, 10:28:11 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-23T04:58:11.125Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9435,
            "unit": "₹/quintal",
            "date": "2026-09-23",
            "priceChange": -132,
            "percentChange": -1.4,
            "lastWeekPrice": 9567
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5732,
            "unit": "₹/quintal",
            "date": "2026-09-23",
            "priceChange": -33,
            "percentChange": -0.6,
            "lastWeekPrice": 5765
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7136,
            "unit": "₹/quintal",
            "date": "2026-09-23",
            "priceChange": -63,
            "percentChange": -0.9,
            "lastWeekPrice": 7199
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-23"
        },
        "thisWeek": {
            "amount": 3.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 10.6,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 441.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-21"
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

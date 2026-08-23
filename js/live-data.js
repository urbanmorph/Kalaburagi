// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 23/8/2026, 7:38:06 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-23T02:08:06.241Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9460,
            "unit": "₹/quintal",
            "date": "2026-08-23",
            "priceChange": -99,
            "percentChange": -1,
            "lastWeekPrice": 9559
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5860,
            "unit": "₹/quintal",
            "date": "2026-08-23",
            "priceChange": -36,
            "percentChange": -0.6,
            "lastWeekPrice": 5896
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7250,
            "unit": "₹/quintal",
            "date": "2026-08-23",
            "priceChange": -15,
            "percentChange": -0.2,
            "lastWeekPrice": 7265
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-23"
        },
        "thisWeek": {
            "amount": 8.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 8.5,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 426,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-21"
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

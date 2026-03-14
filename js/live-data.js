// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 14/3/2026, 6:21:39 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-14T00:51:39.590Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9432,
            "unit": "₹/quintal",
            "date": "2026-03-14",
            "priceChange": -127,
            "percentChange": -1.3,
            "lastWeekPrice": 9559
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5716,
            "unit": "₹/quintal",
            "date": "2026-03-14",
            "priceChange": -134,
            "percentChange": -2.3,
            "lastWeekPrice": 5850
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7141,
            "unit": "₹/quintal",
            "date": "2026-03-14",
            "priceChange": -122,
            "percentChange": -1.7,
            "lastWeekPrice": 7263
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 4.1,
            "unit": "mm",
            "date": "2026-03-14"
        },
        "thisWeek": {
            "amount": 10.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 20,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 470.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-12"
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

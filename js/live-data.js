// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 27/8/2026, 3:35:35 pm
// ============================================

const liveData = {
    "lastUpdated": "2026-08-27T10:05:35.178Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9560,
            "unit": "₹/quintal",
            "date": "2026-08-27",
            "priceChange": 107,
            "percentChange": 1.1,
            "lastWeekPrice": 9453
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5860,
            "unit": "₹/quintal",
            "date": "2026-08-27",
            "priceChange": 86,
            "percentChange": 1.5,
            "lastWeekPrice": 5774
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7154,
            "unit": "₹/quintal",
            "date": "2026-08-27",
            "priceChange": -94,
            "percentChange": -1.3,
            "lastWeekPrice": 7248
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-27"
        },
        "thisWeek": {
            "amount": 8.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.9,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 477.2,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-25"
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

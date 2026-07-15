// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 15/7/2026, 9:13:19 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-15T03:43:19.443Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9598,
            "unit": "₹/quintal",
            "date": "2026-07-15",
            "priceChange": 166,
            "percentChange": 1.8,
            "lastWeekPrice": 9432
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5784,
            "unit": "₹/quintal",
            "date": "2026-07-15",
            "priceChange": 65,
            "percentChange": 1.1,
            "lastWeekPrice": 5719
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7185,
            "unit": "₹/quintal",
            "date": "2026-07-15",
            "priceChange": -114,
            "percentChange": -1.6,
            "lastWeekPrice": 7299
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-15"
        },
        "thisWeek": {
            "amount": 8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 17.2,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 497.2,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-13"
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

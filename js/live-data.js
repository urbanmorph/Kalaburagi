// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 14/7/2026, 9:13:11 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-14T03:43:11.254Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9432,
            "unit": "₹/quintal",
            "date": "2026-07-14",
            "priceChange": -160,
            "percentChange": -1.7,
            "lastWeekPrice": 9592
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5719,
            "unit": "₹/quintal",
            "date": "2026-07-14",
            "priceChange": -80,
            "percentChange": -1.4,
            "lastWeekPrice": 5799
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7299,
            "unit": "₹/quintal",
            "date": "2026-07-14",
            "priceChange": 23,
            "percentChange": 0.3,
            "lastWeekPrice": 7276
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-14"
        },
        "thisWeek": {
            "amount": 4.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 5.4,
            "unit": "mm",
            "period": "July 2026",
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
            "date": "2026-07-12"
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

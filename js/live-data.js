// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 16/8/2026, 7:34:51 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-16T02:04:51.378Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9438,
            "unit": "₹/quintal",
            "date": "2026-08-16",
            "priceChange": -115,
            "percentChange": -1.2,
            "lastWeekPrice": 9553
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5826,
            "unit": "₹/quintal",
            "date": "2026-08-16",
            "priceChange": 77,
            "percentChange": 1.3,
            "lastWeekPrice": 5749
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7120,
            "unit": "₹/quintal",
            "date": "2026-08-16",
            "priceChange": -71,
            "percentChange": -1,
            "lastWeekPrice": 7191
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-16"
        },
        "thisWeek": {
            "amount": 9.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 10.6,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 472.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-14"
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

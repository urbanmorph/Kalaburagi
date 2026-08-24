// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 24/8/2026, 7:35:47 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-24T02:05:47.897Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9507,
            "unit": "₹/quintal",
            "date": "2026-08-24",
            "priceChange": 47,
            "percentChange": 0.5,
            "lastWeekPrice": 9460
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5742,
            "unit": "₹/quintal",
            "date": "2026-08-24",
            "priceChange": -118,
            "percentChange": -2,
            "lastWeekPrice": 5860
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7120,
            "unit": "₹/quintal",
            "date": "2026-08-24",
            "priceChange": -130,
            "percentChange": -1.8,
            "lastWeekPrice": 7250
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-24"
        },
        "thisWeek": {
            "amount": 6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 19.2,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 433,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-22"
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

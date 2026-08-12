// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 12/8/2026, 8:32:50 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-12T03:02:50.397Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9595,
            "unit": "₹/quintal",
            "date": "2026-08-12",
            "priceChange": 151,
            "percentChange": 1.6,
            "lastWeekPrice": 9444
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5704,
            "unit": "₹/quintal",
            "date": "2026-08-12",
            "priceChange": -189,
            "percentChange": -3.2,
            "lastWeekPrice": 5893
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7110,
            "unit": "₹/quintal",
            "date": "2026-08-12",
            "priceChange": -96,
            "percentChange": -1.3,
            "lastWeekPrice": 7206
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-12"
        },
        "thisWeek": {
            "amount": 6.6,
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
            "amount": 465.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-10"
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

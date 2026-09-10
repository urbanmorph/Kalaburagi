// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 10/9/2026, 10:31:10 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-10T05:01:10.259Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9549,
            "unit": "₹/quintal",
            "date": "2026-09-10",
            "priceChange": -3,
            "percentChange": 0,
            "lastWeekPrice": 9552
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5822,
            "unit": "₹/quintal",
            "date": "2026-09-10",
            "priceChange": -50,
            "percentChange": -0.9,
            "lastWeekPrice": 5872
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7222,
            "unit": "₹/quintal",
            "date": "2026-09-10",
            "priceChange": -27,
            "percentChange": -0.4,
            "lastWeekPrice": 7249
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-10"
        },
        "thisWeek": {
            "amount": 2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 8.3,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 406.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-08"
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

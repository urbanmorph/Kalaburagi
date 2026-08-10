// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 10/8/2026, 8:09:55 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-10T02:39:55.588Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9439,
            "unit": "₹/quintal",
            "date": "2026-08-10",
            "priceChange": -94,
            "percentChange": -1,
            "lastWeekPrice": 9533
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5889,
            "unit": "₹/quintal",
            "date": "2026-08-10",
            "priceChange": 8,
            "percentChange": 0.1,
            "lastWeekPrice": 5881
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7161,
            "unit": "₹/quintal",
            "date": "2026-08-10",
            "priceChange": -9,
            "percentChange": -0.1,
            "lastWeekPrice": 7170
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-10"
        },
        "thisWeek": {
            "amount": 2.5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 6.7,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 477.7,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-08"
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

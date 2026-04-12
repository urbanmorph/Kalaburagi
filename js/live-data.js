// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 12/4/2026, 6:35:49 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-12T01:05:49.864Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9447,
            "unit": "₹/quintal",
            "date": "2026-04-12",
            "priceChange": -107,
            "percentChange": -1.1,
            "lastWeekPrice": 9554
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5842,
            "unit": "₹/quintal",
            "date": "2026-04-12",
            "priceChange": 75,
            "percentChange": 1.3,
            "lastWeekPrice": 5767
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7252,
            "unit": "₹/quintal",
            "date": "2026-04-12",
            "priceChange": 91,
            "percentChange": 1.3,
            "lastWeekPrice": 7161
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 1.2,
            "unit": "mm",
            "date": "2026-04-12"
        },
        "thisWeek": {
            "amount": 8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 17.6,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 469.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-10"
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

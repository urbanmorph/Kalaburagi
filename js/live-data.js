// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 2/4/2026, 6:27:32 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-02T00:57:32.010Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9554,
            "unit": "₹/quintal",
            "date": "2026-04-02",
            "priceChange": 140,
            "percentChange": 1.5,
            "lastWeekPrice": 9414
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5713,
            "unit": "₹/quintal",
            "date": "2026-04-02",
            "priceChange": -15,
            "percentChange": -0.3,
            "lastWeekPrice": 5728
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7254,
            "unit": "₹/quintal",
            "date": "2026-04-02",
            "priceChange": 74,
            "percentChange": 1,
            "lastWeekPrice": 7180
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 2.9,
            "unit": "mm",
            "date": "2026-04-02"
        },
        "thisWeek": {
            "amount": 11.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 18,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 441.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-31"
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

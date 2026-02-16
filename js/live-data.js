// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 16/2/2026, 6:26:07 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-16T00:56:07.355Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9456,
            "unit": "₹/quintal",
            "date": "2026-02-16",
            "priceChange": 20,
            "percentChange": 0.2,
            "lastWeekPrice": 9436
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5725,
            "unit": "₹/quintal",
            "date": "2026-02-16",
            "priceChange": -29,
            "percentChange": -0.5,
            "lastWeekPrice": 5754
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7242,
            "unit": "₹/quintal",
            "date": "2026-02-16",
            "priceChange": 108,
            "percentChange": 1.5,
            "lastWeekPrice": 7134
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-16"
        },
        "thisWeek": {
            "amount": 8.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 9.2,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 473.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-14"
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

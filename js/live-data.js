// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 18/3/2026, 6:26:35 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-18T00:56:35.255Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9504,
            "unit": "₹/quintal",
            "date": "2026-03-18",
            "priceChange": -82,
            "percentChange": -0.9,
            "lastWeekPrice": 9586
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5883,
            "unit": "₹/quintal",
            "date": "2026-03-18",
            "priceChange": 137,
            "percentChange": 2.4,
            "lastWeekPrice": 5746
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7265,
            "unit": "₹/quintal",
            "date": "2026-03-18",
            "priceChange": 139,
            "percentChange": 2,
            "lastWeekPrice": 7126
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-18"
        },
        "thisWeek": {
            "amount": 2.5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 12.4,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 459.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-16"
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

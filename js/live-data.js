// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 17/3/2026, 6:23:32 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-17T00:53:32.957Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9586,
            "unit": "₹/quintal",
            "date": "2026-03-17",
            "priceChange": 31,
            "percentChange": 0.3,
            "lastWeekPrice": 9555
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5746,
            "unit": "₹/quintal",
            "date": "2026-03-17",
            "priceChange": -35,
            "percentChange": -0.6,
            "lastWeekPrice": 5781
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7126,
            "unit": "₹/quintal",
            "date": "2026-03-17",
            "priceChange": -168,
            "percentChange": -2.3,
            "lastWeekPrice": 7294
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-17"
        },
        "thisWeek": {
            "amount": 8.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 7.6,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 428,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-15"
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

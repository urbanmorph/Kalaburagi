// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 25/6/2026, 6:53:48 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-25T01:23:48.891Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9417,
            "unit": "₹/quintal",
            "date": "2026-06-25",
            "priceChange": -120,
            "percentChange": -1.3,
            "lastWeekPrice": 9537
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5790,
            "unit": "₹/quintal",
            "date": "2026-06-25",
            "priceChange": 20,
            "percentChange": 0.3,
            "lastWeekPrice": 5770
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7269,
            "unit": "₹/quintal",
            "date": "2026-06-25",
            "priceChange": 43,
            "percentChange": 0.6,
            "lastWeekPrice": 7226
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-25"
        },
        "thisWeek": {
            "amount": 5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 13.9,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 406.7,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-23"
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

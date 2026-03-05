// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 5/3/2026, 6:24:52 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-05T00:54:52.188Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9466,
            "unit": "₹/quintal",
            "date": "2026-03-05",
            "priceChange": 35,
            "percentChange": 0.4,
            "lastWeekPrice": 9431
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5811,
            "unit": "₹/quintal",
            "date": "2026-03-05",
            "priceChange": 65,
            "percentChange": 1.1,
            "lastWeekPrice": 5746
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7114,
            "unit": "₹/quintal",
            "date": "2026-03-05",
            "priceChange": -80,
            "percentChange": -1.1,
            "lastWeekPrice": 7194
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 1.7,
            "unit": "mm",
            "date": "2026-03-05"
        },
        "thisWeek": {
            "amount": 10,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 5,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 444.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-03"
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

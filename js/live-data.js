// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 29/6/2026, 6:58:28 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-29T01:28:28.894Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9456,
            "unit": "₹/quintal",
            "date": "2026-06-29",
            "priceChange": -115,
            "percentChange": -1.2,
            "lastWeekPrice": 9571
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5876,
            "unit": "₹/quintal",
            "date": "2026-06-29",
            "priceChange": 135,
            "percentChange": 2.4,
            "lastWeekPrice": 5741
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7196,
            "unit": "₹/quintal",
            "date": "2026-06-29",
            "priceChange": -34,
            "percentChange": -0.5,
            "lastWeekPrice": 7230
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-29"
        },
        "thisWeek": {
            "amount": 8.5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 18.9,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 482.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-27"
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

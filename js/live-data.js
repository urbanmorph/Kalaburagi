// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 30/6/2026, 6:52:47 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-30T01:22:47.452Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9437,
            "unit": "₹/quintal",
            "date": "2026-06-30",
            "priceChange": -19,
            "percentChange": -0.2,
            "lastWeekPrice": 9456
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5853,
            "unit": "₹/quintal",
            "date": "2026-06-30",
            "priceChange": -23,
            "percentChange": -0.4,
            "lastWeekPrice": 5876
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7148,
            "unit": "₹/quintal",
            "date": "2026-06-30",
            "priceChange": -48,
            "percentChange": -0.7,
            "lastWeekPrice": 7196
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-30"
        },
        "thisWeek": {
            "amount": 5.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 12.3,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 433,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-28"
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

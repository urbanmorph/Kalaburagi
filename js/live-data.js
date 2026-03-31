// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 31/3/2026, 6:30:03 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-31T01:00:03.624Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9420,
            "unit": "₹/quintal",
            "date": "2026-03-31",
            "priceChange": -15,
            "percentChange": -0.2,
            "lastWeekPrice": 9435
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5776,
            "unit": "₹/quintal",
            "date": "2026-03-31",
            "priceChange": 37,
            "percentChange": 0.6,
            "lastWeekPrice": 5739
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7208,
            "unit": "₹/quintal",
            "date": "2026-03-31",
            "priceChange": 10,
            "percentChange": 0.1,
            "lastWeekPrice": 7198
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-31"
        },
        "thisWeek": {
            "amount": 9.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.1,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 435.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-29"
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

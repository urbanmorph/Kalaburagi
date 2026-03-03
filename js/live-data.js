// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 3/3/2026, 6:25:40 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-03T00:55:40.781Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9451,
            "unit": "₹/quintal",
            "date": "2026-03-03",
            "priceChange": -132,
            "percentChange": -1.4,
            "lastWeekPrice": 9583
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5885,
            "unit": "₹/quintal",
            "date": "2026-03-03",
            "priceChange": 73,
            "percentChange": 1.3,
            "lastWeekPrice": 5812
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7291,
            "unit": "₹/quintal",
            "date": "2026-03-03",
            "priceChange": 176,
            "percentChange": 2.5,
            "lastWeekPrice": 7115
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-03"
        },
        "thisWeek": {
            "amount": 8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 18,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 414.7,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-01"
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

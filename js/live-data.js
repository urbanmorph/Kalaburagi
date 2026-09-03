// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 3/9/2026, 10:20:28 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-03T04:50:28.326Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9576,
            "unit": "₹/quintal",
            "date": "2026-09-03",
            "priceChange": 159,
            "percentChange": 1.7,
            "lastWeekPrice": 9417
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5814,
            "unit": "₹/quintal",
            "date": "2026-09-03",
            "priceChange": 34,
            "percentChange": 0.6,
            "lastWeekPrice": 5780
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7186,
            "unit": "₹/quintal",
            "date": "2026-09-03",
            "priceChange": 70,
            "percentChange": 1,
            "lastWeekPrice": 7116
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-03"
        },
        "thisWeek": {
            "amount": 6.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 19.6,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 415.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-01"
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

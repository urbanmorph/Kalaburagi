// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 6/4/2026, 6:33:09 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-06T01:03:09.318Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9534,
            "unit": "₹/quintal",
            "date": "2026-04-06",
            "priceChange": 111,
            "percentChange": 1.2,
            "lastWeekPrice": 9423
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5718,
            "unit": "₹/quintal",
            "date": "2026-04-06",
            "priceChange": -21,
            "percentChange": -0.4,
            "lastWeekPrice": 5739
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7221,
            "unit": "₹/quintal",
            "date": "2026-04-06",
            "priceChange": 43,
            "percentChange": 0.6,
            "lastWeekPrice": 7178
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-06"
        },
        "thisWeek": {
            "amount": 0.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.6,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 413.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-04"
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

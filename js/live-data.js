// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 5/9/2026, 10:16:26 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-05T04:46:26.538Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9487,
            "unit": "₹/quintal",
            "date": "2026-09-05",
            "priceChange": -112,
            "percentChange": -1.2,
            "lastWeekPrice": 9599
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5702,
            "unit": "₹/quintal",
            "date": "2026-09-05",
            "priceChange": -68,
            "percentChange": -1.2,
            "lastWeekPrice": 5770
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7229,
            "unit": "₹/quintal",
            "date": "2026-09-05",
            "priceChange": 8,
            "percentChange": 0.1,
            "lastWeekPrice": 7221
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-05"
        },
        "thisWeek": {
            "amount": 2.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 13.2,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 413.2,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-03"
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

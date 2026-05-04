// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 4/5/2026, 6:43:57 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-04T01:13:57.743Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9550,
            "unit": "₹/quintal",
            "date": "2026-05-04",
            "priceChange": -49,
            "percentChange": -0.5,
            "lastWeekPrice": 9599
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5769,
            "unit": "₹/quintal",
            "date": "2026-05-04",
            "priceChange": -113,
            "percentChange": -1.9,
            "lastWeekPrice": 5882
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7198,
            "unit": "₹/quintal",
            "date": "2026-05-04",
            "priceChange": 4,
            "percentChange": 0.1,
            "lastWeekPrice": 7194
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-04"
        },
        "thisWeek": {
            "amount": 9.8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 7.1,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 413.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-02"
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

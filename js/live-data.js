// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 7/7/2026, 10:00:58 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-07T04:30:58.541Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9580,
            "unit": "₹/quintal",
            "date": "2026-07-07",
            "priceChange": 128,
            "percentChange": 1.4,
            "lastWeekPrice": 9452
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5774,
            "unit": "₹/quintal",
            "date": "2026-07-07",
            "priceChange": 61,
            "percentChange": 1.1,
            "lastWeekPrice": 5713
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7105,
            "unit": "₹/quintal",
            "date": "2026-07-07",
            "priceChange": -8,
            "percentChange": -0.1,
            "lastWeekPrice": 7113
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-07"
        },
        "thisWeek": {
            "amount": 2.8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 6.9,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 480.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-05"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 1/10/2026, 11:48:34 am
// ============================================

const liveData = {
    "lastUpdated": "2026-10-01T06:18:34.664Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9552,
            "unit": "₹/quintal",
            "date": "2026-10-01",
            "priceChange": 4,
            "percentChange": 0,
            "lastWeekPrice": 9548
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5829,
            "unit": "₹/quintal",
            "date": "2026-10-01",
            "priceChange": 118,
            "percentChange": 2.1,
            "lastWeekPrice": 5711
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7123,
            "unit": "₹/quintal",
            "date": "2026-10-01",
            "priceChange": -12,
            "percentChange": -0.2,
            "lastWeekPrice": 7135
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-10-01"
        },
        "thisWeek": {
            "amount": 3.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 12.1,
            "unit": "mm",
            "period": "October 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 438.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-29"
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

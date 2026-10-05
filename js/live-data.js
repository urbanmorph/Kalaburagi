// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 5/10/2026, 11:31:01 am
// ============================================

const liveData = {
    "lastUpdated": "2026-10-05T06:01:01.339Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9429,
            "unit": "₹/quintal",
            "date": "2026-10-05",
            "priceChange": -113,
            "percentChange": -1.2,
            "lastWeekPrice": 9542
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5789,
            "unit": "₹/quintal",
            "date": "2026-10-05",
            "priceChange": 6,
            "percentChange": 0.1,
            "lastWeekPrice": 5783
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7112,
            "unit": "₹/quintal",
            "date": "2026-10-05",
            "priceChange": -134,
            "percentChange": -1.8,
            "lastWeekPrice": 7246
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 2.4,
            "unit": "mm",
            "date": "2026-10-05"
        },
        "thisWeek": {
            "amount": 6.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 17.3,
            "unit": "mm",
            "period": "October 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 477.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-10-03"
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

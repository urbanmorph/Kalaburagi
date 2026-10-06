// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 6/10/2026, 12:09:36 pm
// ============================================

const liveData = {
    "lastUpdated": "2026-10-06T06:39:36.810Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9446,
            "unit": "₹/quintal",
            "date": "2026-10-06",
            "priceChange": 17,
            "percentChange": 0.2,
            "lastWeekPrice": 9429
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5857,
            "unit": "₹/quintal",
            "date": "2026-10-06",
            "priceChange": 68,
            "percentChange": 1.2,
            "lastWeekPrice": 5789
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7258,
            "unit": "₹/quintal",
            "date": "2026-10-06",
            "priceChange": 146,
            "percentChange": 2.1,
            "lastWeekPrice": 7112
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-10-06"
        },
        "thisWeek": {
            "amount": 0.8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 5.6,
            "unit": "mm",
            "period": "October 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 437.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-10-04"
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

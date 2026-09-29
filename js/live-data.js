// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 29/9/2026, 11:28:13 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-29T05:58:13.157Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9469,
            "unit": "₹/quintal",
            "date": "2026-09-29",
            "priceChange": 55,
            "percentChange": 0.6,
            "lastWeekPrice": 9414
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5769,
            "unit": "₹/quintal",
            "date": "2026-09-29",
            "priceChange": 34,
            "percentChange": 0.6,
            "lastWeekPrice": 5735
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7253,
            "unit": "₹/quintal",
            "date": "2026-09-29",
            "priceChange": 19,
            "percentChange": 0.3,
            "lastWeekPrice": 7234
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-29"
        },
        "thisWeek": {
            "amount": 0.5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 8.5,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 473.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-27"
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

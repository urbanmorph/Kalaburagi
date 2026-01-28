// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 28/1/2026, 6:18:46 am
// ============================================

const liveData = {
    "lastUpdated": "2026-01-28T00:48:46.864Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9497,
            "unit": "₹/quintal",
            "date": "2026-01-28",
            "priceChange": -33,
            "percentChange": -0.3,
            "lastWeekPrice": 9530
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5701,
            "unit": "₹/quintal",
            "date": "2026-01-28",
            "priceChange": -190,
            "percentChange": -3.2,
            "lastWeekPrice": 5891
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7235,
            "unit": "₹/quintal",
            "date": "2026-01-28",
            "priceChange": -49,
            "percentChange": -0.7,
            "lastWeekPrice": 7284
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-01-28"
        },
        "thisWeek": {
            "amount": 8.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 9.7,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 418.7,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-26"
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

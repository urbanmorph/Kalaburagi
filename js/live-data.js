// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 30/1/2026, 6:22:23 am
// ============================================

const liveData = {
    "lastUpdated": "2026-01-30T00:52:23.218Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9585,
            "unit": "₹/quintal",
            "date": "2026-01-30",
            "priceChange": 130,
            "percentChange": 1.4,
            "lastWeekPrice": 9455
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5797,
            "unit": "₹/quintal",
            "date": "2026-01-30",
            "priceChange": -79,
            "percentChange": -1.3,
            "lastWeekPrice": 5876
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7243,
            "unit": "₹/quintal",
            "date": "2026-01-30",
            "priceChange": 41,
            "percentChange": 0.6,
            "lastWeekPrice": 7202
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-01-30"
        },
        "thisWeek": {
            "amount": 9.8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 17,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 469.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-28"
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

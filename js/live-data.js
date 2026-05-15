// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 15/5/2026, 6:47:31 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-15T01:17:31.680Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9445,
            "unit": "₹/quintal",
            "date": "2026-05-15",
            "priceChange": -45,
            "percentChange": -0.5,
            "lastWeekPrice": 9490
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5876,
            "unit": "₹/quintal",
            "date": "2026-05-15",
            "priceChange": 144,
            "percentChange": 2.5,
            "lastWeekPrice": 5732
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7119,
            "unit": "₹/quintal",
            "date": "2026-05-15",
            "priceChange": -20,
            "percentChange": -0.3,
            "lastWeekPrice": 7139
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-15"
        },
        "thisWeek": {
            "amount": 9.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 8.3,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 447.9,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-13"
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

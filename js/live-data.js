// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 14/6/2026, 7:03:26 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-14T01:33:26.426Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9582,
            "unit": "₹/quintal",
            "date": "2026-06-14",
            "priceChange": 119,
            "percentChange": 1.3,
            "lastWeekPrice": 9463
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5805,
            "unit": "₹/quintal",
            "date": "2026-06-14",
            "priceChange": -31,
            "percentChange": -0.5,
            "lastWeekPrice": 5836
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7134,
            "unit": "₹/quintal",
            "date": "2026-06-14",
            "priceChange": -83,
            "percentChange": -1.2,
            "lastWeekPrice": 7217
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 3,
            "unit": "mm",
            "date": "2026-06-14"
        },
        "thisWeek": {
            "amount": 8.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 7.1,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 407.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-12"
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

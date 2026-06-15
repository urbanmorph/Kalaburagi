// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 15/6/2026, 7:05:55 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-15T01:35:55.331Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9504,
            "unit": "₹/quintal",
            "date": "2026-06-15",
            "priceChange": -78,
            "percentChange": -0.8,
            "lastWeekPrice": 9582
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5717,
            "unit": "₹/quintal",
            "date": "2026-06-15",
            "priceChange": -88,
            "percentChange": -1.5,
            "lastWeekPrice": 5805
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7163,
            "unit": "₹/quintal",
            "date": "2026-06-15",
            "priceChange": 29,
            "percentChange": 0.4,
            "lastWeekPrice": 7134
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-15"
        },
        "thisWeek": {
            "amount": 7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 6.9,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 490.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-13"
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

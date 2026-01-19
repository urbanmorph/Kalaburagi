// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 19/1/2026, 6:18:56 am
// ============================================

const liveData = {
    "lastUpdated": "2026-01-19T00:48:56.206Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9543,
            "unit": "₹/quintal",
            "date": "2026-01-19",
            "priceChange": 7,
            "percentChange": 0.1,
            "lastWeekPrice": 9536
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5859,
            "unit": "₹/quintal",
            "date": "2026-01-19",
            "priceChange": 29,
            "percentChange": 0.5,
            "lastWeekPrice": 5830
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7287,
            "unit": "₹/quintal",
            "date": "2026-01-19",
            "priceChange": 108,
            "percentChange": 1.5,
            "lastWeekPrice": 7179
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-01-19"
        },
        "thisWeek": {
            "amount": 3.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 15.4,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 490,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-17"
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

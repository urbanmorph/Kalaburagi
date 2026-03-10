// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 10/3/2026, 6:20:24 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-10T00:50:24.043Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9495,
            "unit": "₹/quintal",
            "date": "2026-03-10",
            "priceChange": 33,
            "percentChange": 0.3,
            "lastWeekPrice": 9462
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5708,
            "unit": "₹/quintal",
            "date": "2026-03-10",
            "priceChange": -109,
            "percentChange": -1.9,
            "lastWeekPrice": 5817
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7240,
            "unit": "₹/quintal",
            "date": "2026-03-10",
            "priceChange": 113,
            "percentChange": 1.6,
            "lastWeekPrice": 7127
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 4.1,
            "unit": "mm",
            "date": "2026-03-10"
        },
        "thisWeek": {
            "amount": 13.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 13.7,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 434.7,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-08"
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

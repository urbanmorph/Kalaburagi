// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 29/3/2026, 6:32:46 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-29T01:02:46.408Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9464,
            "unit": "₹/quintal",
            "date": "2026-03-29",
            "priceChange": -42,
            "percentChange": -0.4,
            "lastWeekPrice": 9506
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5748,
            "unit": "₹/quintal",
            "date": "2026-03-29",
            "priceChange": -89,
            "percentChange": -1.5,
            "lastWeekPrice": 5837
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7163,
            "unit": "₹/quintal",
            "date": "2026-03-29",
            "priceChange": 57,
            "percentChange": 0.8,
            "lastWeekPrice": 7106
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-29"
        },
        "thisWeek": {
            "amount": 7.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 12,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 446,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-27"
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

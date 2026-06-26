// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 26/6/2026, 6:55:57 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-26T01:25:57.132Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9497,
            "unit": "₹/quintal",
            "date": "2026-06-26",
            "priceChange": 80,
            "percentChange": 0.8,
            "lastWeekPrice": 9417
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5764,
            "unit": "₹/quintal",
            "date": "2026-06-26",
            "priceChange": -26,
            "percentChange": -0.4,
            "lastWeekPrice": 5790
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7236,
            "unit": "₹/quintal",
            "date": "2026-06-26",
            "priceChange": -33,
            "percentChange": -0.5,
            "lastWeekPrice": 7269
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-26"
        },
        "thisWeek": {
            "amount": 5.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 11.8,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 495.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-24"
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

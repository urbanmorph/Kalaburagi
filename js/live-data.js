// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 24/5/2026, 6:53:51 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-24T01:23:51.199Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9558,
            "unit": "₹/quintal",
            "date": "2026-05-24",
            "priceChange": 69,
            "percentChange": 0.7,
            "lastWeekPrice": 9489
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5783,
            "unit": "₹/quintal",
            "date": "2026-05-24",
            "priceChange": -89,
            "percentChange": -1.5,
            "lastWeekPrice": 5872
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7213,
            "unit": "₹/quintal",
            "date": "2026-05-24",
            "priceChange": -85,
            "percentChange": -1.2,
            "lastWeekPrice": 7298
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-24"
        },
        "thisWeek": {
            "amount": 2.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 6.6,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 453.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-22"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 2/5/2026, 6:39:22 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-02T01:09:22.181Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9513,
            "unit": "₹/quintal",
            "date": "2026-05-02",
            "priceChange": -31,
            "percentChange": -0.3,
            "lastWeekPrice": 9544
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5808,
            "unit": "₹/quintal",
            "date": "2026-05-02",
            "priceChange": -87,
            "percentChange": -1.5,
            "lastWeekPrice": 5895
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7126,
            "unit": "₹/quintal",
            "date": "2026-05-02",
            "priceChange": -28,
            "percentChange": -0.4,
            "lastWeekPrice": 7154
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 3.8,
            "unit": "mm",
            "date": "2026-05-02"
        },
        "thisWeek": {
            "amount": 13.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 6.9,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 403,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-30"
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

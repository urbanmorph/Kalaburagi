// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 21/9/2026, 10:44:33 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-21T05:14:33.921Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9553,
            "unit": "₹/quintal",
            "date": "2026-09-21",
            "priceChange": -24,
            "percentChange": -0.3,
            "lastWeekPrice": 9577
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5779,
            "unit": "₹/quintal",
            "date": "2026-09-21",
            "priceChange": 10,
            "percentChange": 0.2,
            "lastWeekPrice": 5769
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7138,
            "unit": "₹/quintal",
            "date": "2026-09-21",
            "priceChange": -31,
            "percentChange": -0.4,
            "lastWeekPrice": 7169
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-21"
        },
        "thisWeek": {
            "amount": 5.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 11.8,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 451.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-19"
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

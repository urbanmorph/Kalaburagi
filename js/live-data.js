// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 26/7/2026, 9:34:43 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-26T04:04:43.225Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9525,
            "unit": "₹/quintal",
            "date": "2026-07-26",
            "priceChange": -7,
            "percentChange": -0.1,
            "lastWeekPrice": 9532
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5762,
            "unit": "₹/quintal",
            "date": "2026-07-26",
            "priceChange": -25,
            "percentChange": -0.4,
            "lastWeekPrice": 5787
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7115,
            "unit": "₹/quintal",
            "date": "2026-07-26",
            "priceChange": -173,
            "percentChange": -2.4,
            "lastWeekPrice": 7288
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-26"
        },
        "thisWeek": {
            "amount": 4.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 15.6,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 486,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-24"
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

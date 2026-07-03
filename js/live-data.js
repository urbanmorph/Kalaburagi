// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 3/7/2026, 9:54:18 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-03T04:24:18.637Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9539,
            "unit": "₹/quintal",
            "date": "2026-07-03",
            "priceChange": 4,
            "percentChange": 0,
            "lastWeekPrice": 9535
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5723,
            "unit": "₹/quintal",
            "date": "2026-07-03",
            "priceChange": -159,
            "percentChange": -2.7,
            "lastWeekPrice": 5882
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7208,
            "unit": "₹/quintal",
            "date": "2026-07-03",
            "priceChange": -11,
            "percentChange": -0.2,
            "lastWeekPrice": 7219
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-03"
        },
        "thisWeek": {
            "amount": 8.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.6,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 478.9,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-01"
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

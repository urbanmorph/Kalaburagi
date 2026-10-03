// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 3/10/2026, 11:03:15 am
// ============================================

const liveData = {
    "lastUpdated": "2026-10-03T05:33:15.527Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9516,
            "unit": "₹/quintal",
            "date": "2026-10-03",
            "priceChange": -27,
            "percentChange": -0.3,
            "lastWeekPrice": 9543
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5754,
            "unit": "₹/quintal",
            "date": "2026-10-03",
            "priceChange": 6,
            "percentChange": 0.1,
            "lastWeekPrice": 5748
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7292,
            "unit": "₹/quintal",
            "date": "2026-10-03",
            "priceChange": 40,
            "percentChange": 0.6,
            "lastWeekPrice": 7252
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 2.8,
            "unit": "mm",
            "date": "2026-10-03"
        },
        "thisWeek": {
            "amount": 9.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 12.8,
            "unit": "mm",
            "period": "October 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 444.7,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-10-01"
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

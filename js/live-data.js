// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 25/9/2026, 10:40:37 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-25T05:10:37.110Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9415,
            "unit": "₹/quintal",
            "date": "2026-09-25",
            "priceChange": -23,
            "percentChange": -0.2,
            "lastWeekPrice": 9438
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5819,
            "unit": "₹/quintal",
            "date": "2026-09-25",
            "priceChange": 89,
            "percentChange": 1.6,
            "lastWeekPrice": 5730
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7264,
            "unit": "₹/quintal",
            "date": "2026-09-25",
            "priceChange": 70,
            "percentChange": 1,
            "lastWeekPrice": 7194
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-25"
        },
        "thisWeek": {
            "amount": 8.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 17.4,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 449.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-23"
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

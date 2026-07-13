// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 13/7/2026, 9:37:50 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-13T04:07:50.234Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9592,
            "unit": "₹/quintal",
            "date": "2026-07-13",
            "priceChange": 113,
            "percentChange": 1.2,
            "lastWeekPrice": 9479
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5799,
            "unit": "₹/quintal",
            "date": "2026-07-13",
            "priceChange": -35,
            "percentChange": -0.6,
            "lastWeekPrice": 5834
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7276,
            "unit": "₹/quintal",
            "date": "2026-07-13",
            "priceChange": 170,
            "percentChange": 2.4,
            "lastWeekPrice": 7106
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 2.5,
            "unit": "mm",
            "date": "2026-07-13"
        },
        "thisWeek": {
            "amount": 9.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 12.8,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 482.9,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-11"
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

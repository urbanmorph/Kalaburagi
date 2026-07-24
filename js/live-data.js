// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 24/7/2026, 9:21:54 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-24T03:51:54.401Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9458,
            "unit": "₹/quintal",
            "date": "2026-07-24",
            "priceChange": 28,
            "percentChange": 0.3,
            "lastWeekPrice": 9430
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5733,
            "unit": "₹/quintal",
            "date": "2026-07-24",
            "priceChange": 9,
            "percentChange": 0.2,
            "lastWeekPrice": 5724
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7247,
            "unit": "₹/quintal",
            "date": "2026-07-24",
            "priceChange": 29,
            "percentChange": 0.4,
            "lastWeekPrice": 7218
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-24"
        },
        "thisWeek": {
            "amount": 2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 18.7,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 498.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-22"
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

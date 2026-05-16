// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 16/5/2026, 6:42:33 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-16T01:12:33.498Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9541,
            "unit": "₹/quintal",
            "date": "2026-05-16",
            "priceChange": 96,
            "percentChange": 1,
            "lastWeekPrice": 9445
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5733,
            "unit": "₹/quintal",
            "date": "2026-05-16",
            "priceChange": -143,
            "percentChange": -2.4,
            "lastWeekPrice": 5876
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7287,
            "unit": "₹/quintal",
            "date": "2026-05-16",
            "priceChange": 168,
            "percentChange": 2.4,
            "lastWeekPrice": 7119
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-16"
        },
        "thisWeek": {
            "amount": 7.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 13.9,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 492.2,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-14"
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

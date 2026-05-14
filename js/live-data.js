// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 14/5/2026, 6:49:34 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-14T01:19:34.111Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9490,
            "unit": "₹/quintal",
            "date": "2026-05-14",
            "priceChange": 11,
            "percentChange": 0.1,
            "lastWeekPrice": 9479
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5732,
            "unit": "₹/quintal",
            "date": "2026-05-14",
            "priceChange": -108,
            "percentChange": -1.8,
            "lastWeekPrice": 5840
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7139,
            "unit": "₹/quintal",
            "date": "2026-05-14",
            "priceChange": 2,
            "percentChange": 0,
            "lastWeekPrice": 7137
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-14"
        },
        "thisWeek": {
            "amount": 1.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 15.1,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 410.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-12"
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

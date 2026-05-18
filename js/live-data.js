// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 18/5/2026, 6:52:44 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-18T01:22:44.898Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9502,
            "unit": "₹/quintal",
            "date": "2026-05-18",
            "priceChange": 72,
            "percentChange": 0.8,
            "lastWeekPrice": 9430
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5896,
            "unit": "₹/quintal",
            "date": "2026-05-18",
            "priceChange": 158,
            "percentChange": 2.8,
            "lastWeekPrice": 5738
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7164,
            "unit": "₹/quintal",
            "date": "2026-05-18",
            "priceChange": -85,
            "percentChange": -1.2,
            "lastWeekPrice": 7249
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-18"
        },
        "thisWeek": {
            "amount": 10,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 6.5,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 428.2,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-16"
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

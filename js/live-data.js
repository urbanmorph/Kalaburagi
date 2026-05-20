// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 20/5/2026, 6:54:15 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-20T01:24:15.087Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9469,
            "unit": "₹/quintal",
            "date": "2026-05-20",
            "priceChange": -46,
            "percentChange": -0.5,
            "lastWeekPrice": 9515
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5761,
            "unit": "₹/quintal",
            "date": "2026-05-20",
            "priceChange": 57,
            "percentChange": 1,
            "lastWeekPrice": 5704
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7297,
            "unit": "₹/quintal",
            "date": "2026-05-20",
            "priceChange": 163,
            "percentChange": 2.3,
            "lastWeekPrice": 7134
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-20"
        },
        "thisWeek": {
            "amount": 7.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 10.2,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 468,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-18"
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

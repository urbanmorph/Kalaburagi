// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 19/5/2026, 6:53:01 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-19T01:23:01.970Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9515,
            "unit": "₹/quintal",
            "date": "2026-05-19",
            "priceChange": 13,
            "percentChange": 0.1,
            "lastWeekPrice": 9502
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5704,
            "unit": "₹/quintal",
            "date": "2026-05-19",
            "priceChange": -192,
            "percentChange": -3.3,
            "lastWeekPrice": 5896
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7134,
            "unit": "₹/quintal",
            "date": "2026-05-19",
            "priceChange": -30,
            "percentChange": -0.4,
            "lastWeekPrice": 7164
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-19"
        },
        "thisWeek": {
            "amount": 2.5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 17.8,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 445.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-17"
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

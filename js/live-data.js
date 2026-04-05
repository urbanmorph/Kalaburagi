// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 5/4/2026, 6:33:41 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-05T01:03:41.300Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9423,
            "unit": "₹/quintal",
            "date": "2026-04-05",
            "priceChange": 21,
            "percentChange": 0.2,
            "lastWeekPrice": 9402
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5739,
            "unit": "₹/quintal",
            "date": "2026-04-05",
            "priceChange": -142,
            "percentChange": -2.4,
            "lastWeekPrice": 5881
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7178,
            "unit": "₹/quintal",
            "date": "2026-04-05",
            "priceChange": -46,
            "percentChange": -0.6,
            "lastWeekPrice": 7224
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 1.6,
            "unit": "mm",
            "date": "2026-04-05"
        },
        "thisWeek": {
            "amount": 7.8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 9.5,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 490.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-03"
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

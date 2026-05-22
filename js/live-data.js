// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 22/5/2026, 6:53:17 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-22T01:23:17.754Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9597,
            "unit": "₹/quintal",
            "date": "2026-05-22",
            "priceChange": 127,
            "percentChange": 1.3,
            "lastWeekPrice": 9470
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5792,
            "unit": "₹/quintal",
            "date": "2026-05-22",
            "priceChange": 72,
            "percentChange": 1.3,
            "lastWeekPrice": 5720
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7280,
            "unit": "₹/quintal",
            "date": "2026-05-22",
            "priceChange": 121,
            "percentChange": 1.7,
            "lastWeekPrice": 7159
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-22"
        },
        "thisWeek": {
            "amount": 3.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 10.9,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 409.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-20"
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

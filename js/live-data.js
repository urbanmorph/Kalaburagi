// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 1/4/2026, 6:36:35 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-01T01:06:35.484Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9414,
            "unit": "₹/quintal",
            "date": "2026-04-01",
            "priceChange": -6,
            "percentChange": -0.1,
            "lastWeekPrice": 9420
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5728,
            "unit": "₹/quintal",
            "date": "2026-04-01",
            "priceChange": -48,
            "percentChange": -0.8,
            "lastWeekPrice": 5776
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7180,
            "unit": "₹/quintal",
            "date": "2026-04-01",
            "priceChange": -28,
            "percentChange": -0.4,
            "lastWeekPrice": 7208
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-01"
        },
        "thisWeek": {
            "amount": 2.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 9.3,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 455.5,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-30"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 4/8/2026, 9:16:24 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-04T03:46:24.942Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9572,
            "unit": "₹/quintal",
            "date": "2026-08-04",
            "priceChange": 40,
            "percentChange": 0.4,
            "lastWeekPrice": 9532
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5880,
            "unit": "₹/quintal",
            "date": "2026-08-04",
            "priceChange": 92,
            "percentChange": 1.6,
            "lastWeekPrice": 5788
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7225,
            "unit": "₹/quintal",
            "date": "2026-08-04",
            "priceChange": -57,
            "percentChange": -0.8,
            "lastWeekPrice": 7282
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0.6,
            "unit": "mm",
            "date": "2026-08-04"
        },
        "thisWeek": {
            "amount": 1.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.8,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 420,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-02"
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

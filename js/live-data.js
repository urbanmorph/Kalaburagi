// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 22/1/2026, 6:18:51 am
// ============================================

const liveData = {
    "lastUpdated": "2026-01-22T00:48:51.596Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9520,
            "unit": "₹/quintal",
            "date": "2026-01-22",
            "priceChange": -14,
            "percentChange": -0.1,
            "lastWeekPrice": 9534
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5864,
            "unit": "₹/quintal",
            "date": "2026-01-22",
            "priceChange": -11,
            "percentChange": -0.2,
            "lastWeekPrice": 5875
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7131,
            "unit": "₹/quintal",
            "date": "2026-01-22",
            "priceChange": -58,
            "percentChange": -0.8,
            "lastWeekPrice": 7189
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-01-22"
        },
        "thisWeek": {
            "amount": 2.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 12.5,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 490.2,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-20"
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

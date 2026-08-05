// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 5/8/2026, 9:12:10 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-05T03:42:10.992Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9534,
            "unit": "₹/quintal",
            "date": "2026-08-05",
            "priceChange": -38,
            "percentChange": -0.4,
            "lastWeekPrice": 9572
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5791,
            "unit": "₹/quintal",
            "date": "2026-08-05",
            "priceChange": -89,
            "percentChange": -1.5,
            "lastWeekPrice": 5880
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7161,
            "unit": "₹/quintal",
            "date": "2026-08-05",
            "priceChange": -64,
            "percentChange": -0.9,
            "lastWeekPrice": 7225
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-05"
        },
        "thisWeek": {
            "amount": 8.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 5.4,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 425,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-03"
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

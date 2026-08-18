// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 18/8/2026, 7:26:33 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-18T01:56:33.986Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9565,
            "unit": "₹/quintal",
            "date": "2026-08-18",
            "priceChange": 0,
            "percentChange": 0,
            "lastWeekPrice": 9565
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5853,
            "unit": "₹/quintal",
            "date": "2026-08-18",
            "priceChange": 84,
            "percentChange": 1.5,
            "lastWeekPrice": 5769
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7154,
            "unit": "₹/quintal",
            "date": "2026-08-18",
            "priceChange": -65,
            "percentChange": -0.9,
            "lastWeekPrice": 7219
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-18"
        },
        "thisWeek": {
            "amount": 8.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.9,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 420.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-16"
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

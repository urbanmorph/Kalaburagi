// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 28/8/2026, 5:06:46 pm
// ============================================

const liveData = {
    "lastUpdated": "2026-08-28T11:36:46.028Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9576,
            "unit": "₹/quintal",
            "date": "2026-08-28",
            "priceChange": 16,
            "percentChange": 0.2,
            "lastWeekPrice": 9560
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5780,
            "unit": "₹/quintal",
            "date": "2026-08-28",
            "priceChange": -80,
            "percentChange": -1.4,
            "lastWeekPrice": 5860
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7275,
            "unit": "₹/quintal",
            "date": "2026-08-28",
            "priceChange": 121,
            "percentChange": 1.7,
            "lastWeekPrice": 7154
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-28"
        },
        "thisWeek": {
            "amount": 5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 13.6,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 477.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-26"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 5/5/2026, 6:38:46 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-05T01:08:46.456Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9540,
            "unit": "₹/quintal",
            "date": "2026-05-05",
            "priceChange": -10,
            "percentChange": -0.1,
            "lastWeekPrice": 9550
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5793,
            "unit": "₹/quintal",
            "date": "2026-05-05",
            "priceChange": 24,
            "percentChange": 0.4,
            "lastWeekPrice": 5769
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7256,
            "unit": "₹/quintal",
            "date": "2026-05-05",
            "priceChange": 58,
            "percentChange": 0.8,
            "lastWeekPrice": 7198
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-05"
        },
        "thisWeek": {
            "amount": 2.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 11.4,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 489,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-03"
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

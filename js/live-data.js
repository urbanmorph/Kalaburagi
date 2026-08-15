// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 15/8/2026, 7:25:40 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-15T01:55:40.472Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9553,
            "unit": "₹/quintal",
            "date": "2026-08-15",
            "priceChange": 3,
            "percentChange": 0,
            "lastWeekPrice": 9550
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5749,
            "unit": "₹/quintal",
            "date": "2026-08-15",
            "priceChange": -105,
            "percentChange": -1.8,
            "lastWeekPrice": 5854
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7191,
            "unit": "₹/quintal",
            "date": "2026-08-15",
            "priceChange": 44,
            "percentChange": 0.6,
            "lastWeekPrice": 7147
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-15"
        },
        "thisWeek": {
            "amount": 2,
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
            "amount": 412.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-13"
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

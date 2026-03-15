// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 15/3/2026, 6:32:12 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-15T01:02:12.381Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9519,
            "unit": "₹/quintal",
            "date": "2026-03-15",
            "priceChange": 87,
            "percentChange": 0.9,
            "lastWeekPrice": 9432
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5868,
            "unit": "₹/quintal",
            "date": "2026-03-15",
            "priceChange": 152,
            "percentChange": 2.7,
            "lastWeekPrice": 5716
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7184,
            "unit": "₹/quintal",
            "date": "2026-03-15",
            "priceChange": 43,
            "percentChange": 0.6,
            "lastWeekPrice": 7141
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-15"
        },
        "thisWeek": {
            "amount": 4.5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 15.4,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 484.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-13"
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

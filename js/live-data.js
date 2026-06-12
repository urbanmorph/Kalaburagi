// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 12/6/2026, 7:02:41 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-12T01:32:41.522Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9507,
            "unit": "₹/quintal",
            "date": "2026-06-12",
            "priceChange": -5,
            "percentChange": -0.1,
            "lastWeekPrice": 9512
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5793,
            "unit": "₹/quintal",
            "date": "2026-06-12",
            "priceChange": -105,
            "percentChange": -1.8,
            "lastWeekPrice": 5898
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7138,
            "unit": "₹/quintal",
            "date": "2026-06-12",
            "priceChange": -80,
            "percentChange": -1.1,
            "lastWeekPrice": 7218
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 3.3,
            "unit": "mm",
            "date": "2026-06-12"
        },
        "thisWeek": {
            "amount": 9.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 19.2,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 425.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-10"
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

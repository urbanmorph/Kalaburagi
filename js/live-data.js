// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 13/8/2026, 8:36:10 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-13T03:06:10.204Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9586,
            "unit": "₹/quintal",
            "date": "2026-08-13",
            "priceChange": -9,
            "percentChange": -0.1,
            "lastWeekPrice": 9595
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5758,
            "unit": "₹/quintal",
            "date": "2026-08-13",
            "priceChange": 54,
            "percentChange": 0.9,
            "lastWeekPrice": 5704
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7284,
            "unit": "₹/quintal",
            "date": "2026-08-13",
            "priceChange": 174,
            "percentChange": 2.4,
            "lastWeekPrice": 7110
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-13"
        },
        "thisWeek": {
            "amount": 8.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 7,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 490.9,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-11"
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

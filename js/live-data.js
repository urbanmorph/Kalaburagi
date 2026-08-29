// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 29/8/2026, 12:45:05 pm
// ============================================

const liveData = {
    "lastUpdated": "2026-08-29T07:15:05.839Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9485,
            "unit": "₹/quintal",
            "date": "2026-08-29",
            "priceChange": -91,
            "percentChange": -1,
            "lastWeekPrice": 9576
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5732,
            "unit": "₹/quintal",
            "date": "2026-08-29",
            "priceChange": -48,
            "percentChange": -0.8,
            "lastWeekPrice": 5780
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7100,
            "unit": "₹/quintal",
            "date": "2026-08-29",
            "priceChange": -175,
            "percentChange": -2.4,
            "lastWeekPrice": 7275
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-29"
        },
        "thisWeek": {
            "amount": 9.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 14.2,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 438.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-27"
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

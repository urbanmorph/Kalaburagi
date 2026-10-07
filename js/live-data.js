// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 7/10/2026, 11:46:23 am
// ============================================

const liveData = {
    "lastUpdated": "2026-10-07T06:16:23.396Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9512,
            "unit": "₹/quintal",
            "date": "2026-10-07",
            "priceChange": 66,
            "percentChange": 0.7,
            "lastWeekPrice": 9446
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5817,
            "unit": "₹/quintal",
            "date": "2026-10-07",
            "priceChange": -40,
            "percentChange": -0.7,
            "lastWeekPrice": 5857
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7148,
            "unit": "₹/quintal",
            "date": "2026-10-07",
            "priceChange": -110,
            "percentChange": -1.5,
            "lastWeekPrice": 7258
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-10-07"
        },
        "thisWeek": {
            "amount": 9.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 10.9,
            "unit": "mm",
            "period": "October 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 421.7,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-10-05"
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

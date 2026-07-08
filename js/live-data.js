// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 8/7/2026, 9:22:35 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-08T03:52:35.092Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9458,
            "unit": "₹/quintal",
            "date": "2026-07-08",
            "priceChange": -122,
            "percentChange": -1.3,
            "lastWeekPrice": 9580
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5703,
            "unit": "₹/quintal",
            "date": "2026-07-08",
            "priceChange": -71,
            "percentChange": -1.2,
            "lastWeekPrice": 5774
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7255,
            "unit": "₹/quintal",
            "date": "2026-07-08",
            "priceChange": 150,
            "percentChange": 2.1,
            "lastWeekPrice": 7105
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-08"
        },
        "thisWeek": {
            "amount": 7.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 5.5,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 410.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-06"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 8/2/2026, 6:37:07 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-08T01:07:07.687Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9511,
            "unit": "₹/quintal",
            "date": "2026-02-08",
            "priceChange": -88,
            "percentChange": -0.9,
            "lastWeekPrice": 9599
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5815,
            "unit": "₹/quintal",
            "date": "2026-02-08",
            "priceChange": 41,
            "percentChange": 0.7,
            "lastWeekPrice": 5774
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7291,
            "unit": "₹/quintal",
            "date": "2026-02-08",
            "priceChange": 120,
            "percentChange": 1.7,
            "lastWeekPrice": 7171
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 4.2,
            "unit": "mm",
            "date": "2026-02-08"
        },
        "thisWeek": {
            "amount": 6.9,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 17.2,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 402.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-06"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 4/3/2026, 6:22:53 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-04T00:52:53.318Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9431,
            "unit": "₹/quintal",
            "date": "2026-03-04",
            "priceChange": -20,
            "percentChange": -0.2,
            "lastWeekPrice": 9451
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5746,
            "unit": "₹/quintal",
            "date": "2026-03-04",
            "priceChange": -139,
            "percentChange": -2.4,
            "lastWeekPrice": 5885
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7194,
            "unit": "₹/quintal",
            "date": "2026-03-04",
            "priceChange": -97,
            "percentChange": -1.3,
            "lastWeekPrice": 7291
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-04"
        },
        "thisWeek": {
            "amount": 3.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 14.1,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 462.3,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-02"
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

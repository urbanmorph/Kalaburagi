// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 27/1/2026, 6:19:02 am
// ============================================

const liveData = {
    "lastUpdated": "2026-01-27T00:49:02.101Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9530,
            "unit": "₹/quintal",
            "date": "2026-01-27",
            "priceChange": 94,
            "percentChange": 1,
            "lastWeekPrice": 9436
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5891,
            "unit": "₹/quintal",
            "date": "2026-01-27",
            "priceChange": 172,
            "percentChange": 3,
            "lastWeekPrice": 5719
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7284,
            "unit": "₹/quintal",
            "date": "2026-01-27",
            "priceChange": 128,
            "percentChange": 1.8,
            "lastWeekPrice": 7156
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-01-27"
        },
        "thisWeek": {
            "amount": 4.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 18.7,
            "unit": "mm",
            "period": "January 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 439.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-25"
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

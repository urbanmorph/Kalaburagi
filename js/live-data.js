// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 12/9/2026, 10:20:21 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-12T04:50:21.245Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9464,
            "unit": "₹/quintal",
            "date": "2026-09-12",
            "priceChange": 25,
            "percentChange": 0.3,
            "lastWeekPrice": 9439
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5861,
            "unit": "₹/quintal",
            "date": "2026-09-12",
            "priceChange": 158,
            "percentChange": 2.8,
            "lastWeekPrice": 5703
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7227,
            "unit": "₹/quintal",
            "date": "2026-09-12",
            "priceChange": -8,
            "percentChange": -0.1,
            "lastWeekPrice": 7235
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 4.8,
            "unit": "mm",
            "date": "2026-09-12"
        },
        "thisWeek": {
            "amount": 9.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 11.8,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 462.9,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-10"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 24/9/2026, 10:38:51 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-24T05:08:51.475Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9438,
            "unit": "₹/quintal",
            "date": "2026-09-24",
            "priceChange": 3,
            "percentChange": 0,
            "lastWeekPrice": 9435
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5730,
            "unit": "₹/quintal",
            "date": "2026-09-24",
            "priceChange": -2,
            "percentChange": 0,
            "lastWeekPrice": 5732
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7194,
            "unit": "₹/quintal",
            "date": "2026-09-24",
            "priceChange": 58,
            "percentChange": 0.8,
            "lastWeekPrice": 7136
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-24"
        },
        "thisWeek": {
            "amount": 3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 18.9,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 403.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-22"
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

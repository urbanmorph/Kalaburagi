// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 1/9/2026, 10:56:02 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-01T05:26:02.179Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9600,
            "unit": "₹/quintal",
            "date": "2026-09-01",
            "priceChange": 187,
            "percentChange": 2,
            "lastWeekPrice": 9413
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5854,
            "unit": "₹/quintal",
            "date": "2026-09-01",
            "priceChange": 50,
            "percentChange": 0.9,
            "lastWeekPrice": 5804
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7265,
            "unit": "₹/quintal",
            "date": "2026-09-01",
            "priceChange": 87,
            "percentChange": 1.2,
            "lastWeekPrice": 7178
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 3.8,
            "unit": "mm",
            "date": "2026-09-01"
        },
        "thisWeek": {
            "amount": 6.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 9,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 492,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-30"
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

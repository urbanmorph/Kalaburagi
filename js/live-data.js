// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 14/9/2026, 10:45:24 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-14T05:15:24.750Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9536,
            "unit": "₹/quintal",
            "date": "2026-09-14",
            "priceChange": 45,
            "percentChange": 0.5,
            "lastWeekPrice": 9491
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5739,
            "unit": "₹/quintal",
            "date": "2026-09-14",
            "priceChange": -9,
            "percentChange": -0.2,
            "lastWeekPrice": 5748
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7267,
            "unit": "₹/quintal",
            "date": "2026-09-14",
            "priceChange": 89,
            "percentChange": 1.2,
            "lastWeekPrice": 7178
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-14"
        },
        "thisWeek": {
            "amount": 6.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 18.6,
            "unit": "mm",
            "period": "September 2026",
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
            "date": "2026-09-12"
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

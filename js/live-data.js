// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 13/9/2026, 10:37:51 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-13T05:07:51.498Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9491,
            "unit": "₹/quintal",
            "date": "2026-09-13",
            "priceChange": 27,
            "percentChange": 0.3,
            "lastWeekPrice": 9464
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5748,
            "unit": "₹/quintal",
            "date": "2026-09-13",
            "priceChange": -113,
            "percentChange": -1.9,
            "lastWeekPrice": 5861
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7178,
            "unit": "₹/quintal",
            "date": "2026-09-13",
            "priceChange": -49,
            "percentChange": -0.7,
            "lastWeekPrice": 7227
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-13"
        },
        "thisWeek": {
            "amount": 3.8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 12.5,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 498.2,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-11"
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

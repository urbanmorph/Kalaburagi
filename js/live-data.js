// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 18/9/2026, 10:28:06 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-18T04:58:06.428Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9472,
            "unit": "₹/quintal",
            "date": "2026-09-18",
            "priceChange": 57,
            "percentChange": 0.6,
            "lastWeekPrice": 9415
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5892,
            "unit": "₹/quintal",
            "date": "2026-09-18",
            "priceChange": 97,
            "percentChange": 1.7,
            "lastWeekPrice": 5795
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7282,
            "unit": "₹/quintal",
            "date": "2026-09-18",
            "priceChange": 88,
            "percentChange": 1.2,
            "lastWeekPrice": 7194
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-18"
        },
        "thisWeek": {
            "amount": 6.5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 8.1,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 497.8,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-16"
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

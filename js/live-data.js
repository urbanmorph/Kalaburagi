// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 30/3/2026, 6:32:44 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-30T01:02:44.508Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9435,
            "unit": "₹/quintal",
            "date": "2026-03-30",
            "priceChange": -29,
            "percentChange": -0.3,
            "lastWeekPrice": 9464
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5739,
            "unit": "₹/quintal",
            "date": "2026-03-30",
            "priceChange": -9,
            "percentChange": -0.2,
            "lastWeekPrice": 5748
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7198,
            "unit": "₹/quintal",
            "date": "2026-03-30",
            "priceChange": 35,
            "percentChange": 0.5,
            "lastWeekPrice": 7163
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-03-30"
        },
        "thisWeek": {
            "amount": 7.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 14.9,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 423,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-28"
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

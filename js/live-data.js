// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 30/4/2026, 6:43:16 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-30T01:13:16.285Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9455,
            "unit": "₹/quintal",
            "date": "2026-04-30",
            "priceChange": -92,
            "percentChange": -1,
            "lastWeekPrice": 9547
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5846,
            "unit": "₹/quintal",
            "date": "2026-04-30",
            "priceChange": -17,
            "percentChange": -0.3,
            "lastWeekPrice": 5863
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7111,
            "unit": "₹/quintal",
            "date": "2026-04-30",
            "priceChange": -117,
            "percentChange": -1.6,
            "lastWeekPrice": 7228
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-30"
        },
        "thisWeek": {
            "amount": 1.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 15.9,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 438.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-28"
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

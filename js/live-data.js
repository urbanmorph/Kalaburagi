// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 22/4/2026, 6:33:09 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-22T01:03:09.816Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9578,
            "unit": "₹/quintal",
            "date": "2026-04-22",
            "priceChange": 173,
            "percentChange": 1.8,
            "lastWeekPrice": 9405
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5790,
            "unit": "₹/quintal",
            "date": "2026-04-22",
            "priceChange": 58,
            "percentChange": 1,
            "lastWeekPrice": 5732
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7251,
            "unit": "₹/quintal",
            "date": "2026-04-22",
            "priceChange": -40,
            "percentChange": -0.5,
            "lastWeekPrice": 7291
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-22"
        },
        "thisWeek": {
            "amount": 0.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 5.7,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 467.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-20"
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

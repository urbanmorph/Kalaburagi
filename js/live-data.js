// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 28/9/2026, 11:11:01 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-28T05:41:01.963Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9414,
            "unit": "₹/quintal",
            "date": "2026-09-28",
            "priceChange": -64,
            "percentChange": -0.7,
            "lastWeekPrice": 9478
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5735,
            "unit": "₹/quintal",
            "date": "2026-09-28",
            "priceChange": 34,
            "percentChange": 0.6,
            "lastWeekPrice": 5701
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7234,
            "unit": "₹/quintal",
            "date": "2026-09-28",
            "priceChange": 27,
            "percentChange": 0.4,
            "lastWeekPrice": 7207
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-28"
        },
        "thisWeek": {
            "amount": 9.9,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 6.5,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 445.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-26"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 30/9/2026, 11:17:56 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-30T05:47:56.541Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9548,
            "unit": "₹/quintal",
            "date": "2026-09-30",
            "priceChange": 79,
            "percentChange": 0.8,
            "lastWeekPrice": 9469
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5711,
            "unit": "₹/quintal",
            "date": "2026-09-30",
            "priceChange": -58,
            "percentChange": -1,
            "lastWeekPrice": 5769
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7135,
            "unit": "₹/quintal",
            "date": "2026-09-30",
            "priceChange": -118,
            "percentChange": -1.6,
            "lastWeekPrice": 7253
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-30"
        },
        "thisWeek": {
            "amount": 7.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 6.7,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 450.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-28"
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

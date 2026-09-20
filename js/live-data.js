// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 20/9/2026, 10:39:25 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-20T05:09:25.449Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9577,
            "unit": "₹/quintal",
            "date": "2026-09-20",
            "priceChange": 44,
            "percentChange": 0.5,
            "lastWeekPrice": 9533
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5769,
            "unit": "₹/quintal",
            "date": "2026-09-20",
            "priceChange": 10,
            "percentChange": 0.2,
            "lastWeekPrice": 5759
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7169,
            "unit": "₹/quintal",
            "date": "2026-09-20",
            "priceChange": 5,
            "percentChange": 0.1,
            "lastWeekPrice": 7164
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-20"
        },
        "thisWeek": {
            "amount": 6.6,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 14.1,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 490.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-18"
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

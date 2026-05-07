// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 7/5/2026, 6:43:26 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-07T01:13:26.094Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9495,
            "unit": "₹/quintal",
            "date": "2026-05-07",
            "priceChange": 15,
            "percentChange": 0.2,
            "lastWeekPrice": 9480
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5821,
            "unit": "₹/quintal",
            "date": "2026-05-07",
            "priceChange": 97,
            "percentChange": 1.7,
            "lastWeekPrice": 5724
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7244,
            "unit": "₹/quintal",
            "date": "2026-05-07",
            "priceChange": 112,
            "percentChange": 1.6,
            "lastWeekPrice": 7132
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-07"
        },
        "thisWeek": {
            "amount": 9.9,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 12,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 466.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-05"
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

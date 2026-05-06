// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 6/5/2026, 6:39:17 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-06T01:09:17.138Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9480,
            "unit": "₹/quintal",
            "date": "2026-05-06",
            "priceChange": -60,
            "percentChange": -0.6,
            "lastWeekPrice": 9540
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5724,
            "unit": "₹/quintal",
            "date": "2026-05-06",
            "priceChange": -69,
            "percentChange": -1.2,
            "lastWeekPrice": 5793
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7132,
            "unit": "₹/quintal",
            "date": "2026-05-06",
            "priceChange": -124,
            "percentChange": -1.7,
            "lastWeekPrice": 7256
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-06"
        },
        "thisWeek": {
            "amount": 8.5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.9,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 485.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-04"
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

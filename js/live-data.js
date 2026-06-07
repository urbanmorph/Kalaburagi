// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 7/6/2026, 7:00:12 am
// ============================================

const liveData = {
    "lastUpdated": "2026-06-07T01:30:12.984Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9537,
            "unit": "₹/quintal",
            "date": "2026-06-07",
            "priceChange": -21,
            "percentChange": -0.2,
            "lastWeekPrice": 9558
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5719,
            "unit": "₹/quintal",
            "date": "2026-06-07",
            "priceChange": -101,
            "percentChange": -1.7,
            "lastWeekPrice": 5820
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7255,
            "unit": "₹/quintal",
            "date": "2026-06-07",
            "priceChange": 46,
            "percentChange": 0.6,
            "lastWeekPrice": 7209
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-06-07"
        },
        "thisWeek": {
            "amount": 4.5,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 19.5,
            "unit": "mm",
            "period": "June 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 451.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-06-05"
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

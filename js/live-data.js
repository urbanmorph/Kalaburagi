// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 2/2/2026, 6:25:48 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-02T00:55:48.216Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9438,
            "unit": "₹/quintal",
            "date": "2026-02-02",
            "priceChange": 16,
            "percentChange": 0.2,
            "lastWeekPrice": 9422
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5748,
            "unit": "₹/quintal",
            "date": "2026-02-02",
            "priceChange": 1,
            "percentChange": 0,
            "lastWeekPrice": 5747
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7265,
            "unit": "₹/quintal",
            "date": "2026-02-02",
            "priceChange": 135,
            "percentChange": 1.9,
            "lastWeekPrice": 7130
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-02"
        },
        "thisWeek": {
            "amount": 4.7,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 14.9,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 410.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-01-31"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 19/2/2026, 6:26:00 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-19T00:56:00.640Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9548,
            "unit": "₹/quintal",
            "date": "2026-02-19",
            "priceChange": 30,
            "percentChange": 0.3,
            "lastWeekPrice": 9518
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5805,
            "unit": "₹/quintal",
            "date": "2026-02-19",
            "priceChange": -39,
            "percentChange": -0.7,
            "lastWeekPrice": 5844
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7105,
            "unit": "₹/quintal",
            "date": "2026-02-19",
            "priceChange": -123,
            "percentChange": -1.7,
            "lastWeekPrice": 7228
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-19"
        },
        "thisWeek": {
            "amount": 0.8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.8,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 482.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-17"
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

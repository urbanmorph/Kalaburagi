// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 26/9/2026, 10:46:15 am
// ============================================

const liveData = {
    "lastUpdated": "2026-09-26T05:16:15.562Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9534,
            "unit": "₹/quintal",
            "date": "2026-09-26",
            "priceChange": 119,
            "percentChange": 1.3,
            "lastWeekPrice": 9415
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5728,
            "unit": "₹/quintal",
            "date": "2026-09-26",
            "priceChange": -91,
            "percentChange": -1.6,
            "lastWeekPrice": 5819
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7285,
            "unit": "₹/quintal",
            "date": "2026-09-26",
            "priceChange": 21,
            "percentChange": 0.3,
            "lastWeekPrice": 7264
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-09-26"
        },
        "thisWeek": {
            "amount": 6.1,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 16.6,
            "unit": "mm",
            "period": "September 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 413.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-09-24"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 16/7/2026, 9:15:43 am
// ============================================

const liveData = {
    "lastUpdated": "2026-07-16T03:45:43.164Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9430,
            "unit": "₹/quintal",
            "date": "2026-07-16",
            "priceChange": -168,
            "percentChange": -1.8,
            "lastWeekPrice": 9598
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5746,
            "unit": "₹/quintal",
            "date": "2026-07-16",
            "priceChange": -38,
            "percentChange": -0.7,
            "lastWeekPrice": 5784
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7147,
            "unit": "₹/quintal",
            "date": "2026-07-16",
            "priceChange": -38,
            "percentChange": -0.5,
            "lastWeekPrice": 7185
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-07-16"
        },
        "thisWeek": {
            "amount": 7.2,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 7.8,
            "unit": "mm",
            "period": "July 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 460.7,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-07-14"
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

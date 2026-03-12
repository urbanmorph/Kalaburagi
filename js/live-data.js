// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 12/3/2026, 6:18:58 am
// ============================================

const liveData = {
    "lastUpdated": "2026-03-12T00:48:58.644Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9417,
            "unit": "₹/quintal",
            "date": "2026-03-12",
            "priceChange": -53,
            "percentChange": -0.6,
            "lastWeekPrice": 9470
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5883,
            "unit": "₹/quintal",
            "date": "2026-03-12",
            "priceChange": 156,
            "percentChange": 2.7,
            "lastWeekPrice": 5727
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7286,
            "unit": "₹/quintal",
            "date": "2026-03-12",
            "priceChange": 174,
            "percentChange": 2.4,
            "lastWeekPrice": 7112
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 2.5,
            "unit": "mm",
            "date": "2026-03-12"
        },
        "thisWeek": {
            "amount": 8.8,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 14.2,
            "unit": "mm",
            "period": "March 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 409.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-03-10"
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

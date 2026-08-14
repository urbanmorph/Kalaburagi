// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 14/8/2026, 8:35:04 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-14T03:05:04.970Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9550,
            "unit": "₹/quintal",
            "date": "2026-08-14",
            "priceChange": -36,
            "percentChange": -0.4,
            "lastWeekPrice": 9586
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5854,
            "unit": "₹/quintal",
            "date": "2026-08-14",
            "priceChange": 96,
            "percentChange": 1.7,
            "lastWeekPrice": 5758
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7147,
            "unit": "₹/quintal",
            "date": "2026-08-14",
            "priceChange": -137,
            "percentChange": -1.9,
            "lastWeekPrice": 7284
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-14"
        },
        "thisWeek": {
            "amount": 5.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 19.6,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 421.1,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-12"
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

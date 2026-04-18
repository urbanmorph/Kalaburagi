// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 18/4/2026, 6:30:29 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-18T01:00:29.658Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9496,
            "unit": "₹/quintal",
            "date": "2026-04-18",
            "priceChange": -25,
            "percentChange": -0.3,
            "lastWeekPrice": 9521
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5716,
            "unit": "₹/quintal",
            "date": "2026-04-18",
            "priceChange": -33,
            "percentChange": -0.6,
            "lastWeekPrice": 5749
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7135,
            "unit": "₹/quintal",
            "date": "2026-04-18",
            "priceChange": 0,
            "percentChange": 0,
            "lastWeekPrice": 7135
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-18"
        },
        "thisWeek": {
            "amount": 1.9,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 13.8,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 496.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-16"
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

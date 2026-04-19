// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 19/4/2026, 6:38:14 am
// ============================================

const liveData = {
    "lastUpdated": "2026-04-19T01:08:14.292Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9483,
            "unit": "₹/quintal",
            "date": "2026-04-19",
            "priceChange": -13,
            "percentChange": -0.1,
            "lastWeekPrice": 9496
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5881,
            "unit": "₹/quintal",
            "date": "2026-04-19",
            "priceChange": 165,
            "percentChange": 2.9,
            "lastWeekPrice": 5716
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7126,
            "unit": "₹/quintal",
            "date": "2026-04-19",
            "priceChange": -9,
            "percentChange": -0.1,
            "lastWeekPrice": 7135
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-04-19"
        },
        "thisWeek": {
            "amount": 7.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 6.7,
            "unit": "mm",
            "period": "April 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 478.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-04-17"
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

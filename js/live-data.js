// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 20/2/2026, 6:22:01 am
// ============================================

const liveData = {
    "lastUpdated": "2026-02-20T00:52:01.004Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9434,
            "unit": "₹/quintal",
            "date": "2026-02-20",
            "priceChange": -114,
            "percentChange": -1.2,
            "lastWeekPrice": 9548
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5846,
            "unit": "₹/quintal",
            "date": "2026-02-20",
            "priceChange": 41,
            "percentChange": 0.7,
            "lastWeekPrice": 5805
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7176,
            "unit": "₹/quintal",
            "date": "2026-02-20",
            "priceChange": 71,
            "percentChange": 1,
            "lastWeekPrice": 7105
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-02-20"
        },
        "thisWeek": {
            "amount": 4.3,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 7.8,
            "unit": "mm",
            "period": "February 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 451.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-02-18"
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

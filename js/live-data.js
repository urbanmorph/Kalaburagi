// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 29/5/2026, 6:54:56 am
// ============================================

const liveData = {
    "lastUpdated": "2026-05-29T01:24:56.096Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9585,
            "unit": "₹/quintal",
            "date": "2026-05-29",
            "priceChange": -8,
            "percentChange": -0.1,
            "lastWeekPrice": 9593
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5865,
            "unit": "₹/quintal",
            "date": "2026-05-29",
            "priceChange": 46,
            "percentChange": 0.8,
            "lastWeekPrice": 5819
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7143,
            "unit": "₹/quintal",
            "date": "2026-05-29",
            "priceChange": 4,
            "percentChange": 0.1,
            "lastWeekPrice": 7139
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-05-29"
        },
        "thisWeek": {
            "amount": 8.4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 12.4,
            "unit": "mm",
            "period": "May 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 477.4,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-05-27"
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

// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: 30/8/2026, 11:08:00 am
// ============================================

const liveData = {
    "lastUpdated": "2026-08-30T05:38:00.055Z",
    "commodityPrices": {
        "turDal": {
            "market": "Kalaburagi APMC",
            "price": 9495,
            "unit": "₹/quintal",
            "date": "2026-08-30",
            "priceChange": 10,
            "percentChange": 0.1,
            "lastWeekPrice": 9485
        },
        "bengalGram": {
            "market": "Kalaburagi APMC",
            "price": 5856,
            "unit": "₹/quintal",
            "date": "2026-08-30",
            "priceChange": 124,
            "percentChange": 2.2,
            "lastWeekPrice": 5732
        },
        "greenGram": {
            "market": "Kalaburagi APMC",
            "price": 7272,
            "unit": "₹/quintal",
            "date": "2026-08-30",
            "priceChange": 172,
            "percentChange": 2.4,
            "lastWeekPrice": 7100
        }
    },
    "rainfall": {
        "district": "Kalaburagi",
        "today": {
            "amount": 0,
            "unit": "mm",
            "date": "2026-08-30"
        },
        "thisWeek": {
            "amount": 4,
            "unit": "mm",
            "period": "Last 7 days"
        },
        "thisMonth": {
            "amount": 6,
            "unit": "mm",
            "period": "August 2026",
            "normalAmount": 8,
            "deviation": 25
        },
        "thisSeason": {
            "amount": 400.6,
            "unit": "mm",
            "period": "Jun-Dec 2024",
            "normalAmount": 528,
            "deviation": -15.7,
            "status": "Deficient"
        },
        "lastRainfall": {
            "amount": 2.5,
            "date": "2026-08-28"
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

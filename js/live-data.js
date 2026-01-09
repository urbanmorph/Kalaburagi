// ============================================
// Live Data Feed - Auto-updated by GitHub Actions
// Last Updated: Will be replaced by automation
// ============================================

const liveData = {
    lastUpdated: "2025-01-09T12:00:00+05:30",
    
    // Commodity Prices (Agmarknet API)
    commodityPrices: {
        turDal: {
            market: "Kalaburagi APMC",
            price: 9500, // Rs per quintal
            priceChange: +150,
            percentChange: +1.6,
            lastWeekPrice: 9350,
            unit: "₹/quintal",
            date: "2025-01-09"
        },
        bengalGram: {
            market: "Kalaburagi APMC",
            price: 5800,
            priceChange: -50,
            percentChange: -0.9,
            lastWeekPrice: 5850,
            unit: "₹/quintal",
            date: "2025-01-09"
        },
        greenGram: {
            market: "Kalaburagi APMC",
            price: 7200,
            priceChange: +100,
            percentChange: +1.4,
            lastWeekPrice: 7100,
            unit: "₹/quintal",
            date: "2025-01-09"
        }
    },
    
    // Rainfall Data (IMD API)
    rainfall: {
        district: "Kalaburagi",
        today: {
            amount: 0,
            unit: "mm",
            date: "2025-01-09"
        },
        thisWeek: {
            amount: 5.2,
            unit: "mm",
            period: "Last 7 days"
        },
        thisMonth: {
            amount: 12.5,
            unit: "mm",
            period: "January 2025",
            normalAmount: 8.0,
            deviation: +56.3
        },
        thisSeason: {
            amount: 445.2,
            unit: "mm",
            period: "Jun-Dec 2024",
            normalAmount: 528.0,
            deviation: -15.7,
            status: "Deficient"
        },
        lastRainfall: {
            amount: 2.5,
            date: "2025-01-07"
        }
    },
    
    // Data quality indicators
    dataQuality: {
        commodityPrices: {
            status: "live",
            source: "Agmarknet API",
            confidence: "high"
        },
        rainfall: {
            status: "live",
            source: "IMD API",
            confidence: "high"
        }
    }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = liveData;
}

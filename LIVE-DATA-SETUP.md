# Live Data Automation - Setup Guide

## 📊 What Gets Updated Automatically

This dashboard fetches live data daily at 6:00 AM IST:

### **Commodity Prices (Agmarknet API)**
- Tur Dal (Arhar)
- Bengal Gram (Chana)
- Green Gram (Moong)

Each showing:
- Current price (₹/quintal)
- Price change from yesterday
- Percentage change
- Market: Kalaburagi APMC

### **Rainfall Data (IMD API)**
- Today's rainfall
- This week's cumulative
- This month vs. normal
- Monsoon season total
- Deficit/Normal/Excess status

---

## 🔄 How It Works

### **Architecture:**

```
GitHub Actions (Daily at 6 AM IST)
     ↓
Run: scripts/update-live-data.js
     ↓
Fetch from APIs:
  - Agmarknet (Commodity Prices)
  - IMD (Rainfall Data)
     ↓
Update: js/live-data.js
     ↓
Commit & Push to GitHub
     ↓
GitHub Pages auto-deploys
     ↓
Dashboard shows fresh data
```

### **Files Involved:**

1. **`.github/workflows/update-live-data.yml`** - GitHub Actions workflow
2. **`scripts/update-live-data.js`** - Data fetching script
3. **`js/live-data.js`** - Live data store (auto-updated)
4. **`js/app.js`** - Renders live data widget

---

## ⚙️ Setup Instructions

### **1. Enable GitHub Actions**

GitHub Actions should be enabled by default. Verify at:
```
https://github.com/urbanmorph/Kalaburagi/actions
```

### **2. Verify Workflow File**

Check that `.github/workflows/update-live-data.yml` exists and is configured:
- Runs daily at 00:30 UTC (6:00 AM IST)
- Can be triggered manually via "Run workflow" button
- Commits updates as `github-actions[bot]`

### **3. Test the Automation**

#### **Manual Trigger (Recommended First Test):**
1. Go to: https://github.com/urbanmorph/Kalaburagi/actions
2. Click "Update Live Data" workflow
3. Click "Run workflow" → "Run workflow"
4. Wait 1-2 minutes
5. Check that `js/live-data.js` was updated with a new commit

#### **Local Test:**
```bash
cd /Users/sathya/Documents/GitHub/Kalaburagi
node scripts/update-live-data.js
```

This will:
- Fetch latest data
- Update `js/live-data.js`
- Show summary in terminal

### **4. Verify Dashboard Display**

After data update, check the dashboard:
1. Open: https://urbanmorph.github.io/Kalaburagi/
2. Go to "Command Center" tab
3. See "🔴 Live Market & Weather Data" section
4. Verify:
   - Commodity prices showing
   - Rainfall data displaying
   - "Updated: [timestamp]" is recent

---

## 🔧 Configuration

### **Change Update Schedule:**

Edit `.github/workflows/update-live-data.yml`:

```yaml
schedule:
  - cron: '30 0 * * *'  # 6:00 AM IST daily
```

Cron format: `minute hour day month weekday`

Examples:
- `0 0 * * *` - Midnight IST (6:30 PM UTC)
- `0 0,12 * * *` - Twice daily (6:30 AM & PM UTC)
- `0 0 * * 1` - Monday only

**Note:** GitHub Actions uses UTC timezone. IST = UTC + 5:30

### **Add API Keys (When Available):**

When you get actual API access:

1. Go to: https://github.com/urbanmorph/Kalaburagi/settings/secrets/actions
2. Click "New repository secret"
3. Add:
   - `AGMARKNET_API_KEY`
   - `IMD_API_KEY`

4. Update `scripts/update-live-data.js`:
```javascript
const apiKey = process.env.AGMARKNET_API_KEY;
// Use in API calls
```

---

## 🚨 Troubleshooting

### **Workflow Not Running:**

Check:
1. GitHub Actions enabled?
2. Workflow file syntax correct? (YAML is sensitive to indentation)
3. Any error messages in Actions tab?

### **Data Not Updating:**

Check:
1. Workflow ran successfully? (green checkmark)
2. Commit was created by `github-actions[bot]`?
3. `js/live-data.js` file modified recently?
4. Browser cache cleared? (Hard refresh: Cmd+Shift+R)

### **API Errors:**

Current implementation uses **sample data** that simulates real APIs. When connecting to actual APIs:

**Agmarknet:**
- May require registration: https://agmarknet.gov.in/
- Might need web scraping if no API available
- Alternative: Manual daily updates via admin panel (future feature)

**IMD:**
- API documentation: https://mausam.imd.gov.in/
- May require registration for automated access
- Alternative: Use IMD open data portal with manual parsing

---

## 📈 Future Enhancements

### **Phase 2: Real API Integration**

When API access is secured:

1. **Agmarknet API:**
   - Register at: https://agmarknet.gov.in/
   - Get API credentials
   - Update fetch logic in `update-live-data.js`

2. **IMD API:**
   - Contact IMD for API access
   - Integrate real-time rainfall data
   - Add forecast data (7-day outlook)

### **Phase 3: Additional Data Sources**

- **Bank deposit data** (SLBC monthly reports)
- **GST collections** (Commercial taxes dept)
- **Employment data** (ESIC/EPFO)
- **Fuel prices** (Indian Oil API)
- **Gold/Silver prices** (Public APIs available)

---

## 📞 Support

**If automation stops working:**

1. Check GitHub Actions logs for errors
2. Verify API endpoints are accessible
3. Check if API rate limits hit
4. Manual fallback: Update `js/live-data.js` directly

**For questions:**
- GitHub Issues: https://github.com/urbanmorph/Kalaburagi/issues
- Email: dashboard@kalaburagi.nic.in

---

## ✅ Success Checklist

- [ ] GitHub Actions workflow running daily
- [ ] `js/live-data.js` updates automatically
- [ ] Dashboard displays live data
- [ ] Timestamps show recent updates
- [ ] Price changes calculate correctly
- [ ] Rainfall data displays properly
- [ ] Mobile view works well

**Last Updated:** January 2025  
**Status:** ✅ Operational (Sample Data Mode)

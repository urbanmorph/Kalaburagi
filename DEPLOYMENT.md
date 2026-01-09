# 🚀 Quick Deployment Guide to GitHub Pages

## Step 1: Commit Your Code

Run these commands in Terminal:

```bash
cd /Users/sathya/Documents/GitHub/Kalaburagi

# Add all files
git add .

# Commit with a message
git commit -m "Initial commit: Kalaburagi Development Dashboard MVP"
```

## Step 2: Connect to GitHub (if not already connected)

If this is a new repository:

```bash
# Create a new repository on GitHub.com first, then:
git remote add origin https://github.com/[YOUR_USERNAME]/Kalaburagi.git
git branch -M main
```

If already connected:
```bash
# Just push
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to: `https://github.com/[YOUR_USERNAME]/Kalaburagi`
2. Click **Settings** (top navigation)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** / **/(root)**
   - Click **Save**

## Step 4: Access Your Dashboard

Your dashboard will be live at:
```
https://[YOUR_USERNAME].github.io/Kalaburagi/
```

⏱️ **Wait time:** 2-5 minutes for first deployment

## 🔄 Updating the Dashboard

Whenever you make changes:

```bash
cd /Users/sathya/Documents/GitHub/Kalaburagi
git add .
git commit -m "Update: [describe your changes]"
git push origin main
```

Changes will be live in 1-2 minutes.

## 📝 Quick Data Updates

To update metrics without touching code:

1. Open `/js/data.js`
2. Find the metric you want to update
3. Change the values
4. Save, commit, and push

Example - Update irrigation coverage:
```javascript
{
    title: "Irrigation Coverage",
    current: "115,000 ha",  // ← Changed from 111,200
    percentage: 13.0,        // ← Changed from 12.5
    // ...
}
```

## 🆘 Troubleshooting

### Dashboard not loading?
- Check GitHub Actions tab for build status
- Make sure all files are pushed: `git status`
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### 404 Error?
- Verify GitHub Pages is enabled in Settings → Pages
- Check that branch is set to `main` and folder to `/(root)`
- URL should be: `https://[username].github.io/Kalaburagi/`

### Styling broken?
- Check browser console for errors (F12)
- Verify all files are committed: `git ls-files`

## 📱 Share with District Officers

Once deployed, share this link:
```
https://[YOUR_USERNAME].github.io/Kalaburagi/
```

Works on:
- ✅ Desktop computers
- ✅ Tablets  
- ✅ Mobile phones (iOS and Android)
- ✅ Even works offline after first load!

## 🎨 Custom Domain (Optional)

To use a custom domain like `dashboard.kalaburagi.gov.in`:

1. Add CNAME file to repository:
   ```bash
   echo "dashboard.kalaburagi.gov.in" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. Configure DNS:
   - Add CNAME record pointing to: `[username].github.io`
   - Wait for DNS propagation (1-24 hours)

---

**Need help?** The dashboard is pure HTML/CSS/JS - any web developer can help troubleshoot.

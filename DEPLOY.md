# 🚀 Deployment Guide - Kalaburagi Dashboard

This guide provides step-by-step instructions for deploying the Kalaburagi Development Dashboard to GitHub Pages.

---

## Prerequisites

- Git installed on your computer
- A GitHub account
- Terminal/Command Prompt access

---

## Deployment Steps

### Step 1: Verify Files

Ensure all files are present in `/Users/sathya/Documents/GitHub/Kalaburagi/`:

```
Kalaburagi/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── data.js
│   └── app.js
├── README.md
├── DEPLOY.md (this file)
└── .gitignore
```

### Step 2: Initialize Git Repository

```bash
cd /Users/sathya/Documents/GitHub/Kalaburagi

# Initialize git (if not already done)
git init

# Check status
git status

# Add all files
git add .

# Commit
git commit -m "Initial commit: Kalaburagi Development Dashboard MVP v1.0"
```

### Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Fill in details:
   - **Repository name:** `Kalaburagi`
   - **Description:** "Development monitoring dashboard for Kalaburagi District, Karnataka"
   - **Visibility:** Public (recommended for GitHub Pages)
   - **DO NOT** check "Add a README file" (we already have one)
   - **DO NOT** add .gitignore (we already have one)
   - **License:** MIT (optional)

3. Click "Create repository"

### Step 4: Connect Local to GitHub

GitHub will show you commands. Use these:

```bash
# Add remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/Kalaburagi.git

# Verify remote
git remote -v

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Expected output:**
```
Enumerating objects: 10, done.
Counting objects: 100% (10/10), done.
Delta compression using up to 8 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (10/10), 50.23 KiB | 5.02 MiB/s, done.
Total 10 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/YOUR_USERNAME/Kalaburagi.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub:
   `https://github.com/YOUR_USERNAME/Kalaburagi`

2. Click **Settings** (top navigation)

3. Scroll down to **Pages** (left sidebar)

4. Under "Build and deployment":
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`

5. Click **Save**

6. Wait 1-2 minutes for deployment

### Step 6: Access Your Dashboard

Your dashboard will be live at:
```
https://YOUR_USERNAME.github.io/Kalaburagi/
```

**Example:**
If your GitHub username is `sathyakr`, the URL would be:
```
https://sathyakr.github.io/Kalaburagi/
```

---

## Verification Checklist

After deployment, verify these:

- [ ] Dashboard loads without errors
- [ ] All 4 tabs work (Command Center, Baseline, Roadmap, Sources)
- [ ] KPI cards display correctly
- [ ] Progress bars animate
- [ ] Navigation buttons switch tabs
- [ ] Mobile view works (test by resizing browser)
- [ ] All fonts load (Inter from Google Fonts)

---

## Updating the Dashboard

### Method 1: Via Git Command Line

```bash
# Make changes to files
# For example, edit js/data.js to update KPI values

# Check what changed
git status
git diff

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Update Q4 2024 data: irrigation coverage, credit flow"

# Push to GitHub
git push origin main

# GitHub Pages will auto-deploy in 1-2 minutes
```

### Method 2: Via GitHub Web Interface

1. Go to your repository on GitHub
2. Navigate to the file you want to edit (e.g., `js/data.js`)
3. Click the pencil icon (✏️) to edit
4. Make changes
5. Scroll to bottom, add commit message
6. Click "Commit changes"
7. GitHub Pages will auto-deploy

---

## Custom Domain (Optional)

To use a custom domain like `dashboard.kalaburagi.gov.in`:

### Step 1: Configure DNS

Add DNS records with your domain provider:

```
Type: CNAME
Name: dashboard
Value: YOUR_USERNAME.github.io
TTL: 3600
```

### Step 2: Configure GitHub Pages

1. Go to repository Settings → Pages
2. Under "Custom domain", enter: `dashboard.kalaburagi.gov.in`
3. Click Save
4. Check "Enforce HTTPS"
5. Wait 24 hours for DNS propagation

---

## Troubleshooting

### Issue: 404 Error

**Cause:** GitHub Pages not enabled or wrong branch selected

**Solution:**
1. Go to Settings → Pages
2. Verify Branch is set to `main` and folder is `/ (root)`
3. Save and wait 2 minutes

### Issue: Styles not loading

**Cause:** Incorrect file paths

**Solution:**
1. Verify `index.html` has:
   ```html
   <link rel="stylesheet" href="css/styles.css">
   <script src="js/data.js"></script>
   <script src="js/app.js"></script>
   ```
2. Check file names match exactly (case-sensitive)

### Issue: Data not showing

**Cause:** JavaScript error

**Solution:**
1. Open browser Developer Tools (F12)
2. Check Console tab for errors
3. Verify `js/data.js` loads correctly
4. Check `window.dashboardData` is defined in console

### Issue: Slow loading

**Cause:** Large file sizes or slow CDN

**Solution:**
1. Optimize images (if any)
2. Minify CSS/JS (for production)
3. Use CDN for external resources

---

## Testing Locally Before Deployment

### Option 1: Open Directly (Simplest)

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### Option 2: Local Server (Recommended)

**Python 3:**
```bash
cd /Users/sathya/Documents/GitHub/Kalaburagi
python3 -m http.server 8000
# Visit: http://localhost:8000
```

**Node.js (if installed):**
```bash
npx http-server -p 8000
# Visit: http://localhost:8000
```

**PHP (if installed):**
```bash
php -S localhost:8000
# Visit: http://localhost:8000
```

---

## Monitoring & Analytics

### Add Google Analytics (Optional)

1. Get tracking ID from Google Analytics
2. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Track Usage

Monitor in GitHub Insights:
- Repository → Insights → Traffic
- View page views, unique visitors
- See referring sites

---

## Backup Strategy

### Automatic Backups

Git serves as automatic backup:
- Every commit is a backup point
- Full history preserved
- Can revert to any previous version

### Manual Backups

```bash
# Create backup
cd /Users/sathya/Documents/GitHub
zip -r Kalaburagi-backup-$(date +%Y%m%d).zip Kalaburagi/

# Or use tar
tar -czf Kalaburagi-backup-$(date +%Y%m%d).tar.gz Kalaburagi/
```

---

## Performance Optimization

For future improvements:

1. **Minify Files:**
   ```bash
   # Using online tools or:
   npm install -g minify
   minify css/styles.css > css/styles.min.css
   minify js/app.js > js/app.min.js
   ```

2. **Enable Compression:**
   GitHub Pages automatically serves gzipped files

3. **Optimize Images:**
   Use WebP format, compress PNGs/JPEGs

4. **Use CDN:**
   External resources (fonts, icons) already on CDN

---

## Security Best Practices

1. **No Sensitive Data:**
   - Never commit API keys
   - Never commit passwords
   - Never commit personal data

2. **HTTPS Only:**
   - GitHub Pages enforces HTTPS
   - Check "Enforce HTTPS" in settings

3. **Regular Updates:**
   - Update dependencies (if any)
   - Keep data current
   - Review access logs

---

## Support & Help

**Documentation:**
- Main README: `README.md`
- This deployment guide: `DEPLOY.md`

**Community:**
- GitHub Issues: Report bugs
- GitHub Discussions: Ask questions

**Official Support:**
- Email: dashboard@kalaburagi.nic.in
- Phone: 1800-XXX-XXXX

---

## Quick Reference Commands

```bash
# Clone existing repository
git clone https://github.com/YOUR_USERNAME/Kalaburagi.git

# Pull latest changes
git pull origin main

# Create new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# Merge branch
git merge feature/new-feature

# View commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Force push (use carefully!)
git push --force origin main
```

---

## Deployment Checklist

Before each deployment:

- [ ] Test locally in multiple browsers
- [ ] Check mobile responsiveness
- [ ] Verify all data is current
- [ ] Update "Last Updated" date
- [ ] Check for JavaScript errors in console
- [ ] Validate HTML (https://validator.w3.org/)
- [ ] Run accessibility check
- [ ] Commit with clear message
- [ ] Push to GitHub
- [ ] Verify live site after 2 minutes
- [ ] Test all functionality on live site

---

**Dashboard Version:** 1.0.0  
**Deployment Guide Version:** 1.0  
**Last Updated:** January 2025

---

**Ready to deploy? Start with Step 1 above! 🚀**

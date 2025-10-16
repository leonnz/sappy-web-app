# GitHub Pages Deployment Setup

I've made the necessary code changes to prepare your Vue.js app for GitHub Pages deployment. Here's what you need to do to complete the setup:

## Changes Made

✅ **Updated `vite.config.js`** - Added `base: '/sappy/'` for GitHub Pages
✅ **Updated `package.json`** - Added deployment scripts and gh-pages dependency  
✅ **Updated API URL** - Changed to direct URL for production (bypasses CORS proxy)

## Steps to Complete Deployment

### 1. Install Node.js and npm
If you don't have Node.js installed:
1. Download and install Node.js from https://nodejs.org/
2. Restart your terminal/PowerShell after installation

### 2. Install Dependencies
```bash
npm install
```

### 3. Create GitHub Repository
1. Go to GitHub and create a new repository named `sappy`
2. Don't initialize with README (since you already have files)

### 4. Initialize Git and Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - Vue.js water usage prediction app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sappy.git
git push -u origin main
```
*Replace `YOUR_USERNAME` with your actual GitHub username*

### 5. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click the **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Choose **gh-pages** branch and **/ (root)** folder
6. Click **Save**

### 6. Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
- Build your Vue app
- Create and push to the `gh-pages` branch
- GitHub will automatically deploy your site

### 7. Access Your Site
After deployment (2-5 minutes), your site will be available at:
```
https://YOUR_USERNAME.github.io/sappy/
```

## Important Notes

⚠️ **API Considerations**: 
- The API URL has been changed to direct access for production
- If you encounter CORS issues, the Azure API server needs to allow requests from GitHub Pages
- You may need to contact the API provider to whitelist your GitHub Pages domain

## Future Updates
To update your deployed site:
1. Make changes to your code
2. Commit and push to main branch: `git add . && git commit -m "Update" && git push`
3. Deploy again: `npm run deploy`

## Troubleshooting

**Build fails**: Make sure all dependencies are installed (`npm install`)
**404 errors**: Verify the repository name matches the base path in `vite.config.js`
**API not working**: Check browser console for CORS errors - may need API server configuration

Your Vue.js water usage prediction app is now ready for GitHub Pages! 🚀
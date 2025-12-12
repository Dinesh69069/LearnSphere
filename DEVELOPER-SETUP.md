# 🚀 Quick Start Guide for Developers

## First Time Setup (5 minutes)

### 1. Clone & Install
```bash
git clone https://github.com/Dinesh69069/LearnSphere.git
cd Learn-Sphere
npm install
```

### 2. Build Tailwind CSS
```bash
npm run build
```

### 3. Start Development
```bash
# Terminal 1: Watch for CSS changes
npm run watch

# Terminal 2: Start local server
python -m http.server 8000
```

### 4. Open Your Component
- Navigate to: `http://localhost:8000/[your-component]/index.html`
- Example: `http://localhost:8000/home/index.html`

---

## Daily Workflow

### Morning (Pull latest changes)
```bash
git pull origin main
npm install              # Install any new dependencies
npm run build            # Rebuild Tailwind CSS
```

### During Development
```bash
npm run watch            # Keep this running while coding
```

### Before Committing
```bash
git add .
git commit -m "Your message"
git push origin main
```

---

## NPM Scripts

| Command | What it does |
|---------|-------------|
| `npm install` | Install all dependencies (same versions for everyone) |
| `npm run build` | Build Tailwind CSS once |
| `npm run watch` | Auto-rebuild CSS when you add Tailwind classes |
| `npm run dev` | Same as watch (development mode) |

---

## Important Notes

✅ **Always commit**: `package.json`, `package-lock.json`  
❌ **Never commit**: `node_modules/`, `dist/output.css`  

The `.gitignore` file handles this automatically!

---

## Troubleshooting

### Tailwind styles not showing?
1. Run `npm run build`
2. Hard refresh browser (Ctrl + Shift + R)

### Version conflicts?
1. Delete `node_modules/` folder
2. Run `npm install` again
3. Run `npm run build`

### Need help?
Check the main README.md or ask in the team chat!

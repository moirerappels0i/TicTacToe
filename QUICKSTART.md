# 🎮 Quick Start Guide - Tic Tac Toe PWA

## 🚀 Fastest Way to Get Running

### Option 1: Use GitHub Pages (5 minutes)

1. **Create a GitHub account** (if you don't have one)
   - Go to github.com and sign up

2. **Create a new repository**
   - Click the "+" icon → "New repository"
   - Name it "TicTacToe"
   - Make it Public
   - Don't initialize with README

3. **Upload the project**
   ```bash
   cd TicTacToe
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/TicTacToe.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"
   - The workflow will automatically deploy!

5. **Access your app**
   - Wait 2-3 minutes for deployment
   - Visit: `https://YOUR_USERNAME.github.io/TicTacToe/`

6. **Install on iPhone**
   - Open the URL in Safari
   - Tap Share button → "Add to Home Screen"
   - Done! Works offline now 🎉

### Option 2: Use Netlify (3 minutes)

1. Go to netlify.com and sign up
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your TicTacToe repo
4. Build settings:
   - Build command: `dotnet publish -c Release`
   - Publish directory: `bin/Release/net9.0/publish/wwwroot`
5. Click "Deploy site"
6. Your app is live at: `random-name.netlify.app`

### Option 3: Run Locally

```bash
# Install .NET 9 SDK first from: https://dotnet.microsoft.com/download

cd TicTacToe
dotnet restore
dotnet run
```

Open browser to: `https://localhost:5001`

## 📱 Installing on iPhone

1. Open the deployed URL in **Safari** (must be Safari!)
2. Tap the **Share** button (box with arrow pointing up)
3. Scroll down and tap **"Add to Home Screen"**
4. Name it "Tic Tac Toe" and tap **Add**
5. The app icon appears on your home screen
6. Tap to open - it works **completely offline**!

## 🎨 Customization Ideas

### Change Colors
Edit `wwwroot/css/app.css`:
```css
:root {
    --primary-color: #667eea;  /* Change this! */
    --x-color: #f093fb;        /* Change this! */
    --o-color: #4facfe;        /* Change this! */
}
```

### Add AI Opponent
In `Pages/TicTacToe.razor`, add a minimax algorithm in the `@code` section.

### Add Sound Effects
1. Add MP3 files to `wwwroot/sounds/`
2. Use JavaScript Interop to play sounds:
```csharp
await JSRuntime.InvokeVoidAsync("playSound", "move.mp3");
```

## 🔧 Build for Production

```bash
dotnet publish -c Release
```

Output files are in: `bin/Release/net9.0/publish/wwwroot/`

Upload these files to any static hosting:
- GitHub Pages ✅
- Netlify ✅
- Vercel ✅
- Azure Static Web Apps ✅
- AWS S3 + CloudFront ✅

## 🐛 Troubleshooting

**"dotnet: command not found"**
- Install .NET SDK: https://dotnet.microsoft.com/download

**App won't install on iPhone**
- Use Safari (not Chrome)
- Make sure you're on HTTPS (GitHub Pages/Netlify are HTTPS by default)
- Try refreshing the page

**Changes not showing up**
- Hard refresh: Hold Shift and click Reload
- Clear service worker: Safari Settings → Advanced → Website Data → Remove All

**Service worker errors**
- Must be HTTPS or localhost
- Check browser console (F12)

## 📚 Learn More

- **Blazor Docs**: https://blazor.net
- **PWA Guide**: https://web.dev/progressive-web-apps/
- **C# Tutorial**: https://learn.microsoft.com/dotnet/csharp/

## 🎉 What You've Built

- ✅ Full C# web app (no JavaScript needed!)
- ✅ Works 100% offline after first load
- ✅ Installable like a native app
- ✅ Beautiful custom UI (no Bootstrap!)
- ✅ MVC architecture in Blazor
- ✅ Progressive Web App
- ✅ Cross-platform (iPhone, Android, Desktop)

Have fun! 🚀

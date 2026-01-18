# Tic Tac Toe - Blazor WebAssembly PWA

A fully offline-capable tic-tac-toe game built with C#, HTML, and CSS (no Bootstrap). Works as a Progressive Web App on iPhone and other devices.

## Features

✨ **Offline-First**: Works completely offline after initial load
📱 **Installable**: Can be installed on iPhone home screen like a native app
🎨 **Beautiful UI**: Custom CSS with gradient effects and animations
💾 **Score Tracking**: Keeps track of wins and draws (with localStorage)
🎮 **Smooth Gameplay**: Responsive and fast

## Prerequisites

- .NET 9.0 SDK or later
- A code editor (Visual Studio, VS Code, or Rider)

## How to Build and Run

### 1. Build the Project

```bash
cd TicTacToe
dotnet restore
dotnet build
```

### 2. Run Locally

```bash
dotnet run
```

Then open your browser to `https://localhost:5001` (or the URL shown in the terminal)

### 3. Publish for Production

```bash
dotnet publish -c Release
```

The published files will be in `bin/Release/net9.0/publish/wwwroot/`

## Deploying to iPhone

### Option 1: GitHub Pages (Recommended)

1. Create a GitHub repository
2. Push this code to the repo
3. Enable GitHub Pages in repository settings
4. Point it to the `gh-pages` branch
5. Use a GitHub Action to auto-deploy:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup .NET
        uses: actions/setup-dotnet@v3
        with:
          dotnet-version: '9.0.x'
      
      - name: Publish
        run: dotnet publish -c Release -o release
      
      - name: Change base tag
        run: sed -i 's/<base href="\/" \/>/<base href="\/TicTacToe\/" \/>/g' release/wwwroot/index.html
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: release/wwwroot
          force_orphan: true
```

### Option 2: Netlify

1. Create account at netlify.com
2. Connect your GitHub repo
3. Build command: `dotnet publish -c Release`
4. Publish directory: `bin/Release/net9.0/publish/wwwroot`

### Option 3: Azure Static Web Apps

1. Create Azure account
2. Create a Static Web App resource
3. Connect to your GitHub repo
4. Configure build settings

## Installing on iPhone

1. Open the deployed URL in Safari on your iPhone
2. Tap the Share button (box with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Name it "Tic Tac Toe" and tap "Add"
5. The app will appear on your home screen
6. Open it and it works offline!

## Project Structure

```
TicTacToe/
├── Pages/
│   └── TicTacToe.razor          # Main game component with C# logic
├── Shared/
│   └── MainLayout.razor          # Layout component
├── wwwroot/
│   ├── css/
│   │   └── app.css               # Custom CSS (no Bootstrap)
│   ├── js/
│   │   └── storage.js            # JavaScript for localStorage
│   ├── index.html                # Entry point
│   ├── manifest.json             # PWA manifest
│   ├── service-worker.js         # Offline caching
│   └── icon-*.png                # App icons
├── App.razor                     # Router configuration
├── Program.cs                    # C# entry point
└── TicTacToe.csproj             # Project file
```

## How It Works

### MVC Pattern in Blazor

**Model**: The game state (board array, current player, scores)
```csharp
private string?[] board = new string?[9];
private string currentPlayer = "X";
```

**View**: The Razor markup (HTML)
```html
<div class="board">
    @for (int i = 0; i < 9; i++)
    {
        <button @onclick="() => MakeMove(index)">
            @board[index]
        </button>
    }
</div>
```

**Controller**: The C# methods in @code block
```csharp
private void MakeMove(int index)
{
    board[index] = currentPlayer;
    CheckWinner();
    currentPlayer = currentPlayer == "X" ? "O" : "X";
}
```

### Offline Capability

1. **Service Worker**: Caches all app files on first load
2. **PWA Manifest**: Makes app installable
3. **LocalStorage**: Persists scores across sessions

## Customization

### Change Colors

Edit `wwwroot/css/app.css` and modify the CSS variables:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --x-color: #f093fb;
    --o-color: #4facfe;
}
```

### Add Features

Some ideas:
- AI opponent (add minimax algorithm in C#)
- Different board sizes (4x4, 5x5)
- Game history/replay
- Multiplayer via SignalR
- Sound effects
- Themes/skins

## Troubleshooting

**Service worker not registering?**
- Make sure you're using HTTPS or localhost
- Check browser console for errors
- Try hard refresh (Cmd+Shift+R on Mac)

**App not installing on iPhone?**
- Ensure manifest.json is accessible
- Check that all icon files exist
- Use Safari (Chrome on iOS doesn't support PWA install)

**Game state not persisting?**
- Check if localStorage is enabled in browser
- Verify storage.js is loaded in index.html

## Browser Compatibility

✅ Safari (iOS/macOS)
✅ Chrome (Android/Desktop)
✅ Edge
✅ Firefox

## License

Free to use and modify for any purpose.

## Credits

Built with:
- C# / .NET 9
- Blazor WebAssembly
- Custom CSS (no frameworks)
- Vanilla JavaScript (minimal)

# Quest Club: Big Little Adventures

A polished, standalone browser adventure for young explorers (especially ages 5–8). Pick a quest, make friendly choices, collect helpful items, and solve a cheerful challenge.

## Adventures

- **Galaxy Quest**: Make a peaceful new alien friend and find a comet picnic.
- **Jungle Expedition**: Escape a young dinosaur by staying calm and helping it home.
- **Ancient Mystery**: Notice clues to escape a playful temple puzzle chamber.

Every route is recoverable: players can go back for an item, try a different idea, or choose a fresh quest at any time. The game uses short readable text, large keyboard-accessible buttons, responsive layouts, and optional gentle synthesized sound.

## Run locally

This is plain HTML, CSS, and JavaScript—no install or build step is needed. Open `index.html` in a modern browser, or serve the folder with any static web server:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying to GitHub Pages

The included workflow publishes the repository root whenever `main` is pushed. In the repository’s **Settings → Pages**, choose **GitHub Actions** as the build and deployment source if it is not already selected. The public site URL is:

`https://aofarre.github.io/kids-adventure-game/`

# 🔥 Paraco CEA Trivia Platform

A fully static, four-page trivia system built for local use or GitHub Pages hosting.

---

## Pages

| Page | File | Purpose |
|------|------|---------|
| `/setup` | `setup.html` | Host configures categories, question count, timer, and launches the game |
| `/host` | `host.html` | Host controls: advance questions, reveal answers, show scores |
| `/stage` | `stage.html` | Full-screen display to share via Teams (questions, timer, scoreboard) |
| `/join` | `join.html` | Player-facing page: enter name, answer questions, see results |

---

## How to Run Locally

### Option A: Simple (open files directly)
Open any `.html` file directly in Chrome. All four pages sync via `localStorage` + `BroadcastChannel`, so they work across multiple browser tabs on the same machine.

### Option B: Local server (recommended for best results)
```bash
# If you have Python installed:
cd trivia
python -m http.server 8080

# Then open:
# http://localhost:8080/setup.html
# http://localhost:8080/host.html
# http://localhost:8080/stage.html
# http://localhost:8080/join.html
```

---

## How to Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `paraco-trivia`)
2. Upload all files in this folder to the repository root
3. Go to **Settings > Pages**
4. Set Source to `main` branch, root folder
5. Save — your site will be live at `https://yourusername.github.io/paraco-trivia/`

Pages will be at:
- `yourusername.github.io/paraco-trivia/setup.html`
- `yourusername.github.io/paraco-trivia/host.html`
- `yourusername.github.io/paraco-trivia/stage.html`
- `yourusername.github.io/paraco-trivia/join.html`

---

## How to Run a Game

1. **Setup** — Open `setup.html`, pick categories, set timer, click Launch Game
2. **Stage** — Open `stage.html` in a second window/tab, share your screen via Teams
3. **Host** — Open `host.html` to control the game (your private view)
4. **Players** — Everyone opens `join.html`, enters their name
5. **Play** — Use Host view to advance questions, reveal answers, show scores

---

## Cross-Tab vs. Cross-Device Sync

- **Same computer, multiple tabs**: Works out of the box via `BroadcastChannel`
- **Multiple devices on same network**: Requires a local server and all devices on the same network — players navigate to your IP address (e.g. `http://192.168.1.10:8080/join.html`)
- **GitHub Pages (public URL)**: All devices on any network can join — but sync uses `localStorage` + `BroadcastChannel`, which only works within the same browser on the same device. For true multi-device play, upgrade to a service like Ably or Supabase Realtime (can be added on request)

---

## Questions

All 40 questions are in `questions.js`, organized into 7 categories:

| Category | Questions |
|----------|-----------|
| 🔥 Paraco / Propane Specific | 4 |
| 🧪 Propane Basics | 6 |
| 🚚 Delivery | 4 |
| ⚠️ Safety & Compliance | 1 |
| 💡 Customer Experience | 5 |
| 🎉 Lighter Questions | 2 |
| 🧠 Hard Mode | 21 |

To add questions, edit `questions.js` — the format is self-explanatory. The `answer` field is the zero-based index of the correct choice.

---

## Files

```
trivia/
├── questions.js    # All question data (parsed from your Word doc)
├── state.js        # Shared state engine (localStorage + BroadcastChannel)
├── setup.html      # Game configuration page
├── host.html       # Host control panel
├── stage.html      # Shared screen display
├── join.html       # Player-facing page
└── README.md       # This file
```

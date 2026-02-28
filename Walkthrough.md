# TeluguLingo — Walkthrough

A **pronunciation-first Telugu learning app** built with Vite + React at `D:\dev\Lingo`.

## What Was Built

| Component | Details |
|---|---|
| **Stack** | Vite 7 + React 19, Vanilla CSS, Web Speech API |
| **Sections** | Greetings 🙏, Food & Dining 🍛, Travel 🚌, Common Verbs 💬 |
| **Levels** | 3 per section: Vocabulary → Phrases → Sentences |
| **Total Content** | ~100 Telugu items across all 4 sections |
| **Script** | Zero Telugu Unicode — 100% English transliteration |
| **Audio** | Browser-native TTS (Web Speech API) — works in Chrome/Edge |

---

## Verification Results

### ✅ Welcome Screen
- Logo, tagline, animated floating emoji, and 4 category chips all display correctly

### ✅ Greetings Section — All 3 Levels
- **Level 1** (Vocabulary): 10 cards — Namaskaram, Vanakam, Dhanyavaadamulu, etc.
- **Level 2** (Phrases): 8 cards — "Meeru ela unnaru?", "Nenu baagunnanu", etc.
- **Level 3** (Sentences): 6 full conversational sentence cards

### ✅ Phrase Cards
- Telugu word rendered in large bold font
- Phonetic guide in saffron/orange italic (e.g. `/Nuh-MUS-kah-rum/`)
- 💬 Usage context and 💡 pronunciation tip on every card

### ✅ Text-to-Speech (TTS)
- 🔊 button tested and confirmed functional in browser
- Pulses with glow animation while speaking
- Uses `en-IN` locale for closest match to South Indian accent

### ✅ Navigation & UI
- Sidebar transitions between all 4 sections
- Level tabs update card grid with animated entrance
- Progress bar advances through levels
- "Next Level →" button and section-complete screen work correctly
- Fully responsive — mobile hamburger menu opens sidebar overlay

---

## Screenshots

````carousel
![Welcome screen with logo, tagline, and 4 category chips](C:\Users\patta\.gemini\antigravity\brain\b37c1914-af4b-46e5-9314-df97e38db13c\welcome_screen_1772050601580.png)
<!-- slide -->
![Greetings section — Level 1 vocabulary cards with phonetic guides](C:\Users\patta\.gemini\antigravity\brain\b37c1914-af4b-46e5-9314-df97e38db13c\greetings_level_1_1772050612156.png)
````

## Live Recording

![Browser walkthrough — welcome screen → Greetings → Level 2 phrases → TTS](C:\Users\patta\.gemini\antigravity\brain\b37c1914-af4b-46e5-9314-df97e38db13c\telugu_app_verification_1772050581602.webp)

---

## Running the App

```bash
cd D:\dev\Lingo
npm run dev
# Opens at http://localhost:5173
```

## File Structure

```
D:\dev\Lingo\src\
├── App.jsx                   # Main app + routing logic
├── index.css                 # Full design system (dark mode, animations)
├── main.jsx                  # React entry point
├── components/
│   ├── PhraseCard.jsx        # Card with TTS, phonetic, tips
│   ├── Sidebar.jsx           # Category nav + mobile overlay
│   └── LevelTabs.jsx         # L1/L2/L3 tab switcher
├── data/
│   ├── index.js              # Category registry
│   ├── greetings.js          # 10 + 8 + 6 items
│   ├── food.js               # 10 + 6 + 4 items
│   ├── travel.js             # 10 + 6 + 3 items
│   └── verbs.js              # 10 + 6 + 3 items
└── hooks/
    └── useSpeech.js          # Web Speech API wrapper
```

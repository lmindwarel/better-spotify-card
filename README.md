# Better Spotify Card for Home Assistant

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/default)
[![GitHub release](https://img.shields.io/github/v/release/lmindwarel/better-spotify-card?style=for-the-badge)](https://github.com/lmindwarel/better-spotify-card/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A sleek, responsive, and feature-rich **Spotify Lovelace card** for [Home Assistant](https://www.home-assistant.io/), inspired by the modern **Spotify Android & Spotify Desktop** interfaces with an interactive **Bubble-Card style popup**.

---

## ✨ Features

- 📱 **Mini Dashboard Player**:
  - Dynamic album art and high-resolution thumbnail display.
  - Track title, artist, and active Spotify Connect device badge.
  - Previous, Play / Pause, Next controls.
  - Real-time animated progress bar with smooth second-by-second interpolation.
- 🫧 **Bubble-Card Interactive Popup**:
  - Frosted glass backdrop with modern bottom sheet animations.
  - **Liked Songs (Titres likés)**: Browse all your saved tracks with individual album covers, infinite scroll pagination, and a single-click "Tout écouter" (Play all) button.
  - **Playlists**: View all your playlists (personal and followed), click any playlist to view its tracks and start playing.
  - **Instant Search**: Search the entire Spotify catalog directly from Home Assistant with debounced live search.
  - **Spotify Connect Devices**: Discover all active and idle Spotify devices, transfer playback in one tap, and set a **Default Device (⭐)** that will automatically wake up and start playback when no device is currently active.
- 🎛️ **Spotify Desktop Player Bar**:
  - Full seek slider with elapsed and total duration timers.
  - Track metadata, Prev / Play / Next controls.
  - **Shuffle Mode Toggle** (random / normal playback).
  - **Precision Volume Slider**: A single volume button (`🔊 24%`) that opens a fine-grained slider with `−` / `+` 1% precision adjustment buttons, specially designed for soundbars and high-sensitivity speakers.
- 🎨 **Visual UI Card Editor**:
  - Full GUI editor support in Home Assistant Lovelace.
  - Native entity selector dropdown for `media_player` entities (with instant search, domain filtering, and friendly names).
  - Live card preview in the Lovelace card picker with automatic detection of your Spotify player.

---

## 📦 Requirements

- [SpotifyPlus](https://github.com/thlucas1/homeassistant-spotifyplus) or the standard Home Assistant Spotify integration configured with your account.

---

## 🚀 Installation

### Method 1: HACS (Recommended)

1. Ensure [HACS](https://hacs.xyz/) is installed on your Home Assistant instance.
2. In Home Assistant, open **HACS** > **Frontend** (or **Dashboards**).
3. Click the **three dots** in the top right corner and select **Custom repositories**.
4. Add the following repository:
   - **Repository**: `https://github.com/lmindwarel/better-spotify-card`
   - **Type**: `Dashboard` (or `Lovelace`)
5. Click **Add**, then find **Better Spotify Card** in the list and click **Download**.
6. Restart Home Assistant or reload your browser resources when prompted.

---

### Method 2: Manual Installation

1. Download the latest `better-spotify-card.js` from the [Releases](https://github.com/lmindwarel/better-spotify-card/releases) page (or from the `dist/` directory).
2. Copy `better-spotify-card.js` into your Home Assistant directory:
   ```text
   /config/www/better-spotify-card.js
   ```
3. In Home Assistant, navigate to **Settings** > **Dashboards** > **Three dots (top right)** > **Resources**.
4. Click **Add Resource**:
   - **URL**: `/local/better-spotify-card.js`
   - **Resource type**: `JavaScript Module`
5. Hard refresh your browser (`Ctrl + F5` or `Cmd + Shift + R`).

---

## ⚙️ Configuration

### Graphical Editor (UI)

Add a card to your dashboard, search for **Better Spotify Card**, and configure it directly using the visual editor:
- **Lecteur Spotify**: Select your Spotify `media_player` entity (e.g. `media_player.spotify_antoine_delaroue` or `media_player.spotifyplus_morganne_flechsig`).
- **Onglet affiché par défaut**: Select which tab opens by default (`liked`, `playlists`, `search`, or `devices`).

### YAML Configuration

You can also configure the card manually in YAML:

```yaml
type: custom:better-spotify-card
entity: media_player.spotify_antoine_delaroue
default_tab: liked # Optional: 'liked', 'playlists', 'search', 'devices' (default: liked)
```

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `entity` | `string` | **Required** | The `media_player` entity ID for Spotify / SpotifyPlus. |
| `default_tab` | `string` | `liked` | Initial tab when opening the popup: `liked`, `playlists`, `search`, or `devices`. |
| `default_device` | `string` | `""` | Optional fallback device name or ID (can also be toggled with the ⭐ icon in the Devices tab). |

---

## 🛠️ Development

If you want to contribute or build the card locally:

```bash
# Clone the repository
git clone https://github.com/lmindwarel/better-spotify-card.git
cd better-spotify-card

# Install dependencies
npm install

# Start local dev server
npm run dev

# Build production bundle
npm run build
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

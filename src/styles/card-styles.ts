import { css } from 'lit';

export const cardStyles = css`
  :host {
    --bsc-bg: var(--ha-card-background, #121212);
    --bsc-surface: #181818;
    --bsc-surface-elevated: #242424;
    --bsc-surface-hover: #2a2a2a;
    --bsc-primary: #1db954;
    --bsc-primary-hover: #1ed760;
    --bsc-primary-active: #169c46;
    --bsc-text: #ffffff;
    --bsc-text-secondary: #b3b3b3;
    --bsc-text-muted: #727272;
    --bsc-border: rgba(255, 255, 255, 0.08);
    --bsc-radius: 16px;
    --bsc-popup-radius: 28px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    display: block;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* ======================================================== */
  /* MINI PLAYER (DASHBOARD CARD)                             */
  /* ======================================================== */
  .mini-card {
    background: var(--bsc-surface);
    border-radius: var(--bsc-radius);
    padding: 12px 14px;
    color: var(--bsc-text);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
    border: 1px solid var(--bsc-border);
    cursor: pointer;
    transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
    user-select: none;
    position: relative;
    overflow: hidden;
  }

  .mini-card:hover {
    background: var(--bsc-surface-elevated);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.45);
    transform: translateY(-1px);
  }

  .mini-card:active {
    transform: scale(0.99);
  }

  .mini-main-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .mini-cover {
    width: 52px;
    height: 52px;
    min-width: 52px;
    border-radius: 8px;
    background: #282828;
    object-fit: cover;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mini-cover svg {
    width: 28px;
    height: 28px;
    fill: var(--bsc-text-muted);
  }

  .mini-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .mini-title {
    font-size: 14.5px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--bsc-text);
  }

  .mini-artist {
    font-size: 13px;
    color: var(--bsc-text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mini-device-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    font-weight: 500;
    color: var(--bsc-primary);
    margin-top: 2px;
  }

  .mini-device-badge svg {
    width: 12px;
    height: 12px;
    fill: currentColor;
  }

  .mini-controls {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-left: auto;
  }

  .btn-icon {
    background: transparent;
    border: none;
    color: var(--bsc-text-secondary);
    cursor: pointer;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.15s ease, background 0.15s ease, transform 0.1s ease;
    padding: 0;
  }

  .btn-icon:hover {
    color: var(--bsc-text);
    background: rgba(255, 255, 255, 0.1);
  }

  .btn-icon:active {
    transform: scale(0.92);
  }

  .btn-icon svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }

  .btn-play-mini {
    background: var(--bsc-text);
    color: #000;
    width: 38px;
    height: 38px;
  }

  .btn-play-mini:hover {
    background: #f0f0f0;
    color: #000;
    transform: scale(1.05);
  }

  .btn-play-mini svg {
    width: 22px;
    height: 22px;
    fill: currentColor;
  }

  /* Thin progress bar at bottom of mini card */
  .mini-progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: rgba(255, 255, 255, 0.1);
  }

  .mini-progress-fill {
    height: 100%;
    background: var(--bsc-primary);
    transition: width 0.3s linear;
  }

  /* ======================================================== */
  /* BUBBLE-CARD STYLE POPUP MODAL                            */
  /* ======================================================== */
  .bubble-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    z-index: 99999;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    animation: fadeIn 0.25s ease forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from {
      transform: translateY(100%);
      opacity: 0.5;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .bubble-sheet {
    width: 100%;
    max-width: 580px;
    height: 90vh;
    max-height: 850px;
    background: #121212;
    border-radius: var(--bsc-popup-radius) var(--bsc-popup-radius) 0 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.7);
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    border-left: 1px solid rgba(255, 255, 255, 0.08);
    border-right: 1px solid rgba(255, 255, 255, 0.08);
    animation: slideUp 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  @media (min-width: 640px) {
    .bubble-backdrop {
      align-items: center;
      padding: 24px;
    }
    .bubble-sheet {
      height: 86vh;
      border-radius: var(--bsc-popup-radius);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
  }

  /* Sheet Header */
  .sheet-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 18px 12px 18px;
    border-bottom: 1px solid var(--bsc-border);
    flex-shrink: 0;
    background: #141414;
  }

  .sheet-header-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .spotify-brand-icon {
    width: 24px;
    height: 24px;
    fill: var(--bsc-primary);
    display: flex;
    align-items: center;
  }

  .sheet-header-title {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.2px;
    color: var(--bsc-text);
  }

  .sheet-connect-pill {
    background: rgba(29, 185, 84, 0.15);
    border: 1px solid rgba(29, 185, 84, 0.3);
    color: var(--bsc-primary);
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 11.5px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    transition: background 0.15s ease;
  }

  .sheet-connect-pill:hover {
    background: rgba(29, 185, 84, 0.25);
  }

  .sheet-connect-pill svg {
    width: 13px;
    height: 13px;
    fill: currentColor;
  }

  .btn-close {
    background: rgba(255, 255, 255, 0.08);
    border: none;
    color: var(--bsc-text-secondary);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .btn-close:hover {
    background: rgba(255, 255, 255, 0.18);
    color: var(--bsc-text);
  }

  .btn-close svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }

  /* ======================================================== */
  /* TAB NAVIGATION (AT TOP UNDER HEADER)                     */
  /* ======================================================== */
  .tab-bar {
    display: flex;
    background: #181818;
    padding: 6px 12px;
    gap: 8px;
    border-bottom: 1px solid var(--bsc-border);
    flex-shrink: 0;
  }

  .tab-btn {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 8px 6px;
    background: transparent;
    border: none;
    border-radius: 12px;
    color: var(--bsc-text-secondary);
    font-size: 11.5px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .tab-btn svg {
    width: 19px;
    height: 19px;
    fill: currentColor;
    transition: transform 0.15s ease;
  }

  .tab-btn:hover {
    color: var(--bsc-text);
    background: rgba(255, 255, 255, 0.05);
  }

  .tab-btn.active {
    color: var(--bsc-primary);
    background: rgba(29, 185, 84, 0.12);
  }

  .tab-btn.active svg {
    transform: scale(1.1);
  }

  /* ======================================================== */
  /* TAB CONTENT AREA (IN MIDDLE)                             */
  /* ======================================================== */
  .tab-content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 16px;
    -webkit-overflow-scrolling: touch;
  }

  /* Custom scrollbar */
  .tab-content::-webkit-scrollbar {
    width: 6px;
  }
  .tab-content::-webkit-scrollbar-track {
    background: transparent;
  }
  .tab-content::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 3px;
  }

  /* Search input */
  .search-box-wrapper {
    position: relative;
    margin-bottom: 16px;
  }

  .search-input {
    width: 100%;
    background: #242424;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 12px 42px 12px 42px;
    font-size: 14px;
    color: #fff;
    outline: none;
    transition: border-color 0.2s ease, background 0.2s ease;
  }

  .search-input:focus {
    border-color: var(--bsc-primary);
    background: #2a2a2a;
  }

  .search-input::placeholder {
    color: var(--bsc-text-muted);
  }

  .search-icon-left {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    fill: var(--bsc-text-muted);
    pointer-events: none;
  }

  .search-btn-clear {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: var(--bsc-text-muted);
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search-btn-clear svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }

  /* Items lists (Tracks, Playlists, Devices) */
  .items-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .list-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.15s ease;
  }

  .list-item:hover {
    background: var(--bsc-surface-elevated);
  }

  .list-item:active {
    background: #2d2d2d;
  }

  .list-item-thumb {
    width: 44px;
    height: 44px;
    min-width: 44px;
    border-radius: 6px;
    background: #282828;
    object-fit: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .list-item-thumb svg {
    width: 22px;
    height: 22px;
    fill: var(--bsc-text-muted);
  }

  .list-item-thumb-round {
    border-radius: 50%;
  }

  .list-item-text {
    flex: 1;
    min-width: 0;
  }

  .list-item-title {
    font-size: 14px;
    font-weight: 500;
    color: var(--bsc-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .list-item-title.active {
    color: var(--bsc-primary);
    font-weight: 600;
  }

  .list-item-subtitle {
    font-size: 12.5px;
    color: var(--bsc-text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 1px;
  }

  .list-item-duration {
    font-size: 12px;
    color: var(--bsc-text-muted);
    font-variant-numeric: tabular-nums;
  }

  .list-item-badge {
    padding: 3px 8px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 600;
    background: rgba(29, 185, 84, 0.15);
    color: var(--bsc-primary);
  }

  /* Empty state / Loading state */
  .state-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    text-align: center;
    color: var(--bsc-text-muted);
    gap: 12px;
  }

  .state-message svg {
    width: 48px;
    height: 48px;
    fill: rgba(255, 255, 255, 0.15);
  }

  .spinner {
    width: 32px;
    height: 32px;
    border: 3px solid rgba(255, 255, 255, 0.1);
    border-top-color: var(--bsc-primary);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* ======================================================== */
  /* NOW PLAYING COMPONENT (SPOTIFY DESKTOP STYLE AT BOTTOM)  */
  /* ======================================================== */
  .now-playing-section {
    background: linear-gradient(0deg, #121212 0%, #1c1c1c 100%);
    padding: 10px 16px 14px 16px;
    border-top: 1px solid var(--bsc-border);
    box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.6);
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  /* Line 1: Seek / timeline bar on top */
  .desktop-seek-row {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  .desktop-seek-time {
    font-size: 11px;
    color: var(--bsc-text-muted);
    min-width: 32px;
    font-variant-numeric: tabular-nums;
  }

  .desktop-seek-time.right {
    text-align: right;
  }

  .seek-slider {
    flex: 1;
    -webkit-appearance: none;
    appearance: none;
    height: 4px;
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.15);
    outline: none;
    cursor: pointer;
    transition: height 0.15s ease;
  }

  .seek-slider:hover {
    height: 6px;
  }

  .seek-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--bsc-text);
    cursor: pointer;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    transition: transform 0.1s ease;
  }

  .seek-slider:hover::-webkit-slider-thumb {
    transform: scale(1.2);
    background: var(--bsc-primary);
  }

  /* Line 2: 3-column Spotify Desktop row */
  .desktop-player-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
  }

  /* Col Left: Cover, Title, Artist */
  .desktop-col-left {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1;
    min-width: 0;
  }

  .desktop-cover {
    width: 44px;
    height: 44px;
    min-width: 44px;
    border-radius: 6px;
    background: #282828;
    object-fit: cover;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  }

  .desktop-meta {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .desktop-title {
    font-size: 13.5px;
    font-weight: 600;
    color: var(--bsc-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .desktop-artist {
    font-size: 12px;
    color: var(--bsc-text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Col Center: Prev, Play/Pause, Next */
  .desktop-col-center {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex-shrink: 0;
  }

  .btn-play-large {
    background: var(--bsc-text);
    color: #000;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.15s ease, background 0.15s ease;
  }

  .btn-play-large:hover {
    background: #ffffff;
    transform: scale(1.06);
  }

  .btn-play-large:active {
    transform: scale(0.95);
  }

  .btn-play-large svg {
    width: 22px;
    height: 22px;
    fill: #000;
  }

  /* Col Right: Mode Lecture, Vol -, Vol + */
  .desktop-col-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 6px;
    flex: 1;
    min-width: 0;
  }

  .btn-vol {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.06);
    color: var(--bsc-text-secondary);
    cursor: pointer;
    height: 32px;
    min-width: 36px;
    padding: 0 8px;
    border-radius: 16px;
    font-size: 11.5px;
    font-weight: 600;
    transition: background 0.15s ease, color 0.15s ease, transform 0.1s ease;
  }

  .btn-vol:hover {
    background: rgba(255, 255, 255, 0.16);
    color: var(--bsc-text);
  }

  .btn-vol:active {
    transform: scale(0.92);
  }

  .btn-vol svg {
    width: 15px;
    height: 15px;
    fill: currentColor;
  }

  .btn-shuffle-toggle {
    background: transparent;
    border: none;
    color: var(--bsc-text-secondary);
    cursor: pointer;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.15s ease, background 0.15s ease, transform 0.1s ease;
    padding: 0;
  }

  .btn-shuffle-toggle:hover {
    color: var(--bsc-text);
    background: rgba(255, 255, 255, 0.1);
  }

  .btn-shuffle-toggle.active {
    color: var(--bsc-primary);
    background: rgba(29, 185, 84, 0.16);
  }

  .btn-shuffle-toggle svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }

  .vol-indicator {
    font-size: 11px;
    font-weight: 500;
    color: var(--bsc-text-muted);
    font-variant-numeric: tabular-nums;
  }

  /* Shuffle toggle button in player controls */
  .btn-shuffle-toggle {
    background: transparent;
    border: none;
    color: var(--bsc-text-secondary);
    cursor: pointer;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.15s ease, background 0.15s ease, transform 0.1s ease;
    padding: 0;
  }

  .btn-shuffle-toggle:hover {
    color: var(--bsc-text);
    background: rgba(255, 255, 255, 0.1);
  }

  .btn-shuffle-toggle.active {
    color: var(--bsc-primary);
    background: rgba(29, 185, 84, 0.16);
  }

  .btn-shuffle-toggle svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }

  /* Action bar at the top of playlists and liked tabs */
  .tab-action-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }

  .tab-action-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--bsc-text-secondary);
  }

  .tab-action-buttons {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto;
  }

  .btn-pill-play {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--bsc-primary);
    color: #000;
    border: none;
    border-radius: 20px;
    padding: 6px 14px;
    font-size: 12.5px;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.15s ease, background 0.15s ease;
  }

  .btn-pill-play:hover {
    background: var(--bsc-primary-hover);
    transform: scale(1.03);
  }

  .btn-pill-play:active {
    transform: scale(0.97);
  }

  .btn-pill-play svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }

  .btn-pill-shuffle {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(255, 255, 255, 0.1);
    color: var(--bsc-text);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s ease, transform 0.15s ease;
  }

  .btn-pill-shuffle:hover {
    background: rgba(255, 255, 255, 0.18);
    transform: scale(1.03);
  }

  .btn-pill-shuffle:active {
    transform: scale(0.97);
  }

  .btn-pill-shuffle svg {
    width: 15px;
    height: 15px;
    fill: currentColor;
  }

  /* Back button in playlist view */
  .btn-back {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: transparent;
    border: none;
    color: var(--bsc-text-secondary);
    font-size: 12.5px;
    font-weight: 600;
    cursor: pointer;
    padding: 2px 0 10px 0;
    transition: color 0.15s ease;
  }

  .btn-back:hover {
    color: var(--bsc-text);
  }

  .btn-back svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }

  /* Playlist detail view header */
  .playlist-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--bsc-border);
  }

  .playlist-header-cover {
    width: 58px;
    height: 58px;
    min-width: 58px;
    border-radius: 8px;
    background: #282828;
    object-fit: cover;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  }

  .playlist-header-meta {
    flex: 1;
    min-width: 0;
  }

  .playlist-header-title {
    font-size: 15px;
    font-weight: 700;
    color: var(--bsc-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .playlist-header-sub {
    font-size: 12px;
    color: var(--bsc-text-secondary);
    margin-top: 2px;
  }

  .list-item-arrow {
    color: var(--bsc-text-muted);
    display: flex;
    align-items: center;
  }

  .list-item-arrow svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }

  .default-device-badge {
    display: inline-block;
    margin-left: 8px;
    font-size: 11px;
    font-weight: 600;
    color: var(--bsc-accent);
    background: rgba(29, 185, 84, 0.15);
    border: 1px solid rgba(29, 185, 84, 0.3);
    padding: 2px 7px;
    border-radius: 12px;
    vertical-align: middle;
  }

  .list-item-right-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto;
  }

  .btn-star-default {
    background: transparent;
    border: none;
    font-size: 17px;
    cursor: pointer;
    padding: 6px;
    border-radius: 50%;
    line-height: 1;
    transition: transform 0.15s ease, opacity 0.15s ease;
    opacity: 0.7;
  }

  .btn-star-default:hover {
    transform: scale(1.25);
    opacity: 1;
  }

  .btn-star-default.is-default {
    opacity: 1;
    color: #ffd700;
  }

  .loading-more-spinner {
    display: flex;
    justify-content: center;
    padding: 16px 0 8px 0;
  }
`;

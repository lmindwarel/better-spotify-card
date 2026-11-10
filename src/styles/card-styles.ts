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

  /* Drag handle / pill indicator */
  .sheet-handle {
    width: 40px;
    height: 4px;
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.25);
    margin: 10px auto 4px auto;
    cursor: pointer;
    flex-shrink: 0;
  }

  /* Sheet Header */
  .sheet-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 18px 12px 18px;
    border-bottom: 1px solid var(--bsc-border);
    flex-shrink: 0;
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
  /* NOW PLAYING COMPONENT IN POPUP (ANDROID SPOTIFY STYLE)   */
  /* ======================================================== */
  .now-playing-section {
    background: linear-gradient(180deg, #1f1f1f 0%, #161616 100%);
    padding: 16px 20px 14px 20px;
    border-bottom: 1px solid var(--bsc-border);
    flex-shrink: 0;
  }

  .now-playing-top {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 12px;
  }

  .now-playing-cover {
    width: 64px;
    height: 64px;
    min-width: 64px;
    border-radius: 8px;
    background: #282828;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  }

  .now-playing-meta {
    flex: 1;
    min-width: 0;
  }

  .now-playing-title {
    font-size: 16px;
    font-weight: 700;
    color: var(--bsc-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 3px;
  }

  .now-playing-artist {
    font-size: 13.5px;
    color: var(--bsc-text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .now-playing-album {
    font-size: 11.5px;
    color: var(--bsc-text-muted);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 1px;
  }

  /* Seek bar */
  .seek-container {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 8px;
  }

  .seek-slider {
    width: 100%;
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
    box-shadow: 0 1px 4px rgba(0,0,0,0.4);
    transition: transform 0.1s ease;
  }

  .seek-slider:hover::-webkit-slider-thumb {
    transform: scale(1.2);
    background: var(--bsc-primary);
  }

  .seek-times {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    color: var(--bsc-text-muted);
    font-variant-numeric: tabular-nums;
  }

  /* Player action buttons */
  .player-actions-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4px;
  }

  .btn-play-large {
    background: var(--bsc-text);
    color: #000;
    width: 44px;
    height: 44px;
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
    transform: scale(1.08);
  }

  .btn-play-large:active {
    transform: scale(0.95);
  }

  .btn-play-large svg {
    width: 24px;
    height: 24px;
    fill: #000;
  }

  /* Volume slider in now playing */
  .volume-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    padding: 0 4px;
  }

  .volume-icon {
    width: 16px;
    height: 16px;
    fill: var(--bsc-text-secondary);
    flex-shrink: 0;
  }

  .volume-slider {
    flex: 1;
    -webkit-appearance: none;
    appearance: none;
    height: 4px;
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.18);
    outline: none;
    cursor: pointer;
  }

  .volume-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--bsc-text);
    cursor: pointer;
  }

  /* ======================================================== */
  /* TAB NAVIGATION (ANDROID BOTTOM BAR STYLE)                */
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
    width: 20px;
    height: 20px;
    fill: currentColor;
    transition: transform 0.15s ease;
  }

  .tab-btn:hover {
    color: var(--bsc-text);
    background: rgba(255, 255, 255, 0.05);
  }

  .tab-btn.active {
    color: var(--bsc-primary);
    background: rgba(29, 185, 84, 0.1);
  }

  .tab-btn.active svg {
    transform: scale(1.1);
  }

  /* ======================================================== */
  /* TAB CONTENT AREA                                         */
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
`;

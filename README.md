# Better Spotify Card for Home Assistant

Une carte Lovelace élégante et fluide pour Home Assistant inspirée du lecteur **Spotify pour Android** avec une popup moderne de style **Bubble-Card**.

![Banner](https://brands.home-assistant.io/spotifyplus/icon.png)

## Fonctionnalités

- 📱 **Mini-lecteur Android** : Carte compacte pour votre tableau de bord affichant la pochette, le titre, l'artiste, l'appareil Spotify Connect actif, les commandes et une barre de progression.
- 🫧 **Popup Bubble-Card** : Un clic sur la carte ouvre une popup moderne avec effet de flou en arrière-plan (frosted glass) et poignée de glissement.
- 💚 **Titres likés (Liked Songs)** : Consultez vos favoris et lancez un titre (enchaîne automatiquement avec les morceaux suivants).
- 📁 **Playlists** : Affichez vos playlists avec jaquettes et lancez-les en un tap.
- 🔍 **Recherche dans le catalogue Spotify** : Recherchez en direct n'importe quel morceau ou artiste avec saisie instantanée.
- 🔊 **Sélecteur Spotify Connect** : Changez de haut-parleur instantanément (barre de son, Google Cast, Echo, PC, smartphone).
- 🎚️ **Contrôle du volume & timeline** : Ajustement du volume et déplacement dans le morceau (seek).

## Prérequis

- [SpotifyPlus](https://github.com/thlucas1/homeassistant-spotifyplus) installé et configuré dans Home Assistant.

## Installation

### Via Home Assistant (Ressource Lovelace)

1. Déposez `better-spotify-card.js` dans le dossier `config/www/` de votre Home Assistant.
2. Dans Home Assistant, allez dans **Paramètres** > **Tableaux de bord** > menu en haut à droite (trois points) > **Ressources**.
3. Ajoutez une ressource :
   - URL : `/local/better-spotify-card.js`
   - Type : `Module JavaScript`
4. Rafraîchissez votre navigateur (Ctrl + F5).

### Exemple de configuration Lovelace

```yaml
type: custom:better-spotify-card
entity: media_player.spotify_antoine_delaroue
default_tab: liked # 'liked', 'playlists', 'search' ou 'devices'
```

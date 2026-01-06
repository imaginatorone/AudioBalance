<div align="center">
  <img src="assets/thumbnail.png" alt="Audio Balance Thumbnail" width="600" />

  # Audio Balance
  
  <p>
    A simple Steam Deck plugin for the <a href="https://github.com/SteamDeckHomebrew/decky-loader">Decky Plugin Loader</a> that allows you to control left/right audio balance directly from the Quick Access Menu.
  </p>
</div>

---

## Features

- 🎚️ **Precise Control:** Adjust audio balance from -100 (full left) to +100 (full right).
- 💾 **Persistent Settings:** Your preferences are saved automatically and persist across reboots.
- 🎧 **Native Integration:** Works seamlessly with SteamOS audio via `pactl`.

## Installation

### Store Installation (Recommended)
The best way to get the plugin is to use the official **Decky Plugin Store**.
1. Open the Decky Loader menu (plugin store icon).
2. Search for "Audio Balance".
3. Click "Install".

### Manual Installation
If you want to install a specific version or test a release manually:
1. Go to the [AudioBalance GitHub releases](https://github.com/imaginatorone/AudioBalance/releases).
2. Download the latest release package (`audio-balance-vX.X.X.zip`).
3. Move the zip file to your Steam Deck.
4. Install it using Decky Loader's "Install from Zip" feature (in Developer settings) or extract it manually to `~/homebrew/plugins/AudioBalance/`.

### Building from Source
Alternatively, you can build Audio Balance from source by following these steps:

1. Clone the repository:
   ```bash
   git clone [https://github.com/imaginatorone/AudioBalance.git](https://github.com/imaginatorone/AudioBalance.git)
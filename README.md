# Audio Balance

Decky Loader plugin for Steam Deck that allows you to control left/right audio balance.

## Features

- Adjust audio balance from -100 (full left) to +100 (full right)
- Settings persist across reboots
- Simple slider interface

## Installation

1. Install Decky Loader on your Steam Deck
2. Download the latest release
3. Extract to `~/homebrew/plugins/AudioBalance/`
4. Restart Decky Loader

## Usage

1. Open Decky menu (⋯ button)
2. Find Audio Balance plugin (headphones icon)
3. Adjust the slider to change balance
   - Negative values = more left
   - Positive values = more right
   - 0 = centered

Your balance setting will be automatically saved and restored on next boot.

## Building

```bash
pnpm install
pnpm run build
```
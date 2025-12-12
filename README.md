# Gemini Finish Notifier 🔔

A lightweight Tampermonkey userscript that plays a notification sound when Google Gemini finishes generating a response.

Useful for multi-tasking so you don't have to stare at the screen waiting for long answers.

## Features
- **Zero Configuration:** Works immediately upon installation.
- **Robust Detection:** Uses specific icon selectors to accurately detect when Gemini stops "thinking."
- **Customizable:** Easily change the volume or swap the sound file in the script settings.

## How to Install

1. Install the [Tampermonkey](https://www.tampermonkey.net/) extension for your browser (Chrome, Edge, Firefox, etc.).
2. **[Click here to install the script](gemini-notifier.user.js)** (GitHub will detect the `.user.js` file and ask to install it).
3. Refresh your Gemini tab.

## Configuration
To change the sound or volume:
1. Open the Tampermonkey dashboard.
2. Edit the script.
3. Modify the variables at the top of the file:
   ```javascript
   // Change volume (0.0 to 1.0)
   const volumeLevel = 0.5; 
   
   // Uncomment a different soundURL line to change the tone

Here is the complete `README.md` in Markdown format:

---

```markdown
# Ultimate Ad Blocker

## Description
Ultimate Ad Blocker is a comprehensive Chrome extension that enhances your browsing experience by blocking unwanted advertisements. It is designed to handle a variety of ads, including pop-ups, video ads, Twitch ads, and more. Additionally, the extension offers a manual blocking mode, allowing you to hide any webpage element with a simple click.

## Features
- **Ad Blocker**: Blocks network requests to known ad domains using declarative Net Requests.
- **Twitch Ad Blocker**: Swaps Twitch ads with the main stream for uninterrupted viewing.
- **Manual Blocking**: Lets you hide any element on the page by clicking it while the mode is active.
- **Toggleable Settings**: Enable or disable each feature from the extension popup.
- **Persistent State**: Remembers your settings between sessions using Chrome's storage.

## Installation
1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-username/ultimate-ad-blocker.git
   ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top-right corner.
4. Click "Load unpacked" and select the folder where you cloned this repository.

## Usage
1. Click the extension icon in the Chrome toolbar to open the popup.
2. Use the toggles to:
   - **Enable/Disable the Ad Blocker**: Blocks ads on websites.
   - **Turn on/off Twitch Ad Blocker**: Manages Twitch stream ads dynamically.
   - **Activate Manual Blocking**: Click any element to hide it.

## File Structure
```
ultimate-ad-blocker/
│
├── manifest.json           # Chrome extension manifest file
├── popup.html              # HTML for the extension popup
├── popup.js                # JavaScript for managing popup interactions
├── content.js              # Handles generic ad-blocking logic
├── block_twitch.js         # Manages Twitch ad-blocking logic
├── rules.json              # Declarative Net Request rules for blocking ads
├── styles.css              # Styling for the popup
├── icons/                  # Folder for extension icons
└── README.md               # Documentation
```

## Features in Detail

### Ad Blocker
- Utilizes Chrome's `declarativeNetRequest` API to block network requests to known ad domains.
- Rules are defined in `rules.json` for easy customization.

### Twitch Ad Blocker
- Dynamically swaps Twitch ad videos with the main stream using `MutationObserver`.
- Provides custom controls for playback and volume adjustment.

### Manual Blocking
- Activates a mode that allows you to hide any webpage element with a click.
- Uses Chrome's storage to remember the mode's state between sessions.

### Persistent State
- All toggle states persist across sessions using `chrome.storage.local`.

## Contributing
We welcome contributions! Here’s how you can contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

## Contact
If you have any questions or suggestions, feel free to reach out via email: mateojudasl@gmail.com or create an issue in this repository.
```

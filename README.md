
# Ultimate Ad Blocker

**UAB** is a lightweight, customizable browser extension designed to block ads on popular platforms like YouTube, Twitch, CNN, and more. Built by ACM Cyber, this tool ensures a seamless, ad-free browsing experience while offering additional features like manual element deletion.

## Features

- **Ad Blocking**:
  - Blocks video ads and image ads on YouTube, Twitch, CNN, and other websites.
  - Removes intrusive elements and enhances browsing speed.
- **Manual Element Deletion**:
  - Allows users to hide unwanted elements on any webpage with a simple click.
- **Customizable Controls**:
  - Enable or disable ad-blocking rules dynamically.
  - Adjust video playback and volume controls for Twitch streams.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/ultimate-ad-blocker.git
   ```

2. Open your browser and navigate to the Extensions page:
   - For Chrome: `chrome://extensions`
   - For Edge: `edge://extensions`

3. Enable **Developer Mode**.

4. Click **Load unpacked** and select the cloned repository folder.

5. The extension will now be installed and ready to use.

## Usage

1. **Ad Blocking**:
   - The extension automatically blocks ads on supported platforms.
   - Use the toggle buttons in the popup to enable or disable ad-blocking rules.

2. **Manual Element Deletion**:
   - Click the "Enable Element Blocker" button in the popup.
   - Click on any unwanted element on the webpage to hide it.

3. **Twitch Stream Controls**:
   - Adjust playback, mute/unmute, and volume using custom buttons.
   - Replace ads with uninterrupted streams.

## Supported Platforms

- YouTube
- Twitch
- CNN
- General websites with intrusive ads

## Files Overview

### HTML & CSS
- `UI.html`: The main interface for the extension's popup.
- `styles.css`: Styling for the popup and toggle buttons.

### JavaScript
- `block_youtube.js`: Blocks YouTube ads.
- `block_twitch.js`: Handles Twitch ads and provides custom stream controls.
- `block_cnn.js`: Blocks ads on CNN.
- `content.js`: Enables manual element deletion.
- `popup.js`: Manages popup interactions.
- `popup_deleter.js`: Toggles ad-blocking rules.

### Manifest
- `manifest.json`: Configures the extension's permissions and behavior.

### Rules
- `rules.json`: Defines declarative ad-blocking rules for specific domains.

## Contributing

Contributions are welcome! If you have suggestions or find a bug, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch:
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
5. Open a pull request.

## Contact
If you have any questions or suggestions, feel free to reach out via email: mateojudasl@gmail.com or create an issue in this repository.

Enjoy a cleaner, faster internet with **Ultimate Ad Blocker**!

# Move Slack Actions

A tiny Chrome extension that moves Slack's hovered message action toolbar closer to the message text on wide screens.

Slack normally pins message actions to the far right of the message pane. On a wide monitor, that means you have to hover a message, move all the way across the screen, and then hope you are still acting on the right message. This extension keeps the native Slack buttons near the message.

There is no popup, no settings screen, and no extra workflow. Install it, reload Slack, and it runs automatically.

## What It Changes

- Moves Slack's native hovered message action bar toward the left side of the message pane.
- Keeps first messages in a sender block slightly higher so the toolbar does not cover the sender name.
- Keeps compact follow-up messages aligned close to the message text.
- Leaves Slack's message rows, composer, sidebars, and channel controls alone.

## What It Does Not Do

- It does not collect data.
- It does not send network requests.
- It does not replace Slack's buttons with custom buttons.
- It does not require any permissions beyond running on Slack pages.

## Install

### From a GitHub Release

1. Download the latest `move-slack-actions.zip` from the repository's Releases page.
2. Unzip it.
3. Open Chrome Extensions: `chrome://extensions`.
4. Enable Developer mode.
5. Click Load unpacked.
6. Select the unzipped folder.
7. Reload Slack.

### From Source

1. Open Chrome Extensions: `chrome://extensions`.
2. Enable Developer mode.
3. Click Load unpacked.
4. Select this repository folder.

After that, visit or reload Slack. There is no popup and no setting to enable.

## Packaging a Release

From the repository root:

```sh
git archive --format=zip --output=move-slack-actions.zip HEAD
```

Upload that zip to a GitHub Release. Users should unzip it before loading it as an unpacked Chrome extension.

## How it works

The extension is mostly CSS. It targets Slack's hovered message action toolbar:

```css
.c-message_actions__container.c-message__actions
.c-message_actions__group[data-qa="message-actions"]
```

The small `content.js` file only removes a legacy class from early local test builds. It does not scan the page or observe Slack's DOM.

## Tuning

The placement is controlled by four CSS variables in `styles.css`:

```css
--slack-left-actions-offset: 76px;
--slack-left-actions-lift: -12px;
--slack-left-actions-default-offset: 68px;
--slack-left-actions-default-lift: -20px;
```

The `default` values apply to the first message in a sender block. The other values apply to compact follow-up messages.

## Browser Support

This is a Manifest V3 extension intended for Chrome and Chromium-based browsers.

## Privacy

This extension does not collect, store, transmit, or sell any data. It only injects local CSS and a small cleanup script into Slack pages.

See [PRIVACY.md](PRIVACY.md).

## License

MIT. See [LICENSE](LICENSE).

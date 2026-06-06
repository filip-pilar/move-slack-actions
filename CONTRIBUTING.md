# Contributing

Thanks for helping improve Slack Left Message Actions.

## Local Development

1. Clone the repository.
2. Open Chrome Extensions at `chrome://extensions`.
3. Enable Developer mode.
4. Click Load unpacked.
5. Select the repository folder.
6. Reload Slack after making changes.

## Notes

- Keep the extension dependency-free unless there is a strong reason to add tooling.
- Prefer narrowly scoped CSS selectors over JavaScript DOM mutation.
- Be careful not to target whole Slack message rows. The toolbar container is `.c-message_actions__container.c-message__actions`.
- If Slack changes its DOM, update the selectors and document the change in `CHANGELOG.md`.

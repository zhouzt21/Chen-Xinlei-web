# Chen-Xinlei Web Prototype

This is a static single-page academic homepage prototype for Prof. Xinlei Chen.

## Files

- `index.html` - page structure and section anchors
- `styles.css` - white, minimal responsive layout
- `script.js` - content data, rendering, filters, and active navigation
- `images/` - permanent local publication thumbnail assets
- `images/icons/` - permanent local icon assets for profile and contact links
- `tmp/` - ignored intermediate downloads, PDF renders, candidate images, and audit scratch files

## Preview

Open `index.html` directly in a browser. The prototype references current media assets from `https://chen-xinlei.com/`, so an internet connection is needed for the profile photo, project videos, and publication thumbnails that have not been localized into `images/`.

For a local HTTP preview:

```bash
npm run serve
```

Then open `http://127.0.0.1:8000/`.

## Verification

The visual and interaction smoke test uses the local Chrome installation and writes screenshots to `screenshots/`.

```bash
npm install --ignore-scripts
npm run verify
```

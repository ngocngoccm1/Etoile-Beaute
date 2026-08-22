# Etoile Beauté Studio

Static website ready for GitHub Pages.

## Local preview

```bash
npm run dev
```

Open `http://127.0.0.1:5173`.

## GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` builds and publishes the site whenever changes are pushed to `main`.

1. Create an empty GitHub repository.
2. Add it as `origin` and push the `main` branch.
3. In **Settings → Pages**, select **GitHub Actions** as the source.

The five service pages are generated as static folders, so their links work on GitHub Pages without a server.

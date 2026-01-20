Resume Maker — Project 2.5

This is a static HTML/CSS/JS resume builder preview. Use the included `index.html` to run locally and the `libs/` folder contains `html2canvas` and `jspdf` used for PDF export.

Quick local test

1. Open `index.html` in a browser (double-click or `File → Open`).
2. Fill fields / upload photo and click `Download as PDF`.

Publish options

1) GitHub Pages (recommended for static sites)
- Create a repository on GitHub and push this folder.
- On the repo settings use Pages to serve from `main`/`gh-pages` or the `docs/` folder.
- Or use the `gh-pages` npm package to deploy from `build`.

Commands (example):

```bash
# from inside Project 2.5 folder
git init
git add .
git commit -m "Initial commit: Resume Maker"
# create remote repo on GitHub and push
git remote add origin https://github.com/<your-username>/<repo>.git
git branch -M main
git push -u origin main
```

2) Netlify / Vercel (one-click deploy)
- Drag-and-drop the project folder to Netlify Drop, or connect the GitHub repo.
- Vercel: `vercel` CLI or connect GitHub and it auto-deploys.

Notes & troubleshooting

- Keep `libs/` files locally (html2canvas, jspdf) so PDF generation works offline.
- If you choose GitHub Pages and your assets don't load, check that script and link paths are relative (they are in this project).
- If you want me to initialize git and create the repo files, I can do that for you.

If you want, tell me which hosting provider you prefer and I will either:
- initialize a git repo here and prepare a push-ready commit, or
- create a ZIP artifact for manual upload, or
- provide the exact Netlify/Vercel steps for one-click deploy.

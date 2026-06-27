# Deploy & Host anishdeshmukh.com — Full Step-by-Step Guide

This takes your Astro site from your computer to a live website at
**https://anishdeshmukh.com**, hosted free on GitHub Pages.

- GitHub username: `anishd26`
- Repository: `https://github.com/anishd26/anishdeshmukh.com`
- Do steps 0–7 once. After that, publishing updates is just step 8.

---

## Step 0 — One-time cleanup (recommended)

Your project folder is currently named `anishdeshmukh.com ` with a **trailing
space**, which makes terminal commands error-prone. Rename it to remove the space
(in Finder, or run this in Terminal):

```bash
cd ~/Claude/Projects/"Anish Portfolio Website"
mv "anishdeshmukh.com " "anishdeshmukh.com"
```

From here on, your project folder is:
`~/Claude/Projects/Anish Portfolio Website/anishdeshmukh.com`

---

## Step 1 — Install the tools you need

You need **Node.js** (to build the site) and **Git** (to push to GitHub).

Open the **Terminal** app and check what you already have:

```bash
node -v
git -v
```

- If `node -v` prints a version of **18 or higher** (e.g. `v20.x`), you're set.
  If not, install it from https://nodejs.org (download the "LTS" version, run the
  installer, then reopen Terminal).
- If `git -v` errors, install Git: run `xcode-select --install` and accept the
  prompt, or get it from https://git-scm.com.

---

## Step 2 — Open your project in Terminal

```bash
cd ~/Claude/Projects/"Anish Portfolio Website"/anishdeshmukh.com
```

Confirm you're in the right place — you should see `package.json`:

```bash
ls
```

---

## Step 3 — Install dependencies and preview locally

```bash
rm -rf node_modules        # clears any old/incompatible install
npm install                # downloads what the site needs (~30-60s)
npm run dev                # starts a local preview
```

Open the URL it prints (usually **http://localhost:4321**) in your browser.
Edit files and the page reloads automatically. Press `Ctrl + C` in Terminal to stop.

This is where you replace the placeholder content — see the bottom of this file
for which files to edit.

---

## Step 4 — Put your code on GitHub

Your GitHub repo already exists but is empty. Connect this folder to it and push.

```bash
git init                              # turn this folder into a git repo
git branch -M main                    # name the main branch "main"
git add .                             # stage all files
git commit -m "Initial portfolio site"
git remote add origin https://github.com/anishd26/anishdeshmukh.com.git
git push -u origin main
```

You may be asked to sign in to GitHub — follow the browser prompt (or use a
Personal Access Token if asked for a password).

**If the push is rejected** because the GitHub repo already has a commit (for
example a README created when you made the repo), run this once, then push again:

```bash
git pull origin main --allow-unrelated-histories --no-edit
git push -u origin main
```

Refresh your repo page on GitHub — your files should now be there.

---

## Step 5 — Turn on GitHub Pages

1. Go to **https://github.com/anishd26/anishdeshmukh.com**.
2. Click **Settings** (top menu) → **Pages** (left sidebar).
3. Under **Build and deployment → Source**, select **GitHub Actions**.
   (Do NOT pick "Deploy from a branch" — this site builds with an Action.)

That's all you click here. The workflow at `.github/workflows/deploy.yml` does
the rest automatically.

---

## Step 6 — Watch the first deploy

1. Click the **Actions** tab of your repo.
2. You'll see a run called "Deploy to GitHub Pages" building. Wait for the green
   check (usually 1-2 minutes).
3. Once green, your site is live at the temporary URL
   **https://anishd26.github.io** (the custom domain comes next).

Every future `git push` to `main` re-runs this automatically.

---

## Step 7 — Point your domain at GitHub (DNS)

Your `public/CNAME` file already tells GitHub your domain is `anishdeshmukh.com`.
Now you tell your **domain registrar** (wherever you bought the domain) to send
visitors to GitHub.

Log in to your registrar, find **DNS settings / DNS records** for
`anishdeshmukh.com`, and add these records:

**A) Four A records** — point the bare domain to GitHub's servers.
For each, set Type = `A`, Host/Name = `@`, and Value to one of:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

(Four separate A records, all with Host `@`, one IP each.)

**B) One CNAME record** — point `www` to your GitHub Pages address:

```
Type: CNAME    Host/Name: www    Value: anishd26.github.io
```

> If your registrar already has placeholder A or CNAME records on `@`/`www`
> (e.g. a parking page), delete those first so they don't conflict.

DNS changes can take anywhere from a few minutes to 24 hours to take effect.

---

## Step 8 — Finalize the custom domain + HTTPS

1. Back on GitHub: **Settings → Pages**. The **Custom domain** box should already
   show `anishdeshmukh.com` (from your CNAME file). If it's empty, type it in and
   click **Save**.
2. GitHub runs a "DNS check." Once it passes (after DNS propagates), the
   **Enforce HTTPS** checkbox becomes available — tick it. This gives you the
   free `https://` padlock.
3. Visit **https://anishdeshmukh.com** — your site is live.

---

## Publishing updates (the everyday loop)

After the one-time setup, this is all you ever do:

```bash
cd ~/Claude/Projects/"Anish Portfolio Website"/anishdeshmukh.com
npm run dev                     # preview your changes locally
# ...edit files, then when happy:
git add .
git commit -m "Describe what you changed"
git push
```

The push triggers an automatic rebuild and your live site updates in ~1-2 minutes.

---

## Where to edit your content

| What you want to change | File |
|-------------------------|------|
| Name, tagline, about story, skills, social links, availability badge | `src/data/site.js` |
| Projects (name, year, description, tags, links, screenshots) | `src/data/projects.js` |
| Publications (or empty the array to hide the section) | `src/data/publications.js` |
| Blog posts | add a `.md` file in `src/content/blog/` |
| Your resume | replace `public/resume.pdf` with your own PDF |
| Project screenshots | drop images in `public/projects/` and reference them in `projects.js` |

---

## Troubleshooting

- **Push asks for a password and rejects it** — GitHub no longer accepts account
  passwords on the command line. Create a Personal Access Token
  (GitHub → Settings → Developer settings → Personal access tokens) and paste it
  when asked for the password. Easiest alternative: install GitHub Desktop and
  push from there.
- **Actions run fails** — open the failed run under the Actions tab, read the red
  step. Most commonly it's a typo in a `.astro` or data file; fix it, commit, push.
- **Custom domain shows "DNS check in progress" for a while** — this is normal;
  wait for DNS to propagate (up to 24h, usually much less), then refresh.
- **Site loads but looks unstyled at the github.io URL** — expected only if a
  `base` path is misconfigured; with your custom-domain setup it looks correct at
  anishdeshmukh.com.
- **"command not found: npm"** — Node.js isn't installed, or Terminal needs
  reopening after installing it (see Step 1).

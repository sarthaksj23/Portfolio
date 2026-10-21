# Data Analyst Portfolio Website

A modern, professional portfolio website for an aspiring data analyst. It showcases your projects, skills, and contact links — and it's designed so you can add or update projects **without touching any code**.

---

## Table of Contents

1. [What This Website Contains](#1-what-this-website-contains)
2. [How the Files Are Organized](#2-how-the-files-are-organized)
3. [How to Change Your Name, Headline, Skills, and Contact Links](#3-how-to-change-your-name-headline-skills-and-contact-links)
4. [How to Add a New Project](#4-how-to-add-a-new-project)
5. [How to Replace or Delete an Existing Project](#5-how-to-replace-or-delete-an-existing-project)
6. [How to Attach SQL, Python, PDF, Word, Excel, and Other Files](#6-how-to-attach-sql-python-pdf-word-excel-and-other-files)
7. [How to Add Power BI and Tableau Dashboard Links or Embeds](#7-how-to-add-power-bi-and-tableau-dashboard-links-or-embeds)
8. [How to Save Updates to GitHub](#8-how-to-save-updates-to-github)
9. [How to Deploy Using GitHub Pages](#9-how-to-deploy-using-github-pages)
10. [Alternative: How to Deploy Using Cloudflare Pages](#10-alternative-how-to-deploy-using-cloudflare-pages)

---

## 1. What This Website Contains

- **Home page**: Your name, headline, introduction, technical skills, featured projects, and social/contact links.
- **Projects page**: A searchable, filterable gallery of all your projects.
- **Individual project pages**: A detailed page for each project with optional sections for overview, business problem, methodology, code, dashboards, findings, recommendations, files, and more.
- **Light/dark mode**: A theme toggle that remembers the visitor's choice.
- **Responsive design**: Works on desktop, tablet, and mobile.

The website is a **static site** — it needs no server, no database, and no paid services. It can be hosted for free on GitHub Pages or Cloudflare Pages.

---

## 2. How the Files Are Organized

```
project/
├── src/
│   ├── data/
│   │   ├── profile.ts      ← YOUR personal info (name, skills, links)
│   │   └── projects.ts     ← YOUR projects (the only file for project updates)
│   ├── types/
│   │   └── index.ts         ← Data type definitions (you don't need to edit this)
│   ├── components/          ← UI components (you don't need to edit these)
│   ├── pages/               ← Page layouts (you don't need to edit these)
│   ├── hooks/               ← Routing and theme logic (you don't need to edit these)
│   ├── App.tsx              ← Main app (you don't need to edit this)
│   └── index.css            ← Global styles (you don't need to edit this)
├── index.html               ← HTML entry point (you don't need to edit this)
├── package.json             ← Project dependencies (you don't need to edit this)
└── README.md                ← This file
```

**You only ever need to edit two files:**
- `src/data/profile.ts` — your personal information
- `src/data/projects.ts` — your projects

Everything else is the website's design and logic. Leave it as-is.

---

## 3. How to Change Your Name, Headline, Skills, and Contact Links

Open the file `src/data/profile.ts` in any text editor (or GitHub's built-in editor).

### Name and headline
Find these lines and replace the placeholder text:
```ts
name: '[Your Name]',
headline: 'Aspiring Data Analyst | Turning Data into Insights',
```

### Introduction
Find the `intro` field and replace the text with your own:
```ts
intro: 'Your introduction text here.',
```

### Contact and social links
Find the `social` section. Replace the placeholder URLs with your real links:
```ts
social: {
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-username',
  resume: '/files/your-resume.pdf',
  email: 'your.email@example.com',
},
```
- If you leave a field as an empty string `''`, that link button will not appear.
- For `resume`, put your PDF file in a folder called `public/files/` and use `/files/your-resume.pdf`.

### Skills
Find the `skillGroups` section. Edit, add, or remove categories and skills:
```ts
skillGroups: [
  {
    category: 'Languages & Querying',
    skills: ['SQL', 'Python', 'PostgreSQL'],
  },
  // Add more groups...
],
```

---

## 4. How to Add a New Project

Open `src/data/projects.ts`. Scroll to the bottom of the `projects` array.

**Step-by-step:**

1. Find the last project entry (a `{ ... }` block ending with `}`).
2. Add a comma after its closing `}`, then paste a new project block:

```ts
  {
    slug: 'my-new-project',           // unique, lowercase, hyphens only
    title: 'My New Project',
    shortDescription: 'A one-sentence summary of the project.',
    thumbnail: '/files/my-project.png',  // or a full image URL
    tools: ['SQL', 'Python'],          // tools used (powers the filter)
    category: 'SQL Analysis',          // one category (powers the filter)
    featured: true,                    // optional: show on home page

    // --- OPTIONAL SECTIONS (delete any you don't need) ---

    overview: 'A longer description of the project.',
    businessProblem: 'The problem this analysis addresses.',
    objectives: [
      'First objective or question.',
      'Second objective or question.',
    ],
    dataset: 'Description of the data source.',
    dataCleaning: 'How you cleaned and prepared the data.',
    methodology: 'Your analytical approach.',
    code: [
      {
        language: 'sql',
        label: 'Query description',
        code: 'SELECT * FROM table;',
      },
    ],
    dashboards: [
      // See section 7 for dashboard setup
    ],
    keyFindings: [
      'First finding.',
      'Second finding.',
    ],
    recommendations: [
      'Recommendation based on findings.',
    ],
    files: [
      // See section 6 for file setup
    ],
    githubUrl: 'https://github.com/your-username/your-repo',
    references: ['Source or reference link.'],
    limitations: ['Any limitations of the analysis.'],
  },
```

3. Save the file. The project appears in the gallery automatically.

**Important:** The `slug` becomes the web address: `/#/projects/my-new-project`. Use only lowercase letters, numbers, and hyphens. Make it unique — no two projects can share a slug.

---

## 5. How to Replace or Delete an Existing Project

### Replace a sample project
1. Find the sample project in `src/data/projects.ts` (it has `isSample: true`).
2. Edit its fields with your real content.
3. Remove the line `isSample: true` (or change it to `isSample: false`).
4. You can keep the same `slug` (existing links still work) or change it (new URL).

### Delete a project
1. Find the project's entire `{ ... }` block in the array.
2. Delete the whole block, including the comma before or after it.
3. Make sure the array still has valid syntax: each `{ ... }` is separated by a comma, and the last one has no trailing comma.
4. Save. The project disappears from the gallery and navigation automatically.

---

## 6. How to Attach SQL, Python, PDF, Word, Excel, and Other Files

Each project has an optional `files` list. Each file entry looks like this:

```ts
files: [
  {
    name: 'analysis.sql',
    type: 'SQL',
    description: 'Main SQL script with all queries.',
    url: '/files/analysis.sql',
  },
],
```

### Where to put your files

**Option A — Store files with the website:**
1. Create a folder called `public/files/` in your project (if it doesn't exist).
2. Put your file there, e.g. `public/files/analysis.sql`.
3. Use the path `/files/analysis.sql` as the `url`.

**Option B — Link to an external URL (GitHub, Google Drive, etc.):**
1. Upload your file to GitHub, Google Drive, or any file host.
2. Use the full URL as the `url`, e.g. `https://github.com/your-username/your-repo/raw/main/analysis.sql`.

### Supported file types
Use any of these in the `type` field (they determine the file icon):
- `SQL`, `Python`, `R`, `Jupyter` (for .ipynb)
- `PDF`, `Word` (for .doc/.docx)
- `Excel` (for .xls/.xlsx), `CSV`
- `Image` (for screenshots, .png, .jpg)

### Important rules
- If a file's `url` is empty (`''`), that file will be **hidden** — no broken download buttons.
- For large datasets, use an external link rather than storing the file with the website.
- You can add as many files as you want to a project's `files` list.

---

## 7. How to Add Power BI and Tableau Dashboard Links or Embeds

Each project has an optional `dashboards` list. Each dashboard entry has a `type`:

### Embedded Power BI dashboard
```ts
dashboards: [
  {
    type: 'powerbi',
    embedUrl: 'https://app.powerbi.com/view?r=YOUR_EMBED_URL',
    caption: 'Optional caption text.',
  },
],
```
Get the embed URL from Power BI: **File → Embed report → Website or portal**.

### Embedded Tableau dashboard
```ts
dashboards: [
  {
    type: 'tableau',
    embedUrl: 'https://public.tableau.com/views/your-dashboard/your-view',
    caption: 'Optional caption text.',
  },
],
```
Get the embed URL from Tableau Public: **Share → Copy Embed Code** and extract the `src` URL.

### External dashboard link (when embedding isn't possible)
```ts
dashboards: [
  {
    type: 'external',
    externalUrl: 'https://your-dashboard-link.com',
    caption: 'Click to view the interactive dashboard.',
  },
],
```
This shows a "View Interactive Dashboard" button.

### Dashboard screenshot (static preview)
```ts
dashboards: [
  {
    type: 'screenshot',
    screenshotUrl: '/files/dashboard-preview.png',
    caption: 'Dashboard preview screenshot.',
  },
],
```

### You can include multiple dashboards
```ts
dashboards: [
  { type: 'powerbi', embedUrl: '...' },
  { type: 'tableau', embedUrl: '...' },
],
```

### Privacy warning
**Public dashboards may expose their underlying data.** Never publish dashboards containing sensitive, confidential, or personal data. Always check your dashboard's sharing settings before embedding.

---

## 8. How to Save Updates to GitHub

If you're editing files directly on GitHub's website:

1. Go to your repository on GitHub.com.
2. Navigate to the file you want to edit (e.g. `src/data/projects.ts`).
3. Click the **pencil icon** (Edit this file).
4. Make your changes.
5. Add a short message like "Added new project" in the **Commit changes** box.
6. Click **Commit changes**.

If you're working on your computer:

1. Open a terminal in your project folder.
2. Run: `git add .`
3. Run: `git commit -m "Added new project"`
4. Run: `git push`

Your changes are now saved to GitHub. If you've set up GitHub Pages (below), the website updates automatically within a minute.

---

## 9. How to Deploy Using GitHub Pages

This is the recommended free hosting option.

### Step 1: Create a GitHub repository
1. Go to [github.com](https://github.com) and sign in (create a free account if needed).
2. Click the **+** icon (top right) → **New repository**.
3. Name it (e.g. `data-analyst-portfolio`).
4. Set it to **Public**.
5. Click **Create repository**.

### Step 2: Upload your code
If you downloaded this project as a ZIP:
1. Unzip it on your computer.
2. In your repository on GitHub, click **uploading an existing file**.
3. Drag all the files into the upload area.
4. Click **Commit changes**.

Or use git from your terminal:
```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/your-username/data-analyst-portfolio.git
git push -u origin main
```

### Step 3: Set up GitHub Pages
1. In your repository, click **Settings** (top tab).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Create a workflow file (see Step 4).

### Step 4: Add the deployment workflow
Create a file at `.github/workflows/deploy.yml` in your repository with this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

5. Commit this file. GitHub will build and deploy your site automatically.
6. After a minute or two, your site will be live at:
   `https://your-username.github.io/data-analyst-portfolio/`

### Notes about routing
This website uses **hash-based routing**, which means project links look like:
`https://your-username.github.io/data-analyst-portfolio/#/projects/netflix-analysis`

This works on any static host — no server configuration needed. You can share these links directly.

---

## 10. Alternative: How to Deploy Using Cloudflare Pages

If you prefer Cloudflare Pages (also free):

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com) and sign in.
2. Click **Create a project** → **Connect to Git**.
3. Select your GitHub repository.
4. Set these build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**.
6. Your site will be live at a `.pages.dev` URL, and you can add a custom domain for free.

---

## Quick Reference

| Task | File to edit |
|------|-------------|
| Change name, headline, intro | `src/data/profile.ts` |
| Change skills | `src/data/profile.ts` |
| Change contact/social links | `src/data/profile.ts` |
| Add a project | `src/data/projects.ts` |
| Edit a project | `src/data/projects.ts` |
| Delete a project | `src/data/projects.ts` |
| Add project files | Put files in `public/files/`, reference in `src/data/projects.ts` |
| Add dashboards | Add to `dashboards` array in `src/data/projects.ts` |

---

## Tech Stack

- **React + TypeScript** — UI framework
- **Vite** — build tool
- **Tailwind CSS** — styling
- **Lucide React** — icons

No backend, no database, no paid services required.

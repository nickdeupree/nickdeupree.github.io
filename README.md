                                                                                                                                                                                                                                                                                                                                    # Nick de Upree’s Portfolio

This repository powers the static portfolio website for **Nick de Upree**. It's built using [Next.js](https://nextjs.org) with the App Router and TypeScript, styled with Tailwind CSS, and deployed to GitHub Pages.

The site showcases Nick's experience, open-source contributions, projects, skills, and provides contact information. All data lives under `src/app/data` and is rendered via components in `src/app/components`.

---

## 🛠️ Tech Stack

- [Next.js 14+](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- GitHub Pages for deployment
- React 18

---

## 🚀 Development

1. Clone the repository:
   ```bash
   git clone https://github.com/nickdeupree/nickdeupree.github.io.git
   cd nickdeupree.github.io
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser. Changes are hot‑reloaded.

### 📁 Key directories

- `src/app/` – application routes and layouts
- `src/app/components/` – reusable UI pieces (Header, Projects, Experience, etc.)
- `src/app/data/` – TypeScript files containing your portfolio data
- `public/` – static assets (images, icons)

---

## 📦 Deployment

A `deploy` script builds the site and pushes the output to the `gh-pages` branch:

```bash
npm run build
npm run deploy
```

Configure GitHub Pages to serve from `gh-pages` in your repository settings.

---

## 🎨 Customization

- Edit `src/app/data/*` to update experience, projects, skills, etc.
- Tailwind utility classes drive styling—modify `tailwind.config.ts` or add classes directly.
- Fonts are configured in `src/app/fonts` and loaded via the layout.

---

## 🤝 Contributing

This is a personal site; contributions are not expected. Feel free to fork, experiment, or open issues if you adapt this template.

---

## 📫 Contact

Use the contact form on the site or connect on [GitHub](https://github.com/nickdeupree).


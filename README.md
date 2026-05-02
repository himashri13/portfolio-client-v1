# Himasri Nandam Portfolio - Technical Documentation

This is a premium, high-performance portfolio website built with the latest web technologies. It features a sophisticated monochrome aesthetic, advanced scroll-driven animations, and a centralized data management system.

## 🛠️ Tech Stack & Architecture

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router & React 19)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first engine)
- **Components:** [Shadcn UI](https://ui.shadcn.com/) & [Aceternity UI](https://ui.aceternity.com/)
- **Animations:** [Framer Motion 12](https://www.framer.com/motion/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/) (Theme persistence)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Email Integration:** [EmailJS](https://www.emailjs.com/)

---

## 📂 Repository Index & File Manifest

### 🌐 Core Application (`/app`)
- `layout.tsx`: Root configuration. Sets up **Outfit** (headings) and **Plus Jakarta Sans** (body) fonts. Includes `ThemeProvider` and global `Toaster`.
- `page.tsx`: The main entry point. Assembles all section components into a single-page scrolling experience.
- `globals.css`: The heart of the design. Contains Tailwind v4 `@theme` overrides, custom animations (e.g., `spotlight`), and CSS variables for the Zinc color palette.
- `icon.png`: Favicon asset.

### 🏗️ UI Components (`/components`)
#### `📂 /sections` (The Homepage Building Blocks)
- `hero-section.tsx`: Premium landing area with spotlight effects and primary Call-to-Actions.
- `about-section.tsx`: Professional summary and bio layout.
- `experience-section.tsx`: Interactive timeline of professional history.
- `skills-section.tsx`: Categorized technical and soft skills with visual progress indicators.
- `education-section.tsx`: Academic background and certifications.
- `contact-section.tsx`: Fully validated contact form with EmailJS integration and submission states.

#### `📂 /ui` (Design System Primitives)
- `aceternity-bg.tsx`: Custom background patterns (Grids/Dots) for premium aesthetic.
- `spotlight.tsx`: Interactive SVG-based lighting effect for the Hero section.
- `button.tsx`, `badge.tsx`, `card.tsx`: Stylized primitive components from Shadcn/Aceternity.
- `sonner.tsx`: Toast notification system configuration.

#### `📂 Common`
- `navbar.tsx`: Floating glassmorphism menu with active-section tracking.
- `footer.tsx`: Minimalist footer with social links.
- `section-wrapper.tsx`: High-order component for standardizing scroll-reveal animations across all sections.
- `theme-toggle.tsx`: Smooth animated switch for Light/Dark mode.

### ⚙️ Logic & Data (`/lib` & `/store`)
- `portfolio-data.ts`: **THE SOURCE OF TRUTH**. Contains all text content, social links, and experience data. Modify this file to update site content.
- `utils.ts`: Standard Tailwind class merging utility (`cn`).
- `theme-store.ts`: Zustand store with `persist` middleware to manage theme state across sessions.

---

## ⚙️ Development Setup

### 1. Prerequisites
- **Node.js:** v20.x or higher (v22+ recommended)
- **Package Manager:** `npm` (preferred)

### 2. Installation
```bash
git clone <repository-url>
cd himas-portfolio-client
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory (refer to `.env.example`):
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key
```

### 4. Run Development Server
```bash
npm run dev
```

---

## 🚀 Key Implementation Details

### Scroll-Driven Animations
Each major section is wrapped in the `SectionWrapper`. It uses `framer-motion`'s `whileInView` with a tailored `viewport` offset to trigger entry animations exactly when the user reaches the content.

### Tailwind CSS v4 Engine
This project utilizes the new CSS-first engine. Instead of a `tailwind.config.js`, all configurations (breakpoints, colors, fonts) are handled directly in `app/globals.css` using the `@theme` directive.

### Theme Engine
Unlike traditional `next-themes` implementations, this project uses a custom **Zustand store** to handle theme switching. This provides finer control over the class injection process and avoids hydration mismatches in Next.js 16.

---

## 🏗️ Build & Deployment
- **Build:** `npm run build`
- **Deploy:** Recommended on **Vercel** for seamless Next.js 16 support. Ensure all `NEXT_PUBLIC_` environment variables are configured in the dashboard.

---

## 📄 License
Private project for personal use. Built for Himasri Nandam.

# Gemini Context - Himasri Nandam Portfolio

This file provides critical context for Gemini models working on this codebase.

## 🏗️ Project Overview
A premium, professional portfolio for **Himasri Nandam (Business Analyst)**. The design philosophy is "Modern Professional" using a sophisticated monochrome palette, high-end animations, and cutting-edge web technologies.

## 🛠️ Technology Stack (Latest Versions)
- **Next.js 16 (React 19):** Uses App Router and React Server Components.
- **Tailwind CSS v4:** Uses the new CSS-first engine. Note that v4 has significant changes in configuration and utility handling compared to v3.
- **Framer Motion 12:** Used for all scroll-linked and micro-animations.
- **Shadcn UI & Aceternity UI:** Core component libraries for the premium aesthetic.
- **Zustand:** State management for theme persistence (located in `store/theme-store.ts`).
- **EmailJS:** Integrated for the contact form functionality.

## 📁 Critical Project Structure
- **Source of Truth:** All content text (experience, skills, projects) **MUST** be pulled from `lib/portfolio-data.ts`. Never hardcode content strings directly in components if they belong in the data file.
- **Animations:** Most sections are wrapped in `components/section-wrapper.tsx` to handle standard reveal animations.
- **Styles:** Global styles and Tailwind v4 configuration are in `app/globals.css`.
- **UI Components:** Reusable primitive components are in `components/ui/`.

## 🎨 Design Guidelines
- **Color Palette:** Primarily monochrome (Zinc/Neutral) with subtle gradients.
- **Typography:** 
  - **Headings:** `Outfit` (`--font-heading`)
  - **Body:** `Plus Jakarta Sans` (`--font-sans`)
- **Aesthetics:** Use "Spotlight" effects, "Glassmorphism" for navbars, and subtle "Grid/Dot" background patterns (see `components/ui/aceternity-bg.tsx`).

## ⚠️ Development Rules
1. **Next.js 16:** Be aware of breaking changes in Next.js 16. Always verify API usage against the latest documentation.
2. **Component Structure:** Keep components clean and focused. Large sections should be broken down into smaller sub-components if they exceed 200 lines.
3. **Responsiveness:** Every change must be tested for mobile responsiveness (Tailwind `sm:`, `md:`, `lg:` breakpoints).
4. **Theme Support:** Ensure all components look perfect in both Light and Dark modes. Use `dark:` variants appropriately.

---
*Last Updated: 2026-05-02*

# Himasri Nandam Portfolio - AI Development Guide

Hello! This document is designed to help you understand how this portfolio project is built and structured. Even if you are not very technical, this guide will explain the different parts of your website in simple terms.

## 🛠️ The Building Blocks

This project was built using the latest, high-performance tools:

1.  **Next.js 16 (React 19):** This is the engine of your website. It's the most modern version available, making your site incredibly fast. Think of it like the blueprint and foundation of a house.
2.  **Tailwind CSS v4:** This is the styling tool. It's the cutting-edge version of Tailwind, allowing for beautiful designs with less "clutter." It's like having a premium set of architectural tools to build your site.
3.  **Shadcn UI:** This is a collection of pre-designed, high-quality components (like buttons, cards, and input fields). It ensures everything looks professional, consistent, and follows modern design standards.
4.  **Zustand:** This is a lightweight tool used to "remember" things. In this project, it's used to remember your preference for "Light" or "Dark" mode, so the site stays how you like it even after you close your browser.
5.  **Framer Motion:** This is the "magic" behind the smooth animations. It handles how text slides in, how sections fade into view, and how buttons react when you hover over them, giving the site a premium feel.

## 📁 Project Structure (Where is everything?)

Here is a simple map of your project files:

*   **`/app`**: This is the main folder for your website pages.
    *   `layout.tsx`: The master template. It sets the overall look, including the fonts and the background.
    *   `page.tsx`: The main "stage" where all your content (About, Experience, etc.) is put together.
    *   `globals.css`: The main design file where special colors and background patterns are defined.
*   **`/components`**: This folder holds all the individual "pieces" of your website.
    *   `/sections`: Contains the building blocks like the Hero section, About me, Experience list, and Contact form.
    *   `/ui`: Holds the professional-grade buttons, cards, and other visual elements.
    *   `navbar.tsx`: The navigation menu at the top.
    *   `section-wrapper.tsx`: A special "wrapper" that makes sure each section animates beautifully as you scroll to it.
*   **`/lib`**: Contains helper files.
    *   `portfolio-data.ts`: **The most important file for you!** This is where all your professional details (jobs, skills, contact info) are stored. If you want to change any text on the site, this is the place to do it.
*   **`/public`**: This is for static files like your resume.
    *   `Himasri_Nandam_BA_Resume.pdf`: Your downloadable resume.
*   **`/store`**: Contains the "memory" of the site.
    *   `theme-store.ts`: The logic that keeps track of whether you are in Dark or Light mode.

## 🎨 Design & Animations

*   **Modern Typography:** We use **Outfit** for headings to give a modern, clean look, and **Plus Jakarta Sans** for body text for maximum readability.
*   **Responsive Design:** Your website is "smart"—it automatically rearranges itself to look perfect on phones, tablets, and computers.
*   **Premium Animations:** We use "Spotlight" effects and smooth scroll reveals to make the site feel interactive and high-end.

## 📝 How to Update Your Information

You don't need to be a coder to update your site!

1.  Open the file: `lib/portfolio-data.ts`.
2.  Look for the text you want to change (it will be inside quotation marks like `"Himasri Nandam"`).
3.  Change the text to your new information.
4.  Save the file, and the website updates instantly.

---
*Built with care using AI assistance.*

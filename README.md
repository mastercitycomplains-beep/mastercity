# Executive Full-Stack Portfolio & Case Study Platform

A modern, high-performance personal portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**. Engineered for senior full-stack developers, staff engineers, product architects, and technical leaders who need a fast, accessible, business-grade web presence ready for instant deployment on Vercel.

---

## Key Features

- **Next.js 14 App Router & TypeScript**: Fast server-side and static rendering with strict type safety.
- **Light & Dark Mode**: Persistent theme switching using `next-themes` with zero layout shift.
- **Responsive Navigation & Mobile Drawer**: Glassmorphism fixed navbar with mobile menu overlay.
- **Centralized Content Store (`data/portfolio-data.ts`)**: Update all portfolio projects, bio, experience, services, testimonials, and blog posts from a single configuration file.
- **Pages Included**:
  - **Home (`/`)**: Hero section, live code terminal card, stats strip, skills matrix, featured work, services preview, client testimonials, and CTA banner.
  - **About (`/about`)**: Detailed bio, engineering philosophies, professional experience timeline, and verified education/credentials.
  - **Portfolio (`/portfolio`)**: Interactive category filtering, search input, and responsive project cards.
  - **Dynamic Case Studies (`/portfolio/[slug]`)**: In-depth project breakdown with challenge, solution, measurable business impact metrics, tech stack pills, and screenshot gallery.
  - **Services (`/services`)**: Comprehensive capability breakdown, deliverables, estimated timelines, transparent pricing placeholders, 4-step workflow, and FAQ accordion.
  - **Resume (`/resume`)**: Executive CV layout, downloadable PDF hook (`/public/alex-vance-resume.pdf`), print-friendly styles, and technical proficiencies breakdown.
  - **Contact (`/contact`)**: Validated contact form with anti-spam honeypot, office hours & timezone card, social links, and `/api/contact` route.
  - **Blog (`/blog`) & Dynamic Articles (`/blog/[slug]`)**: Article search, category filtering, reading time estimates, author bio, and typography styling.
  - **Privacy Policy (`/privacy`)**: Professional data privacy and transparency disclosures.
  - **Custom 404 (`/not-found`)**: Styled not-found screen with quick destination shortcuts.
- **SEO & Performance**: Preconfigured Open Graph images, Twitter cards, dynamic `sitemap.xml`, and `robots.txt`.

---

## Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 14** | React framework with App Router & Server Components |
| **TypeScript** | Static typing and interfaces |
| **Tailwind CSS** | Utility-first responsive styling and CSS variables |
| **Lucide React** | Modern, lightweight icon suite |
| **next-themes** | Theme persistence and dark mode management |
| **clsx & tailwind-merge** | Safe conditional class merging |

---

## Project Structure

```
ceo-mastercity/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form POST handler & validation
│   ├── about/
│   │   └── page.tsx              # About & career philosophy page
│   ├── blog/
│   │   ├── page.tsx              # Blog archive with category search
│   │   └── [slug]/
│   │       └── page.tsx          # Dynamic individual blog post
│   ├── contact/
│   │   └── page.tsx              # Contact page with details & form
│   ├── portfolio/
│   │   ├── page.tsx              # Portfolio archive with filtering
│   │   └── [slug]/
│   │       └── page.tsx          # Dynamic project case study
│   ├── privacy/
│   │   └── page.tsx              # Privacy Policy page
│   ├── resume/
│   │   └── page.tsx              # Executive interactive Resume / CV
│   ├── services/
│   │   └── page.tsx              # Services, pricing placeholders & FAQ
│   ├── globals.css               # Global CSS, gradients, and theme tokens
│   ├── layout.tsx                # Root layout with SEO and ThemeProvider
│   ├── not-found.tsx             # Custom 404 page
│   ├── page.tsx                  # Home page
│   ├── robots.ts                 # Dynamic robots.txt
│   └── sitemap.ts                # Dynamic sitemap generator
├── components/
│   ├── blog/                     # Blog cards and search input
│   ├── contact/                  # Contact form with validation
│   ├── home/                     # Hero, Skills, Projects, Services, CTA
│   ├── layout/                   # Navbar and Footer
│   ├── portfolio/                # Portfolio filter tabs and grid
│   ├── providers/                # ThemeProvider wrapper
│   ├── resume/                   # Download & print CV triggers
│   └── ui/                       # Button, Badge, Card, ThemeToggle
├── data/
│   └── portfolio-data.ts         # Centralized portfolio data & personal details
├── public/
│   └── alex-vance-resume.pdf     # Downloadable CV PDF placeholder
├── .env.example                  # Environment variables template
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies and build scripts
├── postcss.config.js             # PostCSS plugins
├── tailwind.config.ts            # Tailwind themes and animations
└── tsconfig.json                 # TypeScript compiler configuration
```

---

## Getting Started

### 1. Prerequisites
Ensure you have Node.js installed (v18.17 or higher recommended):
```bash
node -v
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Customizing Your Content

All personal content is organized inside `data/portfolio-data.ts`:
1. **Personal Information**: Edit `personalInfo` (name, title, tagline, bio, contact email, social media links).
2. **Projects**: Add or edit objects in `projectsData` (title, slug, image, liveUrl, githubUrl, challenge, solution, metrics).
3. **Services**: Customize `servicesData` (titles, deliverables, timelines, pricing tiers).
4. **Experience & Education**: Update `experienceData` and `educationData`.
5. **Resume Download**: Replace `public/alex-vance-resume.pdf` with your actual CV file.

---

## Building & Verification

Verify TypeScript compilation, linting, and production builds:

```bash
# Type check and build
npm run build

# Run linter
npm run lint
```

---

## Step-by-Step Vercel Deployment Guide

Deploying this portfolio to Vercel takes less than 3 minutes:

### Method 1: Deploy via GitHub (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of executive portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **"Add New..."** &rarr; **"Project"**.
   - Select your newly pushed GitHub repository and click **Import**.

3. **Configure Project Settings**:
   - **Framework Preset**: Next.js (automatically detected).
   - **Root Directory**: `./` (leave default).
   - **Build Command**: `next build` (leave default).
   - **Output Directory**: `.next` (leave default).

4. **Environment Variables**:
   - Add `NEXT_PUBLIC_SITE_URL` with your final domain (e.g. `https://yourdomain.com`).
   - If using live email dispatch via Resend, add `RESEND_API_KEY`.

5. **Deploy**:
   - Click **Deploy**. Vercel will automatically build the site and assign a live production URL with automatic SSL.

---

### Method 2: Deploy via Vercel CLI

1. Install the Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Authenticate and deploy:
   ```bash
   vercel
   ```
   Follow the interactive prompts to select your project scope and settings.

3. Deploy to production:
   ```bash
   vercel --prod
   ```

---

## Contact Form & Email Integration

By default, the contact form validates input on both client and server, logging submissions in `app/api/contact/route.ts`. To dispatch actual emails to your inbox:
1. Create a free account at [Resend](https://resend.com).
2. Install the SDK: `npm install resend`
3. Add `RESEND_API_KEY` to your `.env.local` and Vercel environment variables.
4. Uncomment the Resend dispatch hook inside `app/api/contact/route.ts`.

---

## License

This project is licensed under the MIT License.
#   m a s t e r c i t y  
 #   m a s t e r c i t y  
 #   m a s t e r c i t y  
 
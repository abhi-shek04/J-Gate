# J-Gate (Jゲート) — Japan–India Business & Co-Working Platform

> **Bridging Japanese Enterprise with India’s Premier Tech & Talent Corridor**  
> Operated by **Indobox India Private Limited**  
> Physical Hub: Cyber Gateway, HITEC City, Hyderabad, Telangana, India

---

## 🌟 Overview

**J-Gate** is a turnkey bilateral landing platform designed specifically for Japanese enterprises expanding into India. Situated in the heart of Hyderabad's HITEC City, J-Gate provides:
- **Dedicated Private Workspaces**: Plug-and-play secure office suites with high-speed redundant fiber and 100% power backup.
- **Japan Desk Governance**: Resident Japanese director leadership, bilingual business facilitation, and Japanese corporate culture advisory.
- **Talent Acquisition & Indobox Academy**: Local recruitment and workplace training (Horenso & Kaizen protocols).
- **Official Brochure Engine**: Instant lead capture and automatic download of the comprehensive 57.6 MB official guide (`J-Gate-Brochure.pdf`).
- **Direct Admin Alerts**: Instant lead notifications dispatched to `contact@indobox.co.jp` with one-click reply-to routing.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Database & ORM**: [Prisma](https://www.prisma.io/) (SQLite local, PostgreSQL / Supabase / Neon ready)
- **Mailer Engine**: [Nodemailer](https://nodemailer.com/) with automatic MX resolution and SMTP support
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) ready

---

## 📦 Getting Started

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/abhi-shek04/J-Gate.git
cd J-Gate
bun install # or npm install
```

### 2. Environment Variables

Create a `.env` file based on `.env.example`:

```env
DATABASE_URL="file:./db/custom.db"
ADMIN_EMAIL="contact@indobox.co.jp"

# Optional: Google Workspace / SMTP Configuration
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=465
# SMTP_SECURE=true
# SMTP_USER=contact@indobox.co.jp
# SMTP_PASS=your-google-app-password
# SMTP_FROM="J-Gate Notifications <contact@indobox.co.jp>"
```

### 3. Sync Database

```bash
bun x prisma db push
```

### 4. Run Development Server

```bash
bun run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

---

## 🌐 Deploy to Vercel

1. Push this repository to GitHub:
   ```bash
   git push -u origin main
   ```
2. Import the project on [vercel.com/new](https://vercel.com/new).
3. Set the Environment Variables:
   - `ADMIN_EMAIL` = `contact@indobox.co.jp`
4. Click **Deploy**. Vercel will run `prisma generate && next build` automatically via `vercel.json`.

---

## 🏢 Contact & Governance

- **Operator**: Indobox India Private Limited
- **Official Inquiries**: [contact@indobox.co.jp](mailto:contact@indobox.co.jp)
- **Location**: Cyber Gateway, HITEC City, Hyderabad, Telangana 500081, India
- **Languages Supported**: 日本語 (Japanese) · English

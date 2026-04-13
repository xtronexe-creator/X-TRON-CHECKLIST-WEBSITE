# X-TRON CHECKLIST Discord Bot Dashboard

A professional Discord bot management dashboard built with Next.js, Tailwind CSS, and TypeScript.

## Features

- 🔐 Discord OAuth2 Authentication
- 👑 Owner Panel with full system control
- 👤 User Panel with server management
- 📊 Analytics and charts
- 🎛️ Feature toggles
- 📝 Error logs viewer
- 🔔 Announcement system
- 🖥️ Bot status monitoring (Vortexa Cloud)
- 🌙 Dark theme with purple accents

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required variables:
- `DISCORD_CLIENT_ID` — Your Discord application client ID
- `DISCORD_CLIENT_SECRET` — Your Discord application client secret
- `DISCORD_REDIRECT_URI` — OAuth2 callback URL (e.g., `https://your-site.netlify.app/api/auth/discord/callback`)
- `JWT_SECRET` — A random 32+ character string for signing JWTs
- `DATABASE_URL` — Your MongoDB/Firebase connection string
- `NEXT_PUBLIC_APP_URL` — Your app URL

### 3. Run development server

```bash
npm run dev
```

### 4. Deploy to Netlify

1. Install `@netlify/plugin-nextjs`:
   ```bash
   npm install -D @netlify/plugin-nextjs
   ```

2. Push to GitHub and connect to Netlify

3. Set environment variables in Netlify dashboard

4. Deploy!

## File Structure

```
src/
├── app/
│   ├── api/auth/         # Auth endpoints
│   ├── dashboard/        # Dashboard pages
│   │   ├── owner/        # Owner-only pages
│   │   ├── server/[id]/  # Server config
│   │   └── ...
│   ├── globals.css       # Design system
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
├── components/           # Reusable components
└── lib/                  # Utilities & auth
```

## Roles

- **OWNER** (Discord ID: `1060444223666671667`) — Full admin access
- **USER** — Server management for admin-permissioned servers

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Recharts
- Lucide Icons
- Sonner (toasts)
- Jose (JWT)

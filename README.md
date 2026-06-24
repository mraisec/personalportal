# Personal Portal

A comprehensive personal management application built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Dashboard** - Overview with statistics and charts
- **Project Management** - Add, edit, and track your projects
- **Gmail Central** - Manage and sync multiple Gmail accounts
- **Modern UI** - Responsive design with sidebar navigation
- **Database** - SQLite with Prisma ORM for data persistence

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Setup

The application uses SQLite with Prisma. To set up the database:

```bash
npx prisma migrate dev
npx prisma generate
```

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite with Prisma ORM
- **Charts**: Recharts
- **Icons**: Lucide React

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # React components
├── lib/                # Utility functions and database client
└── types/              # TypeScript type definitions
```

## Planned Features

- Drive management system
- Money tracking (income/expense)
- Music selection and top 10 tracking
- Movies/books watchlist
- Home projects and honey-do lists
- Habit/routine tracking with statistics



Team,

Below is a summary of all changes made to Elaine across both the security hardening and feature enhancement sessions.

---

## Security & Vulnerability Fixes

| Fix | Description |
|-----|-------------|
| **Login page credentials exposure** | Removed pre-filled email/password from initial form state. Credentials now only populate on explicit demo account selection. |
| **Plaintext password display** | Removed the visible `demo123` password text from the login page UI. |
| **Form autocomplete attributes** | Added `autocomplete="email"` and `autocomplete="current-password"` to login fields to satisfy browser security standards. |
| **HTTP security headers (Nginx)** | Added `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy` headers to the Dockerfile's Nginx config. |
| **security.txt** | Created [.well-known/security.txt](cci:7://file:///d:/nepica/phase1/elaine/artifacts/elaine/public/.well-known/security.txt:0:0-0:0) to signal site legitimacy to enterprise AV/phishing scanners. |
| **HTML meta tags** | Added security-related meta tags to [index.html](cci:7://file:///d:/nepica/phase1/elaine/artifacts/elaine/index.html:0:0-0:0) to help heuristic scanners classify the page as legitimate. |

**Why:** These changes address AV/enterprise security scanner false positives that were flagging the site as a potential phishing page due to pre-filled credentials, plaintext passwords, and missing standard security headers.

---

## Feature Enhancements

| # | Feature | Details |
|---|---------|---------|
| 1 | **Documents: "Owner" → "Description"** | Renamed the Owner field to Description throughout the documents page (form, table, dialog). |
| 2 | **Documents: Drag-and-drop + Import** | Added a drag-and-drop upload zone with visual overlay, plus a dedicated Import button with hidden file input. |
| 3 | **Documents: QMS & OSHA Forms tabs** | Added sub-tabs under Forms for "QMS Forms" and "OSHA Safety Forms" with category-based filtering. |
| 4 | **Dashboard: Action Owners widget** | Replaced "Active Repair Cycles" with an "Action Owners" table showing owner, source (CAPA/Finding), action count, and due-date status (Critical/In-Work/Scheduled/Pending). |
| 5 | **Dashboard: Clickable cards** | Open Findings and Overdue CAPAs cards are now fully clickable buttons that navigate to `/findings` and `/capa` respectively. |
| 6 | **Regulatory pack: Clickable clause filters** | Summary stat cards (Total, Compliant, Incomplete, Missing) are now clickable to filter the clause table below. Includes active state highlight and a "Clear filter" button. |
| 7 | **CAPA Owner: Combobox** | Owner field is now a dropdown/combobox that shows known team members (Diana Okafor, Marcus Webb, Sarah Chen, James Hartwell, Tomás Rivera) with the ability to type a new owner name. |
| 8 | **CAPA Verification: Actionable fields** | Verification step now requires: verification method (dropdown), evidence collected (textarea), and verification date before advancing. |
| 9 | **CAPA Effectiveness Review: Actionable fields** | Effectiveness Review step now requires: review period (30/60/90 days or 6 months), effectiveness criteria (textarea), and outcome assessment (Effective / Partially Effective / Not Effective). |
| 10 | **Tabs: Drag-and-drop reorder** | Application tabs can now be reordered via drag-and-drop. A grip handle appears on hover. Order persists in localStorage. |
| 11 | **Landing page stats update** | Updated to "4+" regulatory packs (expanding), clarified "6-step CAPA workflow (Containment → Closure)" and "5 Roles (Auditor, Engineer, Manager, Admin, Inspector)". |
| 12 | **Regulatory pack expansion roadmap** | Landing page now shows "Coming soon: UK CAA (CAP 145) • Transport Canada (CAR 573) • JCAB Japan • ANAC Brazil". |

---

## Contributing

Feel free to submit issues and enhancement requests!

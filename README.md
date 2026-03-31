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

## Contributing

Feel free to submit issues and enhancement requests!

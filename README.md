# Tak Business Admin Dashboard

A modern, production-ready admin dashboard for the Tak Business platform.

## Tech Stack
- React (Vite)
- Tailwind CSS
- Recharts
- Headless UI
- Zustand

## Project Structure
```
src/
  components/     Reusable UI building blocks (layout, tables, modals, cards)
  data/           Mock API data and search targets
  pages/          App pages (dashboard, users, businesses, analytics, etc.)
  store/          Zustand global store (theme, data, notifications)
  styles/         Tailwind entry styles
  utils/          Export helpers (PDF)
```

## Demo Admin Accounts
- Super Admin: `superadmin@takbusiness.com`
- Finance Admin: `finance@takbusiness.com`
- Support Admin: `support@takbusiness.com`

Each account exposes a different permission set to showcase role-based UX states.

## Features Included
- Dashboard overview with KPI cards and charts
- User and business management
- Subscriptions, billing, transactions, and refunds
- Analytics and email broadcasts
- Admin roles and permissions management
- Responsive layout with dark mode
- Export dashboard to PDF
- Search with quick navigation

## Development
```bash
npm install
npm run dev
```

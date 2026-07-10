# MGFINA Fincare Services LLP

Production-ready Phase 1 foundation for a MERN application with separate `client`, `admin`, and `server` apps.

## Structure

- `client/` — public-facing React app
- `admin/` — admin dashboard React app
- `server/` — Express + MongoDB API

## Tech Stack

- React 19, Vite, React Router, Axios, React Hook Form, React Query, TailwindCSS, Framer Motion, React Icons
- Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt, Multer, Helmet, CORS, Morgan, Compression, Cookie Parser, Dotenv

## Setup

Install and run each app from its own folder:

```bash
cd client
npm install
npm run dev
```

```bash
cd admin
npm install
npm run dev
```

```bash
cd server
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside `server/` with:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/shree_ashaa_reality
JWT_SECRET=replace-with-a-strong-secret
JWT_EXPIRE=7d
CLIENT_URL=http://localhost:5173
ADMIN_URL=http://localhost:5174
```

For the frontend apps, set `VITE_API_BASE_URL` in `client/.env` and `admin/.env` when the API is hosted elsewhere.

## API Versioning

All API routes are mounted under:

- `/api/v1/auth`
- `/api/v1/admin`
- `/api/v1/customers`
- `/api/v1/loan-applications`
- `/api/v1/blogs`
- `/api/v1/settings`
- `/api/v1/banks`
- `/api/v1/partners`

## What’s Included

- Clean folder separation
- JWT auth boilerplate
- Mongo connection layer
- Global error handling
- 404 middleware
- Placeholder pages and layouts
- Axios and React Query setup
- TailwindCSS foundation

## Notes

- No loan business logic is implemented yet.
- No UI design is copied.
- The project is ready for the next feature phase.

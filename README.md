# Thai Car Marketplace

A full-stack marketplace concept for buying and selling cars in Thailand.

The repository is organized as separate frontend and backend applications so each part can be developed and deployed independently.

## Technology

### Frontend

- Next.js
- React
- Tailwind CSS

### Backend

- Hono
- PostgreSQL

## Repository structure

```text
.
├── Frontend/   # Web application and user interface
├── Backend/    # API and server-side business logic
└── README.md
```

## Local development

Install dependencies separately in each application directory.

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

### Backend

```bash
cd Backend
npm install
npm run dev
```

## Environment variables

Create local environment files for the frontend and backend as required by each application. Do not commit secrets or `.env` files to the repository. Provide safe example values through an `.env.example` file when documenting configuration.

## Team

- Lif — Frontend / Backend
- Beer — Frontend / Backend
- Thomas — Frontend / Backend

## Project status

This project is under active development. Planned work includes improving security, documenting the API, adding screenshots, and publishing a live demonstration.

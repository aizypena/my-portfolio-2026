# My Portfolio

Personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

For testing the contact form API locally, use:

```bash
npx vercel dev
```

## Build

```bash
npm run build
npm run preview
```

## Contact Form (Vercel + Serverless)

This project uses a Vercel serverless function at `/api/contact` to send messages through Resend.

### 1. Create a Resend account

- Get your API key from Resend.
- For testing, you can use `onboarding@resend.dev` as sender.

### 2. Configure environment variables in Vercel

Set these project env vars in Vercel dashboard:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL` (your inbox)
- `CONTACT_FROM_EMAIL` (optional, defaults to `Portfolio Contact <onboarding@resend.dev>`)

An example file is available in `.env.example`.

### 3. Deploy

Deploy to Vercel as usual. Form submissions from the portfolio contact section will call `/api/contact` and forward the message to your email.

## Notes

- The `/api/contact` endpoint is in `api/contact.js`.
- The frontend form integration is in `src/components/Contact.tsx`.

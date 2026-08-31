# Manan Bhardwaj — Portfolio

A one-page Next.js portfolio: editorial cream/black layout, ranked project rows with
expandable details, resume download, and a working contact form.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 1. Set up the contact form (EmailJS)

The form won't send emails until you connect EmailJS (free tier is enough):

1. Create a free account at https://www.emailjs.com
2. Add an Email Service (e.g. connect your Gmail — mananbhardwaj2705@gmail.com)
3. Create an Email Template with these variable names (matching the form fields):
   `user_name`, `user_email`, `message`
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Copy `.env.local.example` to `.env.local` and fill in the three values:

```bash
cp .env.local.example .env.local
```

6. Restart `npm run dev` after adding the env file.

When you deploy to Vercel, add the same three variables under
**Project Settings → Environment Variables**.

## 2. Add your resume

Drop your resume PDF at `public/resume/resume.pdf` (exact filename). The
"Download resume" button already points there — no code changes needed.

## 3. Add project images and live links

Open `lib/projects.ts`:
- Set `image` to a path like `/projects/nexusroom.png` (put the file in `public/projects/`)
- Set `liveUrl` once each project is deployed somewhere

## 4. Add your photo

Drop a photo at `public/photo.jpg`, then in `components/About.tsx` set:

```ts
const aboutPhoto = "/photo.jpg";
```

## 5. Add your LinkedIn

Search the project for `href="#"` (in `components/Contact.tsx`, `components/Footer.tsx`,
and `components/Nav.tsx` if you add it there) and replace with your real LinkedIn URL.

## Deploy to Vercel

1. Push this project to a GitHub repo
2. Go to https://vercel.com/new and import the repo
3. Add the three `EMAILJS` environment variables (see step 1)
4. Deploy — Vercel handles the build and hosting automatically

## Notes

- `npm audit` may flag a PostCSS vulnerability nested inside Next.js's own build
  tooling (`node_modules/next/node_modules/postcss`). This only affects the local
  build process, not the deployed site, and will clear itself the next time Next.js
  ships a dependency bump.
- Update `siteUrl` in `app/layout.tsx` and `app/sitemap.ts` once you have a final
  domain (custom domain or your real `.vercel.app` URL) for correct SEO metadata.
# Portfolio

# Navlesh Todkar Portfolio

React + TypeScript + Vite portfolio with Tailwind, Motion for React, Lucide icons and React Router. Built in the existing workspace.

## Development

Run `npm ci`, then `npm run dev`. Use `npm run lint` for lint checks and `npm run build` for TypeScript checks and a production build. `npm run preview` serves the output locally.

## Content and structure

- `src/data/projects.ts`: typed case studies and employment timeline.
- `src/pages/Home.tsx`: homepage sections and freelance services.
- `src/pages/ProjectPage.tsx`: reusable project detail layout and not-found page.
- `src/components/Visual.tsx`: original conceptual project illustrations. These are labelled and are not product screenshots.
- `src/components/UI.tsx`: reveal, contact, section heading and résumé components.
- `src/index.css`: design tokens, layout, responsive styling and reduced-motion rules.
- `public/navlesh-todkar-resume.docx`: supplied résumé, downloadable as DOCX.

Contact uses a working mailto link to the email in the supplied résumé. There is no simulated submission form or backend. Social links are omitted until their exact URLs are confirmed.

## Deployment

Sites identity is retained in `.openai/hosting.json`; never register a duplicate Site. Deploy the static `dist` directory through Sites source and publication helpers. New Sites are owner-private by default. For another static host, configure SPA fallback to `/index.html` for unknown routes. The build also emits route-specific HTML for known pages with initial readable content and metadata; browser navigation hydrates into the React application.

The generated Sites origin is used for canonical URLs, sitemap and sharing metadata. Update these when a custom domain is configured. Public search indexing depends on public access; private Sites are not public recruiting links.

## Content still needed

- Approved application screenshots/demo media to replace labelled concept visuals.
- Verified GitHub and LinkedIn URLs; optional portrait.
- Public names and release status of the two transport apps; a newer Parent Bus checkout if API integration is complete.
- Measurement context before publishing résumé performance statistics.
- A PDF résumé if preferred over the supplied DOCX.

The master’s degree is described as planned. Backend/cloud topics are explicitly learning goals. App/firmware/backend ownership is not inferred beyond supplied contributions. No client code, API credentials or private records are published.

## Verification limits

Local build and browser checks cannot establish field Core Web Vitals. Targets are LCP ≤2.5s, INP ≤200ms and CLS ≤0.1; measure real traffic after public launch. No claim of formal WCAG conformance is made.

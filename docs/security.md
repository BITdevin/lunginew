# Security Policy

This document outlines the security considerations and policies for the Lungile Mhango website.

## Content Security Policy (CSP)

To enhance security, it is highly recommended to implement a Content Security Policy (CSP) via HTTP headers on the production server (e.g., in Netlify's `_headers` file or Vercel's `vercel.json`). A strict CSP helps to prevent Cross-Site Scripting (XSS) and other code injection attacks.

A sample strict CSP for this website would be:

```
default-src 'self';
script-src 'self' https://cdn.tailwindcss.com 'unsafe-inline';
style-src 'self' https://fonts.googleapis.com 'unsafe-inline';
img-src 'self' https://picsum.photos data:;
font-src 'self' https://fonts.gstatic.com;
connect-src 'self' https://formspree.io;
frame-src 'self' https://www.youtube.com;
media-src 'self' https://www.soundhelix.com;
object-src 'none';
base-uri 'self';
form-action 'self' https://formspree.io;
frame-ancestors 'none';
```
**Note:** `'unsafe-inline'` is currently required for Tailwind's CDN script and inline styles. This could be tightened by using a build step and a nonce-based approach in a future version.

## Personal Information (POPIA Compliance)

The website is designed to be compliant with South Africa's Protection of Personal Information Act (POPIA).

1.  **Minimal Data Collection:** The only point of personal data collection is the contact form. We only ask for the information necessary to respond to an inquiry: name, email, and message.
2.  **Consent:** By filling out and submitting the contact form, the user implicitly consents to their data being used for the purpose of a reply.
3.  **Purpose:** The collected data is used exclusively to respond to the user's message. It is not used for marketing, sold to third parties, or stored in a database on this website.
4.  **Data Processing:** The data is processed by Formspree, which acts as the data processor. Formspree is a reputable service with its own privacy and security policies.
5.  **User Rights:** As detailed in the public `privacy.md` policy, users have the right to access, correct, or delete their information upon request.

## Dependencies

The project relies on external CDNs for:
*   Tailwind CSS
*   Google Fonts
*   React & ReactDOM

These are reputable sources, but they represent an external attack surface. Subresource Integrity (SRI) hashes could be added to the `<script>` and `<link>` tags for these resources to ensure they have not been tampered with, though this adds maintenance overhead.

## General Best Practices

*   **HTTPS:** The site must be served over HTTPS to protect data in transit. Modern hosting providers like Netlify and Vercel enforce this by default.
*   **No Server-Side Code:** As a static site, there is no server-side code or database managed by this project, significantly reducing the attack surface.
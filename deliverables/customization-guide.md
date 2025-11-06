# Customization Guide

Welcome! This guide will help you make basic content updates to the website without needing to be a coding expert. All text and content can be found within the component files in the `/components` directory.

### Editing Text Content

Most of the website's text lives inside the component files (`About.tsx`, `Career.tsx`, etc.).

1.  **Open the File:** For example, to change the "About" section text, open `components/About.tsx`.
2.  **Find the Text:** Look for the text you want to change inside the HTML-like tags. For instance:
    `<p>Lungile Mhango, affectionately known as Sbukubukwana...</p>`
3.  **Change It:** Simply replace the text between the `>` and `</` symbols with your new content. Be careful not to delete the tags themselves.

### Updating the Career Timeline

To update career milestones:

1.  **Open `components/Career.tsx`**.
2.  Find the `timelineEvents` list. Each item is enclosed in `{...}`.
3.  You can edit the `year`, `title`, and `description` for any entry.
    `{ year: '2026', title: 'New Achievement', ... }`

### Changing the Contact Form Destination

The contact form sends emails using a service called Formspree.

1.  **Open `components/Contact.tsx`**.
2.  Find this line: `fetch("https://formspree.io/f/your_form_id", ...)`
3.  Replace `your_form_id` with the actual ID from your Formspree account.

### Replacing Images

To replace an image, simply overwrite the placeholder file in the `/assets/images` folder with your new image, keeping the filename the same. For best performance, make sure your images are optimized for the web. You can also change the URLs directly in the code (e.g., in `components/Hero.tsx` or `components/About.tsx`).

# Assumptions & Decisions (Final Polish)

This document lists the key assumptions and best-practice decisions made during the final polish of the Lungile Mhango website. This version focuses on refinement, elegance, and professionalism.

## 1. Design & Typography

*   **Global Font:** The decision was made to use the **Poppins** font family exclusively across the entire website. This replaces the previous combination of Playfair Display and Inter. The rationale is to create a unified, modern, and highly readable typographic system. Poppins is a versatile sans-serif that works exceptionally well for both bold headlines and clean body text, lending the site a cohesive and professional feel.
*   **Color Palette Refinement:** The charcoal, gold, and white palette was maintained, but its application was polished. Contrast ratios were checked, and the use of the gold accent (`#FFC700`) was refined to draw attention to key interactive elements without overwhelming the user.

## 2. Component Redesigns

*   **Booking Section:** The feedback that the form felt "out of place" was addressed by redesigning the entire section. We assumed the booking process is a premium, high-intent action. By giving the section a contrasting dark background (`bg-charcoal`), it now stands out as a final, distinct call-to-action. The form's layout was polished for better spacing and alignment, making it feel more integrated and less like a generic plugin.
*   **Media & Moments Section:** We assumed the provided list of articles and media appearances was intended to create a professional press kit or portfolio. The section was completely redesigned from a simple embed area to a curated grid of "media cards." This elevates the content, presents Lungile as a figure with significant media presence, and is more engaging for visitors. Placeholder links (`#`) were used, assuming the client will provide the final URLs.

## 3. User Experience & Content

*   **Image Replacement:** It was assumed that the client would need a clear, non-technical guide to update the placeholder images. The `asset-table.csv` was deprecated in favor of a much more user-friendly `IMAGE_REPLACEMENT_GUIDE.md`. This new file provides context, recommendations, and code locations, empowering the client to manage their own content easily.
*   **Audio Player:** The placeholder audio clip from `soundhelix.com` was kept. It is assumed the client will provide a final, high-quality `.mp3` file (e.g., a motivational clip or show jingle) to replace this placeholder.

## 4. Technical Implementation

*   **Formspree ID:** The booking form still points to a placeholder Formspree ID (`your_form_id`). It is a critical assumption that the client will create their own Formspree account and replace this ID to make the form functional. Instructions are provided in the code comments and the new image guide.
*   **Performance:** All redesigns were made with performance in mind. The new "Media & Moments" grid uses lightweight HTML and CSS, avoiding heavy embeds. The Poppins font is loaded efficiently from Google Fonts. All images outside the hero section continue to be lazy-loaded.

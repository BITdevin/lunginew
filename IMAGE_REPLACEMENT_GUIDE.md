
# Image Replacement Guide

This guide provides instructions for replacing all the placeholder images on the Lungile Mhango website. For the best results, use high-quality, professional photographs that match the descriptions.

---

### 1. Hero Section Image

-   **Location in Code:** `components/Hero.tsx`
-   **Purpose:** The main background image for the first screen visitors see. It should be powerful and professional.
-   **Recommended Dimensions:** `1920x1080px` (or any 16:9 aspect ratio image).
-   **Content Suggestion:** A high-resolution, professional portrait of Lungile. She could be in a studio, at a radio station, or looking confidently at the camera. This image sets the tone for the entire website.
-   **How to Replace:**
    1.  Open `components/Hero.tsx`.
    2.  Find the `<img ... />` tag.
    3.  Replace the `src` URL with the URL of your new image.
    
    ```javascript
    // Current placeholder:
    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?..."

    // Replace with your image link:
    src="https://your-image-host.com/lungile-hero-portrait.jpg"
    ```

---

### 2. About Section Image

-   **Location in Code:** `components/About.tsx`
-   **Purpose:** A warm, approachable photo to accompany her biography.
-   **Recommended Dimensions:** `800x1000px` (or any 4:5 aspect ratio image).
-   **Content Suggestion:** A smiling portrait of Lungile in a more casual or relaxed setting. This photo should convey warmth and authenticity.
-   **How to Replace:**
    1.  Open `components/About.tsx`.
    2.  Find the `<img ... />` tag inside this component.
    3.  Replace the `src` URL.

---

### 3. Business Section: L Mango Kitchen

-   **Location in Code:** `components/Business.tsx`
-   **Purpose:** To showcase the food from her kitchen.
-   **Recommended Dimensions:** `800x600px` (or any 4:3 aspect ratio image).
-   **Content Suggestion:** A high-quality, delicious-looking photo of one of the signature dishes, like Redfish with pap. Professional food photography is recommended.
-   **How to Replace:**
    1.  Open `components/Business.tsx`.
    2.  Find the first `<img ... />` tag (under the "L Mango Kitchen" heading).
    3.  Replace the `src` URL.

---

### 4. Business Section: Exclusive Car Wash

-   **Location in Code:** `components/Business.tsx`
-   **Purpose:** To represent the car wash and the "Sunday vibe."
-   **Recommended Dimensions:** `800x600px` (or any 4:3 aspect ratio image).
-   **Content Suggestion:** A photo of a freshly cleaned, gleaming car. Alternatively, a photo capturing the atmosphere on a Sunday, perhaps with people enjoying the music and clean cars in the background.
-   **How to Replace:**
    1.  Open `components/Business.tsx`.
    2.  Find the second `<img ... />` tag (under the "Exclusive Car Wash" heading).
    3.  Replace the `src` URL.

---

### 5. Social Media & SEO Image (Meta Tags)

-   **Location in Code:** `index.html` (inside the `<head>` section)
-   **Purpose:** This is the image that appears when the website link is shared on social media platforms like Facebook, Twitter, and WhatsApp.
-   **Recommended Dimensions:** `1200x630px`.
-   **Content Suggestion:** A vibrant, eye-catching image that represents the brand well. It could be the same as the hero image or a different one designed specifically for sharing.
-   **How to Replace:**
    1.  Open `index.html`.
    2.  Find the `meta` tags with `property="og:image"` and `property="twitter:image"`.
    3.  Replace the `content` URL in both tags with your new image URL.
    
    ```html
    <meta property="og:image" content="https://your-image-host.com/social-share-image.jpg">
    ...
    <meta property="twitter:image" content="https://your-image-host.com/social-share-image.jpg">
    ```

---

### 6. Motivational Audio Clip

-   **Location in Code:** `components/AudioPlayer.tsx`
-   **Purpose:** A short, inspirational audio clip.
-   **File Format:** `.mp3`
-   **Content Suggestion:** A 15-30 second clip of Lungile speaking inspirationally, a jingle from her radio show, or a snippet of a DJ mix.
-   **How to Replace:**
    1.  Open `components/AudioPlayer.tsx`.
    2.  Find the `<audio ... />` tag.
    3.  Replace the `src` URL with the URL of your new `.mp3` file.

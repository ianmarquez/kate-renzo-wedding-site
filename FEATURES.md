# Features

This document contains all the features needed for this weddding website to work. Agents should treat this as the master plan of the website.
We will be detailing each section/feature of the website in this document.
The website is a vertical scrolling website divided into 7 sections.
The final product should be mobile responsive as well.

1. Hero Page
2. The Venue
3. The Timeline
4. Dress Code
5. Gallery
6. RSVP
7. A Note on Gifts

The website has a black and white aesthetic with `#F8FFF5` as its green highlight for supporting cards and controls. Apply the reusable `.grainy` texture class to the body for a subtle paper-like finish.
Each section will have an ivy like design in each corner. These assets can be found in the dir `/public/wedding-assets/ivy` and are svg files this should be scaled down as the svg files are very resource heavy.

### Image delivery

- Every image rendered in the invitation must be stored under `public/wedding-assets/` and served from its public URL. Do not import runtime page images from `features/` or another source directory.
- Render every page image with Next.js `next/image` (`Image`) for responsive sizing, lazy loading, and optimization. Supply explicit dimensions or `fill` plus `sizes` as appropriate.
- The only exceptions are non-image embeds (such as the Google Map iframe) and metadata icons, which are registered through Next.js metadata but still point to an asset in `public/wedding-assets/`.

### Tailwind design tokens and utility discipline

- Define the invitation's recurring colors, shadows, typography treatments, and any other reusable visual values as semantic Tailwind v4 `@theme` tokens in `src/app/globals.css`. Use meaningful names such as `ink`, `moss`, `mint`, `card`, and `shadow-card`, rather than repeating literal hex values or raw shadow declarations in components.
- Consume those values only through their generated semantic utilities (for example, `text-ink`, `bg-mint`, `border-mint-border`, and `shadow-card`). Component files must not contain literal hex colors or inline color styles.
- Prefer canonical Tailwind utilities whenever one represents the intended value. For example, use `rounded-2xl` for a `1rem` radius, not `rounded-[1rem]`.
- Use an arbitrary value only when the design requires a value with no suitable canonical Tailwind utility, such as a deliberately nonstandard grid ratio or exact animation scale. When it becomes reusable, promote it to a named semantic token instead.

The ivy with 00 is the top left one, the ivy with 01 is the bottom left while the top-right is 02 and 03 is for the bottom right

each section should feel like a card and the ivies will frame the card.

each section should snap into focus and take up the entire view port

each card section should have a bigger margin to make it feel like a set of cards.

All interface animation must use Framer Motion. Do not add CSS keyframe or transition-based animation for visual motion.

## Navigation

- A fixed, glass-like navigation bar sits at the bottom of the viewport with Venue, Timeline, Dress, RSVP, and Gifts links. The Hero section is explicitly excluded from navigation.
- Include every invitation section in the navigation unless that section explicitly states otherwise. Gallery is currently the exception.
- It remains hidden during the hero intro and blurs into view after the complete animation sequence.
- Use a `#F8FFF5` hover state only. Do not render a persistent active-section marker.
- Navigation links smoothly scroll the invitation's snapping scroll container. Reduced-motion users receive an immediate jump.

## Hero Section

This will be the first section of the page.

1. As the page loads the initial appearance of the Hero section appears. Copy the design from the image at `/public/wedding-assets/hero/initial-look.png`.
2. As the text from the initial-look fades in this text will be super imposed on top of the initial look `“We’re tying the knot! Join us in the garden for a day filled with love!”`
3. Make sure that the initial look is still mildly visible even when the superimposed text is rendered in.
4. The animation should feel like the super imposed text is being stuck on like a peeling off animation in reverse.
5. This section should not have a card like container for the entire content as the content is the initial look already.
6. Initial load should feel like opening an invitation envelope. Make sure to add this animation when loading the site. The trigger should be on page load
7. The imposed text should be contained in the faux white card being opened by the animation and as the animation ends becomes the content.
8. The ivies for this section should be placed on the white card containing the text.
9. Do not show an intermediate invitation card while the envelope is opening. The only visible message card is the final white card that appears after the envelope clears.
10. The bottom part of the envelope should slide down while the top flap slides up.
11. The top flap should touch the bottom part of the envelope before the motion begins.
12. The initials marker is attached to the top flap and must move upward with it.
13. The envelope is scaled to 110% of its base size and covers the entire page during the intro. The `R K` seal is scaled to 144% of its base size.
14. Lock invitation scrolling while the two-second envelope animation is visible. Enable scrolling only after the envelope clears.
15. Don't include in the navigation bar
16. After the intro completes, the superimposed message card is clickable and keyboard accessible. Clicking or activating it fades the card away and restores the hero image to full opacity. The revealed hero image is also clickable and keyboard accessible; activating it fades the message card back in without replaying the intro animation. Any empty overlay wrapper above the revealed image must use `pointer-events-none` so it cannot intercept this interaction; the visible card itself must restore pointer events.

## The Venue section

1. Heading: `Meet us in the garden`.
2. Body: `A beautiful little spot for our very big day.`
3. Use `/public/wedding-assets/venue/ville-sommet-sketch.png` as a low-opacity background for the Venue card.
4. Put an embedded Google Map for Ville Sommet in the media panel. It is full-height beside the details on desktop and 16:9 landscape on mobile.
5. Replace a printed address with accessible icon buttons that link to the venue pin in Google Maps and Waze.
6. The Venue card hugs its content with `p-8` internal spacing. Its surrounding snap section still fills the viewport.
7. Do not render ivy in the Venue card.
8. On desktop, the details are on the left and the map is on the right. On mobile, the details appear before the map.
9. Keep `mt-20` spacing between the Venue description and map buttons.

## The timeline section

1. Heading: `Here’s the plan...`, with the small `The timeline` eyebrow above it.
2. Rebuild the supplied Timeline reference as responsive HTML; do not render the reference image itself as the section content.
3. Put the ceremony illustration and its `16:00` / `Ceremony` label together in the upper row, with the time label aligned to the right of the arch on desktop and kept adjacent on mobile.
4. Separate the ceremony from the evening events with a thin horizontal divider.
5. Render three equally spaced lower moments: `17:30 Cocktails`, `19:00 Dinner`, and `21:00 After-party`.
6. Use these final, public-served assets through Next.js `Image`:
   - Ceremony: `/wedding-assets/timeline/elegant-floral-wedding-arch.png` (`Elegant Floral Wedding Arch Portrait.png` source asset).
   - Cocktails: `/wedding-assets/timeline/toasting-martini-glasses.png` (`Toasting Martini Glasses with Confetti.png` source asset).
   - Dinner: `/wedding-assets/timeline/elegant-floral-centerpiece.png` (`Elegant Floral Table Centerpiece.png` source asset).
   - After-party: `/wedding-assets/timeline/minimalist-disco-ball.png`, a square transparent PNG derived from `minimalist_disco_ball_sketch.jpg`.
7. Preserve each illustration’s aspect ratio with `object-contain` and responsive `sizes`; the supplied final assets are high resolution, so do not use blurry stand-in artwork.

## The Dress Code Section

1. Use `/features/assets/dresscode/Dress Code.png` only as the visual layout reference. DO NOT render it directly; rebuild its layout in HTML.
2. The four source illustrations live in `/features/assets/dresscode` as `00.png` through `03.png`, in that display order. Copy them to `/public/wedding-assets/dresscode/` and render the public copies through Next.js `Image`.
3. Below the four images, retain the small `Dress Code` eyebrow and use `Garden Formal` as the section's `h2` heading.
4. Render the approved palette row from the reference image, using these exact colors in order: `#AD344C`, `#D84965`, `#E95A29`, `#EE7F4D`, `#9FBC3A`, and `#788444`.
5. The last part of the section contains these lines
   - Ladies: Long bright-colored garden dresses
   - Gentlemen: Barong / linen long sleeves & trousers in brown hues
6. Tighten up the card container so it hugs the content just add the same padding values as the timeline section
7. The four attire illustrations in the first row must share the same fixed, non-shrinking height at every responsive breakpoint. Size each image by its height with `object-contain` so differing source aspect ratios do not cause any illustration to shrink.

## The Gallery Section

1. Use the source images in `/features/assets/gallery` from `0.jpg` through `9.jpg`, copy them to `/public/wedding-assets/gallery`, and render the public copies with Next.js `Image`.
2. Present `10.jpg` as the central, wide climax image. Scatter the other ten photos around it as enlarged, individually clickable, overlapping floating frames with intentionally uneven placement, while keeping the two side-adjacent frames clear of the climax image.
3. Use Framer Motion to give each non-climax frame a gentle 5.6px offset vertical drift and varied rotation. Respect reduced-motion preferences by showing the scattered layout without motion.
4. Follow the site-wide image delivery rules: use responsive `sizes`, lazy-loaded thumbnails, and `object-cover` within the floating frames.
5. Each image is a button that opens an accessible dark-room viewer. It must support close, previous, and next controls, plus `Escape`, left arrow, and right arrow keyboard actions. Use Framer Motion for the viewer entry and image-change animation.
6. Render a subtle, transparent loading-spinner layer behind each floating frame, climax image, and viewer image: it is absolutely centered within the image container and remains behind the Next.js `Image`, so the image naturally covers it when loaded. The layer must not use an opaque background, preserving the dark-room viewer effect. Do not toggle this layer from image load events, which can cause a flash.
7. Don't include this section in the navigation

## RSVP Section

1. Render RSVP as a full-viewport snap section directly after Gallery, using the established white card, ivy-corner frame, semantic Tailwind tokens, and `p-6 py-12` / `sm:px-12 sm:py-14` card spacing.
2. Use the `RSVP` eyebrow and `Save your seat!` as the `h2` heading.
3. Render this response message: `We really hope you can make it! Please let us know if you’ll be joining us by November 30, 2026, so we can make sure there’s a seat - and plenty of food - waiting for you.` Set `November 30, 2026` in bold moss primary text.
4. Below the message, render three centered, equal-width contact columns: Phone, Messenger, and Instagram. Use understated top dividers on the main card surface; do not use green supporting cards.
5. Each column heading includes its minimalist icon in moss primary color. Keep icons at the heading only, never on the individual contact rows. Use the proper Facebook Messenger and Instagram SVG icons.
6. Use these contact values:
   - Phone: `Renzo · 09451230423`, `Kate · 09175424784`.
   - Facebook Messenger: `Renzo Lee`, `Kate Pantig`.
   - Instagram: `@rnzlee`, `@katepantig`.
7. Phone numbers should use `tel:` links; Messenger and Instagram values should open their associated public destinations in a new tab with safe `rel` attributes.
8. Include RSVP in the fixed navigation because sections participate in navigation unless their own specification explicitly excludes them.

## Note on Gifts Section

1. eyebrow should be `A Note On Gifts`
2. Navigation button is `Gifts`
3. Heading is `Come for the love, stay for the party!`
4. First paragraph is `If you were thinking of giving
a gift to send us on our way,`
5. Second paragraph is `a little something towards our future
would truly make our day.`
6. Copy `/features/assets/gift/gift_box.png` to `/public/wedding-assets/gift/gift_box.png` and render it with Next.js `Image` above the heading.
7. Do not render the former Shell-friends P.S. disclaimer or its emoji.

## Site metadata and favicon

- Use a wedding bouquet as the browser favicon.
- Store it at `/public/wedding-assets/favicon-bouquet.png` and register it with the Next.js `metadata.icons` configuration. Do not use a legacy `src/app/favicon.ico`.

## Implemented app reference

### Page structure and styling

- The invitation is a full-screen, vertically scrolling experience. Its `main` element is a `100svh` scroll container with mandatory vertical scroll snapping.
- Hero, Venue, Timeline, Dress Code, Gallery, RSVP, and A Note on Gifts are the implemented sections. Each non-hero section occupies one viewport and is presented as a large white card with generous outer margins: `20px` on small screens and `40px` from the `sm` breakpoint upward.
- The card system uses a black-and-white base. Supporting information cards use `#F8FFF5` with a light green border. Rounded interface surfaces use a `1rem` radius; intentionally circular controls and the seal remain fully round. The sections have subtle shadows, and the ivy decoration frames their corners.
- Ivy asset placement is fixed: `00.svg` top-left, `01.svg` bottom-left, `02.svg` top-right, and `03.svg` bottom-right. Keep the images scaled down and lazy-loaded through `next/image` because their source SVGs are large.
- The Timeline follows its supplied reference as semantic HTML with the finalized floral wedding arch, toasting martini glasses, floral table centerpiece, and transparent minimalist disco-ball artwork. It includes the ceremony time, divider, and the Cocktails, Dinner, and After-party moments.
- The Dress Code section is implemented as semantic HTML with four equal-height, non-shrinking attire illustrations, a `Dress Code` eyebrow, `Garden Formal` as its `h2` section heading, the six approved color swatches, and the ladies’ and gentlemen’s guidance.
- The Gallery section is implemented as ten scattered, floating photo frames around a central final image. Every floating frame uses the same non-shrinking height at each responsive breakpoint, and the central final image always sits in the foreground above the collage. Every photo opens an accessible dark-room viewer with previous/next controls and keyboard navigation, and each image has a stable spinner layer behind it during loading.
- The finalized RSVP section follows the invitation card system with an RSVP eyebrow, `Save your seat!` heading, a bold moss response deadline, and centered Phone, Messenger, and Instagram columns for Renzo and Kate. The moss method headings carry their icons; individual rows remain text-only links.
- The Note on Gifts section follows RSVP and uses the invitation card system. It has the `A Note On Gifts` eyebrow, the public-served gift-box illustration, `Come for the love, stay for the party!` heading, and the finalized two-paragraph gift message. Its extra bottom padding keeps the card clear of the fixed navigation.
- All rendered page imagery is served from `public/wedding-assets/` and uses Next.js `Image`; the wedding-bouquet favicon is configured via `metadata.icons` from the same public asset directory.
- The Venue section is implemented with the supplied sketch background, embedded map, responsive column ordering, and map icon controls.

### Navigation

- The navigation is fixed at the bottom of the viewport and links to Venue, Timeline, Dress Code, RSVP, and Gifts. All sections are included unless their own specification explicitly excludes them; Hero and Gallery are intentionally excluded.
- It remains visually hidden during the intro and blurs into view after all hero animations finish.
- Navigation links use a `#F8FFF5` hover state. There is no persistent active-section indicator.
- Clicking a navigation item prevents the browser's default hash jump and smoothly scrolls the snapping scroll container to the requested section. Reduced-motion users receive an immediate scroll.
- The navigation component lives in `src/app/navigation.tsx`; it is a client component because it controls navigation scrolling.

### Hero implementation and animation

- The hero uses `/wedding-assets/hero/initial-look.png` as its initial monogram artwork. It is not enclosed by the general card treatment.
- On page load, a green envelope covers the entire page. It is scaled to 110% of its base size, uses a `1rem` radius, and prevents scrolling until it clears.
- The envelope begins with its flat top flap and bottom pocket touching along their shared edge. The top flap carries a `K R` initials marker scaled to 144% of its base size, has a shadow, and slides upward. The bottom pocket slides downward at the same time. The initials stay attached to the top flap throughout. The envelope halves do not fade; their slide is the only exit animation.
- The envelope movement and scroll lock last two seconds. The envelope is dismissed both by the two-second timer and when its lower flap finishes animating, so the page cannot remain blocked if one completion path is interrupted. No message card is visible during this sequence.
- At the end of the envelope sequence, the final white invitation card fades in above the softened monogram. The card contains the four ivy corner assets and the message: “We’re tying the knot! Join us in the garden for a day filled with love!”.
- The message uses a reverse-peel reveal: it begins clipped, slightly rotated, and blurred, then settles flat and fully visible. The monogram remains visible underneath at reduced opacity.
- After its entrance, the message card can be clicked or activated with the keyboard to fade it away and reveal the monogram at full opacity. The revealed monogram can be clicked or activated to fade the card back in without repeating the intro. Its otherwise empty overlay layer does not accept pointer events, ensuring the monogram remains clickable.
- The bottom navigation blurs in after the final card and its message complete their reveal.
- Below the hero artwork, render the wedding date as large semibold text: `07 FEBRUARY 2027, 3:30 PM`.

### Motion and accessibility

- All implemented visual motion is Framer Motion: the full-page envelope halves, seal, artwork fade, final-card reveal, message reveal, and navigation entry. Navigation uses the browser's native smooth scrolling API to move the scroll container between sections.
- `prefers-reduced-motion: reduce` disables the envelope and hero transitions, immediately displays the final hero card, and shows the navigation without its entry animation.

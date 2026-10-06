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

each section should feel like a full-viewport card where practical, but the page must scroll naturally without CSS scroll snapping

each card section should have a bigger margin to make it feel like a set of cards.

All interface animation must use Framer Motion. Do not add CSS keyframe or transition-based animation for visual motion.

## Navigation

- A fixed, glass-like navigation bar sits at the bottom of the viewport with Venue, Timeline, Dress, RSVP, and Gifts links. The Hero section is explicitly excluded from navigation.
- Include every invitation section in the navigation unless that section explicitly states otherwise. Gallery is currently the exception.
- It remains hidden during the hero message-card reveal and blurs into view after that animation completes.
- Use a `#F8FFF5` hover state only. Do not render a persistent active-section marker.
- Navigation links smoothly scroll the invitation's scroll container. Reduced-motion users receive an immediate jump.

## Hero Section

This will be the first section of the page.

1. As the page loads the initial appearance of the Hero section appears. Copy the design from the image at `/public/wedding-assets/hero/initial-look.png`.
2. As the text from the initial-look fades in this text will be super imposed on top of the initial look `“We’re tying the knot! Join us in the garden for a day filled with love!”`
3. Make sure that the initial look is still mildly visible even when the superimposed text is rendered in.
4. The animation should feel like the super imposed text is being stuck on like a peeling off animation in reverse.
5. This section should not have a card like container for the entire content as the content is the initial look already.
6. Do not render an envelope, seal, or scroll-blocking intro animation. The invitation must be immediately visible and scrollable on every device.
7. The imposed text should be contained in a faux white card that fades in above the softened hero image.
8. The ivies for this section should be placed on the white card containing the text.
9. Don't include in the navigation bar.
10. After the card finishes its entrance, it is clickable and keyboard accessible. Clicking or activating it fades the card away and restores the hero image to full opacity. The revealed hero image is also clickable and keyboard accessible; activating it fades the message card back in without replaying the initial reveal. Any empty overlay wrapper above the revealed image must use `pointer-events-none` so it cannot intercept this interaction; the visible card itself must restore pointer events.

## The Venue section

1. Heading: `Meet us in the garden`.
2. Body: `A beautiful little spot for our very big day.`
3. Use `/public/wedding-assets/venue/ville-sommet-sketch.png` as a low-opacity background for the Venue card.
4. Put an embedded Google Map for Ville Sommet in the media panel. It is full-height beside the details on desktop and 16:9 landscape on mobile.
5. Directly below the venue description, render the complete address in italic text one canonical type size larger: `Ville Sommet, 5 J.P. Rizal Street, Sicat, Alfonso, Cavite, Philippines`.
6. Render accessible Google Maps and Waze links to the venue pin. Each round icon must have its visible provider label centered beneath it.
7. The Venue card hugs its content with `p-8` internal spacing. Its surrounding section still fills the viewport without scroll snapping.
8. Do not render ivy in the Venue card.
9. On desktop, the details are on the left and the venue illustration is on the right. On mobile, the details appear before the venue illustration.
10. Keep `mt-20` spacing between the address and navigation links.

## The timeline section

1. Heading: `Here’s the plan...`, with the small `The timeline` eyebrow above it.
2. Rebuild the supplied Timeline reference as responsive HTML; do not render the reference image itself as the section content.
3. Put the ceremony illustration and its `15:00` / `Ceremony` label together in the upper row, with the time label aligned to the right of the arch on desktop and kept adjacent on mobile.
4. Separate the ceremony from the evening events with a thin horizontal divider.
5. Render three equally spaced lower moments: `16:30 Cocktails`, `18:00 Dinner`, and `20:00 After-party`.
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

1. Render RSVP as a full-viewport section directly after Gallery, using the established white card, ivy-corner frame, semantic Tailwind tokens, and `p-6 py-12` / `sm:px-12 sm:py-14` card spacing.
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
9. Add a prominent `Register your RSVP` link in this section. It is the only in-site entry point to the dedicated `/rsvp/` response page. When the invitation page has an `invitee` query parameter, forward that UUID into the RSVP link as `/rsvp/?invitee=<GUID>`.

## RSVP Response Page

1. Create a dedicated, responsive response page at `/rsvp/`, styled with the established invitation card, ivy-corner frame, semantic tokens, and Framer Motion entry treatment.
2. The page is accessed from the `Register your RSVP` call-to-action in the invitation RSVP section; do not add it to the fixed navigation.
3. Replace free-text names with a searchable invitee dropdown populated from the `public.invitees` database table. The guest must select an existing invitee before submitting an RSVP.
4. Accept an optional `invitee` query parameter containing an invitee UUID. For example, `/rsvp/?invitee=550e8400-e29b-41d4-a716-446655440000` must look up and preselect that invitee.
5. Provide an accessible, mutually exclusive Yes/No attendance choice and persist the response through `POST /api/rsvp`.
6. Dismiss the search results when focus or pointer interaction leaves the invitee picker. Moving focus between its search field and a result remains within the picker and must keep the results available.
7. Expose `GET /api/invitees` for the searchable picker. It accepts `query` for a partial, case-insensitive name match only after at least 3 characters have been entered and `id` for UUID lookup; it returns at most 12 matching invitee IDs and names. Empty or shorter searches must return no invitees, preventing the endpoint from exposing a broad invitee list.
8. Validate request bodies server-side, use parameterized PostgreSQL queries, and enforce one RSVP per invitee. Unknown invitees, malformed UUIDs, and duplicate responses must be rejected.
9. Keep `DATABASE_URL` server-only. Add it to ignored local `.env` files and configure the same environment variable in the deployment platform; never expose it with a `NEXT_PUBLIC_` prefix.
10. Before saving, check whether the selected invitee already has an RSVP through `GET /api/rsvp?inviteeId=<GUID>`. If one exists, show an accessible confirmation modal with the previous Yes/No response and the newly selected response. If the new answer matches the stored answer, explain that it is already saved and provide no update action. Only update a changed answer through `PATCH /api/rsvp` after the guest confirms; allow the guest to keep the previous answer.

### RSVP database schema

Run the following PostgreSQL statements before accepting responses:

```sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.invitees (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(250) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.rsvp_responses (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  invitee_id UUID NOT NULL UNIQUE REFERENCES public.invitees(id) ON DELETE RESTRICT,
  going BOOLEAN NOT NULL
);
```

`rsvp_responses.invitee_id` is unique, so an unguessable invitee UUID can submit only one response. Add invitees to `public.invitees` before sending their personalized RSVP links.

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
8. Render the QR-only, lossless public assets `/public/wedding-assets/gift/bdo-qr.png`, `/public/wedding-assets/gift/bpi-qr.png`, and `/public/wedding-assets/gift/gcash-qr.png` with Next.js `Image` beneath the gift message. They contain the original BDO, BPI, and GCash QR patterns and must never be redrawn, regenerated, or otherwise altered. Use a clearly labeled, responsive scan area; it should stack on mobile and use three equal cards on larger screens. Keep each provider label centered beneath its QR code at every breakpoint.

## Site metadata and favicon

- Use a wedding bouquet as the browser favicon.
- Store it at `/public/wedding-assets/favicon-bouquet.png` and register it with the Next.js `metadata.icons` configuration. Do not use a legacy `src/app/favicon.ico`.

## Implemented app reference

### Page structure and styling

- The invitation is a vertically scrolling experience. Its `main` element is a `100svh` scroll container without CSS scroll snapping, so the page always opens at the hero and all content can scroll naturally.
- The Hero section is intentionally allowed to exceed one viewport because the invitation card follows the date. Venue, Timeline, Dress Code, Gallery, RSVP, and A Note on Gifts remain viewport-sized sections where practical, presented as large white cards with generous outer margins: `20px` on small screens and `40px` from the `sm` breakpoint upward.
- Keep each page section in its own file under `src/app/component/`: `hero.tsx`, `venue.tsx`, `timeline.tsx`, `dress-code.tsx`, `gallery.tsx`, `rsvp.tsx`, and `gifts.tsx`. Shared ivy, invitation-card, and contact icon primitives belong in `shared.tsx`; `src/app/page.tsx` should compose sections and contain only page-level routing behavior.
- Provide a root `src/app/not-found.tsx` page that follows the invitation card language, hugs its content with a responsive maximum width, and links visitors back to `/` with a clear home CTA. Use all eleven gallery images (`0.jpg` through `10.jpg`) as rounded floating frames distributed around the centered 404 card: across the upper and lower edges and along both sides. Anchor the positions to the card so the frames overlap its edges by 15px on small screens, 10px from `md`, and 5px on desktop. Follow the Gallery section's gentle vertical drift and varied rotations. Keep the card above the photos, make the photos decorative and non-interactive, and respect reduced-motion preferences. Do not include an emphasized center image or gallery click behavior on the 404 page.
- The card system uses a black-and-white base. Supporting information cards use `#F8FFF5` with a light green border. Rounded interface surfaces use a `1rem` radius; intentionally circular controls remain fully round. The sections have subtle shadows, and the ivy decoration frames their corners.
- Ivy asset placement is fixed: `00.svg` top-left, `01.svg` bottom-left, `02.svg` top-right, and `03.svg` bottom-right. Keep the images scaled down and lazy-loaded through `next/image` because their source SVGs are large.
- The Timeline follows its supplied reference as semantic HTML with the finalized floral wedding arch, toasting martini glasses, floral table centerpiece, and transparent minimalist disco-ball artwork. It includes the ceremony time, divider, and the Cocktails, Dinner, and After-party moments.
- The Dress Code section is implemented as semantic HTML with four equal-height, non-shrinking attire illustrations, a `Dress Code` eyebrow, `Garden Formal` as its `h2` section heading, the six approved color swatches, and the ladies’ and gentlemen’s guidance.
- The Gallery section is implemented as ten scattered, floating photo frames around a central final image. Every floating frame uses the same non-shrinking height at each responsive breakpoint, and the central final image always sits in the foreground above the collage. Every photo opens an accessible dark-room viewer with previous/next controls and keyboard navigation, and each image has a stable spinner layer behind it during loading.
- The finalized RSVP section follows the invitation card system with an RSVP eyebrow, `Save your seat!` heading, a bold moss response deadline, a `Register your RSVP` call-to-action to `/rsvp/`, and centered Phone, Messenger, and Instagram columns for Renzo and Kate. The moss method headings carry their icons; individual rows remain text-only links.
- The dedicated `/rsvp/` page provides a database-backed invitee picker that waits for at least 3 typed characters, then supports partial name matching, alongside Yes/No attendance selection and UUID-based `?invitee=` URL prefill support. Partial results are capped and empty or shorter searches never reveal invitees; UUID links can still preselect a specific invitee. Its result list closes when focus or pointer interaction leaves the picker. Before an existing RSVP is changed, an accessible modal shows the previous and newly selected responses and requires confirmation; selecting the same answer shows an already-saved message with no update action. After a successful save, show a thank-you modal with a warm anticipation message for `Yes, with joy!` and a gracious acknowledgment for `Regretfully, no`. It submits through a server-side PostgreSQL endpoint and allows one response per invitee.
- The Note on Gifts section follows RSVP and uses the invitation card system. It has the `A Note On Gifts` eyebrow, the public-served gift-box illustration, `Come for the love, stay for the party!` heading, and the finalized two-paragraph gift message. A `Scan to send your love` area presents the unaltered, original BDO, BPI, and GCash QR patterns in equal responsive cards, with each provider title centered below its code at every breakpoint. Its extra bottom padding keeps the card clear of the fixed navigation.
- All rendered page imagery is served from `public/wedding-assets/` and uses Next.js `Image`; the wedding-bouquet favicon is configured via `metadata.icons` from the same public asset directory.
- The Venue section is implemented with the supplied sketch image as both a faded superimposed card background and the prominent foreground venue illustration, responsive column ordering, italic complete address, and labeled Google Maps and Waze controls.

### Navigation

- The navigation is fixed at the bottom of the viewport and links to Venue, Timeline, Dress Code, RSVP, and Gifts. All sections are included unless their own specification explicitly excludes them; Hero and Gallery are intentionally excluded.
- It remains visually hidden during the hero message-card reveal and blurs into view after that animation finishes.
- Navigation links use a `#F8FFF5` hover state. There is no persistent active-section indicator.
- Clicking a navigation item prevents the browser's default hash jump and smoothly scrolls the scroll container to the requested section. Reduced-motion users receive an immediate scroll.
- The navigation component lives in `src/app/navigation.tsx`; it is a client component because it controls navigation scrolling.

### Hero implementation and animation

- The hero uses `/wedding-assets/hero/initial-look.png` as its initial monogram artwork. It is not enclosed by the general card treatment.
- There is no envelope, seal, or scroll lock. The page is ready to use on first paint.
- The hero monogram image is always fully visible and is not covered by a superimposed invitation card.
- After the wedding date line, the invitation card appears in normal document flow with the four ivy corner assets and the message: “We’re tying the knot! Join us in the garden for a day filled with love!”.
- The invitation card keeps its reverse-peel entrance animation: it begins clipped, slightly rotated, and blurred, then settles flat and fully visible. The card has no toggle, click, or keyboard interaction; its visibility remains on after the entrance animation.
- The bottom navigation blurs in after the final card and its message complete their reveal.
- Below the hero artwork, render the wedding date as large semibold text: `07 FEBRUARY 2027, 3:00 PM`.

### Motion and accessibility

- All implemented visual motion is Framer Motion: the invitation-card reveal, message reveal, gallery motion, and navigation entry. Navigation uses the browser's native smooth scrolling API to move the scroll container between sections.
- `prefers-reduced-motion: reduce` disables the hero transitions, immediately displays the invitation card, and shows the navigation without its entry animation.

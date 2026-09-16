# Features

This document contains all the features needed for this weddding website to work. Agents should treat this as the master plan of the website.
We will be detailing each section/feature of the website in this document.
The website is a vertical scrolling website divided into 5 sections.
The final product should be mobile responsive as well.

1. Hero Page
2. The Venue
3. The Timeline
4. Dress Code

The website has a black and white aesthetic with `#F8FFF5` as its green highlight for supporting cards and controls. Apply the reusable `.grainy` texture class to the body for a subtle paper-like finish.
Each section will have an ivy like design in each corner. These assets can be found in the dir `/public/wedding-assets/ivy` and are svg files this should be scaled down as the svg files are very resource heavy.

The ivy with 00 is the top left one, the ivy with 01 is the bottom left while the top-right is 02 and 03 is for the bottom right

each section should feel like a card and the ivies will frame the card.

each section should snap into focus and take up the entire view port

each card section should have a bigger margin to make it feel like a set of cards.

All interface animation must use Framer Motion. Do not add CSS keyframe or transition-based animation for visual motion.

## Navigation

- A fixed, glass-like navigation bar sits at the bottom of the viewport with Home, Venue, Timeline, and Dress links.
- It remains hidden during the hero intro and blurs into view after the complete animation sequence.
- Use a `#F8FFF5` hover state only. Do not render a persistent active-section marker.
- Navigation links smoothly scroll the invitation's snapping scroll container. Reduced-motion users receive an immediate jump.

## Hero Page

This will be the first section of the page.

1. As the page loads the initial appearance of the Hero section appears. Copy the design from the image at the `/features/assets/hero/initial-look`
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
13. The envelope is scaled to 110% of its base size and covers the entire page during the intro. The `K R` seal is scaled to 144% of its base size.
14. Lock invitation scrolling while the three-second envelope animation is visible. Enable scrolling only after the envelope clears.

## The Venue section

1. Heading: `Meet us in the garden`.
2. Body: `A beautiful little spot for our very big day.`
3. Use `/features/assets/venue/ville-sommet-sketch.png` as a low-opacity background for the Venue card.
4. Put an embedded Google Map for Ville Sommet in the media panel. It is full-height beside the details on desktop and 16:9 landscape on mobile.
5. Replace a printed address with accessible icon buttons that link to the venue pin in Google Maps and Waze.
6. The Venue card hugs its content with `p-8` internal spacing. Its surrounding snap section still fills the viewport.
7. Do not render ivy in the Venue card.
8. On desktop, the details are on the left and the map is on the right. On mobile, the details appear before the map.
9. Keep `mt-20` spacing between the Venue description and map buttons.

## Implemented app reference

### Page structure and styling

- The invitation is a full-screen, vertically scrolling experience. Its `main` element is a `100svh` scroll container with mandatory vertical scroll snapping.
- Hero, Venue, Timeline, and Dress Code are the implemented sections. Each non-hero section occupies one viewport and is presented as a large white card with generous outer margins: `20px` on small screens and `40px` from the `sm` breakpoint upward.
- The card system uses a black-and-white base. Supporting information cards use `#F8FFF5` with a light green border. Rounded interface surfaces use a `1rem` radius; intentionally circular controls and the seal remain fully round. The sections have subtle shadows, and the ivy decoration frames their corners.
- Ivy asset placement is fixed: `00.svg` top-left, `01.svg` bottom-left, `02.svg` top-right, and `03.svg` bottom-right. Keep the images scaled down and lazy-loaded through `next/image` because their source SVGs are large.
- Timeline and Dress Code are intentionally placeholder sections. Each has two green information cards until final content is supplied.
- The Venue section is implemented with the supplied sketch background, embedded map, responsive column ordering, and map icon controls.

### Navigation

- The navigation is fixed at the bottom of the viewport and links to Home, Venue, Timeline, and Dress Code.
- It remains visually hidden during the intro and blurs into view after all hero animations finish.
- Navigation links use a `#F8FFF5` hover state. There is no persistent active-section indicator.
- Clicking a navigation item prevents the browser's default hash jump and smoothly scrolls the snapping scroll container to the requested section. Reduced-motion users receive an immediate scroll.
- The navigation component lives in `src/app/navigation.tsx`; it is a client component because it controls navigation scrolling.

### Hero implementation and animation

- The hero uses `features/assets/hero/initial-look.png` as its initial monogram artwork. It is not enclosed by the general card treatment.
- On page load, a green envelope covers the entire page. It is scaled to 110% of its base size, uses a `1rem` radius, and prevents scrolling until it clears.
- The envelope begins with its flat top flap and bottom pocket touching along their shared edge. The top flap carries a `K R` initials marker scaled to 144% of its base size, has a shadow, and slides upward. The bottom pocket slides downward at the same time. The initials stay attached to the top flap throughout. The envelope halves do not fade; their slide is the only exit animation.
- The envelope movement lasts three seconds. No message card is visible during this sequence.
- At the end of the envelope sequence, the final white invitation card fades in above the softened monogram. The card contains the four ivy corner assets and the message: “We’re tying the knot! Join us in the garden for a day filled with love!”.
- The message uses a reverse-peel reveal: it begins clipped, slightly rotated, and blurred, then settles flat and fully visible. The monogram remains visible underneath at reduced opacity.
- The bottom navigation blurs in after the final card and its message complete their reveal.
- Below the hero artwork, render the wedding date as large semibold text: `07 FEBRUARY 2027, 3:30 PM`.

### Motion and accessibility

- All implemented visual motion is Framer Motion: the full-page envelope halves, seal, artwork fade, final-card reveal, message reveal, and navigation entry. Navigation uses the browser's native smooth scrolling API to move the scroll container between sections.
- `prefers-reduced-motion: reduce` disables the envelope and hero transitions, immediately displays the final hero card, and shows the navigation without its entry animation.

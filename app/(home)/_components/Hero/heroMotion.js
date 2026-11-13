// The home hero's slide-change motion (framer-motion).
//
// Slide change — "zoom dissolve": the old picture melts away while slowly zooming out of frame;
// the new one settles in from slightly larger (Swiper's fade does the dissolve itself).
// There is no reveal animation when a page opens — the heroes simply show.
//
// Reduced motion: wrap the hero in <MotionConfig reducedMotion="user"> — the zoom is skipped and
// only the dissolve remains.

const HERO_EASE = [0.22, 1, 0.36, 1]          // quick start, long gentle settle

// a slide: settled while it is the active one, a little larger while it waits or leaves
export const SLIDE_SCALE = { active: 1, idle: 1.12 }
// how long a slide change takes, in seconds: the zoom and Swiper's cross-fade (its `speed`) both use it
export const SLIDE_DURATION = 1.5
export const SLIDE_TRANSITION = { duration: SLIDE_DURATION, ease: HERO_EASE }

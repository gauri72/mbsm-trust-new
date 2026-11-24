/* =============================================================================
   Lekh: the six themes the articles are sorted into (the same six, with the same one-word names, as the tiles
   of the home page's blogs section), and which theme each of the 68 articles belongs to.
   THEME_OF: article id -> theme key. One primary theme per article; the assignment was read from each article's
   title and text and approved. The counts shown on the list page are worked out from it, never typed in.
   Server code only (articleUtils.js uses it).
   ========================================================================== */

export const THEMES = [
    { key: "karma", label: "कर्म", icon: "fas fa-hand-holding-heart" },
    { key: "shanti", label: "शांती", icon: "fas fa-spa" },
    { key: "ahankar", label: "अहंकार", icon: "fas fa-fire" },
    { key: "shankar", label: "शंकरलीला", icon: "fas fa-om" },
    { key: "guru", label: "गुरुकृपा", icon: "fas fa-praying-hands" },
    { key: "math", label: "सेवा", icon: "fas fa-hands-helping" },
]

export const THEME_OF = {
    1: "math", 2: "math", 3: "math", 4: "math", 5: "karma", 6: "ahankar", 7: "shanti", 8: "shanti", 9: "shanti", 10: "ahankar",
    11: "shanti", 12: "math", 13: "guru", 14: "shanti", 15: "shankar", 16: "guru", 17: "shankar", 18: "shanti", 19: "ahankar", 20: "math",
    21: "karma", 22: "karma", 23: "shankar", 24: "karma", 25: "karma", 26: "karma", 27: "ahankar", 28: "ahankar", 29: "shanti", 30: "shanti",
    31: "shanti", 32: "shankar", 33: "shankar", 34: "karma", 35: "karma", 36: "karma", 37: "karma", 38: "shankar", 39: "ahankar", 40: "shanti",
    41: "karma", 42: "karma", 43: "shanti", 44: "guru", 45: "ahankar", 46: "shankar", 47: "shanti", 48: "ahankar", 49: "shanti", 50: "shanti",
    51: "shanti", 52: "shanti", 53: "karma", 54: "karma", 55: "karma", 56: "karma", 57: "shankar", 58: "shankar", 59: "shankar", 68: "guru",
}

/* =============================================================================
   The site's names — ONE source, so a page or a person is always called, and
   iconed, the same way everywhere: the header menu + drawer, the footer links,
   the hero / breadcrumb artwork and every browser-tab title.

   Change a name or an icon here and it changes on every page.
   ========================================================================== */

export const SITE_NAME = "मंगल भक्त सेवा मंडळ"

// ---- Pages: the name + Font Awesome icon each page goes by ---------------------
export const PAGES = {
    home:           { href: "/",               label: "मुखपृष्ठ",     icon: "fas fa-home" },
    parichaya:      { href: "/parichaya",      label: "परिचय",        icon: "fas fa-landmark" },
    karyakram:      { href: "/karyakram",      label: "कार्यक्रम",    icon: "fas fa-calendar-alt" },
    upkram:         { href: "/upkram",         label: "उपक्रम",       icon: "fas fa-hands-helping" },
    pravachan:      { href: "/pravachan",      label: "प्रवचन",       icon: "fas fa-microphone-alt" },
    chitrasangraha: { href: "/chitrasangraha", label: "चित्रसंग्रह",  icon: "fas fa-images" },
    sampark:        { href: "/sampark",        label: "संपर्क",       icon: "fas fa-phone-alt" },
}

// the call-to-action button: the header's pill and the closing section's gold button are the same
export const CTA = { href: PAGES.parichaya.href, label: "आमचा परिचय" }

// the menu's dropdown that holds Karyakram · Upkram · Pravachan
export const WORK_GROUP = { label: "आमचे कार्य", icon: "fas fa-praying-hands" }

// browser-tab title of a page: "<page name> — <site name>"
export const pageTitle = (key) => `${PAGES[key].label} — ${SITE_NAME}`

// ---- Characters: the two names on the artwork's plates -------------------------
// `display` is what is drawn: the title font can stack श्व and त्त into ligatures that read
// differently from the artwork's lettering, so a zero-width joiner (U+200D) asks for the
// half-letter form instead. `name` is the plain text (for labels, search, alt text).
export const CHARACTERS = {
    swami: {
        name: "श्री विश्वेश्वर स्वामी महाराज",
        display: "श्री विश्‍वेश्‍वर स्वामी महाराज",
    },
    datta: {
        name: "श्री शंकरदत्त महाराज",
        display: "श्री शंकरदत्‍त महाराज",
    },
}

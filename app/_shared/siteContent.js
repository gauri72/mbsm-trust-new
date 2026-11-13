/* =============================================================================
   The site's names — ONE source, so a page or a person is always called, and
   iconed, the same way everywhere: the header menu + drawer, the footer links,
   the hero / breadcrumb artwork and every browser-tab title.

   Change a name or an icon here and it changes on every page.
   ========================================================================== */

export const SITE_NAME = "मंगल भक्त सेवा मंडळ"
// The title font can stack क्त into a ligature that does not read as Marathi; a zero-width joiner (U+200D)
// after क् asks for the half-क form. Used for the name shown on the page (header and footer), not for titles.
export const SITE_NAME_DISPLAY = "मंगल भक्\u200Dत सेवा मंडळ"
export const SITE_LOGO_SRC = "/assets/media/shared/logo.webp"

// ---- Address: one copy (English digits), used by the header strip, the footer and the home page ----
export const SITE_ADDRESS_PLACE = "श्री शंकरदत्त महाराज मठ,"
export const SITE_ADDRESS_LINE1 = "एफ 70, एमआयडीसी,"
export const SITE_ADDRESS_CITY = "अहिल्यानगर"
export const SITE_ADDRESS_PINCODE = "414111"
export const SITE_ADDRESS_SHORT = `${SITE_ADDRESS_PLACE} ${SITE_ADDRESS_LINE1} ${SITE_ADDRESS_CITY}`

// ---- Contact details: one copy, used by the header strip, the footer, the home page and the contact page ----
export const SITE_PHONE_TEL = "tel:+917588797788"
export const SITE_PHONE_DISPLAY = "+91 75887 97788"      // English digits (the contact page shows its own Devanagari form)
export const SITE_EMAIL = "mbsmtrust@gmail.com"
export const SITE_EMAIL_MAILTO = `mailto:${SITE_EMAIL}`
export const SITE_MAP_URL = "https://share.google/eUPrIPLwsBu6afTGg"
export const SITE_WHATSAPP_URL = "https://wa.me/917588797788"

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

// Is this link the page being shown? "/" only matches the home page; any other link also matches its sub-pages.
// (the header and the footer use the same rule)
export const isCurrentPage = (pathname, href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)

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

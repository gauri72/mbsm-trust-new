import { ARTICLES } from "./articles"
import { THEMES, THEME_OF } from "./themes"

/* =============================================================================
   Lekh: what the list page and the article page ask of the articles (articles.js).
   Server code only: the list page's cards get a summary (no text), never the articles themselves.
   ========================================================================== */

// The category of the articles (shown on the article page); `label` is what the visitor sees
export const CATEGORIES = [
    { key: "Pravachan", label: "प्रवचन" },
]

export const categoryLabel = (key) => CATEGORIES.find((category) => category.key === key)?.label ?? key

// "/lekh/5": only a plain number is an article (not "05", "5x" or "-5")
export function getArticle(id) {
    return /^[1-9]\d*$/.test(id) ? ARTICLES.find((article) => article.id === Number(id)) : undefined
}

// 2026-01-08 -> "८ जानेवारी २०२६" (written out from the parts, so the server and the browser always agree)
const MONTHS = ["जानेवारी", "फेब्रुवारी", "मार्च", "एप्रिल", "मे", "जून", "जुलै", "ऑगस्ट", "सप्टेंबर", "ऑक्टोबर", "नोव्हेंबर", "डिसेंबर"]
const toDevanagari = (number) => String(number).replace(/\d/g, (digit) => "०१२३४५६७८९"[digit])

export function formatDate(iso) {
    const [year, month, day] = iso.split("-").map(Number)
    return `${toDevanagari(day)} ${MONTHS[month - 1]} ${toDevanagari(year)}`
}

// what a card on the list page shows (the theme in words), newest first:
// by date, and for articles of the same date the higher id (the later one) first
const newestFirst = (a, b) => b.date.localeCompare(a.date) || b.id - a.id

const THEME = Object.fromEntries(THEMES.map((theme) => [theme.key, theme]))

// the cards use a small copy of the picture (pravachan/card/, 600px); the article page keeps the full one
export const cardImage = (image) => image.replace("/pravachan/", "/pravachan/card/")

// the theme of one article, in words and its icon (the article page's chip)
export function themeOf(id) {
    const theme = THEME[THEME_OF[id]]
    if (!theme) throw new Error(`Article ${id} has no theme: add it to _data/themes.js`)
    return { label: theme.label, icon: theme.icon }
}

export const summaries = () =>
    [...ARTICLES].sort(newestFirst).map(({ id, title, image, lang }) => {
        const theme = THEME[THEME_OF[id]]
        if (!theme) throw new Error(`Article ${id} has no theme: add it to _data/themes.js`)
        return { id, title, image: cardImage(image), lang, theme: theme.key, themeLabel: theme.label, themeIcon: theme.icon }
    })

// how many articles each theme holds, counted from THEME_OF (the home page's tiles show these)
export const themeCounts = () =>
    Object.fromEntries(THEMES.map(({ key }) => [key, ARTICLES.filter((article) => THEME_OF[article.id] === key).length]))

// the filter of the list page: "all", then each theme
export const filters = () => [
    { key: "all", label: "सर्व" },
    ...THEMES.map(({ key, label }) => ({ key, label })),
]

// the text of a paragraph, links included, as one string
const textOf = (paragraph) => (typeof paragraph === "string" ? paragraph : paragraph.map((part) => (typeof part === "string" ? part : part.text)).join(""))

// the description search engines and share previews show: the start of the article, cut at a word
export function descriptionOf(article, limit = 160) {
    const text = textOf(article.body[0]).replace(/\s+/g, " ").trim()
    if (text.length <= limit) return text
    return `${text.slice(0, limit).replace(/\s+\S*$/, "")}…`
}

// ---- the article page's extras ----

const asLink = ({ id, title, image, lang }) => ({ id, title, image: cardImage(image), lang })

// the articles beside this one in the list's order (newest first): `newer` comes before it, `older` after it
export function neighbours(id) {
    const list = [...ARTICLES].sort(newestFirst)
    const index = list.findIndex((article) => article.id === id)
    return {
        newer: index > 0 ? asLink(list[index - 1]) : null,
        older: index < list.length - 1 ? asLink(list[index + 1]) : null,
    }
}

// other articles of the same theme, newest first
export const related = (id, limit = 4) =>
    [...ARTICLES]
        .sort(newestFirst)
        .filter((article) => article.id !== id && THEME_OF[article.id] === THEME_OF[id])
        .slice(0, limit)
        .map(asLink)

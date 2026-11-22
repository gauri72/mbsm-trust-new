import { ARTICLES } from "./articles"

/* =============================================================================
   Pravachan: what the list page and the article page ask of the articles (articles.js).
   Server code only: the list page's cards get a summary (no text), never the articles themselves.
   ========================================================================== */

// The two categories of the old site, in the order of the filter; `label` is what the visitor sees
export const CATEGORIES = [
    { key: "Pravachan", label: "प्रवचन" },
    { key: "Nirupan", label: "निरूपण" },
]

export const categoryLabel = (key) => CATEGORIES.find((category) => category.key === key)?.label ?? key

// "/pravachan/5": only a plain number is an article (not "05", "5x" or "-5")
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

// what a card on the list page shows (the date already written out, the category in words)
export const summaries = () =>
    ARTICLES.map(({ id, title, category, date, image, lang }) => ({
        id, title, category, date, image, lang,
        dateLabel: formatDate(date),
        categoryLabel: categoryLabel(category),
    }))

// the filter of the list page: "all", then each category, with how many articles it holds
export const filters = () => [
    { key: "all", label: "सर्व", count: ARTICLES.length },
    ...CATEGORIES.map(({ key, label }) => ({ key, label, count: ARTICLES.filter((article) => article.category === key).length })),
]

// the text of a paragraph, links included, as one string
const textOf = (paragraph) => (typeof paragraph === "string" ? paragraph : paragraph.map((part) => (typeof part === "string" ? part : part.text)).join(""))

// the description search engines and share previews show: the start of the article, cut at a word
export function descriptionOf(article, limit = 160) {
    const text = textOf(article.body[0]).replace(/\s+/g, " ").trim()
    if (text.length <= limit) return text
    return `${text.slice(0, limit).replace(/\s+\S*$/, "")}…`
}

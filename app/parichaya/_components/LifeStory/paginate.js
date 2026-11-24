/* =============================================================================
   LifeStory: lays the book's text (_data/lifeStory.js) out on its pages. Plain functions, no React.

   measureLines  sets the whole text in a real (hidden) page and reads where the browser breaks its lines.
   layoutPages   a photo, then a page of text, for every photo: with ten photos the book has twenty pages on every
                 screen. The lines are shared evenly over the text pages and spaced to reach the foot of each, so no
                 page has blank space; the pages are as tall as that needs.
   ========================================================================== */

const LINE_HEIGHT = 1.5       // of the text's size: the least a line gets
const LEAST_HEIGHT = 1.1      // of a page's width

// The lines the text breaks into in `body` (an empty page's text box), each:
// { text, begins (a paragraph) }. They are not justified: the space between words is the same everywhere.
export function measureLines(body, paragraphs) {
    const words = paragraphs.flatMap((text) => {
        const paragraph = document.createElement("p")
        body.append(paragraph)
        return text.split(/\s+/).map((word, i) => {
            const box = document.createElement("span")
            box.textContent = word
            if (i > 0) paragraph.append(" ")
            paragraph.append(box)
            return { word, box, paragraph }
        })
    })

    const lines = []
    words.forEach(({ word, box, paragraph }) => {
        const { top } = box.getBoundingClientRect()
        const line = lines.at(-1)
        if (line && line.paragraph === paragraph && Math.abs(line.top - top) < 2) {
            line.text += ` ${word}`
        } else {
            lines.push({ text: word, paragraph, top })
        }
    })
    body.replaceChildren()

    return lines.map(({ text, paragraph }, i) => ({ text, begins: lines[i - 1]?.paragraph !== paragraph }))
}

// The pages and their height. `width`: of a page; `box`: its text box's { fontSize, around (the page's height it does not
// get) }, in px. A page: { photo } or { lines, lineHeight }.
export function layoutPages(photos, lines, box, width) {
    const most = Math.ceil(lines.length / photos.length)
    const height = Math.round(Math.max(most * box.fontSize * LINE_HEIGHT + box.around, width * LEAST_HEIGHT))
    const startOf = (i) => Math.round((i * lines.length) / photos.length)

    const pages = photos.flatMap((photo, i) => {
        const text = lines.slice(startOf(i), startOf(i + 1))
        return [{ photo }, { lines: text, lineHeight: (height - box.around) / text.length }]
    })
    return { pages, height }
}

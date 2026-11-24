/* =============================================================================
   LifeStory: lays the book's text (_data/lifeStory.js) out on its pages. Plain functions, no React.

   measureWords  reads the width of every word in a real (hidden) page.
   fitLines      breaks the paragraphs into lines that reach both edges, as a printed book does: the breaks are chosen for
                 the whole paragraph, so that the spaces between words stay as even as they can. The column is made a
                 little narrower when that gives every text page the same number of lines (and so the same space between
                 them).
   layoutPages   a photo, then a page of text, for every photo: with ten photos the book has twenty pages on every
                 screen. The lines are shared evenly over the text pages and spaced to reach the foot of each, so no
                 page has blank space; the pages are as tall as that needs.
   ========================================================================== */

const LINE_HEIGHT = 1.5       // of the text's size: the least a line gets
const LEAST_HEIGHT = 1.1      // of a page's width
const INDENT = 1.4            // of the text's size: a paragraph's first line (as in the CSS)
const MOST_INSET = 72         // px the column may lose to make the lines come out even
const SHORT_LAST_LINE = 0.15  // of the column: a paragraph should not end on a line shorter than this

// What the lines are made from: each paragraph's words with their widths, and the width of a space.
function measureWords(body, paragraphs) {
    const box = (text) => {
        const span = document.createElement("span")
        span.textContent = text
        return span
    }
    const holder = document.createElement("p")
    const measured = paragraphs.map((text) => text.split(/\s+/).map((word) => ({ text: word, span: box(word) })))
    const pair = box("अ अ")
    const joined = box("अअ")
    measured.forEach((words) => words.forEach(({ span }) => holder.append(span, " ")))
    holder.append(pair, " ", joined)
    body.append(holder)

    const widthOf = (span) => span.getBoundingClientRect().width
    const result = {
        space: widthOf(pair) - widthOf(joined),
        paragraphs: measured.map((words) => words.map(({ text, span }) => ({ text, width: widthOf(span) }))),
    }
    body.replaceChildren()
    return result
}

// The best lines for one paragraph in a column `column` wide, each { text, begins, gap } (`gap`: what is added to every
// space of the line so that it reaches the edge). The cost of a line grows with the square of its stretched spaces, and the
// breaks with the least total cost are taken.
function breakParagraph(words, space, column, indent) {
    const best = [{ cost: 0, from: -1, gap: 0 }]      // best[n]: the cheapest way to set the first n words
    for (let end = 1; end <= words.length; end++) {
        best[end] = { cost: Infinity, from: end - 1, gap: 0 }
        let width = -space
        for (let start = end - 1; start >= 0; start--) {
            width += words[start].width + space
            const room = (start === 0 ? column - indent : column) - width
            if (room < 0 && start < end - 1) break
            const spaces = end - start - 1
            const last = end === words.length
            const gap = last || room <= 0 || spaces === 0 ? 0 : room / spaces
            const stretch = last ? (width < column * SHORT_LAST_LINE ? 3 : 0) : spaces === 0 ? 20 : gap / space
            const cost = best[start].cost + stretch ** 2
            if (cost < best[end].cost) best[end] = { cost, from: start, gap }
        }
    }

    const lines = []
    for (let end = words.length; end > 0; end = best[end].from) {
        const { from, gap } = best[end]
        lines.unshift({ text: words.slice(from, end).map(({ text }) => text).join(" "), begins: from === 0, gap })
    }
    return lines
}

// { lines, inset }: the lines in the widest column (`inset` px narrower than `body`, half on each side) in which they
// fill `pages` pages evenly; the full column when there is none.
export function fitLines(body, paragraphs, pages) {
    const { space, paragraphs: measured } = measureWords(body, paragraphs)
    const indent = parseFloat(getComputedStyle(body).fontSize) * INDENT
    const linesIn = (column) => measured.flatMap((words) => breakParagraph(words, space, column, indent))
    for (let inset = 0; inset <= MOST_INSET; inset++) {
        const lines = linesIn(body.clientWidth - inset)
        if (lines.length % pages === 0) return { lines, inset }
    }
    return { lines: linesIn(body.clientWidth), inset: 0 }
}

// The pages and their height. `width`: of a page; `box`: its text box's { fontSize, around (the page's height it does not
// get) }, in px. A page: { photo } or { lines, lineHeight, inset }.
export function layoutPages(photos, { lines, inset }, box, width) {
    const most = Math.ceil(lines.length / photos.length)
    const height = Math.round(Math.max(most * box.fontSize * LINE_HEIGHT + box.around, width * LEAST_HEIGHT))
    const startOf = (i) => Math.round((i * lines.length) / photos.length)

    const pages = photos.flatMap((photo, i) => {
        const text = lines.slice(startOf(i), startOf(i + 1))
        return [{ photo }, { lines: text, lineHeight: (height - box.around) / text.length, inset }]
    })
    return { pages, height }
}

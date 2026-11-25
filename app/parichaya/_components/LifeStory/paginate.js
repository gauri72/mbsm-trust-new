/* =============================================================================
   LifeStory: lays the book's text (_data/lifeStory.js) out on its pages. Plain functions, no React.

   measureWords  reads the width of every word in a real (hidden) page.
   fitLines      breaks the paragraphs into lines that reach both edges, as a printed book does: the breaks are chosen for
                 the whole text, so that the spaces between words stay as even as they can, no paragraph leaves a single
                 line alone on a page, and every text page gets the same number of lines (and so the same space between
                 them). The column is made a little narrower when that gives better lines.
   layoutPages   a photo, then a page of text, for every photo: with ten photos the book has twenty pages on every
                 screen. The lines are shared evenly over the text pages and spaced to reach the foot of each, so no
                 page has blank space; the pages are as tall as that needs.
   ========================================================================== */

const LINE_HEIGHT = 1.5       // of the text's size: the least a line gets
const LEAST_HEIGHT = 1.1      // of a page's width
const INDENT = 1.4            // of the text's size: a paragraph's first line (as in the CSS)
const MOST_INSET = 72         // px the column may lose to make the lines come out even,
const INSET_STEP = 4          // tried in steps of this
const SHORT_LAST_LINE = 0.15  // of the column: a paragraph should not end on a line shorter than this
const SHRINK = 0.3            // of a space: the most it may be narrowed to take a line to the edge
const POWER = 2.5             // a line's cost grows with this power of its change of spaces
const WAYS = 3                // the numbers of lines tried for a paragraph, the cheapest first
const LONGER_PAGE = 100       // the cost of one more line on every page
const STRAY = 30              // the cost of a paragraph's first or last line alone on a page

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

// The ways to set one paragraph in a column `column` wide: a map from the number of lines it takes to the best breaks for
// that number, { cost, lines }. A line is { text, begins, gap } (`gap`: what is added to every space of the line so that
// it reaches the edge, less than 0 to narrow it); its cost grows with how far its spaces are from their own width.
function breakParagraph(words, space, column, indent) {
    // best[n]: a map from a number of lines to the cheapest way to set the first n words in it
    const best = [new Map([[0, { cost: 0 }]])]
    for (let end = 1; end <= words.length; end++) {
        best[end] = new Map()
        let width = -space
        for (let start = end - 1; start >= 0; start--) {
            width += words[start].width + space
            const room = (start === 0 ? column - indent : column) - width
            const spaces = end - start - 1
            if (room < -SHRINK * space * spaces && spaces > 0) break
            const last = end === words.length
            const gap = spaces === 0 || (last && room > 0) ? 0 : room / spaces
            const stretch = last && width < column * SHORT_LAST_LINE ? 3 : !last && spaces === 0 ? 20 : gap / space
            for (const [count, before] of best[start]) {
                const cost = before.cost + Math.abs(stretch) ** POWER
                if (cost < (best[end].get(count + 1)?.cost ?? Infinity)) best[end].set(count + 1, { cost, start, gap })
            }
        }
    }

    const linesOf = (total) => {
        const lines = []
        for (let end = words.length, count = total; count > 0; count--) {
            const { start, gap } = best[end].get(count)
            lines.unshift({ text: words.slice(start, end).map(({ text }) => text).join(" "), begins: start === 0, gap })
            end = start
        }
        return lines
    }
    const ways = [...best[words.length]].sort(([, a], [, b]) => a.cost - b.cost).slice(0, WAYS)
    return ways.map(([count, { cost }]) => ({ count, cost, lines: linesOf(count) }))
}

// What it costs to start a paragraph of `count` lines at line `from` of the text, with `perPage` lines on a page: a page
// should neither end on a paragraph's first line nor start with its last one.
function strayLines(from, count, perPage) {
    if (count < 2) return 0
    const endsPage = (line) => line % perPage === perPage - 1
    return (endsPage(from) ? STRAY : 0) + (endsPage(from + count - 2) ? STRAY : 0)
}

// The cheapest way to set the paragraphs in exactly `pages` pages of `perPage` lines: { cost, lines }, or null if there is
// none. `paragraphs`: the ways to set each one.
function fillPages(paragraphs, pages, perPage) {
    const total = pages * perPage
    let reached = new Map([[0, { cost: 0 }]])          // the number of lines so far, and the cheapest way to get there
    for (const ways of paragraphs) {
        const next = new Map()
        for (const [from, before] of reached) {
            for (const way of ways) {
                const to = from + way.count
                const cost = before.cost + way.cost + strayLines(from, way.count, perPage)
                if (to <= total && cost < (next.get(to)?.cost ?? Infinity)) next.set(to, { cost, before, way })
            }
        }
        reached = next
    }

    const end = reached.get(total)
    if (!end) return null
    const lines = []
    for (let at = end; at.way; at = at.before) lines.unshift(...at.way.lines)
    return { cost: end.cost, lines }
}

// { lines, inset }: the best lines that fill `pages` pages evenly, in a column up to MOST_INSET px narrower than `body`
// (`inset`, half on each side). The pages get one line longer than the full column needs only where that
// makes the text much better.
export function fitLines(body, paragraphs, pages) {
    const { space, paragraphs: measured } = measureWords(body, paragraphs)
    const indent = parseFloat(getComputedStyle(body).fontSize) * INDENT
    const waysIn = (column) => measured.map((words) => breakParagraph(words, space, column, indent))
    const widest = waysIn(body.clientWidth)
    const most = Math.ceil(widest.reduce((sum, [{ count }]) => sum + count, 0) / pages)

    let best = null
    for (let inset = 0; inset <= MOST_INSET; inset += INSET_STEP) {
        const ways = inset ? waysIn(body.clientWidth - inset) : widest
        for (const extra of [0, 1]) {
            const found = fillPages(ways, pages, most + extra)
            const cost = found && found.cost + extra * LONGER_PAGE
            if (found && cost < (best?.cost ?? Infinity)) best = { lines: found.lines, inset, cost }
        }
    }
    return best ?? { lines: widest.flatMap(([{ lines }]) => lines), inset: 0 }
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

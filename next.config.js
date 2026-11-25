// Next.js settings.

// The pictures, videos and fonts under /assets are served from public/, where Next sends "no cache". They change
// rarely, so browsers may keep them for a week, and show the old copy for another day while fetching the new one.
// (To replace a file at once, give the new one a new name.)
const ASSET_CACHE = "public, max-age=604800, stale-while-revalidate=86400"

/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,          // no "X-Powered-By: Next.js" on every response
    async redirects() {
        // pages that used to live at another address: old links and bookmarks still arrive
        return [
            { source: "/karyakram", destination: "/utsav", permanent: true },
            { source: "/upkram", destination: "/prakalpa", permanent: true },
            { source: "/pravachan", destination: "/lekh", permanent: true },
            { source: "/pravachan/:id", destination: "/lekh/:id", permanent: true },
        ]
    },
    async headers() {
        return [
            // only in production: while developing, a replaced picture or font must show at once
            ...(process.env.NODE_ENV === "production"
                ? [{ source: "/assets/:path*", headers: [{ key: "Cache-Control", value: ASSET_CACHE }] }]
                : []),
            { source: "/:path*", headers: [{ key: "X-Content-Type-Options", value: "nosniff" }] },
        ]
    },
}

module.exports = nextConfig

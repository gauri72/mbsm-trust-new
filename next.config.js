/** @type {import('next').NextConfig} */
const nextConfig = {
    // देणगी page hidden for now: send visitors to the gallery instead.
    // Temporary (307) so browsers and search engines don't cache it.
    async redirects() {
        return [
            { source: "/denagi", destination: "/chitrasangraha", permanent: false },
        ]
    },
}

module.exports = nextConfig

// ESLint settings: the Next.js "core-web-vitals" rules (React, React Hooks, accessibility, Next.js).
// Run with: npm run lint
import coreWebVitals from "eslint-config-next/core-web-vitals"

export default [
    ...coreWebVitals,
    { ignores: [".next/**", "node_modules/**", "public/**"] },
]

// Production smoke test for MBSM Trust (read-only).
import { chromium } from "playwright";

const BASE_URL = process.env.BASE_URL || "https://mbsm-trust-new.vercel.app";
const ROUTES = ["/", "/karyakram", "/parichaya", "/donate", "/contact"];
const TIMEOUT = Number(process.env.TIMEOUT_MS || 30000);
const browser = await chromium.launch({ headless: true });
const results = [];

try {
  for (const route of ROUTES) {
    const url = new URL(route, BASE_URL).toString();
    const page = await browser.newPage();
    const pageErrors = [];
    const consoleErrors = [];
    const failedRequests = [];
    page.on("pageerror", err => pageErrors.push(err.message));
    page.on("console", msg => { if (msg.type() === "error") consoleErrors.push(msg.text()); });
    page.on("requestfailed", req => failedRequests.push(`${req.url()} — ${req.failure()?.errorText || "failed"}`));
    let status = null, loadError = null;
    try {
      const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: TIMEOUT });
      status = response?.status() ?? null;
      await page.waitForTimeout(1500);
    } catch (err) { loadError = err.message; }
    const title = await page.title().catch(() => "");
    results.push({ route, url, status, title, loadError, pageErrors, consoleErrors, failedRequests });
    await page.close();
  }
} finally { await browser.close(); }

let failed = false;
console.log("\n=== MBSM Trust Production Smoke Test ===");
console.log(`Base URL: ${BASE_URL}\n`);
for (const r of results) {
  const ok = r.status !== null && r.status >= 200 && r.status < 400 && !r.loadError && r.pageErrors.length === 0;
  if (!ok) failed = true;
  console.log(`${ok ? "PASS" : "CHECK"} ${r.route} | HTTP ${r.status ?? "N/A"} | ${r.title || "(no title)"}`);
  if (r.loadError) console.log(`  Navigation error: ${r.loadError}`);
  for (const e of r.pageErrors) console.log(`  Page error: ${e}`);
  for (const e of r.consoleErrors) console.log(`  Console error: ${e}`);
  for (const e of r.failedRequests) console.log(`  Request failure: ${e}`);
}
const passed = results.filter(r => r.status >= 200 && r.status < 400 && !r.loadError && r.pageErrors.length === 0).length;
console.log(`\nSummary: ${passed}/${results.length} routes passed core checks.`);
console.log("Console errors and failed requests are reported for review, not automatically treated as fatal.");
process.exitCode = failed ? 1 : 0;

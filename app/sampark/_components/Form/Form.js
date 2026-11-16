'use client'
import { useState } from "react"
import { SITE_NAME } from "../../../_shared/_components/siteContent"
import { SectionHead } from "../../../_shared/_components/Field/Field"
import field from "../../../_shared/_components/Field/Field.module.css"
import { cx } from "../../../_shared/_components/utils"
import styles from "./Form.module.css"

/* =============================================================================
   Contact page: the message form, on a gold card in a maroon field (the look of the home sections).
   Sent to Formspree; the visitor sees a success / error note under the form. Styles: Form.module.css.
   ========================================================================== */

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnpnqgoq"
const SEND_TIMEOUT_MS = 15000          // a stalled connection ends in the error note, not in a button that waits for ever

// Formspree uses `_subject` as the notification email's subject line
const EMAIL_SUBJECT = `${SITE_NAME} — संकेतस्थळावरून नवीन संदेश`

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_CHARS_RE = /^[\d\s+()-]+$/                // digits, spaces, + ( ) -
const PHONE_DIGITS = { min: 7, max: 15 }              // an international number has at most 15 digits

const INITIAL_FORM = { name: "", email: "", phone: "", message: "" }

// Formspree's spam trap: a field real visitors never see. A bot fills it in, and its message is then dropped
const HONEYPOT = "_gotcha"

// the four fields, in order. A wide screen puts the first three side by side and the message under them;
// `full` = always the whole row, `fullOnTablet` = the whole row when the form is two columns wide
const FIELDS = [
    { name: "name", label: "आपले नाव", placeholder: "नाव", icon: "fas fa-user", type: "text", autoComplete: "name" },
    { name: "email", label: "ईमेल", placeholder: "ईमेल", icon: "fas fa-envelope", type: "email", autoComplete: "email" },
    { name: "phone", label: "दूरध्वनी क्रमांक", placeholder: "आपला दूरध्वनी क्रमांक", icon: "fas fa-phone-alt", type: "tel", autoComplete: "tel", fullOnTablet: true },
    { name: "message", label: "संदेश", placeholder: "आपला संदेश लिहा..", icon: "fas fa-comment-dots", multiline: true, full: true },
]

const validate = (form) => {
    const errors = {}
    if (!form.name.trim()) errors.name = "कृपया आपले नाव टाका."
    if (!form.email.trim()) errors.email = "कृपया ईमेल टाका."
    else if (!EMAIL_RE.test(form.email.trim())) errors.email = "कृपया वैध ईमेल टाका."
    const phone = form.phone.trim()
    const phoneDigits = phone.replace(/\D/g, "").length
    if (!phone) errors.phone = "कृपया दूरध्वनी क्रमांक टाका."
    else if (!PHONE_CHARS_RE.test(phone) || phoneDigits < PHONE_DIGITS.min || phoneDigits > PHONE_DIGITS.max) errors.phone = "कृपया वैध दूरध्वनी क्रमांक टाका."
    if (!form.message.trim()) errors.message = "कृपया आपला संदेश लिहा."
    return errors
}

export default function Form() {
    const [form, setForm] = useState(INITIAL_FORM)
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState("idle")   // idle | submitting | success | error

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
        setStatus("idle")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const found = validate(form)
        setErrors(found)
        const firstInvalid = FIELDS.find((f) => found[f.name])
        if (firstInvalid) {
            document.getElementById(`form-${firstInvalid.name}`)?.focus()      // the visitor lands on the first thing to fix
            return
        }
        if (new FormData(e.currentTarget).get(HONEYPOT)) {                     // a bot: look as if it worked, send nothing
            setForm(INITIAL_FORM)
            setStatus("success")
            return
        }

        setStatus("submitting")
        const timer = new AbortController()
        const timeout = setTimeout(() => timer.abort(), SEND_TIMEOUT_MS)
        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({ ...form, _subject: `${EMAIL_SUBJECT} (${form.name.trim()})` }),
                signal: timer.signal,
            })
            if (!res.ok) throw new Error("submit failed")
            setForm(INITIAL_FORM)
            setStatus("success")
        } catch {
            setStatus("error")
        } finally {
            clearTimeout(timeout)
        }
    }

    return (
        <section className={cx(field.field, styles.contact)} id="contact-form">
            <div className="container">
                <SectionHead label="संपर्क साधा" title="आपला संदेश आम्हाला पाठवा" />
                <div className={cx(field.card, styles.card, "wow fadeInUp")} data-wow-delay="100ms">
                    <form className={styles.form} onSubmit={handleSubmit} noValidate>
                        {/* the spam trap: out of sight, out of the tab order, ignored by browsers' autofill */}
                        <div className={styles.trap} aria-hidden="true">
                            <input type="text" name={HONEYPOT} tabIndex={-1} autoComplete="off" />
                        </div>
                        {FIELDS.map((f) => {
                            const error = errors[f.name]
                            const Control = f.multiline ? "textarea" : "input"
                            return (
                                <div key={f.name} className={cx(styles.field, f.full && styles.full, f.fullOnTablet && styles.fullOnTablet)}>
                                    <label className={styles.label} htmlFor={`form-${f.name}`} lang="mr">{f.label}</label>
                                    <div className={cx(styles.box, f.multiline && styles.boxTall, error && styles.boxError)}>
                                        <span className={styles.icon} aria-hidden="true"><i className={f.icon}></i></span>
                                        <Control
                                            id={`form-${f.name}`}
                                            name={f.name}
                                            lang="mr"
                                            placeholder={f.placeholder}
                                            value={form[f.name]}
                                            onChange={handleChange}
                                            autoComplete={f.autoComplete}
                                            aria-invalid={error ? "true" : undefined}
                                            aria-describedby={error ? `form-${f.name}-error` : undefined}
                                            {...(f.multiline ? { rows: 5 } : { type: f.type })}
                                        />
                                    </div>
                                    {error && (
                                        <p className={styles.error} id={`form-${f.name}-error`} lang="mr">
                                            {error}
                                        </p>
                                    )}
                                </div>
                            )
                        })}
                        <div className={cx(styles.full, styles.actions)}>
                            <button type="submit" className={cx("pill-btn", styles.send)} lang="mr" disabled={status === "submitting"}>
                                <span>{status === "submitting" ? "पाठवत आहे..." : "संदेश पाठवा"}</span>
                                <i className="fas fa-arrow-right" aria-hidden="true"></i>
                            </button>
                        </div>
                    </form>
                    {status === "success" && (
                        <p className={cx(styles.result, styles.resultSuccess)} role="status" lang="mr">आपला संदेश यशस्वीरित्या पाठवला गेला. धन्यवाद!</p>
                    )}
                    {status === "error" && (
                        <p className={cx(styles.result, styles.resultError)} role="alert" lang="mr">संदेश पाठवताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.</p>
                    )}
                </div>
            </div>
        </section>
    )
}

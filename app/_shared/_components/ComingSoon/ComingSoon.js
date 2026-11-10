import styles from "./ComingSoon.module.css"

/* =============================================================================
   Coming soon: a centred note shown under the temple gallery on the inner pages whose
   content is not ready yet (every page except home).
   Styles: see ComingSoon.module.css.
   ========================================================================== */

export default function ComingSoon() {
    return (
        <section className={`${styles.soon} ${styles.soonMaroon}`}>
            <div className="container">
                <div className={styles.inner}>
                    <span className={styles.icon}>
                        <i className="fas fa-om" aria-hidden="true"></i>
                    </span>
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline" lang="mr">आगामी</span>
                        </div>
                        <h2 className="section-title__title title-animation" lang="mr">लवकरच उपलब्ध</h2>
                    </div>
                    <p className={styles.text} lang="mr">
                        ही माहिती लवकरच येथे प्रकाशित केली जाईल. कृपया थोड्या दिवसांनी पुन्हा भेट द्या.
                    </p>
                </div>
            </div>
        </section>
    )
}

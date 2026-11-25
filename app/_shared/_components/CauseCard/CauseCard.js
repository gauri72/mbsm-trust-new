import field from "../Field/Field.module.css"
import styles from "./CauseCard.module.css"

/* =============================================================================
   The gold card of a cause (home: Projects) or of a project (Prakalpa: the list of projects): a photo framed by a maroon
   border, the cause's round icon on the frame's bottom edge, then the title. A cause also says how many projects it has
   (`number` and `unit`), above its title with a thin line between them.
   The photo and the icon are decoration (empty alt): the text says it. Styles: CauseCard.module.css.
   ========================================================================== */
export default function CauseCard({ image, icon, title, number, unit }) {
    return (
        <article className={`${field.card} ${styles.card}`}>
            <div className={styles.slotBox}>
                <div className={styles.slot}>
                    <img src={image} alt="" width="800" height="450" loading="lazy" decoding="async" />
                </div>
                <span className={field.medal} aria-hidden="true"><i className={icon}></i></span>
            </div>
            <div className={styles.body}>
                {number && (
                    <p className={styles.count} lang="mr">
                        <span className={styles.number}>{number}</span>
                        <span>{unit}</span>
                    </p>
                )}
                <h3 className={styles.title} lang="mr">{title}</h3>
            </div>
        </article>
    )
}

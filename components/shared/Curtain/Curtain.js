import styles from "./Curtain.module.css"

// Maroon stage curtain that lifts once on page load, leaving its gold
// valance parked at the top. Place it inside a `position: relative` hero.
// variant="home" uses a shorter valance.
export default function Curtain({ variant }) {
    const rootClass = variant === "home" ? `${styles.root} ${styles.home}` : styles.root

    return (
        <div className={rootClass} aria-hidden="true">
            <span className={styles.shadow}></span>
            <span className={styles.curtain}></span>
            <span className={styles.scallop}></span>
        </div>
    )
}

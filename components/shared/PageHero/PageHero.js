import Curtain from "@/components/shared/Curtain/Curtain"
import styles from "./PageHero.module.css"

// Inner-page hero: one full-width image revealed by the curtain.
export default function PageHero({ image }) {
    return (
        <section className={styles.root}>
            <img src={image} alt="" className={styles.img} />
            <Curtain />
        </section>
    )
}

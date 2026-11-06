import Link from "next/link"
import Breadcrumb from "./_shared/_components/Breadcrumb/Breadcrumb"
import styles from "./not-found.module.css"
export default function Error404() {

    return (
        <>
            <Breadcrumb image="/assets/media/shared/page-header-bg.jpg" />
            <section className={styles.errorPage}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className={styles.inner}>
                                <div className={styles.titleBox}>
                                    <h2 className={styles.title}>404</h2>
                                </div>
                                <h3 className={styles.tagline}>Sorry we can't find that page!</h3>
                                <p className={styles.text}>The page you are looking for was never existed.</p>
                                <form className={styles.form}>
                                    <div className={styles.formInput}>
                                        <input type="search" placeholder="Search here"/>
                                        <button type="submit"><i className="fas fa-search"></i></button>
                                    </div>
                                </form>
                                <Link href="/" className={`thm-btn ${styles.btn}`}>Back to home<span><i
                                            className="fas fa-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

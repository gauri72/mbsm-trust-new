'use client'
import Link from "next/link"

export default function Feature() {
    
    return (
        <>
        
        {/*Feature One Start */}
        <section className="feature-one">
            <div className="container">
                <div className="row">
                    {/*Feature One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                        <div className="feature-one__single">
                            <div className="feature-one__icon">
                                <span className="icon-hand"></span>
                            </div>
                            <div className="feature-one__content">
                                <h4><Link href="volunteer">Volunteer</Link></h4>
                                <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia </p>
                            </div>
                        </div>
                    </div>
                    {/*Feature One Single End*/}
                    {/*Feature One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInDown" data-wow-delay="200ms">
                        <div className="feature-one__single feature-one__single-2">
                            <div className="feature-one__icon">
                                <span className="icon-love"></span>
                            </div>
                            <div className="feature-one__content">
                                <h4><Link href="/denagi">Donate</Link></h4>
                                <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia </p>
                            </div>
                        </div>
                    </div>
                    {/*Feature One Single End*/}
                    {/*Feature One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="feature-one__single feature-one__single-3">
                            <div className="feature-one__icon">
                                <span className="icon-support"></span>
                            </div>
                            <div className="feature-one__content">
                                <h4><Link href="/sampark">Support</Link></h4>
                                <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia </p>
                            </div>
                        </div>
                    </div>
                    {/*Feature One Single End*/}
                </div>
            </div>
        </section>
        {/*Feature One End */}

        </>
    )
}

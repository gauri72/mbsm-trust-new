import Link from "next/link"

export default function Footer2() {
    return (
        <>
            
        <footer className="site-footer-two">
            <div className="site-footer-two__shape-1 float-bob-y">
                <img src="assets/images/shapes/site-footer-two-shape-1.png" alt=""/>
            </div>
            <div className="site-footer-two__top">
                <div className="container">
                    <div className="site-footer-two__top-inner">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget-two__about">
                                    <h2 className="footer-widget-two__about-title">Donate To Change The World</h2>
                                    <p className="footer-widget-two__about-text">category that involves giving financial or
                                        to a
                                        materialt<br/> support various causes organizations It allows not </p>
                                    <div className="footer-widget-two__btn-box">
                                        <Link href="donation-details" className="footer-widget-two__btn thm-btn">Donate
                                            Now<span><i className="icon-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget-two__services">
                                    <h4 className="footer-widget-two__title">Services</h4>
                                    <ul className="footer-widget-two__services-list list-unstyled">
                                        <li><Link href="/parichaya">Incident Responder</Link></li>
                                        <li><Link href="/parichaya">Secure Managed Fund</Link></li>
                                        <li><Link href="/parichaya">Clean Water All</Link></li>
                                        <li><Link href="/parichaya">Give Education</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget-two__links">
                                    <h4 className="footer-widget-two__title">Links</h4>
                                    <ul className="footer-widget-two__services-list list-unstyled">
                                        <li><Link href="/parichaya">Food to individuals</Link></li>
                                        <li><Link href="/parichaya">Temporary housing</Link></li>
                                        <li><Link href="/parichaya">Local shelters</Link></li>
                                        <li><Link href="/parichaya">Natural disasters</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget-two__contact">
                                    <h3 className="footer-widget-two__title">Contact Info</h3>
                                    <ul className="footer-widget-two__contact-list list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-call"></span>
                                            </div>
                                            <p><Link href="tel:0882466422710">+088 (246) 642-27-10</Link></p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-envelope"></span>
                                            </div>
                                            <p><Link href="mailto:example@mail.com">example@mail.com</Link></p>
                                        </li>
                                    </ul>
                                    <div className="site-footer-two__social">
                                        <Link href="#"><i className="icon-facebook"></i></Link>
                                        <Link href="#"><i className="icon-twitter"></i></Link>
                                        <Link href="#"><i className="icon-instagram"></i></Link>
                                        <Link href="#"><i className="icon-pintarest"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer-two__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="site-footer-two__bottom-inner">
                                    <div className="site-footer-two__copyright">
                                        <p className="site-footer-two__copyright-text">Copywright 2024 by <Link href="#">anity</Link>. All
                                            Rights Reserved.</p>
                                    </div>
                                    <div className="site-footer-two__bottom-menu-box">
                                        <ul className="list-unstyled site-footer-two__bottom-menu">
                                            <li><Link href="/parichaya">Privacy Policy</Link></li>
                                            <li><Link href="/parichaya">Terms of Service</Link></li>
                                            <li><Link href="/parichaya">Cookies Settings</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
       
        </>
    )
}

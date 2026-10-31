import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>
            <ul className="main-menu__list">
                <li className="dropdown megamenu">
                    <Link href="/">Home </Link>
                    <ul>
                        <li>

                            <section className="home-showcase">
                                <div className="container">
                                    <div className="home-showcase__inner">
                                        <div className="row">

                                            {/*Start Home Showcase Item */}
                                            <div className="col-lg-2">
                                                <div className="home-showcase__item">
                                                    <div className="home-showcase__image">
                                                        <img src="assets/images/home-showcase/home-showcase-1-1.jpg"
                                                            alt=""/>
                                                        <div className="home-showcase__buttons">
                                                            <Link href="/"
                                                                className="thm-btn home-showcase__buttons__item">
                                                                View Page
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <h3 className="home-showcase__title">
                                                        Home Page 01
                                                    </h3>
                                                </div>
                                            </div>
                                            {/*End Home Showcase Item */}
                                            {/*Start Home Showcase Item */}
                                            <div className="col-lg-2">
                                                <div className="home-showcase__item">
                                                    <div className="home-showcase__image">
                                                        <img src="assets/images/home-showcase/home-showcase-1-2.jpg"
                                                            alt=""/>
                                                        <div className="home-showcase__buttons">
                                                            <Link href="index2"
                                                                className="thm-btn home-showcase__buttons__item">
                                                                View Page
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <h3 className="home-showcase__title">
                                                        Home Page 02
                                                    </h3>
                                                </div>
                                            </div>
                                            {/*End Home Showcase Item */}
                                            {/*Start Home Showcase Item */}
                                            <div className="col-lg-2">
                                                <div className="home-showcase__item">
                                                    <div className="home-showcase__image">
                                                        <img src="assets/images/home-showcase/home-showcase-1-3.jpg"
                                                            alt=""/>
                                                        <div className="home-showcase__buttons">
                                                            <Link href="index3"
                                                                className="thm-btn home-showcase__buttons__item">
                                                                View Page
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <h3 className="home-showcase__title">
                                                        Home Page 03
                                                    </h3>
                                                </div>
                                            </div>
                                            {/*End Home Showcase Item */}
                                            {/*Start Home Showcase Item */}
                                            <div className="col-lg-2">
                                                <div className="home-showcase__item">
                                                    <div className="home-showcase__image">
                                                        <img src="assets/images/home-showcase/home-showcase-1-5.jpg"
                                                            alt=""/>
                                                        <div className="home-showcase__buttons">
                                                            <Link href="index4"
                                                                className="thm-btn home-showcase__buttons__item">
                                                                View Page
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <h3 className="home-showcase__title">
                                                        Home Page 04
                                                    </h3>
                                                </div>
                                            </div>
                                            {/*End Home Showcase Item */}
                                            {/*Start Home Showcase Item */}
                                            <div className="col-lg-2">
                                                <div className="home-showcase__item">
                                                    <div className="home-showcase__image">
                                                        <img src="assets/images/home-showcase/home-showcase-1-6.jpg"
                                                            alt=""/>
                                                        <div className="home-showcase__buttons">
                                                            <Link href="index5"
                                                                className="thm-btn home-showcase__buttons__item">
                                                                View Page
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <h3 className="home-showcase__title">
                                                        Home Page 05
                                                    </h3>
                                                </div>
                                            </div>
                                            {/*End Home Showcase Item */}
                                            {/*Start Home Showcase Item */}
                                            <div className="col-lg-2">
                                                <div className="home-showcase__item">
                                                    <div className="home-showcase__image">
                                                        <img src="assets/images/home-showcase/home-showcase-1-4.jpg"
                                                            alt=""/>
                                                        <div className="home-showcase__buttons">
                                                            <Link href="index-dark"
                                                                className="thm-btn home-showcase__buttons__item">
                                                                View Page
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <h3 className="home-showcase__title">
                                                        Home Dark
                                                    </h3>
                                                </div>
                                            </div>
                                            {/*End Home Showcase Item */}
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="/parichaya">About</Link>
                </li>
                <li className="dropdown">
                    <Link href="#">Pages</Link>
                    <ul className="shadow-box">
                        <li className="dropdown"><Link href="#">Volunteer</Link>
                            <ul>
                                <li><Link href="volunteer">Volunteer</Link></li>
                                <li><Link href="volunteer-carousel">Volunteer Carousel</Link>
                                </li>
                                <li><Link href="become-volunteer">Become Volunteer</Link></li>
                                <li><Link href="volunteer-details">Volunteer Details</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">Events</Link>
                            <ul>
                                <li><Link href="events">Events</Link></li>
                                <li><Link href="events-carousel">Events Carousel</Link></li>
                                <li><Link href="events-list">Events List</Link></li>
                                <li><Link href="event-details">Event Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="projects">Projects</Link></li>
                        <li><Link href="project-details">Project Details</Link></li>
                        <li><Link href="cause-details">Cause Details</Link></li>
                        <li><Link href="testimonials">Testimonials</Link></li>
                        <li><Link href="faq">FAQs</Link></li>
                        <li><Link href="404">404 Error</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Donation</Link>
                    <ul className="shadow-box">
                        <li><Link href="donation">Donation</Link></li>
                        <li><Link href="donation-carousel">Donation Carousel</Link></li>
                        <li><Link href="donation-details">Donation Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Shop</Link>
                    <ul className="shadow-box">
                        <li><Link href="products">Products</Link></li>
                        <li><Link href="product-details">Product Details</Link></li>
                        <li><Link href="cart">Cart</Link></li>
                        <li><Link href="checkout">Checkout</Link></li>
                        <li><Link href="wishlist">Wishlist</Link></li>
                        <li><Link href="account">My Account</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Blog</Link>
                    <ul className="shadow-box">
                        <li><Link href="blog">Blog</Link></li>
                        <li><Link href="blog-carousel">Blog Carousel</Link></li>
                        <li><Link href="blog-list">Blog List</Link></li>
                        <li><Link href="blog-details">Blog Details</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="/sampark">Contact</Link>
                </li>
            </ul>
        </>
    )
}

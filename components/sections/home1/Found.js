import Link from "next/link"
export default function Found() {
    return (
        <>
        {/*Found One Start */}
        <section className="found-one">
            <div className="divine-border--found divine-border--found-top" role="presentation"></div>
            <div className="divine-border--found-vertical divine-border--found-left" role="presentation"></div>
            <div className="divine-border--found-vertical divine-border--found-right" role="presentation"></div>
            <span className="found-one__corner found-one__corner--tl" aria-hidden="true"></span>
            <span className="found-one__corner found-one__corner--tr" aria-hidden="true"></span>
            <span className="found-one__corner found-one__corner--bl" aria-hidden="true"></span>
            <span className="found-one__corner found-one__corner--br" aria-hidden="true"></span>
            <div className="divine-border--found divine-border--found-bottom" role="presentation"></div>
            <div className="found-one__bg">
                <div className="found-one__shape-1 float-bob-y">
                    <img src="assets/images/shapes/found-one-shape-1-mala.png" alt=""/>
                </div>
                <div className="found-one__shape-2 float-bob-y">
                    <img src="assets/images/shapes/found-one-shape-2-parayan.png" alt=""/>
                </div>
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">आमची साधना</span>
                    </div>
                    <h2 className="section-title__title title-animation">श्रद्धेने जपलेली <br/> <span>भक्तीची परंपरा</span>
                    </h2>
                </div>
                <div className="row">
                    {/*Found One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="found-one__single">
                            <div className="found-one__img-box">
                                <div className="found-one__img">
                                    <img src="assets/images/resources/found-1-1.jpg" alt=""/>
                                    <img src="assets/images/resources/found-1-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="found-one__content">
                                <h4 className="found-one__title"><Link href="/karyakram">दैनिक आरती व दर्शन</Link></h4>
                                <p className="found-one__text">सकाळी व संध्याकाळी रोज आरती होते. दर्शनासाठी
                                    मठ सर्व भाविकांना नेहमी खुला असतो.</p>
                                <div className="found-one__highlight">
                                    <i className="icon-clock"></i>
                                    <span>सकाळ व संध्याकाळ, दररोज</span>
                                </div>
                                <div className="found-one__btn-box">
                                    <Link href="/karyakram" className="found-one__btn thm-btn">अधिक वाचा<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Found One Single End*/}
                    {/*Found One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="found-one__single">
                            <div className="found-one__img-box">
                                <div className="found-one__img">
                                    <img src="assets/images/resources/found-1-2.jpg" alt=""/>
                                    <img src="assets/images/resources/found-1-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="found-one__content">
                                <h4 className="found-one__title"><Link href="/karyakram">जप, मंत्र साधना व पारायण</Link></h4>
                                <p className="found-one__text">जप, मंत्रसाधना व ग्रंथपारायण ही रोजची साधना.
                                    यामुळे मन एकाग्र होते व शांती लाभते.</p>
                                <div className="found-one__highlight">
                                    <i className="icon-hand"></i>
                                    <span>एक साधी नियमित साधना</span>
                                </div>
                                <div className="found-one__btn-box">
                                    <Link href="/karyakram" className="found-one__btn thm-btn">अधिक वाचा<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Found One Single End*/}
                    {/*Found One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="found-one__single">
                            <div className="found-one__img-box">
                                <div className="found-one__img">
                                    <img src="assets/images/resources/found-1-3.jpg" alt=""/>
                                    <img src="assets/images/resources/found-1-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="found-one__content">
                                <h4 className="found-one__title"><Link href="/karyakram">उत्सव व रथयात्रा</Link></h4>
                                <p className="found-one__text">आषाढी व कार्तिकी एकादशीला रथयात्रा निघते.
                                    वर्षातील हे सर्वात मोठे उत्सव, संपूर्ण समाज एकत्र येतो.</p>
                                <div className="found-one__highlight">
                                    <i className="icon-calender"></i>
                                    <span>आषाढी व कार्तिकी एकादशी</span>
                                </div>
                                <div className="found-one__btn-box">
                                    <Link href="/karyakram" className="found-one__btn thm-btn">अधिक वाचा<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Found One Single End*/}
                </div>
            </div>
        </section>
        {/*Found One End */}

        </>
     )
}
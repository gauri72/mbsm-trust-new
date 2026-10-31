import Link from "next/link"
export default function Donate() {
    return (
        <>

       {/*Donate One Start */}
       <section className="donate-one pdt">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <div className="donate-one__single">
                            <div className="donate-one__single-bg"
                                style={{ backgroundImage: ' url(assets/images/backgrounds/donate-one-single-bg.jpg)' }} >
                            </div>
                            <h3 className="donate-one__title"><Link href="/parichaya">कलेचा वारसा</Link>
                            </h3>
                            <p className="donate-one__text">मठात श्री शुभराय महाराजांनी स्वतः रेखाटलेली जवळपास ५००
                                चित्रे जतन केलेली आहेत — भारतातील एकाच कलाकाराच्या सर्वात मोठ्या संग्रहांपैकी एक,<br/>
                                भगवान श्रीकृष्णाचे जीवन चित्रित करणारी ही पवित्र कलाकृती.
                            </p>
                            <div className="donate-one__btn-box">
                                <Link href="/parichaya" className="donate-one__btn thm-btn">अधिक जाणून घ्या<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <div className="donate-one__single donate-one__single-2">
                            <div className="donate-one__single-bg"
                                style={{ backgroundImage: ' url(assets/images/backgrounds/donate-one-single-bg-two.jpg)' }} >
                            </div>
                            <h3 className="donate-one__title"><Link href="/karyakram">बहुआयामी विद्वान</Link></h3>
                            <p className="donate-one__text">चित्रकलेव्यतिरिक्त श्री शुभराय महाराज एक आदरणीय कवी आणि
                                तत्त्वज्ञही होते. त्यांच्या रचना आणि लेखन आजही<br/> जतन केले गेले आहे — ज्ञान व
                                भक्तीला समर्पित जीवनाचा एक जिवंत पुरावा.
                            </p>
                            <div className="donate-one__btn-box">
                                <Link href="/karyakram" className="donate-one__btn thm-btn">सहभागी व्हा<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Donate One End */}

        </>
    )
}

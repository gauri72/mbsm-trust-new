'use client'
import { useState } from "react"
import { HEADER_PHONE_DISPLAY, HEADER_PHONE_TEL, HEADER_EMAIL, HEADER_EMAIL_MAILTO } from "@/lib/siteInfo"

const faqs = [
    {
        question: "मंगल भक्त सेवा मंडळाला देणगी का द्यावी?",
        answer: (
            <p>
                मंगल भक्त सेवा मंडळाला देणगी देणे म्हणजे आध्यात्मिक सेवा आणि मानवतावादी कार्याला वाहिलेल्या एका नोंदणीकृत
                धर्मादाय संस्थेला पाठबळ देणे. आपल्या देणगीतून आम्ही गरजूंसाठी अन्नदान करतो, शालेय साहित्य व समुपदेशनाद्वारे
                मुलांच्या शिक्षणाला मदत करतो, मोफत वैद्यकीय सेवा व आरोग्य शिबिरे घेतो आणि समाजात सलोखा व एकता वाढवणारे
                आध्यात्मिक कार्यक्रम आयोजित करतो. देणगी लहान असो वा मोठी, ती आम्ही सेवा करत असलेल्या लोकांच्या जीवनात खरा
                बदल घडवते. देणगी देऊन आपण आध्यात्मिक मार्गदर्शन आणि करुणामय सेवा यांची सांगड घालून समाजात चिरस्थायी
                सकारात्मक बदल घडवणाऱ्या कार्याचा भाग बनता.
            </p>
        ),
    },
    {
        question: "QR कोडद्वारे देणगी देणे कितपत सुरक्षित आहे?",
        answer: (
            <p>
                QR कोडद्वारे देणगी देण्याची प्रक्रिया पूर्णपणे सुरक्षित आहे. दररोज लाखो भारतीय वापरत असलेल्या विश्वासार्ह UPI
                पेमेंट प्रणालीवरच ती चालते. QR कोड स्कॅन केल्यावर आपण आपल्या आवडीच्या UPI ॲपवर (Google Pay, PhonePe, Paytm इ.)
                जाता आणि तिथे हा व्यवहार सुरक्षित, एन्क्रिप्टेड माध्यमातून पूर्ण होतो. आपले पेमेंट तपशील, बँक माहिती किंवा
                वैयक्तिक आर्थिक माहिती मंडळाकडे साठवली जात नाही आणि आम्हाला ती पाहताही येत नाही. व्यवहार थेट आपल्या बँकेमार्फत
                किंवा पेमेंट सेवा पुरवठादारामार्फत होतो. आम्हाला फक्त देणगीच्या रकमेची पुष्टी मिळते आणि आपल्याला आपल्या पेमेंट
                ॲपमधून लगेच व्यवहाराची पावती मिळते.
            </p>
        ),
    },
    {
        question: "माझ्या देणगीचा समाजावर काय परिणाम होईल?",
        answer: (
            <p>
                आपली देणगी समाजसेवेच्या अनेक क्षेत्रांत अर्थपूर्ण बदल घडवते. अन्नदान उपक्रमांतून सणासुदीला तसेच नियमित
                वाटपातून गरजू कुटुंबांना अन्न मिळते. शिक्षणासाठीच्या देणगीतून मुलांना शालेय साहित्य, पुस्तके आणि समुपदेशन मिळते,
                ज्यामुळे त्यांना अभ्यासात यश मिळवण्यास मदत होते. वैद्यकीय देणगीतून मोफत आरोग्य शिबिरे, रक्तदान शिबिरे आणि
                उपचाराचा खर्च परवडत नसलेल्यांसाठी आरोग्यसेवा उपलब्ध होते. आध्यात्मिक कार्यक्रमांसाठीच्या देणगीतून सामूहिक मेळावे,
                धार्मिक उत्सव आणि सलोखा व एकता वाढवणारे उपक्रम आयोजित होतात. प्रत्येक रुपया जास्तीत जास्त लाभ होईल अशा रीतीने
                काळजीपूर्वक वापरला जातो, जेणेकरून आपली देणगी थेट लोकांचे जीवन सुधारते आणि आपण मिळून सेवा करत असलेला समाज
                अधिक भक्कम होतो.
            </p>
        ),
    },
    {
        question: "माझी देणगी कशी वापरली जाते याची माहिती मला कशी मिळेल?",
        answer: (
            <p>
                मंडळ पारदर्शकतेला महत्त्व देते आणि देणगीदारांना त्यांच्या देणगीच्या विनियोगाची माहिती देत असते. देणगी दिल्यानंतर
                विशिष्ट उपक्रमांची माहिती किंवा आमच्या सेवाकार्याचा सर्वसाधारण अहवाल मिळवण्यासाठी आपण आम्हाला{" "}
                <a href={HEADER_EMAIL_MAILTO}>{HEADER_EMAIL}</a> वर किंवा{" "}
                <a href={HEADER_PHONE_TEL}>{HEADER_PHONE_DISPLAY}</a> वर संपर्क करू शकता. आमचे सुरू असलेले उपक्रम, आगामी
                कार्यक्रम आणि सेवाकार्याचा परिणाम याविषयीची माहिती आम्ही विविध माध्यमांतून नियमितपणे देत असतो. आमच्या
                संकेतस्थळावरही आपण सेवा उपक्रम आणि सामाजिक कार्यक्रमांची ताजी माहिती पाहू शकता. ज्या देणगीदारांना अधिक सहभागी
                व्हायचे आहे, त्यांना निधी विविध सेवा क्षेत्रांत कसा वापरला जातो याचा सविस्तर अहवाल आम्ही देऊ शकतो, जेणेकरून
                आपल्या उदार देणगीचा थेट परिणाम आपल्याला समजतो.
            </p>
        ),
    },
]

export default function DonateFaq() {
    // one answer open at a time; the first starts open
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <>
        {/**Donate FAQ Start */}
        <section className="donate-faq" aria-labelledby="donate-faq-title">
            <div className="divine-border--donate-faq divine-border--donate-faq-top" role="presentation"></div>
            <div className="divine-border--donate-faq-vertical divine-border--donate-faq-left" role="presentation"></div>
            <div className="divine-border--donate-faq-vertical divine-border--donate-faq-right" role="presentation"></div>
            <span className="donate-faq__corner donate-faq__corner--tl" aria-hidden="true"></span>
            <span className="donate-faq__corner donate-faq__corner--tr" aria-hidden="true"></span>
            <span className="donate-faq__corner donate-faq__corner--bl" aria-hidden="true"></span>
            <span className="donate-faq__corner donate-faq__corner--br" aria-hidden="true"></span>
            <div className="divine-border--donate-faq divine-border--donate-faq-bottom" role="presentation"></div>
            <div className="donate-faq__bg" role="presentation"></div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">शंका-समाधान</span>
                    </div>
                    <h2 className="section-title__title" id="donate-faq-title">वारंवार विचारले जाणारे प्रश्न</h2>
                </div>

                <div className="donate-faq__list">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index
                        const buttonId = `donate-faq-q-${index}`
                        const panelId = `donate-faq-a-${index}`
                        return (
                            <div key={index} className={`donate-faq__item${isOpen ? " is-open" : ""}`}>
                                <h3 className="donate-faq__question">
                                    <button
                                        type="button"
                                        id={buttonId}
                                        className="donate-faq__toggle"
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                    >
                                        <span className="donate-faq__toggle-text">{faq.question}</span>
                                        <span className="donate-faq__toggle-icon" aria-hidden="true">
                                            <i className="fas fa-chevron-down"></i>
                                        </span>
                                    </button>
                                </h3>
                                <div
                                    id={panelId}
                                    className="donate-faq__answer"
                                    role="region"
                                    aria-labelledby={buttonId}
                                    aria-hidden={!isOpen}
                                >
                                    <div className="donate-faq__answer-inner">{faq.answer}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="donate-faq__more">
                    <div className="donate-faq__more-text">
                        <h3 className="donate-faq__more-title">आणखी काही प्रश्न आहेत?</h3>
                        <p>आम्हाला फोन किंवा ईमेल करा, आम्ही नक्की मदत करू.</p>
                    </div>
                    <div className="donate-faq__more-actions">
                        <a href={HEADER_PHONE_TEL} className="donate-faq__more-btn">
                            <i className="fas fa-phone-alt" aria-hidden="true"></i>{HEADER_PHONE_DISPLAY}
                        </a>
                        <a href={HEADER_EMAIL_MAILTO} className="donate-faq__more-btn">
                            <i className="fas fa-envelope" aria-hidden="true"></i>{HEADER_EMAIL}
                        </a>
                    </div>
                </div>
            </div>
        </section>
        {/**Donate FAQ End */}
        </>
    )
}

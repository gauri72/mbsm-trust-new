'use client'

const QR_SRC = "assets/images/resources/donate-qr.jpeg"
const UPI_APPS = ["Google Pay", "PhonePe", "Paytm", "BHIM"]

export default function DonateQr() {
    return (
        <>
        {/**Donate QR Start */}
        <section className="donate-qr" aria-labelledby="donate-qr-title">
            <div className="divine-border--donate-qr divine-border--donate-qr-top" role="presentation"></div>
            <div className="divine-border--donate-qr-vertical divine-border--donate-qr-left" role="presentation"></div>
            <div className="divine-border--donate-qr-vertical divine-border--donate-qr-right" role="presentation"></div>
            <span className="donate-qr__corner donate-qr__corner--tl" aria-hidden="true"></span>
            <span className="donate-qr__corner donate-qr__corner--tr" aria-hidden="true"></span>
            <span className="donate-qr__corner donate-qr__corner--bl" aria-hidden="true"></span>
            <span className="donate-qr__corner donate-qr__corner--br" aria-hidden="true"></span>
            <div className="divine-border--donate-qr divine-border--donate-qr-bottom" role="presentation"></div>
            <div className="donate-qr__bg" role="presentation"></div>
            <div className="container">
                <div className="donate-qr__panel">
                    <div className="donate-qr__scan">
                        <img
                            src={QR_SRC}
                            alt="मंगल भक्त सेवा मंडळाला UPI द्वारे देणगी देण्यासाठी QR कोड"
                            className="donate-qr__img"
                            width="260"
                            height="260"
                        />
                    </div>

                    <div className="donate-qr__info">
                        <span className="donate-qr__eyebrow">देणगी</span>
                        <h2 className="donate-qr__title" id="donate-qr-title">स्कॅन करा आणि देणगी द्या</h2>
                        <p className="donate-qr__lead">कोणत्याही UPI ॲपने हा QR कोड स्कॅन करा.</p>

                        <ul className="donate-qr__apps" aria-label="UPI ॲप्स">
                            {UPI_APPS.map((app) => (
                                <li key={app}>{app}</li>
                            ))}
                        </ul>

                        <div className="donate-qr__rule" aria-hidden="true"></div>

                        <a href={QR_SRC} download="mangal-bhakta-seva-mandal-donate-qr.jpeg" className="thm-btn donate-qr__download">
                            QR डाउनलोड करा<span><i className="fas fa-download"></i></span>
                        </a>
                        <p className="donate-qr__hint">मोबाइलवर असाल तर QR डाउनलोड करून UPI ॲपमध्ये गॅलरीतून स्कॅन करा.</p>
                    </div>
                </div>
            </div>
        </section>
        {/**Donate QR End */}
        </>
    )
}

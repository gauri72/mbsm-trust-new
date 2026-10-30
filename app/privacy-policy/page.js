import Layout from "@/components/layout/Layout"

export const metadata = {
    title: 'Privacy Policy — मंगल भक्त सेवा मंडळ',
    description: 'Read how Shri Shubharay Maharaj Math collects, uses and protects your information.',
}

export default function PrivacyPolicy() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Privacy Policy">
                <section style={{ padding: "80px 0" }}>
                    <div className="container">
                        <h3>Privacy Policy</h3>
                        <p>Shri Shubharay Maharaj Math ("we", "us", "our") respects your privacy. This page explains,
                            in brief, what information we may collect through this website and how it is used.</p>
                        <h4 style={{ marginTop: "30px" }}>Information We Collect</h4>
                        <p>We may collect basic contact details (such as your name, phone number or email address)
                            only when you voluntarily submit them through a form on this site, for example to get in
                            touch with us or to contribute towards a cause.</p>
                        <h4 style={{ marginTop: "30px" }}>How We Use Information</h4>
                        <p>Any information you share is used solely to respond to your enquiry, keep you informed
                            about events and activities of the Math, or process a donation you choose to make. We do
                            not sell or rent your information to third parties.</p>
                        <h4 style={{ marginTop: "30px" }}>Contact Us</h4>
                        <p>If you have any questions about this Privacy Policy, please reach out to us via the
                            contact details listed in the footer of this website.</p>
                    </div>
                </section>
            </Layout>
        </>
    )
}

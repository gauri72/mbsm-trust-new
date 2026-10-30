import Layout from "@/components/layout/Layout"

export const metadata = {
    title: 'Terms of Service — मंगल भक्त सेवा मंडळ',
    description: 'The terms and conditions for using the Shri Shubharay Maharaj Math website.',
}

export default function TermsOfService() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Terms of Service">
                <section style={{ padding: "80px 0" }}>
                    <div className="container">
                        <h3>Terms of Service</h3>
                        <p>By accessing and using this website, you agree to the following terms. Please read them
                            carefully before using the site.</p>
                        <h4 style={{ marginTop: "30px" }}>Use of the Website</h4>
                        <p>This website is provided to share information about Shri Shubharay Maharaj Math, its
                            events, activities and ways to contribute. You agree to use this site only for lawful
                            purposes and in a manner that does not infringe the rights of others.</p>
                        <h4 style={{ marginTop: "30px" }}>Content</h4>
                        <p>All content on this website, including images, text and the logo, belongs to Shri
                            Shubharay Maharaj Math unless otherwise noted, and may not be reproduced without
                            permission.</p>
                        <h4 style={{ marginTop: "30px" }}>Changes to These Terms</h4>
                        <p>We may update these terms from time to time. Continued use of the website after changes
                            are posted constitutes your acceptance of the revised terms.</p>
                    </div>
                </section>
            </Layout>
        </>
    )
}

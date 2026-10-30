import Layout from "@/components/layout/Layout"

export const metadata = {
    title: 'Cookies Settings — मंगल भक्त सेवा मंडळ',
    description: 'Learn how cookies are used on the Shri Shubharay Maharaj Math website and how to manage them.',
}

export default function CookiesSettings() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Cookies Settings">
                <section style={{ padding: "80px 0" }}>
                    <div className="container">
                        <h3>Cookies Settings</h3>
                        <p>This website may use basic cookies to help pages function correctly and to understand how
                            visitors use the site, so we can keep improving it.</p>
                        <h4 style={{ marginTop: "30px" }}>What Are Cookies</h4>
                        <p>Cookies are small text files stored on your device by your browser. They do not contain
                            any information that personally identifies you.</p>
                        <h4 style={{ marginTop: "30px" }}>Managing Cookies</h4>
                        <p>Most browsers let you control cookies through their settings, including blocking or
                            deleting them. Please note that disabling cookies may affect how some parts of this
                            website function.</p>
                    </div>
                </section>
            </Layout>
        </>
    )
}

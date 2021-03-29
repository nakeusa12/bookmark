import Head from "next/head"
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({children, title = "Home"}) => {
    return (  
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="antialiased">
                {children}
            </main>

            <Footer />
        </div>
    );
}
 
export default Layout;
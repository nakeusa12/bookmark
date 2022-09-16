import Head from "next/head"
import Footer from "../Footer";
import { Header } from "../Header";

const Layout = ({children, title = "Home"}) => {
    return (  
        <div>
            <Head>
                <title>{title} - Bookmark</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
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
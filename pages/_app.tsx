import type { AppProps } from 'next/app';
import Head from 'next/head';

import Navbar from '../components/globalComponents/navbar';
import Footer from '../components/globalComponents/footer';

import '../styles/global.scss';

// The JSX element of the overall app
const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Joshua Seligman</title>
            </Head>

            {/* Structure of every page */}
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp;
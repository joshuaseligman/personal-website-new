import type { AppProps } from 'next/app';
import Head from 'next/head';

import Navbar from '../components/globalComponents/navbar';
import Footer from '../components/globalComponents/footer';

import '../styles/global.scss';

// The JSX element of the overall app
const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            {/* Add the important data to the head of the file */}
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;1,900&display=swap" rel="stylesheet"></link>
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
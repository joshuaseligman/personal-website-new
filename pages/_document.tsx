import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

// Class for the document and metadata
class MyDocument extends Document {
    static async getInitialProps(ctx:DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    <meta charSet="utf-8" />
                    <link href='https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;1,900&display=swap' rel='stylesheet' />
                    <link rel='shortcut icon' href='/favicon.ico' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
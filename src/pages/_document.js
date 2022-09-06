import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render(){
        return (
            <Html lang="en">
                <Head>
                    <title>Ricardo Shop</title>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-WBM9S9P7KB"></script>
                    <script dangerouslySetInnerHTML={
                        {__html:`window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-WBM9S9P7KB');`}
                    }/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;
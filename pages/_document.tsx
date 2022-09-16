import React from 'react';
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentInitialProps,
} from 'next/document';

class VcDocument extends Document {
    static async getInitialProps(ctx: any): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render(): JSX.Element {

        return (
            <Html lang="ru" prefix="og: http://ogp.me/ns#">
                <Head>
                    {/* FAVICON */}
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/favicon/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/favicon/site.webmanifest"/>
                    <link
                        rel="mask-icon"
                        href="/favicon/safari-pinned-tab.svg"
                        color="#2b2d33"
                    />
                    <link rel="shortcut icon" href="/favicon/favicon.ico"/>
                    <meta name="msapplication-TileColor" content="#2b2d33"/>
                    <meta
                        name="msapplication-config"
                        content="/favicon/browserconfig.xml"
                    />
                    <meta name="theme-color" content="#ffffff"/>

                    {/* FONTS */}
                    <link
                        rel="preload"
                        href="/fonts/SFPRODisplay-Bold.woff"
                        as="font"
                        type="font/woff"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="/fonts/SFPROText-Bold.woff"
                        as="font"
                        type="font/woff"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="/fonts/SFPROText-Medium.woff"
                        as="font"
                        type="font/woff"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="/fonts/SFPROText-Regular.woff"
                        as="font"
                        type="font/woff"
                        crossOrigin="anonymous"
                    />
                    <link href="/fonts/style.css" rel="stylesheet"/>
                </Head>

                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default VcDocument;

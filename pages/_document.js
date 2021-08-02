import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="A site for my programming portfolio"/>
                    <meta charset="utf-8" />
                    <meta name="robots" content="noindex, nofollow" />
                    {/* Viewport meta tags should be moved to _app.js */}
                    {/* <meta name="viewport" content="width=device-width"/> */}
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
                    <link href="https://fonts.googleapis.com/css2?family=Raleway" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style global jsx>{`
                    body {
                        font-family: 'Raleway', sans-serif;
                    }
                `}</style>
            </Html>
        )
    }
}